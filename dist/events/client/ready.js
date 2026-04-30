import { Events } from "discord.js";
import { logger } from "../../utils/logger.js";
const event = {
    name: Events.ClientReady,
    once: true,
    execute(_client, c) {
        logger.info(`${c.user.tag} est connecté.`);
    }
};
export default event;
//# sourceMappingURL=ready.js.map