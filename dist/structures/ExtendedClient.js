import { Client, Collection } from 'discord.js';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { config } from '../config.js';
import { logger } from '../utils/logger.js';
import { db } from '../utils/database.js';
export class ExtendedClient extends Client {
    commands = new Collection();
    constructor(options) {
        super(options);
    }
    async start() {
        await this.loadCommands();
        await this.loadEvents();
        try {
            await this.login(config.token);
        }
        catch (error) {
            logger.error(`Une erreur est survenue lors du démarrage du robot :`, error);
            await db.$disconnect();
            process.exit(1);
        }
    }
    async loadModules(basePath) {
        const entries = readdirSync(basePath, { withFileTypes: true });
        const promises = entries.filter((e) => e.isDirectory()).flatMap((dir) => {
            const dirPath = join(basePath, dir.name);
            return readdirSync(dirPath).filter((f) => (f.endsWith('.ts') || f.endsWith('.js')) && !f.endsWith('.d.ts') && !f.endsWith('.d.js')).map(async (file) => {
                const url = pathToFileURL(join(dirPath, file)).href;
                const mod = (await import(url)).default;
                if (!mod)
                    logger.warn(`⚠️ Module ignoré (export default manquant) : ${file}`);
                return mod;
            });
        });
        const results = await Promise.all(promises);
        return results.filter((m) => m != null);
    }
    async loadCommands() {
        const commands = await this.loadModules(join(import.meta.dirname, '../commands'));
        for (const command of commands) {
            if (!command.data || !command.execute) {
                logger.warn(`⚠️ Commande ignorée (export invalide) : ${command.data?.name ?? 'inconnue'}`);
                continue;
            }
            this.commands.set(command.data.name, command);
        }
        logger.info(`${this.commands.size} commandes chargées.`);
    }
    async loadEvents() {
        const events = await this.loadModules(join(import.meta.dirname, '../events'));
        for (const event of events) {
            if (!event.name || !event.execute) {
                logger.warn(`⚠️ Événement ignoré (export invalide) : ${String(event.name ?? 'inconnu')}`);
                continue;
            }
            const register = (ev) => {
                const handler = (...args) => ev.execute(this, ...args);
                if (ev.once) {
                    this.once(ev.name, handler);
                }
                else {
                    this.on(ev.name, handler);
                }
            };
            register(event);
        }
        logger.info('Système des événements chargé.');
    }
}
//# sourceMappingURL=ExtendedClient.js.map