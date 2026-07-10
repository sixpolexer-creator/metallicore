/**
 * Relationship Engine — STUB. Real implementation lands in Phase 4.
 *
 * Deterministic, database-backed, queryable relationships between
 * engineering objects of any type (Material <-> Standard, Drawing <->
 * Material, Supplier <-> Standard, etc.), with no fixed limit on
 * relationship types so new ones can be added without a schema redesign.
 *
 * The eventual design is an entity-agnostic edge table
 * (subjectType, subjectId, relationshipType, objectType, objectId, metadata)
 * queried through this module — mirroring the same "one chokepoint, typed
 * access only" discipline the original MetalliCore data silos used for
 * cross-org standards data.
 */
export interface RelationshipRef {
  objectType: string;
  objectId: string;
}

export interface Relationship {
  from: RelationshipRef;
  to: RelationshipRef;
  relationshipType: string;
  note?: string;
}
