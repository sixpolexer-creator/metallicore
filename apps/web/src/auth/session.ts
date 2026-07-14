/**
 * Server-side admin session tokens.
 *
 * The existing client-side login (see AuthProvider.tsx / auth/config.ts) never
 * talks to the server, which means an API route would otherwise have nothing
 * to check before performing an admin-only mutation. This module adds a
 * minimal signed-cookie session on top of that flow: a token is just an
 * expiry timestamp plus an HMAC-SHA256 signature, so verifying it never
 * touches a database or the filesystem.
 *
 * Secret precedence: `ADMIN_SESSION_SECRET` if set, otherwise the existing
 * `ADMIN_PASSWORD_HASH` (dev-only fallback — operators overriding the admin
 * password via `.env.local` should also set a dedicated session secret).
 */
import { createHmac, timingSafeEqual } from "node:crypto";
import { ADMIN_PASSWORD_HASH, ADMIN_SESSION_TTL_MS } from "./config";

export const SESSION_COOKIE_NAME = "metallicore_admin_session";

const SECRET = process.env.ADMIN_SESSION_SECRET?.trim() || ADMIN_PASSWORD_HASH;

function sign(payload: string): string {
  return createHmac("sha256", SECRET).update(payload).digest("hex");
}

/** Issues a new session token embedding an expiry `ADMIN_SESSION_TTL_MS` from now. */
export function createSessionToken(): string {
  const payload = String(Date.now() + ADMIN_SESSION_TTL_MS);
  return `${payload}.${sign(payload)}`;
}

/** Verifies signature and expiry. Constant-time signature comparison. */
export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const dot = token.indexOf(".");
  if (dot <= 0) return false;

  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  if (!payload || !sig) return false;

  const expected = sign(payload);
  const sigBuf = Buffer.from(sig, "hex");
  const expectedBuf = Buffer.from(expected, "hex");
  if (sigBuf.length !== expectedBuf.length || !timingSafeEqual(sigBuf, expectedBuf)) {
    return false;
  }

  const expiresAt = Number(payload);
  return Number.isFinite(expiresAt) && expiresAt > Date.now();
}
