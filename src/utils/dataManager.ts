import type { UserProfiles } from "../types/index.js";
import { db } from "./database.js";
import { logger } from "./logger.js";

export const DataManager = {
  async getUser(userId: string) {
    const result = await db.users.findUnique({ where: { user: userId } }).catch((error) => { logger.error(`Erreur de lecture de l'utilisateur ${userId} :`, error); throw error; });
    return result;
  },

  async upsertUser(userId: string, profiles: Partial<UserProfiles>) {
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
    }).catch((error) => { logger.error(`Erreur de mise à jour de l'utilisateur ${userId} :`, error); throw error; });
  },

  async registerServer(guildId: string, ownerId: string) {
    return db.servers.upsert({
      where: { id_owner: { id: guildId, owner: ownerId } },
      update: {},
      create: { id: guildId, owner: ownerId },
    }).catch((error) => { logger.error(`Erreur de l'enregistrement du serveur ${guildId} :`, error); throw error; });
  },

  async getServer(guildId: string, ownerId: string) {
    return db.servers.findUnique({
      where: { id_owner: { id: guildId, owner: ownerId } },
    }).catch((error) => { logger.error(`Erreur de la lecture du serveur ${guildId} :`, error); throw error; });
  },
};
