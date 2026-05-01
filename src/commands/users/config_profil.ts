import { ChatInputCommandInteraction, MessageFlags, SlashCommandBuilder } from "discord.js";
import { DataManager } from "../../utils/dataManager.js";
import { Templates } from "../../utils/templates.js";
import type { Command } from "../../types/index.js";

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
          { name: 'AniList', value: 'al' },
          { name: 'MangaCollec', value: 'mc' }
        )
    )
    .addStringOption(option =>
      option.setName('nom')
        .setDescription('Votre nom d\'utilisateur sur le site')
        .setRequired(false)
    ),
    async execute(interaction: ChatInputCommandInteraction) {
      const userId = interaction.user.id;
      const site = interaction.options.getString('site', true);
      const username = interaction.options.getString('nom', false);

      try {
        const current = await DataManager.getUser(userId);

        const mal = site === 'mal' ? username : (current?.mal_username ?? null);
        const al = site === 'al' ? username : (current?.al_username ?? null);
        const mc = site === 'mc' ? username : (current?.mangacollec ?? null);

        await DataManager.upsertUser(userId, { mal, al, mc });

        const siteName = site === 'mal' ? 'MyAnimeList' : site === 'al' ? 'AniList' : 'MangaCollec';
        const action = username === null ? 'supprimé' : 'enregistré';

        await interaction.reply({
          embeds: [Templates.success(`Votre pseudo **${siteName}** a été ${action} avec succès.`)],
          flags: MessageFlags.Ephemeral
        });
        return;
      } catch (error) {
        await interaction.reply({
          embeds: [Templates.error(`Une erreur est survenue lors de la mise à jour de votre profil : ${error}`)],
          flags: MessageFlags.Ephemeral
        });
        return;
      }
    }
};

export default command;
