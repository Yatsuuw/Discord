export declare const SITE_CONFIG: {
    mal: {
        label: string;
        getUsername: (u: {
            user: string;
            mal_username: string | null;
            al_username: string | null;
            mangacollec: string | null;
        }) => string | null;
        buildUrl: (n: string) => string;
    };
    al: {
        label: string;
        getUsername: (u: {
            user: string;
            mal_username: string | null;
            al_username: string | null;
            mangacollec: string | null;
        }) => string | null;
        buildUrl: (n: string) => string;
    };
    mc: {
        label: string;
        getUsername: (u: {
            user: string;
            mal_username: string | null;
            al_username: string | null;
            mangacollec: string | null;
        }) => string | null;
        buildUrl: (n: string) => string;
    };
};
export type SiteKey = keyof typeof SITE_CONFIG;
//# sourceMappingURL=siteConfig.d.ts.map