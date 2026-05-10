import { render, fireEvent, screen } from '@testing-library/react';
import { LocaleProvider, useLocale } from './LocaleProvider';

vi.mock('../environments/environment', () => ({
  environment: { locales: ['en', 'ru'], profilesPrefetch: false, profileUrl: '' },
}));

vi.mock('@org/i18n', () => ({
  I18nProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('useLocale', () => {
  it('throws when used outside LocaleProvider', () => {
    const Consumer = () => {
      useLocale();
      return null;
    };
    vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<Consumer />)).toThrow('useLocale must be used within LocaleProvider');
    vi.restoreAllMocks();
  });
});

describe('LocaleProvider', () => {
  it('provides initial locale as first entry in locales array', () => {
    const Consumer = () => {
      const { locale } = useLocale();
      return <span data-testid="locale">{locale}</span>;
    };
    render(<LocaleProvider><Consumer /></LocaleProvider>);
    expect(screen.getByTestId('locale').textContent).toBe('en');
  });

  it('exposes locales array from environment', () => {
    const Consumer = () => {
      const { locales } = useLocale();
      return <span data-testid="locales">{locales.join(',')}</span>;
    };
    render(<LocaleProvider><Consumer /></LocaleProvider>);
    expect(screen.getByTestId('locales').textContent).toBe('en,ru');
  });

  it('updates locale when setLocale is called', () => {
    const Consumer = () => {
      const { locale, setLocale } = useLocale();
      return (
        <>
          <span data-testid="locale">{locale}</span>
          <button onClick={() => setLocale('ru')}>switch</button>
        </>
      );
    };
    render(<LocaleProvider><Consumer /></LocaleProvider>);
    expect(screen.getByTestId('locale').textContent).toBe('en');
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('locale').textContent).toBe('ru');
  });
});
