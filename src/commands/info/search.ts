import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ChatInputCommandInteraction, ComponentType, SlashCommandBuilder } from 'discord.js';
import type { Command } from '../../types/index.js';
import { searchAniList, buildResultEmbed, buildNoResultEmbed, type MediaType } from '../../utils/anilist/index.js';
import { Templates } from '../../utils/templates.js';
import { logger } from '../../utils/logger.js';

const COLLECTOR_TIMEOUT = 120_000;

function buildActionRow(): ActionRowBuilder<ButtonBuilder> {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId('confirm').setEmoji('✅').setLabel('Valider').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('delete').setEmoji('🗑️').setLabel('Supprimer').setStyle(ButtonStyle.Danger),
  );
}

function buildNavRow(isFirst: boolean, isLast: boolean): ActionRowBuilder<ButtonBuilder> {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId('first').setEmoji('⏮️').setStyle(ButtonStyle.Secondary).setDisabled(isFirst),
    new ButtonBuilder().setCustomId('prev').setEmoji('◀️').setStyle(ButtonStyle.Primary).setDisabled(isFirst),
    new ButtonBuilder().setCustomId('next').setEmoji('▶️').setStyle(ButtonStyle.Primary).setDisabled(isLast),
    new ButtonBuilder().setCustomId('last').setEmoji('⏭️').setStyle(ButtonStyle.Secondary).setDisabled(isLast),
  );
}

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('search')
    .setDescription('Recherche un animé ou un manga sur AniList')
    .addStringOption(option =>
      option
        .setName('type')
        .setDescription('Type de média à rechercher')
        .setRequired(true)
        .addChoices(
          { name: '🎬 Animé', value: 'ANIME' },
          { name: '📖 Manga', value: 'MANGA' },
        ),
    )
    .addStringOption(option =>
      option
        .setName('nom')
        .setDescription('Nom du titre à rechercher')
        .setRequired(true)
        .setMinLength(2)
        .setMaxLength(100),
    ),

  async execute(interaction: ChatInputCommandInteraction) {
    const type = interaction.options.getString('type', true) as MediaType;
    const search = interaction.options.getString('nom',  true).trim();

    await interaction.deferReply();

    let pageData;
    try {
      pageData = await searchAniList(search, type);
    } catch (error) {
      logger.error(`Erreur AniList /search "${search}" :`, error);
      await interaction.editReply({
        embeds: [Templates.error('Impossible de contacter l\'API AniList. Réessaye dans quelques instants.', undefined, interaction.client.user.displayAvatarURL({ size: 32 }))],
      });
      return;
    }

    if (!pageData.results.length) {
      await interaction.editReply({ embeds: [buildNoResultEmbed(search, type)] });
      return;
    }

    const { results } = pageData;
    let index = 0;

    const isFirst = () => index === 0;
    const isLast = () => index === results.length - 1;
    const position = () => index + 1;

    const message = await interaction.editReply({
      embeds: [buildResultEmbed(results[0]!, position(), results.length)],
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
          case 'next': if (!isLast()) index++; break;
          case 'prev': if (!isFirst()) index--; break;
          case 'first': index = 0; break;
          case 'last': index = results.length - 1; break;
        }

        const media = results[index];
        if (!media) return;

        await btn.editReply({
          embeds: [buildResultEmbed(media, position(), results.length)],
          components: [buildNavRow(isFirst(), isLast()), buildActionRow()],
        });

      } catch (err) {
        logger.error('Erreur navigation /search :', err);
        await btn.editReply({
          embeds: [Templates.error('Une erreur est survenue lors de la navigation.', undefined, interaction.client.user.displayAvatarURL({ size: 32 }))],
          components: [],
        });
      }
    });

    collector.on('end', async (_, reason) => {
      if (reason === 'confirmed' || reason === 'deleted') return;
      await interaction.editReply({ components: [buildNavRow(true, true)] }).catch(() => {});
    });
  },
};

export default command;
