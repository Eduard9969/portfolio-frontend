# Portfolio Frontend

[![CI](https://github.com/eduard9969/portfolio-frontend/actions/workflows/ci.yml/badge.svg)](https://github.com/eduard9969/portfolio-frontend/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%E2%89%A520-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![pnpm](https://img.shields.io/badge/pnpm-%E2%89%A511-F69220?logo=pnpm&logoColor=white)](https://pnpm.io)

An open-source Nx monorepo powering a personal portfolio web app. The app renders a profile from a JSON source — a local file or an API response — and validates it against a schema before rendering. The profile shape drives dynamic section rendering, and the UI is fully localizable.

## Table of Contents

- [Features](#features)
- [Workspace structure](#workspace-structure)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Profile data](#profile-data)
- [Available scripts](#available-scripts)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Schema-driven rendering** — profile JSON is validated with [Zod](https://zod.dev); the section `type` (`text`, `icon-list`, `skill-list`, `text-value-list`, `timeline`) determines which renderer draws it.
- **Internationalization** — multiple locales via `@org/i18n` (built on react-intl), with per-locale profile documents and runtime locale switching.
- **Data fetching & caching** — profile documents are fetched and cached with TanStack Query, with optional prefetching of every configured locale.
- **Themeable design system** — 19 presentational components in `@org/shared-ui`, styled with Tailwind CSS v4 and themed through CSS custom properties.
- **Error handling** — a top-level error boundary and a dedicated error state for failed profile fetches.
- **Tested end to end** — unit tests (Vitest + Testing Library) alongside Playwright e2e coverage for locale switching and profile rendering.

## Workspace structure

| Path | Description |
|---|---|
| [`apps/portfolio-app`](apps/portfolio-app) | React 19 app — Vite, Tailwind CSS v4, react-intl, TanStack Query, Zod |
| `apps/portfolio-app-e2e` | Playwright end-to-end tests for `portfolio-app` |
| [`libs/shared-ui`](libs/shared-ui/README.md) | Publishable UI component library with Storybook — see its [README](libs/shared-ui/README.md) |
| [`libs/i18n`](libs/i18n/README.md) | Publishable i18n wrapper around react-intl — see its [README](libs/i18n/README.md) |

## Tech stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · Nx 22 · react-intl · TanStack Query · Zod · Vitest · Playwright · Storybook

## Prerequisites

- Node.js ≥ 20
- pnpm ≥ 11

## Getting started

```bash
git clone https://github.com/eduard9969/portfolio-frontend.git
cd portfolio-frontend
pnpm install
pnpm serve
```

The app runs at http://localhost:4200.

## Environment variables

The app is configured through Vite env variables. Create a `.env` file in `apps/portfolio-app/` (or the repo root if your Vite root is configured there) to override the defaults.

| Variable | Default | Description |
|---|---|---|
| `VITE_LOCALES` | `en` | Comma-separated locale codes available in the app |
| `VITE_PROFILE_URL` | `/profile.{locale}.json` | URL template for profile data — `{locale}` is replaced at runtime |
| `VITE_PROFILES_PREFETCH` | `false` | Set to `true` to prefetch all locale profiles on initial load |

Example `.env` for a bilingual setup:

```env
VITE_LOCALES=en,ru
VITE_PROFILE_URL=/data/profile.{locale}.json
VITE_PROFILES_PREFETCH=true
```

## Profile data

The app fetches JSON from the URL defined by `VITE_PROFILE_URL`. At runtime, `{locale}` is replaced with the active locale code (e.g. `en` → `/profile.en.json`). The source can be a static file or an API endpoint — anything that returns profile JSON matching the schema in `apps/portfolio-app/src/types/profile.schema.ts`.

The document is split into `mainSections` and `sidebarSections`, each an array of typed sections:

| Section `type` | Renders |
|---|---|
| `text` | A block of free-form text |
| `icon-list` | A list of icon + text rows |
| `skill-list` | Labelled ratings, optionally with a legend tooltip |
| `text-value-list` | A list of label → value pairs |
| `timeline` | Chronological entries (role, organization, period, description) |

For static files, place them in the `public/` directory of `apps/portfolio-app` (see `public/profile.en.json` for a full example) or serve them from a CDN and point `VITE_PROFILE_URL` accordingly.

## Available scripts

| Command | Description |
|---|---|
| `pnpm serve` | Start the dev server |
| `pnpm build` | Production build |
| `pnpm test` | Run all unit tests |
| `pnpm lint` | Lint all projects |
| `pnpm typecheck` | Type-check all projects |
| `pnpm storybook` | Storybook for `shared-ui` components |

All commands delegate to Nx under the hood. You can also run project-specific tasks directly:

```bash
pnpm nx run @org/portfolio-app:build
pnpm nx run shared-ui:storybook
```

## Testing

```bash
pnpm test                                          # unit tests (Vitest) across the workspace
pnpm nx run @org/portfolio-app-e2e:e2e              # Playwright e2e tests
```

CI (`.github/workflows/ci.yml`) runs lint, unit tests, build, typecheck, and the Chromium e2e suite on every push and pull request.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes following [Conventional Commits](https://www.conventionalcommits.org/)
4. Run `pnpm lint`, `pnpm typecheck`, and `pnpm test` before opening a pull request
5. Open a pull request

## License

Distributed under the [MIT License](LICENSE).
