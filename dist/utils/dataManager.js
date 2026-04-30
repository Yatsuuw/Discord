import { db } from "./database.js";
import { logger } from "./logger.js";
export const DataManager = {
    async getUser(userId) {
        try {
            return await db.users.findUnique({ where: { user: userId } });
        }
        catch (error) {
            logger.error(`Erreur de lecture utilisateur ${userId} :`, error);
            return null;
        }
    },
    async upsertUser(userId, mal, al, mc) {
        return await db.users.upsert({
            where: { user: userId },
            update: {
                mal_username: mal ?? null,
                al_username: al ?? null,
                mangacollec: mc ?? null,
            },
            create: {
                user: userId,
                mal_username: mal ?? null,
                al_username: al ?? null,
                mangacollec: mc ?? null,
            }
        });
    },
    async registerServer(guildId, ownerId) {
        try {
            return await db.servers.upsert({
                where: { id_owner: { id: guildId, owner: ownerId } },
                update: {},
                create: { id: guildId, owner: ownerId }
            });
        }
        catch (error) {
            logger.error(`Erreur d'enregistrement du serveur ${guildId} :`, error);
            throw error;
        }
    }
};
//# sourceMappingURL=dataManager.js.map