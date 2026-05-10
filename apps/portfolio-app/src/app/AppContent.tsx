import { lazy, Suspense, useEffect } from 'react';
import { ButtonGroup } from '@org/shared-ui';
import { useTranslate } from '@org/i18n';
import { useLocale } from '../providers';
import { useProfile, usePrefetchProfiles } from '../hooks/profile';
import { environment } from '../environments/environment';
import { Loader } from '../components/Loader';

const Profile = lazy(() =>
  import('./Profile').then((module) => ({ default: module.Profile }))
);

const LocaleSwitcher = () => {
  const { locale, setLocale, locales } = useLocale();
  const translate = useTranslate();

  if (locales.length <= 1) {
    return null;
  }

  return (
    <div className="text-right mb-1.5">
      <ButtonGroup
        current={locale}
        onChange={setLocale}
        items={locales.map((localeItem) => ({ value: localeItem, label: translate(`lang.${localeItem}`) }))}
      />
    </div>
  );
};

export const AppContent = () => {
  const { profile, isPending, error } = useProfile();
  const prefetchProfiles = usePrefetchProfiles();

  // prefetch remaining locale profiles in background after mount
  useEffect(() => {
    if (environment.profilesPrefetch) {
      prefetchProfiles();
    }
  }, [prefetchProfiles]);

  if (error) throw error;
  if (isPending || !profile) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <div className="max-w-[1200px] w-full mx-auto relative py-6 lg:py-25">
        <LocaleSwitcher />
        <div className="bg-white shadow-[1px_36px_50px_0_rgba(0,0,0,0.27)]">
          <Profile profile={profile} />
        </div>
      </div>
    </Suspense>
  );
};
