import { EmbedBuilder, Colors, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

type EmbedField = { name: string; value: string; inline?: boolean };

export const Templates = {
  success: (content: string) =>
    new EmbedBuilder()
      .setColor(Colors.Green)
      .setTitle('✅ Opération réussie')
      .setDescription(content)
      .setFooter({ text: "Tsuyomi" })
      .setTimestamp(),

  error: (content: string) =>
    new EmbedBuilder()
      .setColor(Colors.Red)
      .setTitle('❌ Erreur')
      .setDescription(content)
      .setFooter({ text: "Tsuyomi" })
      .setTimestamp(),

  warning: (description: string) =>
    new EmbedBuilder()
      .setColor(Colors.Yellow)
      .setTitle('⚠️ Avertissement')
      .setDescription(description)
      .setFooter({ text: "Tsuyomi" })
      .setTimestamp(),

  info: (title: string, fields: EmbedField[], description?: string) => {
    const embed = new EmbedBuilder()
      .setColor(Colors.Blurple)
      .setTitle(title)
      .setFooter({ text: 'Tsuyomi' })
      .setTimestamp();

    if (description) embed.setDescription(description);
    if (fields.length) embed.addFields(fields);

    return embed;
  },

  request: (title: string, description: string) => {
    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder().setCustomId('confirm').setEmoji('✅').setLabel('Confirmer').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId('cancel').setEmoji('❌').setLabel('Annuler').setStyle(ButtonStyle.Danger),
    );

    const embed = new EmbedBuilder()
      .setColor(Colors.Blue)
      .setTitle(`❓ ${title}`)
      .setDescription(description)
      .setFooter({ text: 'Action requise' });

    return { embeds: [embed], components: [row] };
  },
};
