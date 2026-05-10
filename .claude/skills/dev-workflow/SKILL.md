---
name: dev-workflow
description: Use when starting the dev server, building, testing, linting, or running Storybook/e2e in this project
---

# Dev Workflow

Package manager: **pnpm**. Always prefix Nx commands with `pnpm nx`.

## Common commands

| Task | Command |
|---|---|
| Dev server (port 4200) | `pnpm nx serve portfolio-app` |
| Build | `pnpm nx build portfolio-app` |
| Lint all | `pnpm nx run-many -t lint` |
| Test all | `pnpm nx run-many -t test` |
| Typecheck all | `pnpm nx run-many -t typecheck` |
| Test single project | `pnpm nx test <project-name>` |
| Storybook for shared-ui | `pnpm nx storybook shared-ui` |
| E2e tests | `pnpm nx e2e portfolio-app-e2e` |

**Projects:** `portfolio-app`, `shared-ui`, `i18n`, `portfolio-app-e2e`

## Notes

- E2e tests start the app automatically via `preview` target — no need to run the dev server separately.
- Storybook is only configured for `shared-ui`.
- `test` target depends on `^build` (builds lib deps first).
- Never run `vite` / `vitest` / `playwright` directly — always go through `pnpm nx`.