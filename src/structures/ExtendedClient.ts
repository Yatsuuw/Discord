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
      await new Promise(resolve => setTimeout(resolve, 50));
      process.exit(1);
    }
  }

  public async loadCommands() {
    const commandsPath = join(__dirname, '../commands');
    const categories = readdirSync(commandsPath);

    for (const category of categories) {
      const categoryPath = join(commandsPath, category);
      if (!statSync(categoryPath).isDirectory()) continue;

      const commandFiles = readdirSync(categoryPath).filter(f => (f.endsWith('.js') || f.endsWith('.ts')) && !f.endsWith('.d.ts'));

      for (const file of commandFiles) {
        const filePath = pathToFileURL(join(categoryPath, file)).href;
        const module = await import(filePath);
        const command: Command = module.default;

        if (!command || !command.data || !command.execute) {
          logger.warn(`⚠️ Fichier ignoré (export invalide) : ${file}`);
          continue;
        }

        this.commands.set(command.data.name, command);
      }
    }
    logger.info(`${this.commands.size} commandes chargées.`);
  }

  private async loadEvents() {
    const eventsPath = join(__dirname, '../events');
    const categories = readdirSync(eventsPath);

    for (const category of categories) {
      const categoryPath = join(eventsPath, category);
      if (!statSync(categoryPath).isDirectory()) continue;

      const eventFiles = readdirSync(categoryPath).filter(f => (f.endsWith('.js') || f.endsWith('.ts')) && !f.endsWith('.d.ts'));

      for (const file of eventFiles) {
        const filePath = pathToFileURL(join(categoryPath, file)).href;
        const event: Event<keyof ClientEvents> = (await import(filePath)).default;

        if (event.once) {
          this.once(event.name, (...args) => event.execute(this, ...args));
        } else {
          this.on(event.name, (...args) => event.execute(this, ...args));
        }
      }
    }

    logger.info('Système des événements chargé par catégories.');
  }
}
