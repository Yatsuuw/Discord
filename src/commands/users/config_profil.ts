import { ChatInputCommandInteraction, MessageFlags, SlashCommandBuilder } from 'discord.js';
import { DataManager } from '../../utils/dataManager.js';
import { Templates } from '../../utils/templates.js';
import { SITE_CONFIG } from '../../utils/siteConfig.js';
import { logger } from '../../utils/logger.js';
import type { Command } from '../../types/index.js';
import { assertGuildInitialized } from '../../utils/guildGuard.js';

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('config_profil')
    .setDescription('Enregistre ou modifie vos pseudos des différents sites')
    .addStringOption(option =>
      option.setName('site')
        .setDescription('Le site sur lequel vous voulez enregistrer votre profil')
        .setRequired(true)
        .addChoices(
          { name: 'MyAnimeList', value: 'mal' },
          { name: 'AniList',     value: 'al'  },
          { name: 'MangaCollec', value: 'mc'  },
        )
    )
    .addStringOption(option =>
      option.setName('nom')
        .setDescription('Votre nom d\'utilisateur sur le site (laisser vide pour supprimer)')
        .setRequired(false)
    ),

  async execute(interaction: ChatInputCommandInteraction) {
    const userId = interaction.user.id;
    const site = interaction.options.getString('site', true) as 'mal' | 'al' | 'mc';
    const username = interaction.options.getString('nom', false) ?? null;
    const iconURL = interaction.client.user.displayAvatarURL({ size: 32 });

    if (!await assertGuildInitialized(interaction, iconURL)) return;

    try {
      await DataManager.upsertUser(userId, { [site]: username });

      const siteName = SITE_CONFIG[site]?.label ?? site;
      const action   = username === null ? 'supprimé' : 'enregistré';

      await interaction.reply({
        embeds: [Templates.success(`Votre pseudo **${siteName}** a été ${action} avec succès.`, undefined, iconURL)],
        flags:  MessageFlags.Ephemeral,
      });
    } catch (error) {
      logger.error(`Erreur config_profil pour ${userId} :`, error);
      await interaction.reply({
        embeds: [Templates.error('Une erreur est survenue lors de la mise à jour de votre profil.', undefined, iconURL)],
        flags:  MessageFlags.Ephemeral,
      });
    }
  },
};

export default command;
