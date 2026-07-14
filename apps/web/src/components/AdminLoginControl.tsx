"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useI18n } from "@/i18n";
import { useAuth } from "@/auth/AuthProvider";

/** Inline user-silhouette glyph — no icon package, kept local to avoid any external/CDN dependency. */
function UserIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" />
    </svg>
  );
}

/**
 * Local Admin login control for the site header (a plain icon button — see
 * UserIcon below). Renders a small popover with username/password fields; on
 * success the app-wide `isAdmin` session flips true and this control swaps to
 * a session icon (linking to /admin) + logout button. Login/logout also call
 * /api/admin/login and /api/admin/logout to establish the server-side
 * session cookie — see src/auth/AuthProvider.tsx.
 */
export function AdminLoginControl() {
  const { t } = useI18n();
  const { isAdmin, login, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);

  if (isAdmin) {
    return (
      <div className="flex items-center gap-2">
        <Link
          href="/admin"
          title={t("admin.sessionActive")}
          aria-label={t("admin.sessionActive")}
          className="mc-surface-strong flex h-8 w-8 items-center justify-center rounded-full text-[var(--color-accent)] transition hover:opacity-80"
        >
          <UserIcon filled />
        </Link>
        <button
          type="button"
          onClick={logout}
          className="rounded-full px-3 py-1.5 text-xs font-medium text-neutral-500 transition hover:bg-[var(--mc-surface-strong)] hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          {t("admin.logout")}
        </button>
      </div>
    );
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setPending(true);
    const ok = await login(username, password);
    setPending(false);
    if (ok) {
      setOpen(false);
      setUsername("");
      setPassword("");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        title={t("admin.loginCta")}
        aria-label={t("admin.loginCta")}
        aria-expanded={open}
        className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 transition hover:bg-[var(--mc-surface-strong)] hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        <UserIcon />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <form
            onSubmit={handleSubmit}
            className="mc-hairline mc-elev absolute end-0 z-50 mt-2 w-64 space-y-2.5 rounded-2xl border bg-[var(--background)] p-4"
          >
            <input
              type="text"
              autoFocus
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setError(false);
              }}
              placeholder={t("admin.username")}
              className="ltr-data mc-surface-strong w-full rounded-lg border-0 px-3 py-2 text-sm text-neutral-900 outline-none ring-1 ring-transparent focus:ring-[var(--color-accent)] dark:text-neutral-50"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder={t("admin.password")}
              className="ltr-data mc-surface-strong w-full rounded-lg border-0 px-3 py-2 text-sm text-neutral-900 outline-none ring-1 ring-transparent focus:ring-[var(--color-accent)] dark:text-neutral-50"
            />
            {error && (
              <p className="text-xs text-red-600 dark:text-red-400">
                {t("admin.invalidCredentials")}
              </p>
            )}
            <button
              type="submit"
              disabled={pending}
              className="w-full rounded-full bg-[var(--color-accent)] px-4 py-1.5 text-xs font-medium text-white transition hover:opacity-90 disabled:opacity-60"
            >
              {t("admin.loginCta")}
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default AdminLoginControl;
