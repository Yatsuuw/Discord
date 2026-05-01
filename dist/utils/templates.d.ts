import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from 'discord.js';
export declare const Templates: {
    success: (content: string) => EmbedBuilder;
    error: (content: string) => EmbedBuilder;
    warning: (description: string) => EmbedBuilder;
    info: (title: string, fields: {
        name: string;
        value: string;
        inline?: boolean;
    }[]) => EmbedBuilder;
    request: (title: string, description: string) => {
        embeds: EmbedBuilder[];
        components: ActionRowBuilder<ButtonBuilder>[];
    };
};
//# sourceMappingURL=templates.d.ts.map