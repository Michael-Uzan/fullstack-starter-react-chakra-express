import { LogLevel } from "../interfaces/logLevel";
import fs from "fs";

const logsDir = "./logs";

if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

//define the time format
function getTime() {
  let now = new Date();

  return now.toLocaleString();
}

function doLog(level: LogLevel, ...args: unknown[]) {
  const strs = args.map((arg) =>
    typeof arg === "string" ? arg : JSON.stringify(arg)
  );
  let line = strs.join(" | ");

  line = `${getTime()} - ${level} - ${line}\n`;
  console.log(line);
  fs.appendFileSync("./logs/backend.log", line);
}

export const logger = {
  debug(...args: unknown[]) {
    // if (process.env.NODE_NEV === 'production') return
    doLog(LogLevel.Debug, ...args);
  },
  info(...args: unknown[]) {
    doLog(LogLevel.Info, ...args);
  },
  warn(...args: unknown[]) {
    doLog(LogLevel.Warn, ...args);
  },
  error(...args: unknown[]) {
    doLog(LogLevel.Error, ...args);
  },
};
