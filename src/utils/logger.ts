import { appendFile, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const logsDir = join(__dirname, '../../logs');
const now = new Date().toLocaleTimeString();
const date = new Date().toISOString().split('T')[0]!;

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

function writeToFile(level: string, message: string, error?: unknown): void {
  let logMessage = `[${now}] [${level}] ${message}\n`;
  if (error) logMessage += `${error instanceof Error ? error.stack : JSON.stringify(error, null, 2)}\n`;

  appendFile(join(logsDir, `${date}.log`), logMessage, 'utf8', (err) => {
    if (err) console.error('Échec d\'écriture du fichier :', err);
  });
}

export const logger = {
  info: (message: string) => {
    console.log(`${Colors.Green}[INFO]${Colors.Reset} [${now}] ${message}`);
    writeToFile('INFO', message);
  },

  warn: (message: string) => {
    console.warn(`${Colors.Yellow}[WARN]${Colors.Reset} [${now}] ${message}`);
    writeToFile('WARN', message);
  },

  error: (message: string, error?: unknown) => {
    console.error(`${Colors.Red}[ERROR]${Colors.Reset} [${now}] ${message}`);
    if (error) console.error(error);
    writeToFile('ERROR', message, error);
  },

  debug: (message: string) => {
    if (process.env.NODE_ENV !== 'production') {
      console.debug(`${Colors.Blue}[DEBUG]${Colors.Reset} [${now}] ${message}`);
      writeToFile('DEBUG', message);
    }
  },
};
