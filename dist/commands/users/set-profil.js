import { ChatInputCommandInteraction, MessageFlags, SlashCommandBuilder } from "discord.js";
import { DataManager } from "../../utils/dataManager.js";
import { Templates } from "../../utils/templates.js";
export const command = {
    data: new SlashCommandBuilder()
        .setName('set-profil')
        .setDescription('Enregistre ou modifie vos pseudos des différents sites')
        .addStringOption(option => option.setName('site')
        .setDescription('Le site sur lequel vous voulez enregistrer votre profil')
        .setRequired(true)
        .addChoices({ name: 'MyAnimeList', value: 'mal' }, { name: 'AniList', value: 'al' }, { name: 'MangaCollec', value: 'mc' }))
        .addStringOption(option => option.setName('utilisateur')
        .setDescription('Votre nom d\'utilisateur sur le site')
        .setRequired(false)),
    async execute(interaction) {
        const userId = interaction.user.id;
        const site = interaction.options.getString('site', true);
        const username = interaction.options.getString('utilisateur', true);
        try {
            const current = await DataManager.getUser(userId);
            let mal = current?.mal_username ?? undefined;
            let al = current?.al_username ?? undefined;
            let mc = current?.mangacollec ?? undefined;
            if (site === 'mal')
                mal = username;
            if (site === 'al')
                al = username;
            if (site === 'mc')
                mc = username;
            await DataManager.upsertUser(userId, mal, al, mc);
            const siteName = site === 'mal' ? 'MyAnimeList' : site === 'al' ? 'AniList' : 'Mangacollec';
            return interaction.reply({
                embeds: [Templates.success(`Votre pseudo **${siteName}** a été enregistré avec succès.`)],
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
//# sourceMappingURL=set-profil.js.map