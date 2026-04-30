import { EmbedBuilder, Colors, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
export const Templates = {
    success: (content) => {
        return new EmbedBuilder()
            .setColor(Colors.Green)
            .setTitle('✅ Opération réussie')
            .setDescription(content)
            .setTimestamp();
    },
    request: (title, description) => {
        const embed = new EmbedBuilder()
            .setColor(Colors.Blue)
            .setTitle(`❓ ${title}`)
            .setDescription(description)
            .setFooter({ text: 'Action requise' });
        const buttons = new ActionRowBuilder().addComponents(new ButtonBuilder()
            .setCustomId('confirm')
            .setLabel('Confirmer')
            .setStyle(ButtonStyle.Success), new ButtonBuilder()
            .setCustomId('cancel')
            .setLabel('Annuler')
            .setStyle(ButtonStyle.Danger));
        return { embeds: [embed], components: [buttons] };
    },
    info: (title, fields) => {
        return new EmbedBuilder()
            .setColor(Colors.Blurple)
            .setTitle(title)
            .addFields(fields)
            .setTimestamp();
    },
    error: (content) => {
        return new EmbedBuilder()
            .setColor(Colors.Red)
            .setTitle('❌ Erreur')
            .setDescription(content)
            .setTimestamp();
    },
};
//# sourceMappingURL=templates.js.map