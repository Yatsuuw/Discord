const RE_SNOWFLAKE = /^\d{17,19}$/;
const RE_TOKEN = /^[A-Za-z0-9_.-]{50,}$/;

function requireEnv(key: string, validate?: RegExp): string {
  const value = process.env[key];
  if (!value) throw new Error(`Variable d'environnement manquante : ${key}`);
  if (validate && !validate.test(value)) throw new Error(`Variable d'environnement invalide : ${key}`);
  return value;
}

export const config = {
  token: requireEnv('DISCORD_TOKEN', RE_TOKEN),
  clientId: requireEnv('CLIENT_ID', RE_SNOWFLAKE),
  guildId: requireEnv('GUILD_ID', RE_SNOWFLAKE),
} as const;
