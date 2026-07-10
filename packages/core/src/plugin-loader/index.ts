/**
 * Plugin Loader — STUB. Real implementation lands in Phase 5.
 *
 * Decision (docs/adr/0001-core-architecture.md): plugins are config-time
 * registered, not dynamically loaded at runtime. "Install/remove/disable" =
 * flip a flag in the plugin registry config and rebuild/redeploy; "upgrade
 * independently" = bump one plugin package's version without touching
 * others. No hot code loading, no sandboxing, no runtime schema migration
 * engine — deliberately, to keep behavior deterministic on an offline box.
 *
 * This module currently defines only the shape a plugin manifest will take
 * (mirrored in @metallicore/plugin-sdk) and a registry stub so
 * apps/web can start importing against a stable interface before the real
 * loader exists.
 */

export interface PluginManifest {
  id: string;
  version: string;
  displayName: string;
  /** Whether this plugin is active in the current deployment. Config-driven. */
  enabled: boolean;
}

export interface PluginRegistry {
  list(): readonly PluginManifest[];
  get(id: string): PluginManifest | undefined;
}

/**
 * Phase 5 will replace this with a real registry built from
 * `packages/plugins/*` manifests filtered by config. For now it always
 * returns an empty registry so callers can wire against the interface early.
 */
export function getPluginRegistry(): PluginRegistry {
  return {
    list: () => [],
    get: () => undefined,
  };
}
