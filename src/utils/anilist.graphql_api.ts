import { EmbedBuilder, Colors } from 'discord.js';

export type MediaType = 'ANIME' | 'MANGA';

export interface AniListMedia {
  id:           number;
  title:        { romaji: string; english: string | null; native: string };
  type:         MediaType;
  format:       string | null;
  status:       string | null;
  description:  string | null;
  episodes:     number | null;
  chapters:     number | null;
  volumes:      number | null;
  averageScore: number | null;
  popularity:   number;
  genres:       string[];
  siteUrl:      string;
  coverImage:   { extraLarge: string; color: string | null };
  startDate:    { year: number | null; month: number | null; day: number | null };
  endDate:      { year: number | null; month: number | null; day: number | null };
  studios:      { nodes: { name: string; isAnimationStudio: boolean }[] };
  staff:        { edges: { role: string; node: { name: { full: string } } }[] };
}

export interface AniListPage {
  results: AniListMedia[];
  total:   number;
}

const ANILIST_API     = 'https://graphql.anilist.co';
export const PER_PAGE = 10;

const STATUS_LABELS: Record<string, string> = {
  FINISHED:         'Terminé',
  RELEASING:        'En cours',
  NOT_YET_RELEASED: 'À venir',
  CANCELLED:        'Annulé',
  HIATUS:           'En pause',
};

const FORMAT_LABELS: Record<string, string> = {
  TV:       'Série TV',
  TV_SHORT: 'Série courte',
  MOVIE:    'Film',
  SPECIAL:  'Spécial',
  OVA:      'OVA',
  ONA:      'ONA',
  MUSIC:    'Clip musical',
  MANGA:    'Manga',
  NOVEL:    'Light Novel',
  ONE_SHOT: 'One-shot',
};

const MONTHS_FR = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
];

// La query n'a plus besoin du paramètre $page — toujours page 1
const SEARCH_QUERY = `
  query ($search: String, $type: MediaType, $perPage: Int) {
    Page(page: 1, perPage: $perPage) {
      pageInfo { total }
      media(search: $search, type: $type, sort: SEARCH_MATCH) {
        id
        title { romaji english native }
        type
        format
        status
        description(asHtml: false)
        episodes
        chapters
        volumes
        averageScore
        popularity
        genres
        siteUrl
        coverImage { extraLarge color }
        startDate { year month day }
        endDate   { year month day }
        studios   { nodes { name isAnimationStudio } }
        staff(perPage: 4) {
          edges {
            role
            node { name { full } }
          }
        }
      }
    }
  }
`;

type AniListResponse = {
  data:    { Page: { pageInfo: { total: number }; media: AniListMedia[] } };
  errors?: { message: string }[];
};

export async function searchAniList(
  search: string,
  type:   MediaType,
): Promise<AniListPage> {
  const response = await fetch(ANILIST_API, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body:    JSON.stringify({
      query:     SEARCH_QUERY,
      variables: { search, type, perPage: PER_PAGE },
    }),
  });

  if (!response.ok) {
    throw new Error(`AniList API error : ${response.status} ${response.statusText}`);
  }

  const json = await response.json() as AniListResponse;

  if (json.errors?.length) {
    throw new Error(`AniList GraphQL error : ${json.errors[0]!.message}`);
  }

  const results = json.data.Page.media.slice(0, PER_PAGE);

  return {
    results,
    total: results.length,
  };
}

// ── Helpers privés ────────────────────────────────────────────────────────────

const RE_HTML    = /<[^>]*>/g;
const RE_NEWLINE = /\n{3,}/g;

function stripHtml(text: string): string {
  return text.replace(RE_HTML, '').replace(RE_NEWLINE, '\n\n').trim();
}

function truncate(text: string, max: number): string {
  return text.length <= max ? text : text.slice(0, max - 1) + '…';
}

function parseColor(hex: string | null): number {
  if (!hex) return Colors.Blurple;
  const parsed = parseInt(hex.replace('#', ''), 16);
  return isNaN(parsed) ? Colors.Blurple : parsed;
}

function formatDate(date: AniListMedia['startDate']): string {
  if (!date.year)  return 'Inconnue';
  if (!date.month) return `${date.year}`;
  const month = MONTHS_FR[date.month - 1]!;
  return date.day ? `${date.day} ${month} ${date.year}` : `${month} ${date.year}`;
}

// ── Embeds publics ────────────────────────────────────────────────────────────

export function buildResultEmbed(
  media: AniListMedia,
  index: number,
  total: number,
): EmbedBuilder {
  const title       = media.title.english ?? media.title.romaji;
  const description = media.description
    ? truncate(stripHtml(media.description), 300)
    : '*Aucune description disponible.*';

  const fields: { name: string; value: string; inline: boolean }[] = [
    {
      name:   '📋 Format',
      value:  FORMAT_LABELS[media.format ?? ''] ?? media.format ?? 'Inconnu',
      inline: true,
    },
    {
      name:   '📡 Statut',
      value:  STATUS_LABELS[media.status ?? ''] ?? media.status ?? 'Inconnu',
      inline: true,
    },
    {
      name:   '📅 Début',
      value:  formatDate(media.startDate),
      inline: true,
    },
    {
      name:   '🏁 Fin',
      value:  formatDate(media.endDate),
      inline: true,
    },
  ];

  if (media.type === 'ANIME') {
    if (media.episodes) {
      fields.push({ name: '🎬 Épisodes', value: String(media.episodes), inline: true });
    }
    const studios = media.studios.nodes
      .filter(s => s.isAnimationStudio)
      .map(s => s.name);
    if (studios.length) {
      fields.push({ name: '🏢 Studio(s)', value: studios.join(', '), inline: true });
    }
  }

  if (media.type === 'MANGA') {
    if (media.chapters) fields.push({ name: '📖 Chapitres', value: String(media.chapters), inline: true });
    if (media.volumes)  fields.push({ name: '📚 Volumes',   value: String(media.volumes),  inline: true });

    const authors = media.staff.edges
      .filter(e => e.role === 'Story & Art' || e.role === 'Story' || e.role === 'Art')
      .map(e => `${e.node.name.full} *(${e.role})*`);
    if (authors.length) {
      fields.push({ name: '✏️ Auteur(s)', value: authors.join('\n'), inline: false });
    }
  }

  if (media.averageScore) {
    fields.push({ name: '⭐ Score', value: `${media.averageScore}/100`, inline: true });
  }

  if (media.genres.length) {
    fields.push({ name: '🏷️ Genres', value: media.genres.slice(0, 5).join(', '), inline: false });
  }

  return new EmbedBuilder()
    .setColor(parseColor(media.coverImage.color))
    .setTitle(truncate(title, 256))
    .setURL(media.siteUrl)
    .setDescription(description)
    .setThumbnail(media.coverImage.extraLarge)
    .addFields(fields)
    .setFooter({ text: `Résultat ${index}/${total} · AniList` })
    .setTimestamp();
}

export function buildNoResultEmbed(search: string, type: MediaType): EmbedBuilder {
  return new EmbedBuilder()
    .setColor(Colors.Red)
    .setTitle('❌ Aucun résultat')
    .setDescription(`Aucun ${type === 'ANIME' ? 'animé' : 'manga'} trouvé pour **${search}**.`)
    .setFooter({ text: 'AniList' })
    .setTimestamp();
}