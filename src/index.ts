import { GatewayIntentBits } from 'discord.js';
import { ExtendedClient } from './structures/ExtendedClient.js';
import { logger } from './utils/logger.js';
import { connectDB, db } from './utils/database.js';

const client = new ExtendedClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

(async () => {
  await connectDB();
  await client.start();
})();

process.on('unhandledRejection', async (reason) => {
  logger.error('Promesse non gérée détectée (Unhandled Rejection) :', reason);

  await db.$disconnect();
  await new Promise(resolve => setTimeout(resolve, 50));
  process.exit(1);
});

process.on('uncaughtException', async (err, origin) => {
  logger.error('Exception non capturée (Uncaught Exception) :', err);
  logger.error(`Origine de l'erreur : ${origin}`);

  await db.$disconnect();
  await new Promise(resolve => setTimeout(resolve, 50));
  process.exit(1);
});
