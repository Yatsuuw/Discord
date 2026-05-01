import { ChatInputCommandInteraction, MessageFlags, SlashCommandBuilder } from "discord.js";
import { DataManager } from "../../utils/dataManager.js";
import { Templates } from "../../utils/templates.js";
import { logger } from "../../utils/logger.js";
export const SITE_CONFIG = {
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
        .setName('config_profil')
        .setDescription('Enregistre ou modifie vos pseudos des différents sites')
        .addStringOption(option => option.setName('site')
        .setDescription('Le site sur lequel vous voulez enregistrer votre profil')
        .setRequired(true)
        .addChoices({ name: 'MyAnimeList', value: 'mal' }, { name: 'AniList', value: 'al' }, { name: 'MangaCollec', value: 'mc' }))
        .addStringOption(option => option.setName('nom')
        .setDescription('Votre nom d\'utilisateur sur le site')
        .setRequired(false)),
    async execute(interaction) {
        const userId = interaction.user.id;
        const site = interaction.options.getString('site', true);
        const username = interaction.options.getString('nom', false);
        try {
            const current = await DataManager.getUser(userId);
            const mal = site === 'mal' ? username : (current?.mal_username ?? null);
            const al = site === 'al' ? username : (current?.al_username ?? null);
            const mc = site === 'mc' ? username : (current?.mangacollec ?? null);
            await DataManager.upsertUser(userId, { mal, al, mc });
            const siteName = SITE_CONFIG[site]?.label ?? site;
            const action = username === null ? 'supprimé' : 'enregistré';
            await interaction.reply({
                embeds: [Templates.success(`Votre pseudo **${siteName}** a été ${action} avec succès.`)],
                flags: MessageFlags.Ephemeral
            });
            return;
        }
        catch (error) {
            logger.error(`Une erreur est survenue lors de la mise à jour du profil ${userId} :`, error);
            await interaction.reply({
                embeds: [Templates.error(`Une erreur est survenue lors de la mise à jour de votre profil.`)],
                flags: MessageFlags.Ephemeral
            });
            return;
        }
    }
};
export default command;
//# sourceMappingURL=config_profil.js.map