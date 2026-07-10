/**
 * Auth — STUB. Design + implementation not yet scheduled by name in the
 * 13-phase plan, but is a kernel responsibility (see
 * docs/adr/0001-core-architecture.md) and must land before any plugin ships
 * permissions/visibility features. Sketching the shape now so downstream
 * modules (metadata engine's `visibility`, plugin `permissions`) have a
 * stable type to reference.
 */
export interface AuthenticatedUser {
  id: string;
  displayName: string;
  roles: readonly string[];
}
