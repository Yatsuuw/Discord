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

(async () => {
  await connectDB();
  await client.start();
})();

function shutdown(label: string, reason: unknown): void {
  logger.error(`${label} :`, reason);
  db.$disconnect().finally(() => process.exit(1));
}

process.on('unhandledRejection', (reason) => shutdown('Promesse non gérée', reason));
process.on('uncaughtException', (err) => shutdown('Exception non capturée', err));
