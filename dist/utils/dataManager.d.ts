export declare const DataManager: {
    getUser(userId: string): Promise<{
        user: string;
        mal_username: string | null;
        al_username: string | null;
        mangacollec: string | null;
    } | null>;
    upsertUser(userId: string, mal?: string, al?: string, mc?: string): Promise<{
        user: string;
        mal_username: string | null;
        al_username: string | null;
        mangacollec: string | null;
    }>;
    registerServer(guildId: string, ownerId: string): Promise<{
        id: string;
        owner: string;
    }>;
};
//# sourceMappingURL=dataManager.d.ts.map