import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from 'discord.js';
type EmbedField = {
    name: string;
    value: string;
    inline?: boolean;
};
export declare const Templates: {
    success: (content: string) => EmbedBuilder;
    error: (content: string) => EmbedBuilder;
    warning: (description: string) => EmbedBuilder;
    info: (title: string, fields: EmbedField[], description?: string) => EmbedBuilder;
    request: (title: string, description: string) => {
        embeds: EmbedBuilder[];
        components: ActionRowBuilder<ButtonBuilder>[];
    };
};
export {};
//# sourceMappingURL=templates.d.ts.map