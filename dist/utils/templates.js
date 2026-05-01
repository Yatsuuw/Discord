import { EmbedBuilder, Colors, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
const REQUEST_ROW = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId('confirm').setEmoji('✅').setLabel('Confirmer').setStyle(ButtonStyle.Success), new ButtonBuilder().setCustomId('cancel').setEmoji('❌').setLabel('Annuler').setStyle(ButtonStyle.Danger));
export const Templates = {
    success: (content) => new EmbedBuilder()
        .setColor(Colors.Green)
        .setTitle('✅ Opération réussie')
        .setDescription(content)
        .setFooter({ text: "Tsuyomi" })
        .setTimestamp(),
    error: (content) => new EmbedBuilder()
        .setColor(Colors.Red)
        .setTitle('❌ Erreur')
        .setDescription(content)
        .setFooter({ text: "Tsuyomi" })
        .setTimestamp(),
    warning: (description) => new EmbedBuilder()
        .setColor(Colors.Yellow)
        .setTitle('⚠️ Avertissement')
        .setDescription(description)
        .setFooter({ text: "Tsuyomi" })
        .setTimestamp(),
    info: (title, fields) => new EmbedBuilder()
        .setColor(Colors.Blurple)
        .setTitle(title)
        .addFields(fields)
        .setFooter({ text: 'Tsuyomi' })
        .setTimestamp(),
    request: (title, description) => {
        const embed = new EmbedBuilder()
            .setColor(Colors.Blue)
            .setTitle(`❓ ${title}`)
            .setDescription(description)
            .setFooter({ text: 'Action requise' });
        return { embeds: [embed], components: [REQUEST_ROW] };
    },
};
//# sourceMappingURL=templates.js.map