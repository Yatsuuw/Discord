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
  results:  AniListMedia[];
  total:    number;
  hasNext:  boolean;
  hasPrev:  boolean;
}

const ANILIST_API      = 'https://graphql.anilist.co';
export const PER_PAGE  = 10;

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

const SEARCH_QUERY = `
  query ($search: String, $type: MediaType, $page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo { total hasNextPage }
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

export async function searchAniList(
  search: string,
  type:   MediaType,
  page:   number = 1,
): Promise<AniListPage> {
  if (page > 1) {
    return { results: [], total: 0, hasNext: false, hasPrev: false };
  }

  const response = await fetch(ANILIST_API, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body:    JSON.stringify({
      query:     SEARCH_QUERY,
      variables: { search, type, page: 1, perPage: PER_PAGE },
    }),
  });

  if (!response.ok) {
    throw new Error(`AniList API error : ${response.status} ${response.statusText}`);
  }

  const json = await response.json() as {
    data:    { Page: { pageInfo: { total: number; hasNextPage: boolean }; media: AniListMedia[] } };
    errors?: { message: string }[];
  };

  if (json.errors?.length) {
    throw new Error(`AniList GraphQL error : ${json.errors[0]!.message}`);
  }

  const { media } = json.data.Page;
  const capped = media.slice(0, PER_PAGE);

  return {
    results: media,
    total:   capped.length,
    hasNext: false,
    hasPrev: false,
  };
}

function formatDate(date: AniListMedia['startDate']): string {
  if (!date.year) return 'Inconnue';
  if (!date.month) return `${date.year}`;
  const d = new Date(date.year, date.month - 1, date.day ?? 1);
  return d.toLocaleDateString('fr-FR', {
    year:  'numeric',
    month: 'long',
    day:   date.day ? 'numeric' : undefined,
  });
}

function stripHtml(text: string): string {
  return text.replace(/<[^>]*>/g, '').replace(/\n{3,}/g, '\n\n').trim();
}

function truncate(text: string, max: number): string {
  return text.length <= max ? text : text.slice(0, max - 1) + '…';
}

export function buildResultEmbed(
  media:       AniListMedia,
  globalIndex: number,
  total:       number,
): EmbedBuilder {
  const title = media.title.english ?? media.title.romaji;
  const color = media.coverImage.color
    ? parseInt(media.coverImage.color.replace('#', ''), 16)
    : Colors.Blurple;

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
    const animStudios = media.studios.nodes
      .filter(s => s.isAnimationStudio)
      .map(s => s.name);
    if (animStudios.length) {
      fields.push({ name: '🏢 Studio(s)', value: animStudios.join(', '), inline: true });
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
    .setColor(color)
    .setTitle(truncate(title, 256))
    .setURL(media.siteUrl)
    .setDescription(description)
    .setThumbnail(media.coverImage.extraLarge)
    .addFields(fields)
    .setFooter({
      text: `Résultat ${globalIndex}/${total} · AniList`,
    })
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
