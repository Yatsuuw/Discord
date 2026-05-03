import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ChatInputCommandInteraction, ComponentType, MessageFlags, SlashCommandBuilder } from 'discord.js';
import { searchAniList, buildResultEmbed, buildNoResultEmbed } from '../../utils/anilist/index.js';
import { Templates } from '../../utils/templates.js';
import { logger } from '../../utils/logger.js';
import { DataManager } from '../../utils/dataManager.js';
const COLLECTOR_TIMEOUT = 120_000;
function buildActionRow(disabled = false) {
    return new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId('confirm').setEmoji('✅').setLabel('Valider').setStyle(ButtonStyle.Success).setDisabled(disabled), new ButtonBuilder().setCustomId('delete').setEmoji('🗑️').setLabel('Supprimer').setStyle(ButtonStyle.Danger).setDisabled(disabled));
}
function buildNavRow(isFirst, isLast) {
    return new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId('first').setEmoji('⏮️').setStyle(ButtonStyle.Secondary).setDisabled(isFirst), new ButtonBuilder().setCustomId('prev').setEmoji('◀️').setStyle(ButtonStyle.Primary).setDisabled(isFirst), new ButtonBuilder().setCustomId('next').setEmoji('▶️').setStyle(ButtonStyle.Primary).setDisabled(isLast), new ButtonBuilder().setCustomId('last').setEmoji('⏭️').setStyle(ButtonStyle.Secondary).setDisabled(isLast));
}
const command = {
    data: new SlashCommandBuilder()
        .setName('search')
        .setDescription('Recherche un animé ou un manga sur AniList')
        .addStringOption(option => option
        .setName('type')
        .setDescription('Type de média à rechercher')
        .setRequired(true)
        .addChoices({ name: '🎬 Animé', value: 'ANIME' }, { name: '📖 Manga', value: 'MANGA' }))
        .addStringOption(option => option
        .setName('nom')
        .setDescription('Nom du titre à rechercher')
        .setRequired(true)
        .setMinLength(2)
        .setMaxLength(100)),
    async execute(interaction) {
        const type = interaction.options.getString('type', true);
        const search = interaction.options.getString('nom', true).trim();
        const iconURL = interaction.client.user.displayAvatarURL({ size: 32 });
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
        await interaction.deferReply();
        let pageData;
        try {
            pageData = await searchAniList(search, type);
        }
        catch (error) {
            logger.error(`Erreur AniList /search "${search}" :`, error);
            await interaction.editReply({
                embeds: [Templates.error('Impossible de contacter l\'API AniList. Réessaye dans quelques instants.', undefined, iconURL)],
            });
            return;
        }
        if (!pageData.results.length) {
            await interaction.editReply({ embeds: [buildNoResultEmbed(search, type, iconURL)] });
            return;
        }
        const { results } = pageData;
        let index = 0;
        const isFirst = () => index === 0;
        const isLast = () => index === results.length - 1;
        const position = () => index + 1;
        const message = await interaction.editReply({
            embeds: [buildResultEmbed(results[0], position(), results.length, iconURL)],
            components: [buildNavRow(isFirst(), isLast()), buildActionRow()],
        });
        const collector = message.createMessageComponentCollector({
            componentType: ComponentType.Button,
            filter: (i) => i.user.id === interaction.user.id,
            time: COLLECTOR_TIMEOUT,
        });
        collector.on('collect', async (btn) => {
            await btn.deferUpdate();
            try {
                if (btn.customId === 'confirm') {
                    collector.stop('confirmed');
                    await btn.editReply({ components: [] });
                    return;
                }
                if (btn.customId === 'delete') {
                    collector.stop('deleted');
                    await interaction.deleteReply();
                    return;
                }
                switch (btn.customId) {
                    case 'next':
                        if (!isLast())
                            index++;
                        break;
                    case 'prev':
                        if (!isFirst())
                            index--;
                        break;
                    case 'first':
                        index = 0;
                        break;
                    case 'last':
                        index = results.length - 1;
                        break;
                }
                const media = results[index];
                if (!media)
                    return;
                await btn.editReply({
                    embeds: [buildResultEmbed(media, position(), results.length, iconURL)],
                    components: [buildNavRow(isFirst(), isLast()), buildActionRow()],
                });
            }
            catch (err) {
                logger.error('Erreur navigation /search :', err);
                await btn.editReply({
                    embeds: [Templates.error('Une erreur est survenue lors de la navigation.', undefined, iconURL)],
                    components: [],
                });
            }
        });
        collector.on('end', async (_, reason) => {
            if (reason === 'confirmed' || reason === 'deleted')
                return;
            await interaction.editReply({ components: [buildNavRow(true, true), buildActionRow(true)] }).catch(() => { });
        });
    },
};
export default command;
//# sourceMappingURL=search.js.map