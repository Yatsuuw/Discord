import { appendFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const logsDir = join(process.cwd(), 'logs');
function getLogFilePath() {
    const day = timestamp().day;
    return join(logsDir, `${day}.log`);
}
function ensureLogFile() {
    try {
        mkdirSync(logsDir, { recursive: true });
        const filePath = getLogFilePath();
        if (!existsSync(filePath)) {
            writeFileSync(filePath, '', 'utf8');
        }
    }
    catch (error) {
        console.error('[LOGGER] Impossible de créer le fichier de logs.', error);
    }
}
ensureLogFile();
const Colors = {
    Reset: "\x1b[0m",
    Red: "\x1b[31m",
    Green: "\x1b[32m",
    Yellow: "\x1b[33m",
    Blue: "\x1b[34m",
};
function timestamp() {
    const d = new Date();
    const day = d.toLocaleDateString('fr-FR', {
        timeZone: 'Europe/Paris',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).split('/').reverse().join('-');
    const time = d.toLocaleTimeString('fr-FR', {
        timeZone: 'Europe/Paris',
        hour12: false,
    });
    return { day, time };
}
function writeToFile(level, message, error) {
    const { time } = timestamp();
    let logMessage = `[${time}] [${level}] ${message}\n`;
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
        const { time } = timestamp();
        console.log(`${Colors.Green}[INFO]${Colors.Reset} [${time}] ${message}`);
        writeToFile('INFO', message);
    },
    warn: (message) => {
        const { time } = timestamp();
        console.warn(`${Colors.Yellow}[WARN]${Colors.Reset} [${time}] ${message}`);
        writeToFile('WARN', message);
    },
    error: (message, error) => {
        const { time } = timestamp();
        console.error(`${Colors.Red}[ERROR]${Colors.Reset} [${time}] ${message}`);
        if (error)
            console.error(error);
        writeToFile('ERROR', message, error);
    },
    debug: (message) => {
        if (process.env.NODE_ENV === 'production')
            return;
        const { time } = timestamp();
        console.debug(`${Colors.Blue}[DEBUG]${Colors.Reset} [${time}] ${message}`);
        writeToFile('DEBUG', message);
    },
};
//# sourceMappingURL=logger.js.map