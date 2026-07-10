/**
 * Navigation — STUB. Registry of nav entries/routes contributed by plugins,
 * so the app shell can render a unified nav without knowing which plugins
 * are enabled. Real implementation follows the Plugin Loader in Phase 5,
 * since a plugin's nav entries only make sense once plugins can register
 * themselves at all.
 */
export interface NavEntry {
  pluginId: string;
  label: string;
  path: string;
  icon?: string;
}
