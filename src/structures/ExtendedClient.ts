import { Client, type ClientEvents, type ClientOptions, Collection } from 'discord.js';
import type { Command, Event } from '../types/index.js';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { config } from '../config.js';
import { logger } from '../utils/logger.js';
import { db } from '../utils/database.js';

export class ExtendedClient extends Client {
  public readonly commands: Collection<string, Command> = new Collection();

  constructor(options: ClientOptions) {
    super(options);
  }

  async start(): Promise<void> {
    await this.loadCommands();
    await this.loadEvents();

    try {
      await this.login(config.token);
    } catch (error) {
      logger.error(`Une erreur est survenue lors du démarrage du robot :`, error);

      await db.$disconnect();
      process.exit(1);
    }
  }

  private async loadModules<T extends object>(basePath: string): Promise<T[]> {
    const entries = readdirSync(basePath, { withFileTypes: true });

    const promises = entries.filter((e) => e.isDirectory()).flatMap((dir) => {
      const dirPath = join(basePath, dir.name);

      return readdirSync(dirPath).filter((f) => (f.endsWith('.ts') || f.endsWith('.js')) && !f.endsWith('.d.ts') && !f.endsWith('.d.js')).map(async (file): Promise<T | undefined> => {
        const url = pathToFileURL(join(dirPath, file)).href;
        const mod = ((await import(url)).default as T | undefined) as T | undefined;
        if (!mod) logger.warn(`⚠️ Module ignoré (export default manquant) : ${file}`);
        return mod;
      });
    });
    const results = await Promise.all(promises);

    return results.filter((m): m is NonNullable<typeof m> => m != null) as T[];
  }

  public async loadCommands(): Promise<void> {
    const commands = await this.loadModules<Command>(join(import.meta.dirname, '../commands'));

    for (const command of commands) {
      if (!command.data || !command.execute) {
        logger.warn(`⚠️ Commande ignorée (export invalide) : ${command.data?.name ?? 'inconnue'}`);
        continue;
      }
      this.commands.set(command.data.name, command);
    }

    logger.info(`${this.commands.size} commandes chargées.`);
  }

  private async loadEvents(): Promise<void> {
    const events = await this.loadModules<Event<keyof ClientEvents>>(join(import.meta.dirname, '../events'));

    for (const event of events) {
      if (!event.name || !event.execute) {
        logger.warn(`⚠️ Événement ignoré (export invalide) : ${String(event.name ?? 'inconnu')}`);
        continue;
      }

      const register = <K extends keyof ClientEvents>(ev: Event<K>): void => {
        const handler = (...args: ClientEvents[K]) => ev.execute(this, ...args);
        if (ev.once) {
          this.once(ev.name, handler);
        } else {
          this.on(ev.name, handler);
        }
      };

      register(event);
    }

    logger.info('Système des événements chargé.');
  }
}
