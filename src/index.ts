import { GatewayIntentBits } from 'discord.js';
import { ExtendedClient } from './structures/ExtendedClient.js';
import { logger } from './utils/logger.js';
import { connectDB, db } from './utils/database.js';

const client = new ExtendedClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ]
});

async function shutdown(label: string, reason: unknown): Promise<void> {
  logger.error(`${label} :`, reason);
  await db.$disconnect().catch(() => {});
  process.exit(1);
}

process.on('unhandledRejection', (reason) => shutdown('Promesse non gérée', reason));
process.on('uncaughtException', (err) => shutdown('Exception non capturée', err));

(async () => {
  await connectDB();
  await client.start();
})();
