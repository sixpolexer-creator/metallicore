"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import type { Application, MaterialType, StandardStatus } from "@/types/standard";
import type { LocalStandard } from "@/types/localStandard";
import { APPLICATIONS, MATERIAL_TYPES, STATUSES } from "@/lib/standardFieldOptions";

interface FormState {
  designation: string;
  title: string;
  description: string;
  materialType: MaterialType | "";
  status: StandardStatus;
  application: Set<Application>;
}

const EMPTY_FORM: FormState = {
  designation: "",
  title: "",
  description: "",
  materialType: "",
  status: "active",
  application: new Set(),
};

/**
 * Full CRUD surface for local/company standards. Every mutation goes through
 * /api/local-standards* with `credentials: "include"` so the signed admin
 * session cookie (see auth/session.ts) rides along — the server independently
 * re-checks admin status on every write, this component is just the UI.
 */
export function AdminStandardsDashboard() {
  const [standards, setStandards] = useState<LocalStandard[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfMode, setPdfMode] = useState<"upload" | "path">("upload");
  const [pdfSourcePath, setPdfSourcePath] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/local-standards");
      const data = await res.json();
      setStandards(Array.isArray(data.standards) ? data.standards : []);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const resetForm = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setPdfFile(null);
    setPdfMode("upload");
    setPdfSourcePath("");
    setError(null);
  };

  const startEdit = (standard: LocalStandard) => {
    setEditingId(standard.id);
    setForm({
      designation: standard.designation,
      title: standard.title,
      description: standard.description,
      materialType: standard.materialType,
      status: standard.status,
      application: new Set(standard.application),
    });
    setPdfFile(null);
    setPdfMode("upload");
    setPdfSourcePath("");
    setError(null);
  };

  const toggleApplication = (app: Application) => {
    setForm((prev) => {
      const next = new Set(prev.application);
      if (next.has(app)) next.delete(app);
      else next.add(app);
      return { ...prev, application: next };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedSourcePath = pdfSourcePath.trim();
    const hasPdfInput = pdfMode === "upload" ? !!pdfFile : !!trimmedSourcePath;
    if (!editingId && !hasPdfInput) {
      setError(
        pdfMode === "upload"
          ? "A PDF file is required."
          : "A local file path is required.",
      );
      return;
    }

    const body = new FormData();
    body.set("designation", form.designation);
    body.set("title", form.title);
    body.set("description", form.description);
    body.set("materialType", form.materialType);
    body.set("status", form.status);
    body.set("application", JSON.stringify([...form.application]));
    if (pdfMode === "upload") {
      if (pdfFile) body.set("pdf", pdfFile);
    } else if (trimmedSourcePath) {
      body.set("pdfSourcePath", trimmedSourcePath);
    }

    setSaving(true);
    try {
      const res = await fetch(
        editingId ? `/api/local-standards/${editingId}` : "/api/local-standards",
        {
          method: editingId ? "PATCH" : "POST",
          credentials: "include",
          body,
        },
      );
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Failed to save the standard.");
        return;
      }
      resetForm();
      await refresh();
    } catch {
      setError("Network error — is the app running?");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/local-standards/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (res.ok) {
        if (editingId === id) resetForm();
        await refresh();
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_1fr]">
      <form
        onSubmit={handleSubmit}
        className="mc-card h-fit space-y-3.5 rounded-2xl p-5"
      >
        <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
          {editingId ? "Edit Local Standard" : "New Local Standard"}
        </h2>

        <Field label="Designation">
          <input
            required
            value={form.designation}
            onChange={(e) => setForm((p) => ({ ...p, designation: e.target.value }))}
            className="ltr-data mc-surface-strong w-full rounded-lg border-0 px-3 py-2 text-sm text-neutral-900 outline-none ring-1 ring-transparent focus:ring-[var(--color-accent)] dark:text-neutral-50"
          />
        </Field>

        <Field label="Title">
          <input
            required
            value={form.title}
            onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
            className="ltr-data mc-surface-strong w-full rounded-lg border-0 px-3 py-2 text-sm text-neutral-900 outline-none ring-1 ring-transparent focus:ring-[var(--color-accent)] dark:text-neutral-50"
          />
        </Field>

        <Field label="Description">
          <textarea
            required
            rows={3}
            value={form.description}
            onChange={(e) => setForm((p) => ({ ...p, description: e.target.value }))}
            className="ltr-data mc-surface-strong w-full resize-none rounded-lg border-0 px-3 py-2 text-sm text-neutral-900 outline-none ring-1 ring-transparent focus:ring-[var(--color-accent)] dark:text-neutral-50"
          />
        </Field>

        <Field label="Material Type">
          <select
            required
            value={form.materialType}
            onChange={(e) =>
              setForm((p) => ({ ...p, materialType: e.target.value as MaterialType }))
            }
            className="ltr-data mc-surface-strong w-full rounded-lg border-0 px-3 py-2 text-sm text-neutral-900 outline-none ring-1 ring-transparent focus:ring-[var(--color-accent)] dark:text-neutral-50"
          >
            <option value="" disabled>
              Select…
            </option>
            {MATERIAL_TYPES.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Status">
          <select
            value={form.status}
            onChange={(e) =>
              setForm((p) => ({ ...p, status: e.target.value as StandardStatus }))
            }
            className="ltr-data mc-surface-strong w-full rounded-lg border-0 px-3 py-2 text-sm text-neutral-900 outline-none ring-1 ring-transparent focus:ring-[var(--color-accent)] dark:text-neutral-50"
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Applications">
          <div className="flex flex-wrap gap-1.5">
            {APPLICATIONS.map((app) => {
              const active = form.application.has(app);
              return (
                <button
                  key={app}
                  type="button"
                  onClick={() => toggleApplication(app)}
                  aria-pressed={active}
                  className={[
                    "ltr-data rounded-full border px-3 py-1 text-xs transition",
                    active
                      ? "border-[var(--color-accent)] bg-[color-mix(in_srgb,var(--color-accent)_14%,transparent)] font-medium text-neutral-900 dark:text-neutral-50"
                      : "mc-hairline text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100",
                  ].join(" ")}
                >
                  {app}
                </button>
              );
            })}
          </div>
        </Field>

        <Field label={editingId ? "Replace PDF (optional)" : "PDF Source"}>
          <div className="mb-2 flex gap-1.5">
            <button
              type="button"
              onClick={() => setPdfMode("upload")}
              aria-pressed={pdfMode === "upload"}
              className={[
                "rounded-full border px-3 py-1 text-[11px] font-medium transition",
                pdfMode === "upload"
                  ? "border-[var(--color-accent)] bg-[color-mix(in_srgb,var(--color-accent)_14%,transparent)] text-neutral-900 dark:text-neutral-50"
                  : "mc-hairline text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100",
              ].join(" ")}
            >
              Upload File
            </button>
            <button
              type="button"
              onClick={() => setPdfMode("path")}
              aria-pressed={pdfMode === "path"}
              className={[
                "rounded-full border px-3 py-1 text-[11px] font-medium transition",
                pdfMode === "path"
                  ? "border-[var(--color-accent)] bg-[color-mix(in_srgb,var(--color-accent)_14%,transparent)] text-neutral-900 dark:text-neutral-50"
                  : "mc-hairline text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100",
              ].join(" ")}
            >
              Local Network Path
            </button>
          </div>

          {pdfMode === "upload" ? (
            <input
              type="file"
              accept="application/pdf,.pdf"
              onChange={(e) => setPdfFile(e.target.files?.[0] ?? null)}
              className="w-full text-xs text-neutral-500 file:mr-3 file:rounded-full file:border-0 file:bg-[var(--color-accent)] file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-white dark:text-neutral-400"
            />
          ) : (
            <>
              <input
                type="text"
                value={pdfSourcePath}
                onChange={(e) => setPdfSourcePath(e.target.value)}
                placeholder="/mnt/shared/standards/file.pdf"
                className="ltr-data mc-surface-strong w-full rounded-lg border-0 px-3 py-2 text-sm text-neutral-900 outline-none ring-1 ring-transparent focus:ring-[var(--color-accent)] dark:text-neutral-50"
              />
              <p className="mt-1 text-[11px] text-neutral-400 dark:text-neutral-500">
                A path readable from this server (e.g. a mounted network share). The file is copied into local storage on save.
              </p>
            </>
          )}
        </Field>

        {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={saving}
            className="rounded-full bg-[var(--color-accent)] px-4 py-1.5 text-xs font-medium text-white transition hover:opacity-90 disabled:opacity-60"
          >
            {editingId ? "Save Changes" : "Create Standard"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-full px-4 py-1.5 text-xs font-medium text-neutral-500 transition hover:bg-[var(--mc-surface-strong)] dark:text-neutral-400"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="min-w-0">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
          Company Standards ({standards.length})
        </h2>

        {loading ? (
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Loading…</p>
        ) : standards.length === 0 ? (
          <div className="mc-card rounded-2xl p-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
            No local standards yet — create one using the form.
          </div>
        ) : (
          <ul className="space-y-2">
            {standards.map((s) => (
              <li key={s.id} className="mc-card flex items-start justify-between gap-4 rounded-2xl p-4">
                <div className="min-w-0">
                  <p className="ltr-data text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                    {s.designation}
                  </p>
                  <p className="ltr-data line-clamp-1 text-xs text-neutral-500 dark:text-neutral-400">
                    {s.title}
                  </p>
                  <p className="mt-1 text-[11px] text-neutral-400 dark:text-neutral-500">
                    {s.materialType} · {s.status}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={`/api/local-standards/${s.id}/pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-medium text-[var(--color-accent)] hover:underline"
                  >
                    PDF
                  </a>
                  <button
                    type="button"
                    onClick={() => startEdit(s)}
                    className="text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    disabled={saving}
                    onClick={() => handleDelete(s.id)}
                    className="text-xs font-medium text-red-600 hover:underline disabled:opacity-60 dark:text-red-400"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1 block text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
        {label}
      </label>
      {children}
    </div>
  );
}

export default AdminStandardsDashboard;
