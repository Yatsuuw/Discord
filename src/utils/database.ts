import { PrismaClient } from "../generated/prisma/client.js";
import { logger } from "./logger.js";

export const db = new PrismaClient({} as ConstructorParameters<typeof PrismaClient>[0]);

export async function connectDB(): Promise<void> {
  try {
    await db.$connect();
    logger.info('🐘 Connecté au serveur MariaDB avec succès.');
  } catch (err) {
    logger.error('❌ Impossible de se connecter au serveur MariaDB :', err);
    process.exit(1);
  }
}
