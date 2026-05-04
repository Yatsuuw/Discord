import { db } from "./database.js";
export const DataManager = {
    async getUser(userId) {
        return db.users.findUnique({ where: { user: userId } });
    },
    async upsertUser(userId, profiles) {
        return db.users.upsert({
            where: { user: userId },
            update: {
                ...(profiles.mal !== undefined && { mal_username: profiles.mal }),
                ...(profiles.al !== undefined && { al_username: profiles.al }),
                ...(profiles.mc !== undefined && { mangacollec: profiles.mc }),
            },
            create: {
                user: userId,
                mal_username: profiles.mal ?? null,
                al_username: profiles.al ?? null,
                mangacollec: profiles.mc ?? null,
            },
        });
    },
    async registerServer(guildId, ownerId) {
        return db.servers.upsert({
            where: { id_owner: { id: guildId, owner: ownerId } },
            update: {},
            create: { id: guildId, owner: ownerId },
        });
    },
    async getServer(guildId, ownerId) {
        return db.servers.findUnique({
            where: { id_owner: { id: guildId, owner: ownerId } },
        });
    },
};
//# sourceMappingURL=dataManager.js.map