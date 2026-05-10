import { useIntl } from 'react-intl';

export const useTranslate = () => {
  const intl = useIntl();
  return (id: string, values?: Record<string, string | number>) =>
    intl.formatMessage({ id }, values);
};
