import { render, fireEvent } from '@testing-library/react';
import { Popover } from './Popover';

describe('Popover', () => {
  it('renders trigger button', () => {
    const { getByText } = render(<Popover trigger="Legend">Content</Popover>);
    expect(getByText('Legend')).toBeTruthy();
  });

  it('panel is hidden by default', () => {
    const { getByText } = render(<Popover trigger="Legend">Panel content</Popover>);
    expect(getByText('Panel content').className).toContain('hidden');
  });

  it('shows panel on trigger click', () => {
    const { getByRole, getByText } = render(<Popover trigger="Legend">Panel content</Popover>);
    fireEvent.click(getByRole('button'));
    expect(getByText('Panel content').className).toContain('block');
  });

  it('hides panel on second click', () => {
    const { getByRole, getByText } = render(<Popover trigger="Legend">Panel content</Popover>);
    fireEvent.click(getByRole('button'));
    fireEvent.click(getByRole('button'));
    expect(getByText('Panel content').className).toContain('hidden');
  });

  it('renders children inside panel', () => {
    const { getByText } = render(<Popover trigger="Legend">Hello world</Popover>);
    expect(getByText('Hello world')).toBeTruthy();
  });

  it('aligns trigger to the right by default', () => {
    const { getByRole } = render(<Popover trigger="Legend">Content</Popover>);
    expect(getByRole('button').parentElement?.className).toContain('justify-end');
  });

  it('aligns trigger to the left when align="left"', () => {
    const { getByRole } = render(<Popover trigger="Legend" align="left">Content</Popover>);
    expect(getByRole('button').parentElement?.className).toContain('justify-start');
  });
});
