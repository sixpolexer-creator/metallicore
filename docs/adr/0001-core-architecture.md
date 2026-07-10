# ADR 0001: Core Architecture for MetalliCore v2

Status: **Accepted** — 2026-07-10
Phase: 1 of 13 (Core Architecture), per `Metallicore_Prompt.md`'s Implementation Strategy.

## Context

MetalliCore v2 is a ground-up evolution of the existing MetalliCore v1 static
standards browser (see the original architecture report artifact) into an
offline-first Engineering Knowledge Platform: a plugin-based system managing
Standards, Materials, Drawings, Certificates, Suppliers, and more, backed by
PostgreSQL as the single source of truth, with Obsidian as a read-only
documentation mirror (never the reverse direction).

Two decisions fork the entire downstream implementation and needed to be
made explicitly before any code was written, per the source spec's own rule:
*"Before writing code for each major phase: explain the design, identify
risks, wait for confirmation if the design changes significantly."*

## Decision 1: Unified Next.js application (not a separate backend service)

**Chosen:** One Next.js app (`apps/web`). Route Handlers / Server Actions
serve as the API layer. Kernel subsystems (config, logging, db, auth,
plugin-loader, metadata-engine, relationship-engine, search-engine,
navigation, storage, security) live as TypeScript packages
(`packages/core`) imported directly into that one app. One Node process, one
deployable, one Docker container against Postgres.

**Rejected alternative:** a separate NestJS API service + Next.js frontend
as two deployables. NestJS's DI/module system maps very cleanly to "plugin,"
but doubles the operational surface (two processes, an internal network
hop, two things to keep alive) for a system meant to run unattended on a
single offline industrial-network box for 10-20 years. Fewer moving parts
wins here.

**Consequence:** the kernel/plugin boundary is enforced by module structure
and import discipline (mirroring the original codebase's "No-Mix Rule" for
standards data), not by a network/process boundary. This is a conscious
trade-off, revisited below under Risks.

## Decision 2: Config-time plugin registry (not dynamic runtime loading)

**Chosen:** Plugins are versioned TypeScript packages under
`packages/plugins/*`, each exporting a `definePlugin()` manifest
(`@metallicore/plugin-sdk`). "Install" = add the package + list it enabled in
the plugin registry config. "Remove/disable" = flip the config flag (and
optionally delete the package) + rebuild/redeploy. "Upgrade independently" =
bump one plugin package's version without touching others. No plugin is
loaded or executed without a rebuild.

**Rejected alternative:** true dynamic runtime plugin loading — installing,
enabling, or removing plugins on a *running* instance without a rebuild,
closer to a CMS plugin marketplace. This reads as the more literal
interpretation of "installable, removable, disabled, and upgraded
independently," but requires code sandboxing, per-plugin dynamic database
migrations applied at runtime, hot module loading, and a version
compatibility matrix — a substantially larger, higher-risk undertaking that
runs counter to the spec's own "deterministic behavior" and "minimal
technical debt" principles, especially for a system with no one paging an
on-call engineer on an offline network.

**Consequence:** every plugin change ships through a normal build/deploy
cycle. This is the right trade-off for reliability; it does mean plugin
authors cannot push hotfixes to a live instance without a redeploy.

## Structure adopted this phase

```
metallicore/
├── apps/web/                 # The Next.js app (moved as-is from repo root; unmodified behavior)
├── packages/
│   ├── core/                 # Kernel: config, logging, db (real) + auth, plugin-loader,
│   │                         #   metadata-engine, relationship-engine, search-engine,
│   │                         #   navigation, storage, security (interface stubs — filled
│   │                         #   in during their own designated phase, see table below)
│   ├── plugin-sdk/           # PluginDefinition type + definePlugin() — types only until Phase 5
│   └── plugins/              # Empty for now; first plugin (Standards) lands in Phase 7
├── infra/docker-compose.yml  # Local/offline Postgres 16
├── docs/adr/                 # This file and future decision records
└── .env.example
```

## Phase → kernel subsystem map

| Phase | Subsystem | Status after this ADR |
|---|---|---|
| 1 | Config, Logging, DB connection | **Implemented** (this phase) |
| 1 | Auth, Storage, Security, Navigation | Interface stubs only |
| 2 | Repository Layer | Not started |
| 3 | Metadata Engine | Interface stub only |
| 4 | Relationship Engine | Interface stub only |
| 5 | Plugin Framework (real loader) | Interface stub only |
| 6 | Search Engine | Interface stub only |
| 7-13 | Standards, Materials, Documents, Drawings, Certificates, Suppliers, Reports plugins | Not started (existing v1 Standards UI still lives, unported, in `apps/web`) |

## Risks

1. **Module-boundary enforcement is convention, not compiler-enforced.**
   Same shape of risk the original codebase's No-Mix Rule had: nothing
   currently stops a future change from importing kernel internals directly
   from a plugin, bypassing the SDK. Worth a lint rule (e.g.
   dependency-cruiser) once Phase 5 defines the real plugin loader — tracked
   as a follow-up, not blocking Phase 1.
2. **Single-process deployment means a crash in one plugin can affect the
   whole app**, unlike a services architecture with process isolation. Given
   Decision 1's rationale (operational simplicity for an unattended offline
   box), this is accepted; Phase 5 should still ensure a plugin's route
   errors are caught at the boundary so they don't take down unrelated
   plugins' UI.
3. **Workspace lockfile regeneration.** Moving from a single `package.json`
   to npm workspaces regenerates `package-lock.json` from scratch. This is a
   one-time, mechanical change but is a large diff; called out here so it
   isn't mistaken for a dependency audit issue in review.
4. **Drizzle + Postgres are now a required local dependency for development**
   (previously the app had zero backend dependencies). Documented in the
   README; `infra/docker-compose.yml` keeps this a one-command local setup
   that doesn't require internet after the Postgres image is first pulled.

## Not decided here (left to their own phase)

- Repository layer interface shape (Phase 2).
- Actual database schema for the metadata/relationship envelopes (Phase
  3-4).
- Whether the existing v1 Standards UI is ported into
  `packages/plugins/standards` as-is or redesigned against the new
  Repository Layer (Phase 7) — the spec's "preserve stable components,
  implement incrementally" rule argues for porting the UI shell and
  replacing only its data source.
