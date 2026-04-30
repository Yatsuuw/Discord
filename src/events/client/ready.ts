import { Events } from "discord.js";
import type { Event } from "../../types/index.js";
import { logger } from "../../utils/logger.js";

const event: Event<Events.ClientReady> = {
  name: Events.ClientReady,
  once: true,
  execute(_client, c) {
    logger.info(`${c.user.tag} est connecté.`);
  }
};

export default event;