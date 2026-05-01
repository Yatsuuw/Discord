import { ChatInputCommandInteraction, MessageFlags, PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import { DataManager } from "../../utils/dataManager.js";
import { Templates } from "../../utils/templates.js";
import { db } from "../../utils/database.js";

export const command = {
  data: new SlashCommandBuilder()
    .setName('init')
    .setDescription('Initialise le serveur dans la base de données')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction: ChatInputCommandInteraction) {
    if (!interaction.guild) return;

    const guildId = interaction.guild.id;

    try {
      const existingServer = await db.servers.findUnique({
        where: {
          id_owner: {
            id: guildId,
            owner: interaction.guild.ownerId
          }
        }
      });

      if (existingServer) {
        return interaction.reply({
          embeds: [Templates.info('Information `/init` - Administration', [ { name: 'Retour de la base de données :', value: `Ce serveur est déjà enregistré dans la base de données.` } ])],
          flags: MessageFlags.Ephemeral
        });
      }

      await DataManager.registerServer(guildId, interaction.guild.ownerId);

      return interaction.reply({
        embeds: [Templates.success(`Le serveur **${interaction.guild.name}** a été initialisé dans la base de données avec succès.`)]
      });
    } catch (error) {
      return interaction.reply({
        embeds: [Templates.error(`Erreur lors de l'initialisation du serveur : ${error}`)],
        flags: MessageFlags.Ephemeral
      });
    }
  }
};

export default command;
