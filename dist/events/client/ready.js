import { ActivityType, Client, Events } from "discord.js";
import { logger } from "../../utils/logger.js";
const PRESENCE_REFRESH_MS = 4 * 60 * 1_000;
let presenceInterval = null;
const event = {
    name: Events.ClientReady,
    once: true,
    execute(_client, readyClient) {
        logger.info(`${readyClient.user.tag} est connecté.`);
        if (presenceInterval !== null) {
            clearInterval(presenceInterval);
            presenceInterval = null;
        }
        const setPresence = () => {
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
//# sourceMappingURL=ready.js.map