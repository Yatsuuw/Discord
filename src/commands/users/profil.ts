import { ChatInputCommandInteraction, MessageFlags, SlashCommandBuilder } from 'discord.js';
import { DataManager } from '../../utils/dataManager.js';
import { Templates } from '../../utils/templates.js';
import type { Command } from '../../types/index.js';
import { SITE_CONFIG } from '../../utils/siteConfig.js';
import { logger } from '../../utils/logger.js';
import { assertGuildInitialized } from '../../utils/guildGuard.js';

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('profil')
    .setDescription('Affiche le profil externe d\'un utilisateur')
    .addStringOption(option =>
      option.setName('site')
        .setDescription('Le site à consulter')
        .setRequired(true)
        .addChoices(
          { name: 'MyAnimeList', value: 'mal' },
          { name: 'AniList',     value: 'al'  },
          { name: 'MangaCollec', value: 'mc'  },
        )
    )
    .addUserOption(option =>
      option.setName('membre')
        .setDescription('Le membre dont vous voulez voir le profil')
        .setRequired(false)
    ),

  async execute(interaction: ChatInputCommandInteraction) {
    const target = interaction.options.getUser('membre') ?? interaction.user;
    const site = interaction.options.getString('site', true);
    const iconURL = interaction.client.user.displayAvatarURL({ size: 32 });

    if (!await assertGuildInitialized(interaction, iconURL)) return;

    let userData;
    try {
      userData = await DataManager.getUser(target.id);
    } catch (error) {
      logger.error(`Une erreur est survenue lors de la récupération d'un profil.`, error);
      await interaction.reply({
        embeds: [Templates.error('Erreur lors de la récupération du profil. Réessaie dans quelques instants.', undefined, iconURL)],
        flags: MessageFlags.Ephemeral,
      });
      return;
    }

    if (!userData) {
      const msg = target.id === interaction.user.id
        ? 'Vous n\'avez aucun profil enregistré. Utilisez `/config_profil` pour l\'enregistrer !'
        : `L'utilisateur **${target.username}** n'a aucun profil enregistré.`;
      await interaction.reply({ embeds: [Templates.error(msg, undefined, iconURL)], flags: MessageFlags.Ephemeral });
      return;
    }

    const siteConfig = SITE_CONFIG[site];
    if (!siteConfig) return;

    const profileName = siteConfig.getUsername(userData);

    if (!profileName) {
      const msg = target.id === interaction.user.id
        ? `Vous n'avez pas lié votre compte **${siteConfig.label}**.`
        : `**${target.username}** n'a pas lié son compte **${siteConfig.label}**.`;
      await interaction.reply({ embeds: [Templates.error(msg, undefined, iconURL)], flags: MessageFlags.Ephemeral });
      return;
    }

    const url = siteConfig.buildUrl(profileName);
    const embed = Templates.info(`${siteConfig.label} - ${target.username}`, [
      { name: 'Lien du profil', value: `[Lien vers la page ${siteConfig.label}](${url})` },
    ], undefined, undefined, iconURL);

    embed.setThumbnail(target.displayAvatarURL({ size: 512 }));

    await interaction.reply({ embeds: [embed] });
  },
};

export default command;
