"use client";

import { useState, type FormEvent } from "react";
import { useI18n } from "@/i18n";
import { useAuth } from "@/auth/AuthProvider";

/**
 * Local Admin login control for the site header. Renders a small popover with
 * username/password fields; on success the app-wide `isAdmin` session flips
 * true and this control swaps to a "session active" badge + logout button.
 * No network request is ever made — see src/auth/AuthProvider.tsx.
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
        <span className="ltr-data rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-[var(--color-accent)] mc-surface-strong">
          {t("admin.sessionActive")}
        </span>
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
        className="rounded-full px-3 py-1.5 text-xs font-medium text-neutral-500 transition hover:bg-[var(--mc-surface-strong)] hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        {t("admin.loginCta")}
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
