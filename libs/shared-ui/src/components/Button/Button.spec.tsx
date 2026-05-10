import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeTruthy();
  });

  it('is not disabled by default', () => {
    const { getByRole } = render(<Button>Label</Button>);
    expect((getByRole('button') as HTMLButtonElement).disabled).toBe(false);
  });

  it('is disabled when active', () => {
    const { getByRole } = render(<Button active>Label</Button>);
    expect((getByRole('button') as HTMLButtonElement).disabled).toBe(true);
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    const { getByRole } = render(<Button onClick={onClick}>Label</Button>);
    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('does not call onClick when active', () => {
    const onClick = vi.fn();
    const { getByRole } = render(<Button active onClick={onClick}>Label</Button>);
    fireEvent.click(getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });
});
