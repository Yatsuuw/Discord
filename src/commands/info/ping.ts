import { MessageFlags, SlashCommandBuilder } from "discord.js";
import type { Command } from "../../types/index.js";
import { Templates } from "../../utils/templates.js";
import { DataManager } from "../../utils/dataManager.js";

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Répond avec Pong !'),
  async execute(interaction) {
    const latency = Math.round(interaction.client.ws.ping);

    if (interaction.guild) {
      const { id: guildId, ownerId } = interaction.guild;
      const existing = await DataManager.getServer(guildId, ownerId);

      if (!existing) {
        await interaction.reply({
          embeds: [Templates.error(`Le serveur doit être initialisé dans la base de données pour pouvoir exécuter une commande.`)],
          flags: MessageFlags.Ephemeral
        });
        return;
      }
    }

    await interaction.reply({
      embeds: [Templates.success(`Pong ! 🏓\nLatence : **${latency}ms**`, undefined, interaction.client.user.displayAvatarURL({ size: 32 }))],
      flags: MessageFlags.Ephemeral,
    });
  }
};

export default command;