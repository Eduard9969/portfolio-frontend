import { render } from '@testing-library/react';
import { IconTextRow } from './IconTextRow';

describe('IconTextRow', () => {
  it('renders text', () => {
    const { getByText } = render(<IconTextRow text="example@email.com" icon={<svg />} />);
    expect(getByText('example@email.com')).toBeTruthy();
  });

  it('renders icon', () => {
    const { container } = render(<IconTextRow text="text" icon={<svg data-testid="icon" />} />);
    expect(container.querySelector('[data-testid="icon"]')).toBeTruthy();
  });

  it('icon wrapper is a flex container for vertical centering', () => {
    const { container } = render(<IconTextRow text="text" icon={<svg />} />);
    const iconWrapper = container.querySelector('span');
    expect(iconWrapper?.className).toContain('flex');
    expect(iconWrapper?.className).toContain('items-center');
    expect(iconWrapper?.className).toContain('justify-center');
  });
});
