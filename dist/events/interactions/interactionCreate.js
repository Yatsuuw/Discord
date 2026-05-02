import { Events, MessageFlags } from "discord.js";
import { logger } from "../../utils/logger.js";
import { Templates } from "../../utils/templates.js";
const event = {
    name: Events.InteractionCreate,
    once: false,
    async execute(client, interaction) {
        if (!interaction.isChatInputCommand())
            return;
        const command = client.commands.get(interaction.commandName);
        if (!command) {
            await interaction.reply({
                embeds: [Templates.error('Cette commande n\'existe pas ou a été désactivée.')],
                flags: MessageFlags.Ephemeral
            });
            return;
        }
        try {
            await command.execute(interaction, client);
        }
        catch (error) {
            logger.error(`Erreur lors de l'exécution de /${interaction.commandName}`, error);
            const errorEmbed = Templates.error(`Une erreur interne empêche l'exécution de cette commande.`);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ embeds: [errorEmbed], flags: MessageFlags.Ephemeral });
            }
            else {
                await interaction.reply({ embeds: [errorEmbed], flags: MessageFlags.Ephemeral });
            }
        }
    }
};
export default event;
//# sourceMappingURL=interactionCreate.js.map