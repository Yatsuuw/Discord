import { Events } from "discord.js";
const event = {
    name: Events.ClientReady,
    once: true,
    execute(_client, c) {
        console.log(`${c.user.tag} est connecté.`);
    }
};
export default event;
//# sourceMappingURL=ready.js.map