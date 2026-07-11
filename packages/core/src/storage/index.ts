/**
 * Storage — STUB. Design + implementation not yet scheduled by name in the
 * 13-phase plan, but is a kernel responsibility (see
 * docs/adr/0001-core-architecture.md) and must land before any plugin ships
 * document/file persistence (e.g. admin-uploaded standard revisions).
 * Sketching the shape now so downstream modules have a stable type to
 * reference.
 */
export interface StoredDocument {
  id: string;
  fileName: string;
  contentType: string;
  sizeBytes: number;
}
