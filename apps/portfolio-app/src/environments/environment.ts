export const environment = {
  locales: import.meta.env.VITE_LOCALES?.split(',') ?? ['en'],
  profileUrl: import.meta.env.VITE_PROFILE_URL ?? '/profile.{locale}.json',
  profilesPrefetch: import.meta.env.VITE_PROFILES_PREFETCH === 'true',
};
