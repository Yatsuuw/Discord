interface UserProfiles {
    mal?: string | null;
    al?: string | null;
    mc?: string | null;
}
export declare const DataManager: {
    getUser(userId: string): Promise<{
        user: string;
        mal_username: string | null;
        al_username: string | null;
        mangacollec: string | null;
    } | null>;
    upsertUser(userId: string, profiles: Partial<UserProfiles>): Promise<{
        user: string;
        mal_username: string | null;
        al_username: string | null;
        mangacollec: string | null;
    }>;
    registerServer(guildId: string, ownerId: string): Promise<{
        id: string;
        owner: string;
    }>;
    getServer(guildId: string, ownerId: string): Promise<{
        id: string;
        owner: string;
    } | null>;
};
export {};
//# sourceMappingURL=dataManager.d.ts.map