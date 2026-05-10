import { render } from '@testing-library/react';
import { LabelValueList } from './LabelValueList';

const items = [
  { label: 'Location', value: 'Berlin' },
  { label: 'Age', value: '30' },
];

describe('LabelValueList', () => {
  it('renders all labels and values', () => {
    const { getByText } = render(<LabelValueList items={items} />);
    expect(getByText('Location')).toBeTruthy();
    expect(getByText('Berlin')).toBeTruthy();
    expect(getByText('Age')).toBeTruthy();
    expect(getByText('30')).toBeTruthy();
  });

  it('renders correct number of list items', () => {
    const { container } = render(<LabelValueList items={items} />);
    expect(container.querySelectorAll('li')).toHaveLength(2);
  });
});
