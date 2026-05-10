import { queryOptions } from '@tanstack/react-query';
import { environment } from '../../environments/environment';
import { ProfileSchema } from '../../types/profile.schema';

export const profileQueryOptions = (locale: string) =>
  queryOptions({
    queryKey: ['profile', locale],
    queryFn: async () => {
      const url = environment.profileUrl.replace('{locale}', locale);
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Failed to load profile: ${res.status}`);
      return ProfileSchema.parse(await res.json());
    },
    staleTime: Infinity,
  });
