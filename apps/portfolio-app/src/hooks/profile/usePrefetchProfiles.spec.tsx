import { renderHook } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { usePrefetchProfiles } from './usePrefetchProfiles';

vi.mock('../../environments/environment', () => ({
  environment: { locales: ['en', 'ru'], profilesPrefetch: false, profileUrl: '' },
}));

const makeWrapper = (queryClient: QueryClient) =>
  ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

describe('usePrefetchProfiles', () => {
  it('prefetches profiles for all locales when called', () => {
    const queryClient = new QueryClient();
    const prefetchQuery = vi.spyOn(queryClient, 'prefetchQuery').mockResolvedValue(undefined);

    const { result } = renderHook(() => usePrefetchProfiles(), { wrapper: makeWrapper(queryClient) });
    result.current();

    expect(prefetchQuery).toHaveBeenCalledTimes(2);
  });

  it('returns a stable callback across re-renders', () => {
    const queryClient = new QueryClient();
    vi.spyOn(queryClient, 'prefetchQuery').mockResolvedValue(undefined);

    const { result, rerender } = renderHook(() => usePrefetchProfiles(), {
      wrapper: makeWrapper(queryClient),
    });
    const firstCallback = result.current;
    rerender();

    expect(result.current).toBe(firstCallback);
  });
});
