import { EmbedBuilder, Colors } from 'discord.js';
import type { AniListMedia, AniListDate, MediaType } from './types.js';

const STATUS_LABELS: Readonly<Record<string, string>> = {
  FINISHED: 'Terminé',
  RELEASING: 'En cours',
  NOT_YET_RELEASED: 'À venir',
  CANCELLED: 'Annulé',
  HIATUS: 'En pause',
};

const FORMAT_LABELS: Readonly<Record<string, string>> = {
  TV: 'Série TV',
  TV_SHORT: 'Série courte',
  MOVIE: 'Film',
  SPECIAL: 'Spécial',
  OVA: 'OVA',
  ONA: 'ONA',
  MUSIC: 'Clip musical',
  MANGA: 'Manga',
  NOVEL: 'Light Novel',
  ONE_SHOT: 'One-shot',
};

const MONTHS_FR: Readonly<string[]> = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
];

const AUTHOR_ROLES = new Set(['Story & Art', 'Story', 'Art']);

const RE_HTML = /<[^>]*>/g;
const RE_NEWLINE = /\n{3,}/g;

function stripHtml(text: string): string {
  return text.replace(RE_HTML, '').replace(RE_NEWLINE, '\n\n').trim();
}

function truncate(text: string, max: number): string {
  return text.length <= max ? text : `${text.slice(0, max - 1)}…`;
}

function parseColor(hex: string | null): number {
  if (!hex) return Colors.Blurple;
  const parsed = parseInt(hex.replace('#', ''), 16);
  return Number.isNaN(parsed) ? Colors.Blurple : parsed;
}

function formatDate(date: AniListDate): string {
  if (!date.year) return 'Inconnue';
  if (!date.month) return String(date.year);
  const month = MONTHS_FR[date.month - 1]!;
  return date.day ? `${date.day} ${month} ${date.year}` : `${month} ${date.year}`;
}

function footer(text: string, iconURL?: string): { text: string; iconURL?: string } {
  return { text: 'Tsuyomi • ' + text, ...(iconURL && { iconURL }) };
}

type EmbedField = { name: string; value: string; inline: boolean };

export function buildResultEmbed(
  media: AniListMedia,
  index: number,
  count: number,
  iconURL?: string,
): EmbedBuilder {
  const title = media.title.english ?? media.title.romaji ?? media.title.native;
  const description = media.description
    ? truncate(stripHtml(media.description), 300)
    : '*Aucune description disponible.*';

  const fields: EmbedField[] = [
    {
      name: '📋 Format',
      value: FORMAT_LABELS[media.format ?? ''] ?? media.format ?? 'Inconnu',
      inline: true,
    },
    {
      name: '📡 Statut',
      value: STATUS_LABELS[media.status ?? ''] ?? media.status ?? 'Inconnu',
      inline: true,
    },
    { name: '📅 Début', value: formatDate(media.startDate), inline: true },
    { name: '🏁 Fin', value: formatDate(media.endDate),   inline: true },
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
    if (media.volumes) fields.push({ name: '📚 Volumes',   value: String(media.volumes),  inline: true });

    const authors = media.staff.edges
      .filter(e => AUTHOR_ROLES.has(e.role))
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

  if (media.title) {
    const titlesLines: string[] = [];

    if (media.title.english) titlesLines.push(`• 🇬🇧 ${media.title.english}`);
    if (media.title.native) titlesLines.push(`• 🇯🇵 ${media.title.native}`);
    if (media.title.romaji) titlesLines.push(`• 🇯🇵 ${media.title.romaji}`);

    if (titlesLines.length) {
      fields.push({
        name: '🔀 Titres alternatifs',
        value: titlesLines.join('\n'),
        inline: false,
      });
    }
  }

  return new EmbedBuilder()
    .setColor(parseColor(media.coverImage.color))
    .setTitle(truncate(title, 256))
    .setURL(media.siteUrl)
    .setDescription(description)
    .setThumbnail(media.coverImage.extraLarge)
    .addFields(fields)
    .setFooter(footer(`Résultat ${index}/${count} · AniList`, iconURL))
    .setTimestamp();
}

export function buildNoResultEmbed(search: string, type: MediaType, iconURL?: string): EmbedBuilder {
  const label = type === 'ANIME' ? 'animé' : 'manga';
  return new EmbedBuilder()
    .setColor(Colors.Red)
    .setTitle('❌ Aucun résultat')
    .setDescription(`Aucun ${label} trouvé pour **${search}**.`)
    .setFooter(footer('AniList', iconURL))
    .setTimestamp();
}
