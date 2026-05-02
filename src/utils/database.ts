import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/index.js";
import { logger } from "./logger.js";

const rawUrl = process.env.DATABASE_URL;
if (!rawUrl) throw new Error('Variable d\'environnement manquante : DATABASE_URL');

const dbUrl = new URL(rawUrl);

const adapter = new PrismaMariaDb({
  host: dbUrl.hostname,
  port: parseInt(dbUrl.port, 10) || 3306,
  user: dbUrl.username,
  password: dbUrl.password,
  database: dbUrl.pathname.slice(1),
  connectionLimit: 5,
});

export const db = new PrismaClient({ adapter });

export async function connectDB(): Promise<void> {
  try {
    await db.$connect();
    logger.info('🐬 Connecté au serveur MariaDB avec succès.');
  } catch (err) {
    logger.error('❌ Impossible de se connecter au serveur MariaDB :', err);
    process.exit(1);
  }
}
