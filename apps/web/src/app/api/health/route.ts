import { NextResponse } from "next/server";
import { checkDbHealth, getScopedLogger } from "@metallicore/core";

/**
 * Kernel health check. Proves apps/web is actually wired to
 * @metallicore/core's config/logging/db modules (not just typechecking them
 * in isolation) — deliberately the first real integration point of Phase 1.
 *
 * Must never be prerendered/cached: force dynamic so it (a) runs per-request
 * instead of being executed once at build time — when DATABASE_URL isn't
 * necessarily available — and (b) always reflects live DB reachability.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  const log = getScopedLogger("api:health");
  const db = await checkDbHealth();

  log.info({ db }, "health check");

  return NextResponse.json(
    { ok: db.ok, database: db },
    { status: db.ok ? 200 : 503 },
  );
}
