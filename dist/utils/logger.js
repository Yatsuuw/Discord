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
function writeToFile(level, message, error) {
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toLocaleTimeString();
    const fileName = `${date}.log`;
    const filePath = join(logsDir, fileName);
    let logMessage = `[${time}] [${level.toUpperCase()}] ${message}\n`;
    if (error) {
        logMessage += `${error instanceof Error ? error.stack : JSON.stringify(error, null, 2)}\n`;
    }
    appendFileSync(filePath, logMessage, 'utf8');
}
export const logger = {
    info: (message) => {
        console.log(`${Colors.Green}[INFO]${Colors.Reset} [${new Date().toLocaleTimeString()}] ${message}`);
        writeToFile('INFO', message);
    },
    warn: (message) => {
        console.warn(`${Colors.Yellow}[WARN]${Colors.Reset} [${new Date().toLocaleTimeString()}] ${message}`);
        writeToFile('WARN', message);
    },
    error: (message, error) => {
        console.error(`${Colors.Red}[ERROR]${Colors.Reset} [${new Date().toLocaleTimeString()}] ${message}`);
        if (error)
            console.error(error);
        writeToFile('ERROR', message, error);
    },
};
//# sourceMappingURL=logger.js.map