import { useQuery } from '@tanstack/react-query';
import { useLocale } from '../../providers';
import { profileQueryOptions } from './profileQueryOptions';

export const useProfile = () => {
  const { locale } = useLocale();
  const { data: profile = null, isPending, error } = useQuery(profileQueryOptions(locale));
  return { profile, isPending, error };
};
