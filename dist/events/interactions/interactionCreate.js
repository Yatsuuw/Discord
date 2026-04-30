import { EmbedBuilder, Events, Colors } from "discord.js";
import { logger } from "../../utils/logger.js";
const event = {
    name: Events.InteractionCreate,
    async execute(client, interaction) {
        if (!interaction.isChatInputCommand())
            return;
        const command = client.commands.get(interaction.commandName);
        if (!command) {
            await interaction.reply({
                content: 'Cette commande n\'existe pas.',
                ephemeral: true
            });
            return;
        }
        try {
            await command.execute(interaction, client);
        }
        catch (error) {
            logger.error(`Erreur lors de l'exécution de /${interaction.commandName}`, error);
            const errorEmbed = new EmbedBuilder()
                .setTitle('❌ Une erreur est survenue')
                .setDescription('Une erreur interne empêche l\'exécution de cette commande.')
                .setColor(Colors.Red)
                .setFooter({ text: `ID de l'erreur : ${Date.now()}` });
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ embeds: [errorEmbed], ephemeral: true });
            }
            else {
                await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
            }
        }
    }
};
export default event;
//# sourceMappingURL=interactionCreate.js.map