import { ChatInputCommandInteraction, MessageFlags, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import { DataManager } from "../../utils/dataManager.js";
import { Templates } from "../../utils/templates.js";
import { logger } from "../../utils/logger.js";
const command = {
    data: new SlashCommandBuilder()
        .setName('init')
        .setDescription('Initialise le serveur dans la base de données')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        if (!interaction.guild)
            return;
        const { id: guildId, ownerId, name } = interaction.guild;
        const iconURL = interaction.client.user.displayAvatarURL({ size: 32 });
        try {
            const existing = await DataManager.getServer(guildId, ownerId);
            if (existing) {
                await interaction.reply({
                    embeds: [Templates.info('Serveur déjà enregistré', [{ name: 'Information', value: `Ce serveur est déjà enregistré dans la base de données.` }], undefined, undefined, iconURL)],
                    flags: MessageFlags.Ephemeral
                });
                return;
            }
            await DataManager.registerServer(guildId, ownerId);
            await interaction.reply({
                embeds: [Templates.success(`Le serveur **${name}** a été initialisé dans la base de données avec succès.`, undefined, iconURL)],
                flags: MessageFlags.Ephemeral,
            });
        }
        catch (error) {
            logger.error(`Erreur init du serveur ${guildId} :`, error);
            await interaction.reply({
                embeds: [Templates.error(`Erreur lors de l'initialisation du serveur. Réessaie dans quelques instants.`, undefined, iconURL)],
                flags: MessageFlags.Ephemeral
            });
        }
    }
};
export default command;
//# sourceMappingURL=init.js.map