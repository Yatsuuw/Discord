import { Events, type Interaction } from "discord.js";
import type { Event } from "../../types/index.js";

const event: Event<Events.InteractionCreate> = {
  name: Events.InteractionCreate,
  async execute(client, interaction: Interaction) {
    if (!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) {
      await interaction.reply({
        content: 'Cette commande n\'existe pas.',
        ephemeral: true
      });
      return;
    }

    try {
      await command.execute(interaction, client);
    } catch (error) {
      console.error(error);
      const errorMessage = { content: 'Une erreur est survenue !', ephemeral: true };

      if (interaction.replied || interaction.deferred) {
        await interaction.followUp(errorMessage);
      } else {
        await interaction.reply(errorMessage);
      }
    }
  }
};

export default event;
