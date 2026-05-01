import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ChatInputCommandInteraction, ComponentType, SlashCommandBuilder, } from 'discord.js';
import { searchAniList, buildResultEmbed, buildNoResultEmbed, PER_PAGE, } from '../../utils/anilist.graphql_api.js';
import { Templates } from '../../utils/templates.js';
import { logger } from '../../utils/logger.js';
const COLLECTOR_TIMEOUT = 120_000;
function buildNavRow(isFirst, isLast) {
    return new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId('first')
        .setEmoji('⏮️')
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(isFirst), new ButtonBuilder()
        .setCustomId('prev')
        .setEmoji('◀️')
        .setStyle(ButtonStyle.Primary)
        .setDisabled(isFirst), new ButtonBuilder()
        .setCustomId('next')
        .setEmoji('▶️')
        .setStyle(ButtonStyle.Primary)
        .setDisabled(isLast), new ButtonBuilder()
        .setCustomId('last')
        .setEmoji('⏭️')
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(isLast));
}
function buildActionRow() {
    return new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId('confirm')
        .setEmoji('✅')
        .setLabel('Valider')
        .setStyle(ButtonStyle.Success), new ButtonBuilder()
        .setCustomId('delete')
        .setEmoji('🗑️')
        .setLabel('Supprimer')
        .setStyle(ButtonStyle.Danger));
}
function buildDisabledNavRow() {
    return buildNavRow(true, true);
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
        await interaction.deferReply();
        let pageData = await searchAniList(search, type, 1).catch((err) => {
            logger.error(`Erreur AniList /search "${search}" :`, err);
            return null;
        });
        if (!pageData) {
            await interaction.editReply({
                embeds: [Templates.error('Impossible de contacter l\'API AniList. Réessaye dans quelques instants.')],
            });
            return;
        }
        if (!pageData.results.length) {
            await interaction.editReply({ embeds: [buildNoResultEmbed(search, type)] });
            return;
        }
        const total = pageData.total;
        const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
        let currentPage = 1;
        let currentIndex = 0;
        function globalPosition() {
            return (currentPage - 1) * PER_PAGE + currentIndex + 1;
        }
        function isFirst() {
            return currentPage === 1 && currentIndex === 0;
        }
        function isLast() {
            return !pageData.hasNext && currentIndex === pageData.results.length - 1;
        }
        const cache = new Map([[1, pageData]]);
        async function getPage(page) {
            if (cache.has(page))
                return cache.get(page);
            const data = await searchAniList(search, type, page);
            cache.set(page, data);
            return data;
        }
        const message = await interaction.editReply({
            embeds: [buildResultEmbed(pageData.results[0], globalPosition(), total)],
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
                    case 'next': {
                        if (currentIndex < pageData.results.length - 1) {
                            currentIndex++;
                        }
                        else if (pageData.hasNext) {
                            currentPage++;
                            pageData = await getPage(currentPage);
                            currentIndex = 0;
                        }
                        break;
                    }
                    case 'prev': {
                        if (currentIndex > 0) {
                            currentIndex--;
                        }
                        else if (currentPage > 1) {
                            currentPage--;
                            pageData = await getPage(currentPage);
                            currentIndex = pageData.results.length - 1;
                        }
                        break;
                    }
                    case 'first': {
                        currentPage = 1;
                        currentIndex = 0;
                        pageData = await getPage(1);
                        break;
                    }
                    case 'last': {
                        currentPage = totalPages;
                        pageData = await getPage(totalPages);
                        currentIndex = pageData.results.length - 1;
                        break;
                    }
                }
                const media = pageData.results[currentIndex];
                if (!media)
                    return;
                await btn.editReply({
                    embeds: [buildResultEmbed(media, globalPosition(), total)],
                    components: [buildNavRow(isFirst(), isLast()), buildActionRow()],
                });
            }
            catch (err) {
                logger.error('Erreur navigation /search :', err);
                await btn.editReply({
                    embeds: [Templates.error('Une erreur est survenue lors du chargement de ce résultat.')],
                    components: [],
                });
            }
        });
        collector.on('end', async (_, reason) => {
            if (reason === 'confirmed' || reason === 'deleted')
                return;
            await interaction.editReply({
                components: [buildDisabledNavRow()],
            }).catch(() => { });
        });
    },
};
export default command;
//# sourceMappingURL=search.js.map