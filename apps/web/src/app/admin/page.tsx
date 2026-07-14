"use client";

/**
 * Admin dashboard route — isolated from every other page. Client-side gate
 * only (this app has no middleware.ts anywhere; see AuthProvider.tsx); the
 * real protection lives server-side in the /api/local-standards* routes
 * (requireAdminSession), which reject mutations even if this page were
 * somehow reached without a session.
 */
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/auth/AuthProvider";
import { useI18n } from "@/i18n";
import { PageShell } from "@/components/PageShell";
import { AdminStandardsDashboard } from "@/components/admin/AdminStandardsDashboard";

export default function AdminPage() {
  const { isAdmin } = useAuth();
  const { t } = useI18n();
  const router = useRouter();

  useEffect(() => {
    if (!isAdmin) router.replace("/");
  }, [isAdmin, router]);

  if (!isAdmin) return null;

  return (
    <PageShell>
      <header className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
          {t("admin.sessionActive")}
        </span>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl dark:text-neutral-50">
          {t("admin.dashboardTitle")}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-neutral-500 dark:text-neutral-400">
          {t("admin.dashboardSubtitle")}
        </p>
      </header>

      <AdminStandardsDashboard />
    </PageShell>
  );
}
