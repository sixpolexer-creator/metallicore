/**
 * Local/Company standard — deliberately kept OUTSIDE the `AnyStandard` union
 * (see the No-Mix rule in `types/standard.ts`). It isn't an international
 * standards body record, so it never enters `data/registry.ts`; it is a
 * separate category that the unified search surfaces alongside — never
 * inside — the ASTM/AMS/ISO/DIN/EN/JIS union.
 */
import type { Application, MaterialType, StandardStatus } from "./standard";

export interface LocalStandard {
  id: string;
  designation: string;
  title: string;
  materialType: MaterialType;
  application: Application[];
  status: StandardStatus;
  description: string;
  /** Literal tag so UI/search can label these distinctly from ASTM/ISO/etc. */
  category: "Local/Company Standard";
  /** Path of the stored PDF, relative to STORAGE_ROOT. */
  pdfPath: string;
  /** Original uploaded filename, kept for display only (never used as a path). */
  pdfOriginalName: string;
  createdAt: string;
  updatedAt: string;
}

/** Fields an admin supplies when creating a record; id/timestamps/pdf* are server-set. */
export interface LocalStandardInput {
  designation: string;
  title: string;
  materialType: MaterialType;
  application: Application[];
  status: StandardStatus;
  description: string;
}
