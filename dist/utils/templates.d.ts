import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from 'discord.js';
export declare const Templates: {
    success: (content: string) => EmbedBuilder;
    request: (title: string, description: string) => {
        embeds: EmbedBuilder[];
        components: ActionRowBuilder<ButtonBuilder>[];
    };
    info: (title: string, fields: {
        name: string;
        value: string;
    }[]) => EmbedBuilder;
    error: (content: string) => EmbedBuilder;
};
//# sourceMappingURL=templates.d.ts.map