/**
 * Runtime value lists mirroring the MaterialType/Application/StandardStatus
 * type unions in `types/standard.ts` (those are type-only, no runtime array).
 * Single source of truth for both server-side validation
 * (validateLocalStandard.ts) and the admin form UI.
 */
import type { Application, MaterialType, StandardStatus } from "@/types/standard";

export const MATERIAL_TYPES: readonly MaterialType[] = [
  "Aluminum",
  "Titanium",
  "Steel",
  "Stainless Steel",
  "Cast Iron",
  "Nickel Alloy",
  "Copper Alloy",
  "Magnesium",
];

export const APPLICATIONS: readonly Application[] = [
  "Aerospace",
  "Automotive",
  "Marine",
  "Construction",
  "Medical",
  "Energy",
  "General Engineering",
];

export const STATUSES: readonly StandardStatus[] = ["active", "superseded"];
