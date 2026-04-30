import { SlashCommandBuilder } from "discord.js";
const command = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Répond avec Pong !'),
    async execute(interaction) {
        await interaction.reply('Pong !');
    }
};
export default command;
//# sourceMappingURL=ping.js.map