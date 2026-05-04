import { appendFileSync, closeSync, existsSync, mkdirSync, openSync } from 'node:fs';
import { join } from 'node:path';
const TIMEZONE = 'Europe/Paris';
const logsDir = join(process.cwd(), 'logs');
const Colors = {
    Reset: "\x1b[0m",
    Red: "\x1b[31m",
    Green: "\x1b[32m",
    Yellow: "\x1b[33m",
    Blue: "\x1b[34m",
};
function getDay() {
    return new Date().toLocaleDateString('fr-FR', {
        timeZone: TIMEZONE,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).split('/').reverse().join('-');
}
function getTime() {
    return new Date().toLocaleTimeString('fr-FR', {
        timeZone: TIMEZONE,
        hour12: false,
    });
}
function getLogFilePath() {
    return join(logsDir, `${getDay()}.log`);
}
function ensureLogFile() {
    try {
        mkdirSync(logsDir, { recursive: true });
        const path = getLogFilePath();
        if (!existsSync(path))
            closeSync(openSync(path, 'a'));
    }
    catch (error) {
        console.error('[LOGGER] Impossible de créer le fichier de logs.', error);
    }
}
ensureLogFile();
function writeToFile(level, message, error) {
    let logMessage = `[${getTime()}] [${level}] ${message}\n`;
    if (error)
        logMessage += `${error instanceof Error ? error.stack : JSON.stringify(error, null, 2)}\n`;
    try {
        appendFileSync(getLogFilePath(), logMessage, 'utf8');
    }
    catch (error) {
        console.error('[LOGGER] Échec de l\'écriture dans le fichier :', error);
    }
}
export const logger = {
    info: (message) => {
        console.log(`${Colors.Green}[INFO]${Colors.Reset} [${getTime()}] ${message}`);
        writeToFile('INFO', message);
    },
    warn: (message) => {
        console.warn(`${Colors.Yellow}[WARN]${Colors.Reset} [${getTime()}] ${message}`);
        writeToFile('WARN', message);
    },
    error: (message, error) => {
        console.error(`${Colors.Red}[ERROR]${Colors.Reset} [${getTime()}] ${message}`);
        if (error)
            console.error(error);
        writeToFile('ERROR', message, error);
    },
    debug: (message) => {
        if (process.env.NODE_ENV === 'production')
            return;
        console.debug(`${Colors.Blue}[DEBUG]${Colors.Reset} [${getTime()}] ${message}`);
        writeToFile('DEBUG', message);
    },
};
//# sourceMappingURL=logger.js.map