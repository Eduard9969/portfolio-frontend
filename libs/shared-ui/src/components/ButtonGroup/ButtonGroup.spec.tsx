import { render, fireEvent } from '@testing-library/react';
import { ButtonGroup } from './ButtonGroup';

const items = [
  { value: 'en', label: 'En' },
  { value: 'ru', label: 'Ru' },
];

describe('ButtonGroup', () => {
  it('renders all item labels', () => {
    const { getByText } = render(<ButtonGroup items={items} current="en" onChange={() => {}} />);
    expect(getByText('En')).toBeTruthy();
    expect(getByText('Ru')).toBeTruthy();
  });

  it('current item is disabled', () => {
    const { getByText } = render(<ButtonGroup items={items} current="en" onChange={() => {}} />);
    expect((getByText('En').closest('button') as HTMLButtonElement).disabled).toBe(true);
    expect((getByText('Ru').closest('button') as HTMLButtonElement).disabled).toBe(false);
  });

  it('calls onChange with item value on click', () => {
    const onChange = vi.fn();
    const { getByText } = render(<ButtonGroup items={items} current="en" onChange={onChange} />);
    fireEvent.click(getByText('Ru'));
    expect(onChange).toHaveBeenCalledWith('ru');
  });
});
