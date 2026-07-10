/**
 * Kernel configuration loader.
 *
 * MetalliCore runs on a private, offline industrial network: config comes
 * exclusively from environment variables (typically an `.env` file next to
 * the deployment), never from a remote config service. Validated with zod so
 * a misconfigured deployment fails fast at startup instead of at first use.
 */
import { z } from "zod";

const ConfigSchema = z.object({
  nodeEnv: z.enum(["development", "production", "test"]).default("development"),

  database: z.object({
    // Optional at the config-parsing level deliberately: subsystems that
    // don't touch the database (e.g. logging) must be able to initialize
    // without one configured. The db module itself is what enforces this is
    // present before it will open a connection — see packages/core/src/db.
    url: z
      .string()
      .min(1)
      .optional()
      .describe("Postgres connection string, e.g. postgres://user:pass@host:5432/db"),
  }),

  storage: z.object({
    // Local filesystem path for uploaded attachments/documents/drawings.
    // Never a cloud bucket — this platform must run with no internet access.
    root: z.string().default("./storage"),
  }),

  logging: z.object({
    level: z
      .enum(["fatal", "error", "warn", "info", "debug", "trace"])
      .default("info"),
  }),
});

export type MetallicoreConfig = z.infer<typeof ConfigSchema>;

let cached: MetallicoreConfig | undefined;

/** Load and validate kernel configuration from `process.env`. Cached after first call. */
export function loadConfig(env: NodeJS.ProcessEnv = process.env): MetallicoreConfig {
  if (cached) return cached;

  const parsed = ConfigSchema.safeParse({
    nodeEnv: env.NODE_ENV,
    database: { url: env.DATABASE_URL },
    storage: { root: env.STORAGE_ROOT },
    logging: { level: env.LOG_LEVEL },
  });

  if (!parsed.success) {
    throw new Error(
      `Invalid MetalliCore configuration:\n${parsed.error.issues
        .map((i) => `  - ${i.path.join(".")}: ${i.message}`)
        .join("\n")}`,
    );
  }

  cached = parsed.data;
  return cached;
}

/** Test-only: clear the cached config so a test can reload with different env. */
export function resetConfigCache(): void {
  cached = undefined;
}
