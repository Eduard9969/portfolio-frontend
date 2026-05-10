import { render } from '@testing-library/react';
import { ErrorContent } from './ErrorContent';
import { useTranslate } from '@org/i18n';

vi.mock('@org/i18n', () => ({ useTranslate: vi.fn() }));

describe('ErrorContent', () => {
  beforeEach(() => {
    vi.mocked(useTranslate).mockReturnValue((key: string) => key);
  });

  it('renders the error.generic translation key', () => {
    const { getByText } = render(<ErrorContent />);
    expect(getByText('error.generic')).toBeTruthy();
  });

  it('renders translated text when translate is provided', () => {
    vi.mocked(useTranslate).mockReturnValue((key: string) =>
      key === 'error.generic' ? 'Something went wrong. Please reload the page.' : key
    );
    const { getByText } = render(<ErrorContent />);
    expect(getByText('Something went wrong. Please reload the page.')).toBeTruthy();
  });
});
