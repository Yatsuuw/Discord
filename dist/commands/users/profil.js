import { ChatInputCommandInteraction, MessageFlags, SlashCommandBuilder } from 'discord.js';
import { DataManager } from '../../utils/dataManager.js';
import { Templates } from '../../utils/templates.js';
const SITE_CONFIG = {
    mal: {
        label: 'MyAnimeList',
        getUsername: u => u.mal_username,
        buildUrl: n => `https://myanimelist.net/profile/${n}`,
    },
    al: {
        label: 'AniList',
        getUsername: u => u.al_username,
        buildUrl: n => `https://anilist.co/user/${n}`,
    },
    mc: {
        label: 'MangaCollec',
        getUsername: u => u.mangacollec,
        buildUrl: n => `https://www.mangacollec.com/user/${n}/collection`,
    },
};
const command = {
    data: new SlashCommandBuilder()
        .setName('profil')
        .setDescription('Affiche le profil externe d\'un utilisateur')
        .addStringOption(option => option.setName('site')
        .setDescription('Le site à consulter')
        .setRequired(true)
        .addChoices({ name: 'MyAnimeList', value: 'mal' }, { name: 'AniList', value: 'al' }, { name: 'MangaCollec', value: 'mc' }))
        .addUserOption(option => option.setName('membre')
        .setDescription('Le membre dont vous voulez voir le profil')
        .setRequired(false)),
    async execute(interaction) {
        const target = interaction.options.getUser('membre') ?? interaction.user;
        const site = interaction.options.getString('site', true);
        const userData = await DataManager.getUser(target.id).catch(() => null);
        if (userData === null) {
            await interaction.reply({
                embeds: [Templates.error('Erreur lors de la récupération du profil. Réessaye dans quelques instants.')],
                flags: MessageFlags.Ephemeral,
            });
            return;
        }
        if (!userData) {
            const msg = target.id === interaction.user.id
                ? 'Vous n\'avez aucun profil enregistré. Utilisez `/config_profil` pour l\'enregistrer !'
                : `L'utilisateur **${target.username}** n'a aucun profil enregistré.`;
            await interaction.reply({ embeds: [Templates.error(msg)], flags: MessageFlags.Ephemeral });
            return;
        }
        const siteConfig = SITE_CONFIG[site];
        if (!siteConfig)
            return;
        const profileName = siteConfig.getUsername(userData);
        if (!profileName) {
            const msg = target.id === interaction.user.id
                ? `Vous n'avez pas lié votre compte **${siteConfig.label}**.`
                : `**${target.username}** n'a pas lié son compte **${siteConfig.label}**.`;
            await interaction.reply({ embeds: [Templates.error(msg)], flags: MessageFlags.Ephemeral });
            return;
        }
        const url = siteConfig.buildUrl(profileName);
        const embed = Templates.info(`${siteConfig.label} - ${target.username}`, [
            { name: 'Lien du profil', value: `[Lien vers la page ${siteConfig.label}](${url})` },
        ]);
        embed.setThumbnail(target.displayAvatarURL({ size: 512 }));
        await interaction.reply({ embeds: [embed] });
    },
};
export default command;
//# sourceMappingURL=profil.js.map