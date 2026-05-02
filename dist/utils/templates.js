import { EmbedBuilder, Colors, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
function footer(text = '', iconURL) {
    const t = text ? `Tsuyomi • ${text}` : 'Tsuyomi';
    return iconURL ? { text: t, iconURL } : { text: t };
}
export const Templates = {
    success: (content, footerText, iconURL) => new EmbedBuilder()
        .setColor(Colors.Green)
        .setTitle('✅ Opération réussie')
        .setDescription(content)
        .setFooter(footer(footerText, iconURL))
        .setTimestamp(),
    error: (content, footerText, iconURL) => new EmbedBuilder()
        .setColor(Colors.Red)
        .setTitle('❌ Erreur')
        .setDescription(content)
        .setFooter(footer(footerText, iconURL))
        .setTimestamp(),
    warning: (description, footerText, iconURL) => new EmbedBuilder()
        .setColor(Colors.Yellow)
        .setTitle('⚠️ Avertissement')
        .setDescription(description)
        .setFooter(footer(footerText, iconURL))
        .setTimestamp(),
    info: (title, fields, description, footerText, iconURL) => {
        const embed = new EmbedBuilder()
            .setColor(Colors.Blurple)
            .setTitle(title)
            .setFooter(footer(footerText, iconURL))
            .setTimestamp();
        if (description)
            embed.setDescription(description);
        if (fields.length)
            embed.addFields(fields);
        return embed;
    },
    request: (title, description, footerText, iconURL) => {
        const row = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId('confirm').setEmoji('✅').setLabel('Confirmer').setStyle(ButtonStyle.Success), new ButtonBuilder().setCustomId('cancel').setEmoji('❌').setLabel('Annuler').setStyle(ButtonStyle.Danger));
        const embed = new EmbedBuilder()
            .setColor(Colors.Blue)
            .setTitle(`❓ ${title}`)
            .setDescription(description)
            .setFooter(footer(footerText, iconURL));
        return { embeds: [embed], components: [row] };
    },
};
//# sourceMappingURL=templates.js.map