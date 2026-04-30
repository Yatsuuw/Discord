import { ChatInputCommandInteraction, type ClientEvents, SlashCommandBuilder } from 'discord.js';
import { ExtendedClient } from '../structures/ExtendedClient.js';

export interface Command {
  data: SlashCommandBuilder;
  execute: (interaction: ChatInputCommandInteraction, client: ExtendedClient) => Promise<void> | void;
}

export interface Event<Key extends keyof ClientEvents> {
  name: Key;
  once?: boolean;
  execute: (client: ExtendedClient, ...args: ClientEvents[Key]) => Promise<void> | void;
}
