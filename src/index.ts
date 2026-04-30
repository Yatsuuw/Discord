import { GatewayIntentBits } from 'discord.js';
import { ExtendedClient } from './structures/ExtendedClient.js';

const client = new ExtendedClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

(async () => {
  await client.start();
})();
