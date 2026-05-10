import { render } from '@testing-library/react';
import { Footer } from './Footer';
import { useTranslate } from '@org/i18n';

vi.mock('@org/i18n', () => ({ useTranslate: vi.fn() }));

describe('Footer', () => {
  beforeEach(() => {
    vi.mocked(useTranslate).mockReturnValue(
      (key: string, values?: Record<string, string | number>) => {
        if (key === 'footer.inspired_by') return `Inspired by ${values?.['author']}`;
        if (key === 'footer.source_layout') return 'Source Layout';
        return key;
      }
    );
  });

  it('renders author name in the inspired_by link', () => {
    const { getByRole } = render(<Footer />);
    expect(getByRole('link', { name: /m\.salama \/ Magnific/ })).toBeTruthy();
  });

  it('renders source layout link', () => {
    const { getByRole } = render(<Footer />);
    expect(getByRole('link', { name: 'Source Layout' })).toBeTruthy();
  });

  it('author link points to the correct URL', () => {
    const { getByRole } = render(<Footer />);
    expect(
      getByRole('link', { name: /Inspired by/ }).getAttribute('href')
    ).toBe('https://www.magnific.com/author/m-salama');
  });

  it('source layout link points to the correct URL', () => {
    const { getByRole } = render(<Footer />);
    expect(
      getByRole('link', { name: 'Source Layout' }).getAttribute('href')
    ).toBe('https://github.com/Eduard9969/portfolio-frontend');
  });
});
