import { db } from "./database.js";
import { logger } from "./logger.js";

interface UserProfiles {
  mal?: string | null;
  al?: string | null;
  mc?: string | null;
}

export const DataManager = {
  async getUser(userId: string) {
    try {
      return await db.users.findUnique({ where: { user: userId } });
    } catch (error) {
      logger.error(`Erreur de lecture utilisateur ${userId} :`, error);
      throw error;
    }
  },

  async upsertUser(userId: string, profiles: Partial<UserProfiles>) {
    try {
      const mal = profiles.mal ?? null;
      const al = profiles.al ?? null;
      const mc = profiles.mc ?? null;

      return await db.users.upsert({
        where: { user: userId },
        update: { mal_username: mal, al_username: al, mangacollec: mc },
        create: { user: userId, mal_username: mal, al_username: al, mangacollec: mc }
      });
    } catch (error) {
      logger.error(`Erreur de la mise à jour de l'utilisateur ${userId} :`, error);
      throw error;
    }
  },

  async registerServer(guildId: string, ownerId: string) {
    try {
      return await db.servers.upsert({
        where: { id_owner: { id: guildId, owner: ownerId } },
        update: {},
        create: { id: guildId, owner: ownerId } 
    });
    } catch (error) {
      logger.error(`Erreur d'enregistrement du serveur ${guildId} :`, error);
      throw error;
    }
  },

  async getServer(guildId: string, ownerId: string) {
    try {
      return await db.servers.findUnique({
        where: { id_owner: { id: guildId, owner: ownerId } },
      });
    } catch (error) {
      logger.error(`Erreur de lecture du serveur ${guildId} :`, error);
      throw error;
    }
  },
};
