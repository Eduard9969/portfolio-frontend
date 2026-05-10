import { render } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
  it('renders with status role', () => {
    const { getByRole } = render(<Loader />);
    expect(getByRole('status')).toBeTruthy();
  });

  it('has accessible label', () => {
    const { getByRole } = render(<Loader />);
    expect(getByRole('status').getAttribute('aria-label')).toBe('Loading');
  });
});
