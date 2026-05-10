import { render } from '@testing-library/react';
import { Header } from './Header';
import type { Social } from '../../types/profile';

vi.mock('@org/shared-ui', () => ({
  NameTitle: ({ name, title }: { name: string; title: string }) => (
    <div>
      <span data-testid="name">{name}</span>
      <span data-testid="title">{title}</span>
    </div>
  ),
  SocialsList: ({ items }: { items: Array<{ label: string }> }) => (
    <div>
      {items.map((item) => (
        <span key={item.label} data-testid="social-item">{item.label}</span>
      ))}
    </div>
  ),
  Avatar: ({ src, alt }: { src: string; alt: string }) => (
    <img data-testid="avatar" src={src} alt={alt} />
  ),
  Icon: () => null,
}));

const linkedin: Social = { title: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' };
const unknown: Social = { title: 'Mastodon', url: 'https://mastodon.social', icon: 'mastodon' };

describe('Header', () => {
  it('renders name and title', () => {
    const { getByTestId } = render(<Header name="John" title="Dev" socials={[]} />);
    expect(getByTestId('name').textContent).toBe('John');
    expect(getByTestId('title').textContent).toBe('Dev');
  });

  it('renders avatar image when avatar prop is provided', () => {
    const { getByTestId } = render(
      <Header name="John" title="Dev" avatar="/photo.jpg" socials={[]} />
    );
    expect(getByTestId('avatar').getAttribute('src')).toBe('/photo.jpg');
    expect(getByTestId('avatar').getAttribute('alt')).toBe('John');
  });

  it('does not render avatar when avatar prop is omitted', () => {
    const { queryByTestId } = render(<Header name="John" title="Dev" socials={[]} />);
    expect(queryByTestId('avatar')).toBeNull();
  });

  it('passes only socials with recognised icon types to SocialsList', () => {
    const { getAllByTestId } = render(
      <Header name="John" title="Dev" socials={[linkedin, unknown]} />
    );
    expect(getAllByTestId('social-item')).toHaveLength(1);
    expect(getAllByTestId('social-item')[0].textContent).toBe('LinkedIn');
  });
});
