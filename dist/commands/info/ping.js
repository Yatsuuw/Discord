import { MessageFlags, SlashCommandBuilder } from "discord.js";
import { Templates } from "../../utils/templates.js";
const command = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Répond avec Pong !'),
    async execute(interaction) {
        const latency = Math.round(interaction.client.ws.ping);
        await interaction.reply({
            embeds: [Templates.success(`Pong ! 🏓 Latence : **${latency}ms**`)],
            flags: MessageFlags.Ephemeral,
        });
    }
};
export default command;
//# sourceMappingURL=ping.js.map