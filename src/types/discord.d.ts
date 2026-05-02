import { Collection } from 'discord.js';
import type { Command } from './index.js';

declare module 'discord.js' {
  export interface Client {
    commands: Collection<string, Command>;
  }
}
