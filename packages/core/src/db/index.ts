/**
 * Kernel database connection.
 *
 * PostgreSQL is the source of truth (see docs/adr/0001-core-architecture.md).
 * This module owns only the connection + a health check. It deliberately
 * defines NO tables and NO queries — that is the Repository Layer's job
 * (Phase 2) and the Metadata/Relationship Engines' job (Phases 3-4). Keeping
 * this module inert until those phases lands means every plugin and engine
 * talks to Postgres exclusively through repository interfaces, never through
 * a raw client — which is what lets another SQL database be substituted
 * later without touching plugin code.
 */
import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres, { type Sql } from "postgres";
import { loadConfig } from "../config";
import { getScopedLogger } from "../logging";

const log = getScopedLogger("kernel:db");

let sqlClient: Sql | undefined;
let db: PostgresJsDatabase | undefined;

function requireDatabaseUrl(): string {
  const { database } = loadConfig();
  if (!database.url) {
    throw new Error(
      "DATABASE_URL is not configured. Set it in .env (see .env.example) before using the database.",
    );
  }
  return database.url;
}

/** Get the shared Drizzle client. Lazily connects on first use. */
export function getDb(): PostgresJsDatabase {
  if (db) return db;

  sqlClient = postgres(requireDatabaseUrl(), {
    // Conservative pool size: single-box offline deployment, not a
    // high-concurrency multi-tenant service.
    max: 10,
    onnotice: () => {}, // suppress routine Postgres NOTICE noise in logs
  });

  db = drizzle(sqlClient);
  log.info("Postgres connection pool initialized");
  return db;
}

/** Verify the database is reachable. Used by startup checks / health endpoints. */
export async function checkDbHealth(): Promise<{ ok: boolean; error?: string }> {
  try {
    const client = sqlClient ?? postgres(requireDatabaseUrl(), { max: 1 });
    await client`select 1`;
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    log.error({ err: message }, "Database health check failed");
    return { ok: false, error: message };
  }
}

/** Close the pool. Call on graceful shutdown. */
export async function closeDb(): Promise<void> {
  if (sqlClient) {
    await sqlClient.end();
    sqlClient = undefined;
    db = undefined;
  }
}
