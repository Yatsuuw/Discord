import { ActivityType, Events } from "discord.js";
import type { Event } from "../../types/index.js";
import { logger } from "../../utils/logger.js";

const PRESENCE_REFRESH_MS = 4 * 60 * 100;

function setPresence(client: import('discord.js').Client): void {
  client.user?.setPresence({
    activities: [{
      name: 'Regarde Laid Back Camp saison 3',
      type: ActivityType.Watching,
    }],
    status: 'online',
  });
}

const event: Event<Events.ClientReady> = {
  name: Events.ClientReady,
  once: true,
  execute(client, c): void {
    logger.info(`${c.user.tag} est connecté.`);

    setPresence(client);
    setInterval(() => setPresence(client), PRESENCE_REFRESH_MS);
  },
};

export default event;