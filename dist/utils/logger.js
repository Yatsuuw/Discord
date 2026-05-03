import { appendFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const logsDir = join(__dirname, '../../logs');
try {
    mkdirSync(logsDir, { recursive: true });
}
catch (error) {
    console.error('[LOGGER] Impossible de créer le dossier de logs.', error);
}
const Colors = {
    Reset: "\x1b[0m",
    Red: "\x1b[31m",
    Green: "\x1b[32m",
    Yellow: "\x1b[33m",
    Blue: "\x1b[34m",
};
function timestamp() {
    const d = new Date();
    const day = d.toISOString().slice(0, 10);
    const time = d.toLocaleTimeString('fr-FR', {
        timeZone: 'Europe/Paris',
        hour12: false,
    });
    return { day, time };
}
function writeToFile(level, message, error) {
    const { day, time } = timestamp();
    let logMessage = `[${time}] [${level}] ${message}\n`;
    if (error)
        logMessage += `${error instanceof Error ? error.stack : JSON.stringify(error, null, 2)}\n`;
    try {
        appendFileSync(join(logsDir, `${day}.log`), logMessage, 'utf8');
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