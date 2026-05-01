import { Client, type ClientOptions, Collection } from 'discord.js';
import type { Command } from '../types/index.js';
export declare class ExtendedClient extends Client {
    commands: Collection<string, Command>;
    constructor(options: ClientOptions);
    start(): Promise<void>;
    private loadModules;
    loadCommands(): Promise<void>;
    private loadEvents;
}
//# sourceMappingURL=ExtendedClient.d.ts.map