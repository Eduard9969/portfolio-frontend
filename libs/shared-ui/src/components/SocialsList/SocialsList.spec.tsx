import { render } from '@testing-library/react';
import { SocialsList } from './SocialsList';

const items = [
  { label: 'github', url: 'https://github.com/user', icon: <svg /> },
  { label: 'linkedin', url: 'https://linkedin.com/in/user', icon: <svg /> },
];

describe('SocialsList', () => {
  it('renders all social links', () => {
    const { getByText } = render(<SocialsList items={items} />);
    expect(getByText('github')).toBeTruthy();
    expect(getByText('linkedin')).toBeTruthy();
  });

  it('renders correct number of list items', () => {
    const { container } = render(<SocialsList items={items} />);
    expect(container.querySelectorAll('li')).toHaveLength(2);
  });

  it('passes url and label to each SocialLink', () => {
    const { getByTitle } = render(<SocialsList items={items} />);
    expect((getByTitle('github').closest('a') as HTMLAnchorElement).href).toContain('github.com');
    expect((getByTitle('linkedin').closest('a') as HTMLAnchorElement).href).toContain('linkedin.com');
  });
});
