import { ApplicationIntegrationType, InteractionContextType, MessageFlags, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import type { Command } from "../../types/index.js";
import { Templates } from "../../utils/templates.js";
import { assertGuildInitialized } from "../../utils/guildGuard.js";

const command: Command = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Répond avec Pong !')
    .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages)
    .setIntegrationTypes(ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall)
    .setContexts(InteractionContextType.BotDM, InteractionContextType.Guild, InteractionContextType.PrivateChannel),
  async execute(interaction) {
    const latency = Math.round(interaction.client.ws.ping);
    const iconURL = interaction.client.user.displayAvatarURL({ size: 32 });

    if (!await assertGuildInitialized(interaction, iconURL)) return;

    await interaction.reply({
      embeds: [Templates.success(`Pong ! 🏓\nLatence : **${latency}ms**`, undefined, iconURL )],
      flags: MessageFlags.Ephemeral,
    });
  }
};

export default command;