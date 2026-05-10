import { render } from '@testing-library/react';
import { Timeline } from './Timeline';

const items = [
  { period: '2020–2022', title: 'Company A', subtitle: 'Developer', description: 'Desc A' },
  { period: '2022–2024', title: 'Company B', subtitle: 'Senior Developer', description: 'Desc B' },
];

describe('Timeline', () => {
  it('renders all item periods', () => {
    const { getByText } = render(<Timeline items={items} />);
    expect(getByText('2020–2022')).toBeTruthy();
    expect(getByText('2022–2024')).toBeTruthy();
  });

  it('renders all item titles', () => {
    const { getByText } = render(<Timeline items={items} />);
    expect(getByText('Company A')).toBeTruthy();
    expect(getByText('Company B')).toBeTruthy();
  });

  it('renders correct number of list items', () => {
    const { container } = render(<Timeline items={items} />);
    expect(container.querySelectorAll('li')).toHaveLength(2);
  });
});
