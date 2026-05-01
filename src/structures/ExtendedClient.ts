import { Client, type ClientEvents, type ClientOptions, Collection } from 'discord.js';
import type { Command, Event } from '../types/index.js'
import { readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { config } from '../config.js';
import { logger } from '../utils/logger.js';
import { db } from '../utils/database.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export class ExtendedClient extends Client {
  public commands: Collection<string, Command> = new Collection();

  constructor(options: ClientOptions) {
    super(options);
  }

  async start() {
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

  private async loadModules<T>(basePath: string): Promise<T[]> {
    const modules: T[] = [];
    const categories = readdirSync(basePath);

    for (const category of categories) {
      const categoryPath = join(basePath, category);
      if (!statSync(categoryPath).isDirectory()) continue;

      const files = readdirSync(categoryPath).filter(f => (f.endsWith('.js') || f.endsWith('.ts')) && !f.endsWith('.d.ts'));

      for (const file of files) {
        const filePath = pathToFileURL(join(categoryPath, file)).href;
        const mod = (await import(filePath)).default as T;
        if (mod) modules.push(mod);
      }
    }
    return modules;
  }

  public async loadCommands() {
    const commands = await this.loadModules<Command>(join(__dirname, '../commands'));

    for (const command of commands) {
      if (!command.data || !command.execute) {
        logger.warn(`⚠️ Commande ignorée (export invalide)`);
        continue;
      }
      this.commands.set(command.data.name, command);
    }

    logger.info(`${this.commands.size} commandes chargées.`);
  }

  private async loadEvents() {
    const events = await this.loadModules<Event<keyof ClientEvents>>(join(__dirname, '../events'));

    for (const event of events) {
      if (!event.name || !event.execute) {
        logger.warn(`⚠️ Événement ignoré (export invalide)`);
        continue;
      }

      if (event.once) {
        this.once(event.name, (...args) => event.execute(this, ...args));
      } else {
        this.on(event.name, (...args) => event.execute(this, ...args));
      }
    }

    logger.info('Système des événements chargé.');
  }
}
