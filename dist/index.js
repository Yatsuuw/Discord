import { GatewayIntentBits } from 'discord.js';
import { ExtendedClient } from './structures/ExtendedClient.js';
import { logger } from './utils/logger.js';
import { connectDB } from './utils/database.js';
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
process.on('unhandledRejection', (reason) => {
    logger.error('Promesse non gérée détectée (Unhandled Rejection) :', reason);
});
process.on('uncaughtException', (err, origin) => {
    logger.error('Exception non capturée (Uncaught Exception) :', err);
    logger.error(`Origine de l'erreur : ${origin}`);
});
//# sourceMappingURL=index.js.map