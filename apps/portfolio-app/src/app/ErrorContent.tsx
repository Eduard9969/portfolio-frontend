import { useTranslate } from '@org/i18n';

export const ErrorContent = () => {
  const translate = useTranslate();
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-red-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
        />
      </svg>
      <p className="text-gray-400 text-sm tracking-wide">{translate('error.generic')}</p>
    </div>
  );
};
