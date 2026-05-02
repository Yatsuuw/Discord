export type MediaType = 'ANIME' | 'MANGA';

export interface AniListTitle {
  romaji: string;
  english: string | null;
  native: string;
}

export interface AniListDate {
  year: number | null;
  month: number | null;
  day: number | null;
}

export interface AniListMedia {
  id: number;
  title: AniListTitle;
  type: MediaType;
  format: string | null;
  status: string | null;
  description: string | null;
  episodes: number | null;
  chapters: number | null;
  volumes: number | null;
  averageScore: number | null;
  popularity: number;
  genres: string[];
  siteUrl: string;
  coverImage: { extraLarge: string; color: string | null };
  startDate: AniListDate;
  endDate: AniListDate;
  studios: { nodes: { name: string; isAnimationStudio: boolean }[] };
  staff: { edges: { role: string; node: { name: { full: string } } }[] };
}

export interface AniListPage {
  results: AniListMedia[];
  total: number;
}
