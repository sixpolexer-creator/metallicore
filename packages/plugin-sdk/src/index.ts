/**
 * Plugin SDK — the contract a plugin implements to register itself with the
 * kernel, without the kernel ever importing plugin code by name.
 *
 * Status: TYPES ONLY. `definePlugin()` is an identity function today — it
 * exists so plugin authors can start writing against a stable shape before
 * the real Plugin Loader (Phase 5) exists to consume it. Once Phase 5 lands,
 * a plugin becomes real by: (1) adding its package under
 * packages/plugins/<name>, (2) exporting a `definePlugin({...})` manifest as
 * its default export, (3) being listed + enabled in the plugin registry
 * config. No core code changes required for any of those three steps — that
 * is the whole point of the config-time registry model (see
 * docs/adr/0001-core-architecture.md).
 *
 * Each plugin owns: entities, business logic, UI, validation, import/export,
 * search registration, relationships, routes, permissions, and settings —
 * per the platform spec. This SDK's job is to give each of those a typed
 * registration point.
 */
import type { PluginManifest } from "@metallicore/core";

export interface PluginRouteContribution {
  /** Mounted under /plugins/<pluginId>/<path> by the app shell. */
  path: string;
  /** Relative import path (within the plugin package) to the route's UI entry. */
  component: string;
}

export interface PluginSearchSourceContribution {
  objectType: string;
  /** Relative import path to the function that indexes this object type. */
  indexer: string;
}

export interface PluginDefinition extends PluginManifest {
  routes?: readonly PluginRouteContribution[];
  navEntries?: readonly { label: string; path: string; icon?: string }[];
  searchSources?: readonly PluginSearchSourceContribution[];
  /** Relationship types this plugin introduces (e.g. "material-heat-treatment"). */
  relationshipTypes?: readonly string[];
  /** Permission keys this plugin checks (e.g. "standards.edit"). */
  permissions?: readonly string[];
}

/** Identity helper — gives plugin authors autocomplete + type-checking today. */
export function definePlugin(def: PluginDefinition): PluginDefinition {
  return def;
}
