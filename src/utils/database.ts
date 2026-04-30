import { PrismaClient } from "@prisma/client/extension";

export const db = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

try {
  await db.$connect();
  console.log('Connecté à MariaDB via Prisma.');
} catch (error) {
  console.error('Erreur de connexion MariaDB :', error);
}
