import { appendFileSync, existsSync, mkdirSync } from 'node:fs';
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
function now() {
    const iso = new Date().toISOString();
    const date = iso.slice(0, 10);
    const time = iso.slice(11, 19);
    return { iso, date, time };
}
function writeToFile(level, message, error) {
    const { date, time } = now();
    let logMessage = `[${time}] [${level}] ${message}\n`;
    if (error)
        logMessage += `${error instanceof Error ? error.stack : JSON.stringify(error, null, 2)}\n`;
    try {
        appendFileSync(join(logsDir, `${date}.log`), logMessage, 'utf8');
    }
    catch (error) {
        console.error('[LOGGER] Échec de l\'écriture dans le fichier :', error);
    }
}
export const logger = {
    info: (message) => {
        const { time } = now();
        console.log(`${Colors.Green}[INFO]${Colors.Reset} [${time}] ${message}`);
        writeToFile('INFO', message);
    },
    warn: (message) => {
        const { time } = now();
        console.warn(`${Colors.Yellow}[WARN]${Colors.Reset} [${time}] ${message}`);
        writeToFile('WARN', message);
    },
    error: (message, error) => {
        const { time } = now();
        console.error(`${Colors.Red}[ERROR]${Colors.Reset} [${time}] ${message}`);
        if (error)
            console.error(error);
        writeToFile('ERROR', message, error);
    },
    debug: (message) => {
        if (process.env.NODE_ENV === 'production')
            return;
        const { time } = now();
        console.debug(`${Colors.Blue}[DEBUG]${Colors.Reset} [${time}] ${message}`);
        writeToFile('DEBUG', message);
    },
};
//# sourceMappingURL=logger.js.map