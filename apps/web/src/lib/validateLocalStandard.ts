/**
 * Field validation for local-standard admin input, shared by the create
 * (POST) and update (PATCH) API routes. Mirrors the allowed value sets from
 * `types/standard.ts` (MaterialType/Application/StandardStatus) — those are
 * type-only unions with no runtime array, so this file is the single place
 * that needs updating if that set ever changes.
 */
import type { Application, MaterialType, StandardStatus } from "@/types/standard";
import type { LocalStandardInput } from "@/types/localStandard";
import { APPLICATIONS, MATERIAL_TYPES, STATUSES } from "./standardFieldOptions";

export interface ValidationResult {
  value?: LocalStandardInput;
  error?: string;
}

/** Validates a full record (create). All fields required. */
export function validateLocalStandardInput(raw: Record<string, unknown>): ValidationResult {
  const designation = typeof raw.designation === "string" ? raw.designation.trim() : "";
  const title = typeof raw.title === "string" ? raw.title.trim() : "";
  const description = typeof raw.description === "string" ? raw.description.trim() : "";
  const materialType = raw.materialType;
  const status = raw.status;
  const application = parseApplication(raw.application);

  if (!designation) return { error: "Designation is required." };
  if (!title) return { error: "Title is required." };
  if (!description) return { error: "Description is required." };
  if (typeof materialType !== "string" || !MATERIAL_TYPES.includes(materialType as MaterialType)) {
    return { error: "A valid material type is required." };
  }
  if (typeof status !== "string" || !STATUSES.includes(status as StandardStatus)) {
    return { error: "A valid status is required." };
  }
  if (application.length === 0) {
    return { error: "At least one application is required." };
  }
  if (application.some((a) => !APPLICATIONS.includes(a))) {
    return { error: "One or more applications are invalid." };
  }

  return {
    value: {
      designation,
      title,
      description,
      materialType: materialType as MaterialType,
      status: status as StandardStatus,
      application,
    },
  };
}

/** Validates a partial record (update) — only provided fields are checked. */
export function validateLocalStandardPatch(
  raw: Record<string, unknown>,
): { value?: Partial<LocalStandardInput>; error?: string } {
  const patch: Partial<LocalStandardInput> = {};

  if (raw.designation !== undefined) {
    const v = typeof raw.designation === "string" ? raw.designation.trim() : "";
    if (!v) return { error: "Designation cannot be empty." };
    patch.designation = v;
  }
  if (raw.title !== undefined) {
    const v = typeof raw.title === "string" ? raw.title.trim() : "";
    if (!v) return { error: "Title cannot be empty." };
    patch.title = v;
  }
  if (raw.description !== undefined) {
    const v = typeof raw.description === "string" ? raw.description.trim() : "";
    if (!v) return { error: "Description cannot be empty." };
    patch.description = v;
  }
  if (raw.materialType !== undefined) {
    if (
      typeof raw.materialType !== "string" ||
      !MATERIAL_TYPES.includes(raw.materialType as MaterialType)
    ) {
      return { error: "A valid material type is required." };
    }
    patch.materialType = raw.materialType as MaterialType;
  }
  if (raw.status !== undefined) {
    if (typeof raw.status !== "string" || !STATUSES.includes(raw.status as StandardStatus)) {
      return { error: "A valid status is required." };
    }
    patch.status = raw.status as StandardStatus;
  }
  if (raw.application !== undefined) {
    const application = parseApplication(raw.application);
    if (application.length === 0) return { error: "At least one application is required." };
    if (application.some((a) => !APPLICATIONS.includes(a))) {
      return { error: "One or more applications are invalid." };
    }
    patch.application = application;
  }

  return { value: patch };
}

function parseApplication(raw: unknown): Application[] {
  if (Array.isArray(raw)) {
    return raw.filter((v): v is Application => typeof v === "string");
  }
  if (typeof raw === "string" && raw.trim()) {
    // Supports multipart/form-data submitting a JSON-encoded array string.
    try {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter((v): v is Application => typeof v === "string") : [];
    } catch {
      return raw.split(",").map((v) => v.trim()).filter(Boolean) as Application[];
    }
  }
  return [];
}
