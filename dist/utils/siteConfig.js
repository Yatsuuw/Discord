export const SITE_CONFIG = {
    mal: {
        label: 'MyAnimeList',
        getUsername: u => u.mal_username,
        buildUrl: n => `https://myanimelist.net/profile/${n}`,
    },
    al: {
        label: 'AniList',
        getUsername: u => u.al_username,
        buildUrl: n => `https://anilist.co/user/${n}`,
    },
    mc: {
        label: 'MangaCollec',
        getUsername: u => u.mangacollec,
        buildUrl: n => `https://www.mangacollec.com/user/${n}/collection`,
    },
};
//# sourceMappingURL=siteConfig.js.map