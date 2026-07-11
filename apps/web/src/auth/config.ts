/**
 * Local admin credential configuration.
 *
 * ZERO-CLOUD CONSTRAINT: there is no identity service, no remote database,
 * and no network call anywhere in this module — credentials are compared
 * entirely in-browser against a SHA-256 hash. This is appropriate for an
 * air-gapped, single-operator deployment; it is NOT a substitute for a real
 * auth service if this app is ever exposed beyond a trusted local network.
 *
 * Override the defaults via `.env.local` (see `.env.example`):
 *   NEXT_PUBLIC_ADMIN_USERNAME=admin
 *   NEXT_PUBLIC_ADMIN_PASSWORD_HASH=<sha256 hex digest of your password>
 *
 * NEXT_PUBLIC_* values are inlined into the client bundle at build time (this
 * app has no server component that could keep them private), so the password
 * itself is never embedded — only its hash — and operators should treat the
 * bundle as readable by anyone with access to the deployed files.
 */
export const ADMIN_USERNAME =
  process.env.NEXT_PUBLIC_ADMIN_USERNAME?.trim() || 'admin';

/** SHA-256 of "admin" — change via NEXT_PUBLIC_ADMIN_PASSWORD_HASH in production. */
const DEFAULT_PASSWORD_HASH =
  '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918';

export const ADMIN_PASSWORD_HASH =
  process.env.NEXT_PUBLIC_ADMIN_PASSWORD_HASH?.trim().toLowerCase() ||
  DEFAULT_PASSWORD_HASH;

/** Idle admin sessions expire after this long. */
export const ADMIN_SESSION_TTL_MS = 8 * 60 * 60 * 1000; // 8 hours

/** Hashes a string with SHA-256 using the browser's built-in Web Crypto API. */
export async function sha256Hex(input: string): Promise<string> {
  const bytes = new TextEncoder().encode(input);
  const digest = await window.crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}
