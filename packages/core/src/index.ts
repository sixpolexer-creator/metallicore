/**
 * MetalliCore kernel — public entry point.
 *
 * Phase 1 (Core Architecture) ships real implementations for config,
 * logging, and the database connection. Every other kernel subsystem
 * (auth, plugin-loader, metadata-engine, relationship-engine,
 * search-engine, navigation, storage, security) is an interface-only stub
 * here, filled in during its designated phase — see
 * docs/adr/0001-core-architecture.md for the phase order and rationale.
 */
export * from "./config";
export * from "./logging";
export * from "./db";
export * from "./auth";
export * from "./plugin-loader";
export * from "./metadata-engine";
export * from "./relationship-engine";
export * from "./search-engine";
export * from "./navigation";
export * from "./storage";
export * from "./security";
