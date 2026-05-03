import { MessageFlags, SlashCommandBuilder } from "discord.js";
import { Templates } from "../../utils/templates.js";
import { assertGuildInitialized } from "../../utils/guildGuard.js";
const command = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Répond avec Pong !'),
    async execute(interaction) {
        const latency = Math.round(interaction.client.ws.ping);
        const iconURL = interaction.client.user.displayAvatarURL({ size: 32 });
        if (!await assertGuildInitialized(interaction, iconURL))
            return;
        await interaction.reply({
            embeds: [Templates.success(`Pong ! 🏓\nLatence : **${latency}ms**`, undefined, iconURL)],
            flags: MessageFlags.Ephemeral,
        });
    }
};
export default command;
//# sourceMappingURL=ping.js.map