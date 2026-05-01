import { ChatInputCommandInteraction, MessageFlags, SlashCommandBuilder } from "discord.js";
import { DataManager } from "../../utils/dataManager.js";
import { Templates } from "../../utils/templates.js";

export const command = {
  data: new SlashCommandBuilder()
    .setName('profil')
    .setDescription('Affiche le profil externe d\'un utilisateur')
    .addStringOption(option =>
      option.setName('site')
        .setDescription('Le site à consulter')
        .setRequired(true)
        .addChoices(
          { name: 'MyAnimeList', value: 'mal' },
          { name: 'AniList', value: 'al' },
          { name: 'MangaCollec', value: 'mc' }
        )
    )
    .addUserOption(option =>
      option.setName('utilisateur')
        .setDescription('L\'utilisateur dont vous voulez voir le profil')
        .setRequired(false)
    ),
    async execute(interaction: ChatInputCommandInteraction) {
      const target = interaction.options.getUser('utilisateur') ?? interaction.user;
      const site = interaction.options.getString('site', true);

      const userData = await DataManager.getUser(target.id);

      if (!userData) {
        const errorMsg = target.id === interaction.user.id
          ? 'Vous n\'avez aucun profil enregistré. Utilisez `/set-profil` pour l\'enregistrer !'
          : `L'utilisateur **${target.username}** n'a aucun profil enregistré.`;

        return interaction.reply({
          embeds: [Templates.error(errorMsg)],
          flags: MessageFlags.Ephemeral
        });
      }

      let profileName: string | null = null;
      let url = '';
      let siteName = '';

      switch (site) {
        case 'mal':
          profileName = userData.mal_username;
          url = `https://myanimelist.net/profile/${profileName}`;
          siteName = 'MyAnimeList';
          break;
        case 'al':
          profileName = userData.al_username;
          url = `https://anilist.co/user/${profileName}`;
          siteName = 'AniList';
          break;
        case 'mc':
          profileName = userData.mangacollec;
          url = `https://www.mangacollec.com/user/${profileName}/collection`;
          siteName = 'MangaCollec';
          break;
      }

      if (!profileName) {
        const errorMsg = target.id === interaction.user.id
          ? `Vous n'avez pas lié votre compte **${siteName}**.`
          : `**${target.username}** n'a pas lié son compte **${siteName}**.`;

        return interaction.reply({
          embeds: [Templates.error(errorMsg)],
          flags: MessageFlags.Ephemeral
        });
      }

      const embed = Templates.info(`${siteName} - ${target.username}`, [
        { name: 'Lien du profil', value: `[${profileName}](${url})` }
      ]);

      embed.setThumbnail(target.displayAvatarURL({ size: 512 }));

      return interaction.reply({ embeds: [embed] });
    }
};

export default command;
