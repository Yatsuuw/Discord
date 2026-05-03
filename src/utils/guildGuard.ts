import { MessageFlags, type ChatInputCommandInteraction } from "discord.js";
import { DataManager } from "./dataManager.js";
import { Templates } from "./templates.js";

export async function assertGuildInitialized(interaction: ChatInputCommandInteraction): Promise<boolean> {
  if (!interaction.guild) return true;

  const { id: guildId, ownerId } = interaction.guild;
  const existing = await DataManager.getServer(guildId, ownerId);

  if (!existing) {
    await interaction.reply({
      embeds: [Templates.error('Le serveur doit être initialisé dans la base de données pour pouvoir exécuter une commande.')],
      flags: MessageFlags.Ephemeral,
    });
    return false;
  }

  return true;
}
