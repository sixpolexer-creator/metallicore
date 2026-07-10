/**
 * Kernel logging.
 *
 * Structured logging via pino, writing to stdout only. No remote log
 * shipping, no external transports — this platform must remain fully
 * functional with zero internet access. If centralized log aggregation is
 * needed later, it must be an on-network sink (e.g. a local syslog/ELK box),
 * wired in at the deployment layer, not baked into the kernel.
 */
import pino from "pino";
import { loadConfig } from "../config";

let instance: pino.Logger | undefined;

export interface Logger extends pino.Logger {}

/** Get the shared kernel logger. Level is driven by config (`LOG_LEVEL`). */
export function getLogger(): Logger {
  if (instance) return instance;

  const { logging, nodeEnv } = loadConfig();

  instance = pino({
    level: logging.level,
    base: { app: "metallicore" },
    // Pretty-print only matters for a human at a dev terminal; production
    // logs stay newline-delimited JSON for downstream parsing.
    transport:
      nodeEnv === "development"
        ? { target: "pino-pretty", options: { colorize: true, translateTime: "HH:MM:ss" } }
        : undefined,
  });

  return instance;
}

/** Create a child logger scoped to a subsystem or plugin (e.g. `getScopedLogger("plugin:standards")`). */
export function getScopedLogger(scope: string): Logger {
  return getLogger().child({ scope });
}
