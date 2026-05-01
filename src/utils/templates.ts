import { EmbedBuilder, Colors, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

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

  info: (title: string, fields: { name: string, value: string, inline?: boolean }[]) =>
    new EmbedBuilder()
      .setColor(Colors.Blurple)
      .setTitle(title)
      .addFields(fields)
      .setTimestamp(),

  request: (title: string, description: string) => {
    const embed = new EmbedBuilder()
      .setColor(Colors.Blue)
      .setTitle(`❓ ${title}`)
      .setDescription(description)
      .setFooter({ text: 'Action requise' });

    const buttons = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId('confirm')
        .setLabel('Confirmer')
        .setStyle(ButtonStyle.Success),
      new ButtonBuilder()
        .setCustomId('cancel')
        .setLabel('Annuler')
        .setStyle(ButtonStyle.Danger)
    );

    return { embeds: [embed], components: [buttons] };
  },
};
