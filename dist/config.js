function requireEnv(key) {
    const value = process.env[key];
    if (!value)
        throw new Error(`Variable d'environnement manquante : ${key}`);
    return value;
}
export const config = {
    token: requireEnv('DISCORD_TOKEN'),
    clientId: requireEnv('CLIENT_ID'),
    guildId: requireEnv('GUILD_ID'),
};
//# sourceMappingURL=config.js.map