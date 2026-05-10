import { render } from '@testing-library/react';
import { RatingList } from './RatingList';

const items = [
  { label: 'JavaScript', mark: 5 },
  { label: 'TypeScript', mark: 4 },
];

describe('RatingList', () => {
  it('renders all item labels', () => {
    const { getByText } = render(<RatingList items={items} />);
    expect(getByText('JavaScript')).toBeTruthy();
    expect(getByText('TypeScript')).toBeTruthy();
  });

  it('renders correct number of list items', () => {
    const { container } = render(<RatingList items={items} />);
    expect(container.querySelectorAll('li')).toHaveLength(2);
  });
});
