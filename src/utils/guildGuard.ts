import { MessageFlags, type ChatInputCommandInteraction } from "discord.js";
import { DataManager } from "./dataManager.js";
import { Templates } from "./templates.js";
import { logger } from "./logger.js";

export async function assertGuildInitialized(interaction: ChatInputCommandInteraction, iconURL: string): Promise<boolean> {
  if (!interaction.guild) return true;

  const { id: guildId, ownerId } = interaction.guild;
  let existing: Awaited<ReturnType<typeof DataManager.getServer>>;

  try {
    existing = await DataManager.getServer(guildId, ownerId);
  } catch (error) {
    logger.error(`Erreur de vérification du serveur ${guildId} :`, error);
    await interaction.reply({
      embeds: [Templates.error('Erreur de connexion à la base de données. Réessaie dans quelques instants.', undefined, iconURL)],
      flags: MessageFlags.Ephemeral,
    });
    return false;
  }

  if (!existing) {
    await interaction.reply({
      embeds: [Templates.error('Ce serveur doit être initialisé avec `/init` avant de pouvoir utiliser les commandes.', undefined, iconURL)],
      flags: MessageFlags.Ephemeral,
    });
    return false;
  }

  return true;
}
