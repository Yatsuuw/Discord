import { Events } from "discord.js";
import type { Event } from "../../types/index.js";

const event: Event<Events.ClientReady> = {
  name: Events.ClientReady,
  once: true,
  execute(_client, c) {
    console.log(`${c.user.tag} est connecté.`);
  }
};

export default event;