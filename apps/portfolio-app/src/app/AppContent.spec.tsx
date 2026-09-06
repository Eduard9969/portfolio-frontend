import { render, fireEvent } from '@testing-library/react';
import { AppContent } from './AppContent';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { useProfile, usePrefetchProfiles } from '../hooks/profile';
import { useLocale } from '../providers';
import { useTranslate } from '@org/i18n';
import { environment } from '../environments/environment';
import type { Profile } from '../types/profile';

vi.mock('../hooks/profile');
vi.mock('../providers', () => ({ useLocale: vi.fn() }));
vi.mock('@org/i18n', () => ({ useTranslate: vi.fn() }));
vi.mock('../environments/environment', () => ({
  environment: { profilesPrefetch: false, locales: ['en'], profileUrl: '' },
}));
const MockProfile = vi.hoisted(() => vi.fn(() => <div data-testid="profile-component" />));

vi.mock('./Profile', () => ({ Profile: MockProfile }));
vi.mock('../components/Loader', () => ({
  Loader: () => <div data-testid="loader" />,
}));

const mockProfile: Profile = {
  name: 'John',
  title: 'Dev',
  avatar: '/photo.jpg',
  socials: [],
  mainSections: [],
  sidebarSections: [],
};

describe('AppContent', () => {
  beforeEach(() => {
    MockProfile.mockImplementation(() => <div data-testid="profile-component" />);
    vi.mocked(useProfile).mockReturnValue({ profile: null, isPending: true, error: null });
    vi.mocked(usePrefetchProfiles).mockReturnValue(vi.fn());
    vi.mocked(useLocale).mockReturnValue({ locale: 'en', setLocale: vi.fn(), locales: ['en'] });
    vi.mocked(useTranslate).mockReturnValue((key: string) => key);
    Object.assign(environment, { profilesPrefetch: false });
  });

  it('shows Loader while pending', () => {
    const { getByTestId } = render(<AppContent />);
    expect(getByTestId('loader')).toBeTruthy();
  });

  it('shows error boundary fallback when there is an error', async () => {
    vi.mocked(useProfile).mockReturnValue({ profile: null, isPending: false, error: new Error('fail') });
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const { findByText } = render(
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <AppContent />
      </ErrorBoundary>
    );
    expect(await findByText('Something went wrong')).toBeTruthy();
  });

  it('shows Loader when profile is not yet available', () => {
    vi.mocked(useProfile).mockReturnValue({ profile: null, isPending: false, error: null });
    const { getByTestId } = render(<AppContent />);
    expect(getByTestId('loader')).toBeTruthy();
  });

  it('shows profile when loaded', async () => {
    vi.mocked(useProfile).mockReturnValue({ profile: mockProfile, isPending: false, error: null });
    const { findByTestId } = render(<AppContent />);
    expect(await findByTestId('profile-component')).toBeTruthy();
  });

  it('does not show locale switcher when there is only one locale', async () => {
    vi.mocked(useProfile).mockReturnValue({ profile: mockProfile, isPending: false, error: null });
    vi.mocked(useLocale).mockReturnValue({ locale: 'en', setLocale: vi.fn(), locales: ['en'] });
    const { findByTestId, queryByRole } = render(<AppContent />);
    await findByTestId('profile-component');
    expect(queryByRole('button')).toBeNull();
  });

  it('shows locale switcher when there are multiple locales', async () => {
    vi.mocked(useProfile).mockReturnValue({ profile: mockProfile, isPending: false, error: null });
    vi.mocked(useLocale).mockReturnValue({ locale: 'en', setLocale: vi.fn(), locales: ['en', 'ru'] });
    vi.mocked(useTranslate).mockReturnValue((key: string) => key.replace('lang.', ''));
    const { findByRole } = render(<AppContent />);
    expect(await findByRole('button', { name: 'en' })).toBeTruthy();
  });

  it('calls setLocale when a different locale is clicked', async () => {
    const setLocale = vi.fn();
    vi.mocked(useProfile).mockReturnValue({ profile: mockProfile, isPending: false, error: null });
    vi.mocked(useLocale).mockReturnValue({ locale: 'en', setLocale, locales: ['en', 'ru'] });
    vi.mocked(useTranslate).mockReturnValue((key: string) => key.replace('lang.', ''));
    const { findByRole } = render(<AppContent />);
    fireEvent.click(await findByRole('button', { name: 'ru' }));
    expect(setLocale).toHaveBeenCalledWith('ru');
  });

  it('calls prefetchProfiles on mount when profilesPrefetch is enabled', () => {
    const prefetchProfiles = vi.fn();
    vi.mocked(usePrefetchProfiles).mockReturnValue(prefetchProfiles);
    vi.mocked(useProfile).mockReturnValue({ profile: null, isPending: false, error: null });
    Object.assign(environment, { profilesPrefetch: true });
    render(<AppContent />);
    expect(prefetchProfiles).toHaveBeenCalledTimes(1);
  });

  it('does not call prefetchProfiles when profilesPrefetch is disabled', () => {
    const prefetchProfiles = vi.fn();
    vi.mocked(usePrefetchProfiles).mockReturnValue(prefetchProfiles);
    vi.mocked(useProfile).mockReturnValue({ profile: null, isPending: false, error: null });
    render(<AppContent />);
    expect(prefetchProfiles).not.toHaveBeenCalled();
  });

});
