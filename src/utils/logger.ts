import { appendFile, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const logsDir = join(__dirname, '../../logs');

const Colors = {
  Reset: "\x1b[0m",
  Red: "\x1b[31m",
  Green: "\x1b[32m",
  Yellow: "\x1b[33m",
  Blue: "\x1b[34m",
};

if (!existsSync(logsDir)) {
  mkdirSync(logsDir, { recursive: true });
}

function timestamp() {
  const now = new Date();
  return {
    time: now.toLocaleTimeString(),
    date: now.toISOString().split('T')[0]!,
  };
}

function writeToFile(level: string, message: string, error?: unknown, time?: string, date?: string): void {
  let ts = time, d = date;
  if (!ts || !d) { const t = timestamp(); ts ??= t.time; d ??= t.date }

  let logMessage = `[${ts}] [${level}] ${message}\n`;
  if (error) logMessage += `${error instanceof Error ? error.stack : JSON.stringify(error, null, 2)}\n`;

  appendFile(join(logsDir, `${d}.log`), logMessage, 'utf8', (err) => {
    if (err) console.error('[LOGGER] Échec d\'écriture du fichier :', err);
  });
}

export const logger = {
  info: (message: string) => {
    const { time, date } = timestamp();
    console.log(`${Colors.Green}[INFO]${Colors.Reset} [${time}] ${message}`);
    writeToFile('INFO', message, undefined, time, date);
  },

  warn: (message: string) => {
    const { time, date } = timestamp();
    console.warn(`${Colors.Yellow}[WARN]${Colors.Reset} [${time}] ${message}`);
    writeToFile('WARN', message, undefined, time, date);
  },

  error: (message: string, error?: unknown) => {
    const { time, date } = timestamp();
    console.error(`${Colors.Red}[ERROR]${Colors.Reset} [${time}] ${message}`);
    if (error) console.error(error);
    writeToFile('ERROR', message, error, time, date);
  },

  debug: (message: string) => {
    if (process.env.NODE_ENV === 'production') return;
    const { time, date } = timestamp();
    console.debug(`${Colors.Blue}[DEBUG]${Colors.Reset} [${time}] ${message}`);
    writeToFile('DEBUG', message, undefined, time, date);
  },
};
