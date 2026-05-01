import { ChatInputCommandInteraction, MessageFlags, SlashCommandBuilder } from "discord.js";
import { DataManager } from "../../utils/dataManager.js";
import { Templates } from "../../utils/templates.js";
export const command = {
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
            let mal = current?.mal_username ?? undefined;
            let al = current?.al_username ?? undefined;
            let mc = current?.mangacollec ?? undefined;
            const newUsername = username ?? undefined;
            if (site === 'mal')
                mal = newUsername;
            if (site === 'al')
                al = newUsername;
            if (site === 'mc')
                mc = newUsername;
            await DataManager.upsertUser(userId, mal, al, mc);
            const siteName = site === 'mal' ? 'MyAnimeList' : site === 'al' ? 'AniList' : 'MangaCollec';
            const action = username === null ? 'supprimé' : 'enregistré';
            return interaction.reply({
                embeds: [Templates.success(`Votre pseudo **${siteName}** a été ${action} avec succès.`)],
                flags: MessageFlags.Ephemeral
            });
        }
        catch (error) {
            return interaction.reply({
                embeds: [Templates.error(`Une erreur est survenue lors de la mise à jour de votre profil : ${error}`)],
                flags: MessageFlags.Ephemeral
            });
        }
    }
};
export default command;
//# sourceMappingURL=config_profil.js.map