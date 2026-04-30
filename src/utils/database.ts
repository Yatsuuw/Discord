import { PrismaClient } from "@prisma/client/extension";
import { logger } from "./logger.js";

export const db = new PrismaClient();

export async function connectDB() {
  try {
    await db.$connect();
    logger.info('🐘 Connecté à MariaDB avec succès.');
  } catch (err) {
    logger.error('❌ Impossible de se connecter à MariaDB :', err);
    process.exit(1);
  }
}
