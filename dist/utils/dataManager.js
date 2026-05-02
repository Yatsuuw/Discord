import { db } from "./database.js";
import { logger } from "./logger.js";
export const DataManager = {
    async getUser(userId) {
        try {
            return await db.users.findUnique({ where: { user: userId } });
        }
        catch (error) {
            logger.error(`Erreur de lecture utilisateur ${userId} :`, error);
            throw error;
        }
    },
    async upsertUser(userId, profiles) {
        try {
            return await db.users.upsert({
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
                    mangacollec: profiles.mc ?? null
                }
            });
        }
        catch (error) {
            logger.error(`Erreur de la mise à jour de l'utilisateur ${userId} :`, error);
            throw error;
        }
    },
    async registerServer(guildId, ownerId) {
        try {
            return await db.servers.upsert({
                where: { id_owner: { id: guildId, owner: ownerId } },
                update: {}, // Serveur déjà enregistré, rien à modifier
                create: { id: guildId, owner: ownerId }
            });
        }
        catch (error) {
            logger.error(`Erreur d'enregistrement du serveur ${guildId} :`, error);
            throw error;
        }
    },
    async getServer(guildId, ownerId) {
        try {
            return await db.servers.findUnique({
                where: { id_owner: { id: guildId, owner: ownerId } },
            });
        }
        catch (error) {
            logger.error(`Erreur de lecture du serveur ${guildId} :`, error);
            throw error;
        }
    },
};
//# sourceMappingURL=dataManager.js.map