import { NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { ADMIN_PASSWORD_HASH, ADMIN_USERNAME } from "@/auth/config";
import { createSessionToken, SESSION_COOKIE_NAME } from "@/auth/session";

/**
 * Server-side counterpart to the client-only login in AuthProvider.tsx.
 * Independently re-verifies the same credentials (Node's crypto instead of
 * Web Crypto) and issues the signed HttpOnly session cookie that admin API
 * routes actually check — the client-side check alone never protected them.
 */
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: { username?: unknown; password?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const username = typeof body.username === "string" ? body.username.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";
  const hash = createHash("sha256").update(password).digest("hex");

  const ok =
    username.toLowerCase() === ADMIN_USERNAME.toLowerCase() &&
    hash === ADMIN_PASSWORD_HASH;

  if (!ok) {
    return NextResponse.json(
      { error: "Invalid username or password." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE_NAME, createSessionToken(), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 8 * 60 * 60,
  });
  return response;
}
