import { EmbedBuilder, Colors, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
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
    info: (title, fields, description) => {
        const embed = new EmbedBuilder()
            .setColor(Colors.Blurple)
            .setTitle(title)
            .setFooter({ text: 'Tsuyomi' })
            .setTimestamp();
        if (description)
            embed.setDescription(description);
        if (fields.length)
            embed.addFields(fields);
        return embed;
    },
    request: (title, description) => {
        const row = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId('confirm').setEmoji('✅').setLabel('Confirmer').setStyle(ButtonStyle.Success), new ButtonBuilder().setCustomId('cancel').setEmoji('❌').setLabel('Annuler').setStyle(ButtonStyle.Danger));
        const embed = new EmbedBuilder()
            .setColor(Colors.Blue)
            .setTitle(`❓ ${title}`)
            .setDescription(description)
            .setFooter({ text: 'Action requise' });
        return { embeds: [embed], components: [row] };
    },
};
//# sourceMappingURL=templates.js.map