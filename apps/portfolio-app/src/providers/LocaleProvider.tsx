import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { I18nProvider } from '@org/i18n';
import { environment } from '../environments/environment';

const { locales } = environment;

type LocaleContextValue = {
  locale: string;
  setLocale: (locale: string) => void;
  locales: string[];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
};

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<string>(locales[0]);
  return (
    <LocaleContext.Provider value={{ locale, setLocale, locales }}>
      <I18nProvider locale={locale}>{children}</I18nProvider>
    </LocaleContext.Provider>
  );
};
