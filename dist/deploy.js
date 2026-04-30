import { GatewayIntentBits, REST, Routes } from "discord.js";
import { ExtendedClient } from "./structures/ExtendedClient.js";
import { config } from "./config.js";
import { db } from "./utils/database.js";
import { logger } from "./utils/logger.js";
const client = new ExtendedClient({
    intents: [
        GatewayIntentBits.Guilds
    ]
});
const deploy = async () => {
    const isGlobal = process.argv.includes('--global');
    await client.loadCommands();
    const rest = new REST({ version: '10' }).setToken(config.token);
    const commandData = client.commands.map(cmd => cmd.data.toJSON());
    try {
        logger.info(`Déploiement ${isGlobal ? 'global' : 'local'} des commandes...`);
        const route = isGlobal
            ? Routes.applicationCommands(config.clientId)
            : Routes.applicationGuildCommands(config.clientId, config.guildId);
        await rest.put(route, { body: commandData });
        logger.info(`Commandes ${isGlobal ? 'globales' : 'locales'} déployées avec succès.`);
        await db.$disconnect();
        await new Promise(resolve => setTimeout(resolve, 50));
        process.exit(0);
    }
    catch (error) {
        logger.error('Erreur lors du déploiement des commandes :', error);
        await db.$disconnect();
        await new Promise(resolve => setTimeout(resolve, 50));
        process.exit(1);
    }
};
deploy();
//# sourceMappingURL=deploy.js.map