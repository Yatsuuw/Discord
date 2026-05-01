import type { users } from "../generated/prisma/index.js";

export const SITE_CONFIG: Record<string, {
  label:       string;
  getUsername: (u: users) => string | null;
  buildUrl:    (username: string) => string;
}> = {
  mal: {
    label:       'MyAnimeList',
    getUsername: u => u.mal_username,
    buildUrl:    n => `https://myanimelist.net/profile/${n}`,
  },
  al: {
    label:       'AniList',
    getUsername: u => u.al_username,
    buildUrl:    n => `https://anilist.co/user/${n}`,
  },
  mc: {
    label:       'MangaCollec',
    getUsername: u => u.mangacollec,
    buildUrl:    n => `https://www.mangacollec.com/user/${n}/collection`,
  },
};