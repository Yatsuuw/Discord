import { MessageFlags, SlashCommandBuilder } from "discord.js";
import type { Command } from "../../types/index.js";
import { Templates } from "../../utils/templates.js";
import { assertGuildInitialized } from "../../utils/guildGuard.js";

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Répond avec Pong !'),
  async execute(interaction) {
    const latency = Math.round(interaction.client.ws.ping);

    if (!await assertGuildInitialized(interaction)) return;

    await interaction.reply({
      embeds: [Templates.success(`Pong ! 🏓\nLatence : **${latency}ms**`, undefined, interaction.client.user.displayAvatarURL({ size: 32 }))],
      flags: MessageFlags.Ephemeral,
    });
  }
};

export default command;