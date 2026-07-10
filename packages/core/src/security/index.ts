/**
 * Security — STUB. Cross-cutting concern (permission checks, audit logging
 * hooks) that plugins call into rather than implement themselves. Fleshed
 * out alongside Auth once the plugin permission model (plugin-sdk) is
 * defined in Phase 5.
 */
export interface PermissionCheck {
  userId: string;
  action: string;
  objectType: string;
  objectId?: string;
}
