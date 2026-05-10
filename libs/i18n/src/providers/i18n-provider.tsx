import { IntlProvider } from 'react-intl';
import type { ReactNode } from 'react';
import { messages, defaultLocale } from '../translations';

type Props = {
  locale: string;
  defaultLocale?: string;
  children: ReactNode;
};

export const I18nProvider = ({
  locale,
  defaultLocale: fallback = defaultLocale,
  children,
}: Props) => (
  <IntlProvider
    locale={locale}
    messages={messages[locale] ?? messages[fallback]}
    defaultLocale={fallback}
  >
    {children}
  </IntlProvider>
);
