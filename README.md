# Portfolio Frontend

An open-source Nx monorepo powering a personal portfolio web app. The app renders a profile from a JSON source — a local file or an API response — and supports multiple locales. The JSON structure drives dynamic section rendering; UI components and i18n utilities are extracted into publishable libraries.

## Workspace structure

| Path | Description |
|---|---|
| `apps/portfolio-app` | React 19 app — Vite, Tailwind CSS v4, react-intl, TanStack Query |
| `libs/shared-ui` | Publishable UI component library with Storybook |
| `libs/i18n` | Publishable i18n wrapper (react-intl) |

## Prerequisites

- Node.js ≥ 20
- pnpm ≥ 11

## Quick start

```bash
git clone <repo-url>
cd portfolio-frontend
pnpm install
pnpm serve
```

App runs at http://localhost:4200.

## Dev commands

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

The app fetches JSON from the URL defined by `VITE_PROFILE_URL`. At runtime, `{locale}` is replaced with the active locale code (e.g. `en` → `/profile.en.json`). The source can be a static file or an API endpoint — anything that returns the profile JSON.

The JSON structure drives dynamic section rendering: the shape of the data determines which sections and blocks appear on the page.

For static files, place them in the `public/` directory of `apps/portfolio-app` or serve them from a CDN and point `VITE_PROFILE_URL` accordingly.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes following [Conventional Commits](https://www.conventionalcommits.org/)
4. Open a pull request

## License

MIT
