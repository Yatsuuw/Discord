import { GatewayIntentBits, REST, Routes } from "discord.js";
import { ExtendedClient } from "./structures/ExtendedClient.js";
import { config } from "./config.js";
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
        console.log(`Déploiement ${isGlobal ? 'global' : 'local'} des commandes...`);
        const route = isGlobal
            ? Routes.applicationCommands(config.clientId)
            : Routes.applicationGuildCommands(config.clientId, config.guildId);
        await rest.put(route, { body: commandData });
        console.log(`Commandes ${isGlobal ? 'globales' : 'locales'} déployées avec succès.`);
        process.exit(0);
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};
deploy();
//# sourceMappingURL=deploy.js.map