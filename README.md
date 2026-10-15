# PP Laminate Platform (`pp-laminate-platform`)

> **Wholesale Plywood & Laminate Platform for Pawanputra (PP) Laminate — Surat, India**

A monorepo platform comprising a public product catalogue website, an internal wholesale operations ERP dashboard, a modular NestJS API, and a PostgreSQL database managed via Prisma ORM.

---

## Architecture Overview

```text
pp-laminate-platform/
├── apps/
│   ├── web/                    # Public product catalogue (Next.js 14, Tailwind CSS)
│   ├── erp/                    # Internal wholesale ERP dashboard (Next.js 14, Tailwind CSS)
│   └── api/                    # Modular monolith API (NestJS, Swagger, CORS, Health Check)
├── packages/
│   ├── database/               # Prisma ORM schema & client singleton for PostgreSQL
│   ├── types/                  # Shared TypeScript models, DTOs & API response contracts
│   ├── eslint-config/          # Shared ESLint configuration
│   └── typescript-config/      # Shared TypeScript base configuration files
├── docs/
│   ├── PROJECT_BRIEF.md        # Commercial context, Surat wholesale market & business rules
│   └── OPEN_QUESTIONS.md       # Unknowns list (statutory GST, accountant workflow, sync)
├── .github/
│   └── workflows/ci.yml        # CI pipeline (lint, typecheck, test, build)
├── .env.example                # Safe environment variable placeholders
├── pnpm-workspace.yaml         # pnpm workspace definition
└── package.json                # Monorepo scripts & dev dependencies
```

---

## Technology Stack

- **Package Manager:** `pnpm` workspaces (v12.11+)
- **Runtime:** Node.js 20 LTS
- **Language:** TypeScript 5.6+
- **Public Website (`apps/web`):** Next.js 14 (App Router), Tailwind CSS, Lucide Icons
- **Internal ERP (`apps/erp`):** Next.js 14 (App Router), Tailwind CSS, Lucide Icons
- **Backend API (`apps/api`):** NestJS 10 (Modular Monolith)
- **Database & ORM (`packages/database`):** PostgreSQL + Prisma ORM 5.22
- **Testing:** Jest, ts-jest
- **Code Quality:** ESLint, Prettier
- **Continuous Integration:** GitHub Actions

---

## Key Business Capabilities

1. **Public Product Catalogue (`apps/web`):**
   - Fast lookup by SKU code (e.g. `SF2042`)
   - Surface finish and sheet thickness filters (High Gloss, Suede, 1mm, 0.8mm, Marine 710)
   - Transparent weekly physical inventory indicator (shows exact last-verified audit date)
   - Public standard list pricing
   - Direct WhatsApp and telephone enquiry CTAs for Surat hardware dealers

2. **Internal Wholesale ERP Dashboard (`apps/erp`):**
   - Wholesale orders registry tracking list amount vs negotiated customer rate
   - Retail shop credit monitoring and outstanding ledger balances in Surat
   - Physical inventory verification audit log preserving staff member identity
   - Role separation between Partners and Shop Staff
   - Offline-ready sync status indicator

3. **Backend API (`apps/api`):**
   - Health check endpoint (`GET /api/v1/health`)
   - Product catalogue endpoints (`GET /api/v1/products`, `GET /api/v1/products/:code`)
   - Wholesale customer enquiry ingestion (`POST /api/v1/enquiries`)
   - Resilient database failover (operates gracefully with mock catalogue in offline/local mode)

---

## Getting Started

### 1. Prerequisites
- **Node.js:** `v20.x` or higher (`node -v`)
- **pnpm:** `v12.x` (`pnpm -v` or `pnpm.cmd -v` on Windows)
- **Git:** `git --version`
- **PostgreSQL:** Local instance or cloud database (Neon, Supabase, AWS RDS)

### 2. Environment Setup
Copy the root `.env.example` file:
```bash
cp .env.example .env.local
```

Configure your PostgreSQL database connection string in `.env.local`:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/pp_laminate_dev?schema=public"
```

### 3. Install Dependencies
```bash
pnpm install
```

### 4. Generate Prisma Client
```bash
pnpm db:generate
```

### 5. Run Development Servers
You can run any application individually:

```bash
# Public Product Catalogue (http://localhost:3000)
pnpm dev:web

# Internal Wholesale ERP (http://localhost:3001)
pnpm dev:erp

# NestJS Backend API (http://localhost:4000/api/v1)
pnpm dev:api
```

---

## Workspace Scripts

| Command | Action |
| :--- | :--- |
| `pnpm dev:web` | Start Next.js public website dev server (port 3000) |
| `pnpm dev:erp` | Start Next.js ERP dashboard dev server (port 3001) |
| `pnpm dev:api` | Start NestJS API dev server in watch mode (port 4000) |
| `pnpm build` | Build all packages and applications |
| `pnpm typecheck` | Run TypeScript typechecking across the entire monorepo |
| `pnpm lint` | Run ESLint across all projects |
| `pnpm test` | Run all unit and smoke tests |
| `pnpm format` | Auto-format files with Prettier |
| `pnpm format:check`| Check formatting consistency |
| `pnpm db:generate` | Generate Prisma client from schema |
| `pnpm db:push` | Push schema changes directly to PostgreSQL |

---

## Git Workflow & Branch Safety Policy (Mandatory)

- `main` is the **stable production release** branch. Never develop or push directly to `main`.
- `dev` is the **integration** branch. Never develop directly on `dev`.
- All development occurs on dedicated feature/chore branches created from `dev`:
  - `feature/<feature-name>`
  - `chore/<chore-name>`
  - `fix/<fix-name>`
- **Pre-commit verification:** Always review `git status`, diffs, staged changes, and pass all tests and lint checks before pushing.
- **Pull Requests:** Push only the reviewed feature branch and open a PR targeting `dev`.
- **Approval gate:** Never merge a PR or push directly to `dev` or `main` without explicit approval.
- **Security:** Never commit `.env` files, credentials, secrets, or confidential business data.

---

## Current Status & Next Milestones

- [x] Initial monorepo scaffold with pnpm workspaces
- [x] Public catalogue web app with search, stock badges, and WhatsApp CTAs
- [x] Internal ERP dashboard with sales, credit, and inventory audit logs
- [x] NestJS API with health checks, catalogue endpoints, and resilient database fallback
- [x] Prisma database schema with PostgreSQL types and models
- [x] Shared TypeScript configs, ESLint rules, and shared domain types
- [x] Documentation, open questions register, and CI pipeline
- [ ] Dedicated Stitch UI design passes for public web app & ERP dashboard
- [ ] Accountant workflow alignment & statutory GST integration
- [ ] Offline synchronization protocol with IndexedDB and conflict resolution
