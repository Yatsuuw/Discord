import { EmbedBuilder } from 'discord.js';
export type MediaType = 'ANIME' | 'MANGA';
export interface AniListMedia {
    id: number;
    title: {
        romaji: string;
        english: string | null;
        native: string;
    };
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
    coverImage: {
        extraLarge: string;
        color: string | null;
    };
    startDate: {
        year: number | null;
        month: number | null;
        day: number | null;
    };
    endDate: {
        year: number | null;
        month: number | null;
        day: number | null;
    };
    studios: {
        nodes: {
            name: string;
            isAnimationStudio: boolean;
        }[];
    };
    staff: {
        edges: {
            role: string;
            node: {
                name: {
                    full: string;
                };
            };
        }[];
    };
}
export interface AniListPage {
    results: AniListMedia[];
    total: number;
}
export declare const PER_PAGE = 10;
export declare function searchAniList(search: string, type: MediaType): Promise<AniListPage>;
export declare function buildResultEmbed(media: AniListMedia, index: number, total: number): EmbedBuilder;
export declare function buildNoResultEmbed(search: string, type: MediaType): EmbedBuilder;
//# sourceMappingURL=anilist.graphql_api.d.ts.map