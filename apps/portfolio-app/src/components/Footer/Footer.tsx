import { useTranslate } from '@org/i18n';

const AUTHOR_NAME = 'm.salama / Magnific';
const AUTHOR_URL = 'https://www.magnific.com/author/m-salama';
const SOURCE_URL = 'https://github.com/Eduard9969/portfolio-frontend';

export const Footer = () => {
  const translate = useTranslate();
  return (
    <footer className="absolute bottom-2.5 left-8 text-[#2f4f4f] text-xs max-lg:text-white">
      <p>
        <a href={AUTHOR_URL} rel="nofollow noreferrer" target="_blank">
          {translate('footer.inspired_by', { author: AUTHOR_NAME })}
        </a>
        {' | '}
        <a href={SOURCE_URL} rel="nofollow noreferrer" target="_blank">
          {translate('footer.source_layout')}
        </a>
      </p>
    </footer>
  );
};
