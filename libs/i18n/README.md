# @org/i18n

i18n wrapper for the portfolio project, built on [react-intl](https://formatjs.io/docs/react-intl/).

## Install

```bash
pnpm add @org/i18n
```

> In this Nx monorepo the package is already available as a workspace dependency.

## Usage

```tsx
import { I18nProvider, useTranslate, useIntl, FormattedMessage } from '@org/i18n';

// 1. Wrap your app with the provider
function App() {
  return (
    <I18nProvider locale="en">
      <Page />
    </I18nProvider>
  );
}

// 2. Translate inside a component using the hook
function Page() {
  const translate = useTranslate();
  return <h1>{translate('page.title')}</h1>;
}

// 3. Or use FormattedMessage directly
function Footer() {
  return <footer><FormattedMessage id="footer.text" /></footer>;
}

// 4. Access the full intl API
function DateDisplay({ date }: { date: Date }) {
  const intl = useIntl();
  return <span>{intl.formatDate(date)}</span>;
}
```

## Exports

| Export | Description |
|---|---|
| `I18nProvider` | Context provider — wraps the app with the active locale |
| `useTranslate` | Hook returning a `(id: string, values?: Record<string, string \| number>) => string` translate function |
| `useIntl` | Raw react-intl `useIntl` hook |
| `FormattedMessage` | Raw react-intl `FormattedMessage` component |
| `defaultLocale` | The default locale string (`"en"`) |
| `IntlShape` | Type — return type of `useIntl()`, useful for typing props |

## Supported locales

`en`, `ru` — add new translations in `libs/i18n/src/translations/`.

## License

MIT — see the [repository license](../../LICENSE).
