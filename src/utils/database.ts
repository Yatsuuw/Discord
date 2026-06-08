import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/index.js";
import { logger } from "./logger.js";

if (!process.env.DB_HOST || !process.env.DB_PORT || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
  logger.error('❌ Configuration de la base de données incomplète. Vérifiez vos variables DB_HOST, DB_USER, DB_PASSWORD, DB_PORT et DB_NAME dans le fichier .env.');
  process.exit(1);
}

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
  connectTimeout: 5_000,
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
