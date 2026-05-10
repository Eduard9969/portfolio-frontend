import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { environment } from '../../environments/environment';
import { profileQueryOptions } from './profileQueryOptions';

export const usePrefetchProfiles = () => {
  const queryClient = useQueryClient();

  return useCallback(() => {
    environment.locales.forEach((locale: string) => {
      queryClient.prefetchQuery(profileQueryOptions(locale));
    });
  }, [queryClient]);
};
