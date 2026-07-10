/**
 * Metadata Engine — STUB. Real implementation lands in Phase 3.
 *
 * Every engineering object (Standard, Material, Drawing, ...) will carry a
 * common metadata envelope: status, revision, created/modified, owner,
 * visibility, tags, classification, lifecycle, attachments, custom fields,
 * relationships. This module will own that shared schema + read/write
 * helpers so plugins never redefine metadata handling themselves.
 *
 * Deferred to Phase 3 because the shape of "attachments" and "relationships"
 * depends on the Repository Layer (Phase 2) and Relationship Engine
 * (Phase 4) landing first.
 */
export interface EngineeringObjectMetadata {
  status: string;
  revision: string;
  createdAt: Date;
  modifiedAt: Date;
  owner: string;
  visibility: "internal" | "restricted" | "public";
  tags: readonly string[];
  classification?: string;
  lifecycle?: string;
  customFields?: Readonly<Record<string, unknown>>;
}
