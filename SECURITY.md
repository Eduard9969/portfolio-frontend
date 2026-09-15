# Security Policy

## Supported Versions

This repository is a single Nx monorepo (`portfolio-app` plus the `shared-ui` and `i18n` libraries) that isn't published or released as versioned packages — there's no external registry consumers depend on. Only the latest code on the `main` branch is maintained and receives security fixes; older commits, tags, or forks are not supported.

## Reporting a Vulnerability

Please report security vulnerabilities privately using [GitHub's private vulnerability reporting](https://github.com/eduard9969/portfolio-frontend/security/advisories/new) (Security tab → **Report a vulnerability**) rather than opening a public issue.

This is a personal, actively-maintained open-source project. Reports are handled on a best-effort basis:

- You'll get an initial acknowledgment as soon as possible.
- If accepted, a fix will be prepared and released on `main`; you'll be credited in the advisory unless you ask otherwise.
- If declined (e.g. not reproducible, or out of scope), you'll get an explanation why.

## Automated scanning

This repository already runs [CodeQL](.github/workflows/codeql.yml) analysis and has Dependabot security updates enabled — dependency vulnerabilities are generally caught and patched automatically rather than needing a manual report.
