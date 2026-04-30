import { SlashCommandBuilder } from "discord.js";
import type { Command } from "../../types/index.js";

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Répond avec Pong !'),
  async execute(interaction) {
    await interaction.reply('Pong !');
  }
};

export default command;