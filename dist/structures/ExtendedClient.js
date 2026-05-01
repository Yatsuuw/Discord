import { Client, Collection } from 'discord.js';
import { readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { config } from '../config.js';
import { logger } from '../utils/logger.js';
const __dirname = dirname(fileURLToPath(import.meta.url));
export class ExtendedClient extends Client {
    commands = new Collection();
    constructor(options) {
        super(options);
    }
    async start() {
        await this.loadCommands();
        await this.loadEvents();
        this.login(config.token);
    }
    async loadCommands() {
        const commandsPath = join(__dirname, '../commands');
        const categories = readdirSync(commandsPath);
        for (const category of categories) {
            const categoryPath = join(commandsPath, category);
            if (!statSync(categoryPath).isDirectory())
                continue;
            const commandFiles = readdirSync(categoryPath).filter(f => f.endsWith('.js') || f.endsWith('.ts') && !f.endsWith('.d.ts'));
            for (const file of commandFiles) {
                const filePath = pathToFileURL(join(categoryPath, file)).href;
                const module = await import(filePath);
                const command = module.default;
                if (!command || !command.data || !command.execute) {
                    logger.warn(`⚠️ Fichier ignoré (export invalide) : ${file}`);
                    continue;
                }
                this.commands.set(command.data.name, command);
            }
        }
        logger.info(`${this.commands.size} commandes chargées.`);
    }
    async loadEvents() {
        const eventsPath = join(__dirname, '../events');
        const categories = readdirSync(eventsPath);
        for (const category of categories) {
            const categoryPath = join(eventsPath, category);
            if (!statSync(categoryPath).isDirectory())
                continue;
            const eventFiles = readdirSync(categoryPath).filter(f => f.endsWith('.js') || f.endsWith('.ts') && !f.endsWith('.d.ts'));
            for (const file of eventFiles) {
                const filePath = pathToFileURL(join(categoryPath, file)).href;
                const event = (await import(filePath)).default;
                if (event.once) {
                    this.once(event.name, (...args) => event.execute(this, ...args));
                }
                else {
                    this.on(event.name, (...args) => event.execute(this, ...args));
                }
            }
        }
        logger.info('Système des événements chargé par catégories.');
    }
}
//# sourceMappingURL=ExtendedClient.js.map