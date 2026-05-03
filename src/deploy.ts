import { REST, Routes } from "discord.js";
import { ExtendedClient } from "./structures/ExtendedClient.js";
import { config } from "./config.js";
import { logger } from "./utils/logger.js";

async function deploy(): Promise<void> {
  const isGlobal = process.argv.includes('--global');

  const client = new ExtendedClient({ intents: [] });
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
  } catch (error) {
    logger.error('Erreur lors du déploiement des commandes :', error);
    process.exitCode = 1;
  }
};

deploy();
