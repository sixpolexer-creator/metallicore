# MetalliCore — Engineering Knowledge Platform

Offline-first engineering knowledge platform for standards, materials, and
related engineering objects. See `Metallicore_Prompt.md` (repo parent) for
the full product spec and `docs/adr/` for architectural decisions.

This platform runs on a private, offline industrial network. Internet access
and cloud AI must never be required for normal operation.

## Workspace layout

```
apps/web/            Next.js app — UI shell + API (Route Handlers)
packages/core/        Kernel: config, logging, db connection, and stub
                       interfaces for auth, plugin-loader, metadata-engine,
                       relationship-engine, search-engine, navigation,
                       storage, security
packages/plugin-sdk/  Types + definePlugin() plugins will implement against
packages/plugins/     Individual plugins (Standards, Materials, ...) — empty
                       until Phase 7 of docs/adr/0001-core-architecture.md
infra/                docker-compose.yml — local/offline Postgres
docs/adr/             Architecture Decision Records
```

## Getting started

```bash
npm install
cp .env.example .env
npm run db:up      # starts Postgres via Docker Compose
npm run dev         # starts apps/web on http://localhost:3000
```

## Scripts (from repo root)

| Command | Effect |
|---|---|
| `npm run dev` | Run the web app in dev mode |
| `npm run build` | Build the web app |
| `npm run lint` | Lint all workspaces |
| `npm run typecheck` | Typecheck all workspaces |
| `npm run db:up` / `db:down` | Start/stop local Postgres |

## Status

Phase 1 of 13 (Core Architecture) — see `docs/adr/0001-core-architecture.md`
for what's implemented vs. stubbed, and the full phase order.
