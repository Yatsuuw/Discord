import { appendFileSync, closeSync, existsSync, mkdirSync, openSync } from 'node:fs';
import { join } from 'node:path';

const TIMEZONE = 'Europe/Paris';
const LOGS_DIR = join(process.cwd(), 'logs');

const Colors = {
  Reset: "\x1b[0m",
  Red: "\x1b[31m",
  Green: "\x1b[32m",
  Yellow: "\x1b[33m",
  Blue: "\x1b[34m",
} as const;

type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'DEBUG';

let _cachedDay = '';
let _cachedPath = '';

function getDay(): string {
  return new Date().toLocaleDateString('fr-FR', {
    timeZone: TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).split('/').reverse().join('-');
}

function getTime(): string {
  return new Date().toLocaleTimeString('fr-FR', {
    timeZone: TIMEZONE,
    hour12: false,
  });
}

function getLogFilePath(): string {
  const day = getDay();

  if (day !== _cachedDay) {
    _cachedDay = day;
    _cachedPath = join(LOGS_DIR, `${day}.log`);

    try {
      mkdirSync(LOGS_DIR, { recursive: true });
      if (!existsSync(_cachedPath)) closeSync(openSync(_cachedPath, 'a'));
    } catch (error) {
      console.error('[LOGGER] Impossible de créer le fichier de logs.', error);
    }
  }

  return _cachedPath;
}

function writeToFile(level: LogLevel, message: string, error?: unknown): void {
  let logMessage = `[${getTime()}] [${level}] ${message}\n`;
  if (error) logMessage += `${error instanceof Error ? error.stack : JSON.stringify(error, null, 2)}\n`;

  try {
    appendFileSync(getLogFilePath(), logMessage, 'utf8');
  } catch (error) {
    console.error('[LOGGER] Échec de l\'écriture dans le fichier :', error);
  }
}

export const logger = {
  info: (message: string): void => {
    console.log(`${Colors.Green}[INFO]${Colors.Reset} [${getTime()}] ${message}`);
    writeToFile('INFO', message);
  },

  warn: (message: string): void => {
    console.warn(`${Colors.Yellow}[WARN]${Colors.Reset} [${getTime()}] ${message}`);
    writeToFile('WARN', message);
  },

  error: (message: string, error?: unknown): void => {
    console.error(`${Colors.Red}[ERROR]${Colors.Reset} [${getTime()}] ${message}`);
    if (error) console.error(error);
    writeToFile('ERROR', message, error);
  },

  debug: (message: string): void => {
    if (process.env.NODE_ENV === 'production') return;
    console.debug(`${Colors.Blue}[DEBUG]${Colors.Reset} [${getTime()}] ${message}`);
    writeToFile('DEBUG', message);
  },
};
