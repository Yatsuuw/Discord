import { Events, MessageFlags } from "discord.js";
import { logger } from "../../utils/logger.js";
import { Templates } from "../../utils/templates.js";
const event = {
    name: Events.InteractionCreate,
    async execute(client, interaction) {
        if (!interaction.isChatInputCommand())
            return;
        const iconURL = interaction.client.user.displayAvatarURL({ size: 32 });
        const command = client.commands.get(interaction.commandName);
        if (!command) {
            logger.warn(`Commande inconnue invoquée : /${interaction.commandName} par ${interaction.user.username}`);
            await interaction.reply({
                embeds: [Templates.error('Cette commande n\'existe pas ou a été désactivée.', undefined, iconURL)],
                flags: MessageFlags.Ephemeral
            });
            return;
        }
        try {
            await command.execute(interaction, client);
        }
        catch (error) {
            logger.error(`Erreur lors de l'exécution de /${interaction.commandName}`, error);
            const errorEmbed = Templates.error(`Une erreur interne empêche l'exécution de cette commande.`, undefined, iconURL);
            const payload = { embeds: [errorEmbed], flags: MessageFlags.Ephemeral };
            await (interaction.replied || interaction.deferred
                ? interaction.followUp(payload)
                : interaction.reply(payload)).catch(() => { });
        }
    }
};
export default event;
//# sourceMappingURL=interactionCreate.js.map