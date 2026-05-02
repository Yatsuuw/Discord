import { EmbedBuilder, ActionRowBuilder, ButtonBuilder } from 'discord.js';
type EmbedField = {
    name: string;
    value: string;
    inline?: boolean;
};
export declare const Templates: {
    success: (content: string, footerText?: string, iconURL?: string) => EmbedBuilder;
    error: (content: string, footerText?: string, iconURL?: string) => EmbedBuilder;
    warning: (description: string, footerText?: string, iconURL?: string) => EmbedBuilder;
    info: (title: string, fields: EmbedField[], description?: string, footerText?: string, iconURL?: string) => EmbedBuilder;
    request: (title: string, description: string, footerText?: string, iconURL?: string) => {
        embeds: EmbedBuilder[];
        components: ActionRowBuilder<ButtonBuilder>[];
    };
};
export {};
//# sourceMappingURL=templates.d.ts.map