import { render } from '@testing-library/react';
import { IconTextList } from './IconTextList';

const items = [
  { text: 'user@example.com', icon: <svg /> },
  { text: '+1 234 567', icon: <svg /> },
];

describe('IconTextList', () => {
  it('renders all item texts', () => {
    const { getByText } = render(<IconTextList items={items} />);
    expect(getByText('user@example.com')).toBeTruthy();
    expect(getByText('+1 234 567')).toBeTruthy();
  });

  it('renders correct number of list items', () => {
    const { container } = render(<IconTextList items={items} />);
    expect(container.querySelectorAll('li')).toHaveLength(2);
  });
});
