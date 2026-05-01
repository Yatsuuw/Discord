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
        date: now.toISOString().split('T')[0],
        instance: now,
    };
}
function writeToFile(level, message, error) {
    const { time, date } = timestamp();
    let logMessage = `[${time}] [${level}] ${message}\n`;
    if (error)
        logMessage += `${error instanceof Error ? error.stack : JSON.stringify(error, null, 2)}\n`;
    appendFile(join(logsDir, `${date}.log`), logMessage, 'utf8', (err) => {
        if (err)
            console.error('Échec d\'écriture du fichier :', err);
    });
}
export const logger = {
    info: (message) => {
        console.log(`${Colors.Green}[INFO]${Colors.Reset} [${timestamp().time}] ${message}`);
        writeToFile('INFO', message);
    },
    warn: (message) => {
        console.warn(`${Colors.Yellow}[WARN]${Colors.Reset} [${timestamp().time}] ${message}`);
        writeToFile('WARN', message);
    },
    error: (message, error) => {
        console.error(`${Colors.Red}[ERROR]${Colors.Reset} [${timestamp().time}] ${message}`);
        if (error)
            console.error(error);
        writeToFile('ERROR', message, error);
    },
    debug: (message) => {
        if (process.env.NODE_ENV !== 'production') {
            console.debug(`${Colors.Blue}[DEBUG]${Colors.Reset} [${timestamp().time}] ${message}`);
            writeToFile('DEBUG', message);
        }
    },
};
//# sourceMappingURL=logger.js.map