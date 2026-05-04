import { ActivityType, Client, Events } from "discord.js";
import type { Event } from "../../types/index.js";
import { logger } from "../../utils/logger.js";

const PRESENCE_REFRESH_MS = 4 * 60 * 1_000;
let presenceInterval: ReturnType<typeof setInterval> | null = null;

const event: Event<Events.ClientReady> = {
  name: Events.ClientReady,
  once: true,
  execute(_client, readyClient: Client<true>): void {
    logger.info(`${readyClient.user.tag} est connecté.`);

    if (presenceInterval !== null) {
      clearInterval(presenceInterval);
      presenceInterval = null;
    }

    const setPresence = (): void => {
      readyClient.user.setPresence({
        activities: [{ name: 'Regarde Laid Back Camp saison 3', type: ActivityType.Watching }],
        status: 'online',
      });
    };

    setPresence();
    presenceInterval = setInterval(setPresence, PRESENCE_REFRESH_MS);
  },
};

export default event;
