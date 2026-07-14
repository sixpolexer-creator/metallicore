/**
 * Server-side guard for admin-only API routes. Every mutating route under
 * /api/local-standards and /api/admin calls this first; a non-null return is
 * the 401 response the caller should return immediately.
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE_NAME, verifySessionToken } from "./session";

export function requireAdminSession(request: NextRequest): NextResponse | null {
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!verifySessionToken(token)) {
    return NextResponse.json({ error: "Admin session required." }, { status: 401 });
  }
  return null;
}
