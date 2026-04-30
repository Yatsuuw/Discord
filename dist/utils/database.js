import { PrismaClient } from "../generated/prisma/client.js";
import { logger } from "./logger.js";
export const db = new PrismaClient({});
export async function connectDB() {
    try {
        await db.$connect();
        logger.info('🐘 Connecté au serveur MariaDB avec succès.');
    }
    catch (err) {
        logger.error('❌ Impossible de se connecter au serveur MariaDB :', err);
        process.exit(1);
    }
}
//# sourceMappingURL=database.js.map