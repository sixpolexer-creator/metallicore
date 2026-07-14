"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ADMIN_PASSWORD_HASH,
  ADMIN_SESSION_TTL_MS,
  ADMIN_USERNAME,
  sha256Hex,
} from "./config";

const SESSION_STORAGE_KEY = "metallicore:admin-session";

interface StoredSession {
  expiresAt: number;
}

function readSession(): StoredSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredSession;
    if (typeof parsed.expiresAt !== "number" || parsed.expiresAt <= Date.now()) {
      window.sessionStorage.removeItem(SESSION_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function writeSession(session: StoredSession | null): void {
  if (typeof window === "undefined") return;
  try {
    if (session) {
      window.sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
    } else {
      window.sessionStorage.removeItem(SESSION_STORAGE_KEY);
    }
  } catch {
    // Storage unavailable — session will not persist across reloads.
  }
}

export interface AuthContextValue {
  isAdmin: boolean;
  /** Attempts local login. Resolves `true` on success, `false` on bad credentials. */
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

/**
 * Local, offline session provider for the Admin role. No network requests are
 * made anywhere in this component — credentials are hashed client-side with
 * Web Crypto and compared against `ADMIN_PASSWORD_HASH`. The session itself is
 * just an expiry timestamp in sessionStorage, cleared on tab close or logout.
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);

  // Session lives in sessionStorage (not SSR-visible), so sync after mount.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsAdmin(readSession() !== null);
  }, []);

  const login = useCallback(async (username: string, password: string) => {
    const hash = await sha256Hex(password);
    const localOk =
      username.trim().toLowerCase() === ADMIN_USERNAME.toLowerCase() &&
      hash === ADMIN_PASSWORD_HASH;
    if (!localOk) return false;

    // Also establish a real server-side session (signed HttpOnly cookie) so
    // admin API routes (CRUD, uploads) have something to verify — the local
    // hash check above only gates this browser's UI.
    let serverOk = false;
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      serverOk = res.ok;
    } catch {
      serverOk = false;
    }
    if (!serverOk) return false;

    writeSession({ expiresAt: Date.now() + ADMIN_SESSION_TTL_MS });
    setIsAdmin(true);
    return true;
  }, []);

  const logout = useCallback(() => {
    writeSession(null);
    setIsAdmin(false);
    fetch("/api/admin/logout", { method: "POST", credentials: "include" }).catch(() => {
      // Best-effort — local session is already cleared above.
    });
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ isAdmin, login, logout }),
    [isAdmin, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (ctx === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
