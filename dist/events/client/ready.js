import { ActivityType, Events } from "discord.js";
import { logger } from "../../utils/logger.js";
const PRESENCE_REFRESH_MS = 4 * 60 * 100;
function setPresence(client) {
    client.user?.setPresence({
        activities: [{
                name: 'Regarde Laid Back Camp saison 4',
                type: ActivityType.Watching,
            }],
        status: 'online',
    });
}
const event = {
    name: Events.ClientReady,
    once: true,
    execute(client, c) {
        logger.info(`${c.user.tag} est connecté.`);
        setPresence(client);
        setInterval(() => setPresence(client), PRESENCE_REFRESH_MS);
    },
};
export default event;
//# sourceMappingURL=ready.js.map