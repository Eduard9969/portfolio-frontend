import type { QueryFunctionContext } from '@tanstack/react-query';
import { profileQueryOptions } from './profileQueryOptions';

vi.mock('../../environments/environment', () => ({
  environment: { profileUrl: '/profile.{locale}.json', locales: ['en'], profilesPrefetch: false },
}));

const mockProfile = {
  name: 'John',
  title: 'Dev',
  avatar: '/photo.jpg',
  socials: [],
  mainSections: [],
  sidebarSections: [],
};

const makeContext = (queryKey: ReturnType<typeof profileQueryOptions>['queryKey']): QueryFunctionContext<typeof queryKey> => ({
  queryKey,
  signal: new AbortController().signal,
  meta: undefined,
});

describe('profileQueryOptions', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('generates correct queryKey for locale', () => {
    const options = profileQueryOptions('en');
    expect(options.queryKey).toEqual(['profile', 'en']);
  });

  it('fetches URL with locale substituted', async () => {
    vi.mocked(fetch).mockResolvedValue({ ok: true, json: async () => mockProfile } as Response);

    const options = profileQueryOptions('ru');
    await options.queryFn(makeContext(options.queryKey));

    expect(vi.mocked(fetch)).toHaveBeenCalledWith('/profile.ru.json');
  });

  it('returns parsed profile on success', async () => {
    vi.mocked(fetch).mockResolvedValue({ ok: true, json: async () => mockProfile } as Response);

    const options = profileQueryOptions('en');
    const result = await options.queryFn(makeContext(options.queryKey));

    expect(result).toEqual(mockProfile);
  });

  it('throws with status message on non-ok response', async () => {
    vi.mocked(fetch).mockResolvedValue({ ok: false, status: 404 } as Response);

    const options = profileQueryOptions('en');
    await expect(options.queryFn(makeContext(options.queryKey))).rejects.toThrow(
      'Failed to load profile: 404'
    );
  });

  it('throws when response is missing required fields', async () => {
    vi.mocked(fetch).mockResolvedValue({ ok: true, json: async () => ({ name: 'John' }) } as Response);

    const options = profileQueryOptions('en');
    await expect(options.queryFn(makeContext(options.queryKey))).rejects.toThrow();
  });

  it('throws when a section has an unknown type', async () => {
    const invalid = { ...mockProfile, mainSections: [{ type: 'unknown', title: 'X' }] };
    vi.mocked(fetch).mockResolvedValue({ ok: true, json: async () => invalid } as Response);

    const options = profileQueryOptions('en');
    await expect(options.queryFn(makeContext(options.queryKey))).rejects.toThrow();
  });
});
