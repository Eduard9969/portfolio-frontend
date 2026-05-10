import { render } from '@testing-library/react';
import { SocialLink } from './SocialLink';

describe('SocialLink', () => {
  it('renders anchor with correct href', () => {
    const { getByRole } = render(<SocialLink url="https://github.com/user" label="github" icon={<svg />} />);
    expect((getByRole('link') as HTMLAnchorElement).href).toBe('https://github.com/user');
  });

  it('renders label text', () => {
    const { getByText } = render(<SocialLink url="https://github.com/user" label="github" icon={<svg />} />);
    expect(getByText('github')).toBeTruthy();
  });

  it('has rel nofollow noreferrer', () => {
    const { getByRole } = render(<SocialLink url="https://github.com/user" label="github" icon={<svg />} />);
    expect(getByRole('link').getAttribute('rel')).toBe('nofollow noreferrer');
  });

  it('opens in new tab', () => {
    const { getByRole } = render(<SocialLink url="https://github.com/user" label="github" icon={<svg />} />);
    expect(getByRole('link').getAttribute('target')).toBe('_blank');
  });
});
