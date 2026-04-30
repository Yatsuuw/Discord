import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/index.js";
import { logger } from "./logger.js";

const dbUrl = new URL(process.env.DATABASE_URL!);

const adapter = new PrismaMariaDb({
  host: dbUrl.hostname,
  port: Number(dbUrl.port),
  user: dbUrl.username,
  password: dbUrl.password,
  database: dbUrl.pathname.replace("/", ""),
  connectionLimit: 5,
});

export const db = new PrismaClient({ adapter });

export async function connectDB(): Promise<void> {
  try {
    await db.$connect();
    logger.info('🐘 Connecté au serveur MariaDB avec succès.');
  } catch (err) {
    logger.error('❌ Impossible de se connecter au serveur MariaDB :', err);
    process.exit(1);
  }
}
