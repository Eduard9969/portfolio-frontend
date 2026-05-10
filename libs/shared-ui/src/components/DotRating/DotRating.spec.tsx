import { render } from '@testing-library/react';
import { DotRating } from './DotRating';

describe('DotRating', () => {
  it('renders 5 dots by default', () => {
    const { container } = render(<DotRating mark={3} />);
    expect(container.querySelectorAll('span')).toHaveLength(5);
  });

  it('renders custom max dots', () => {
    const { container } = render(<DotRating mark={2} max={4} />);
    expect(container.querySelectorAll('span')).toHaveLength(4);
  });

  it('renders with mark=0 (all empty)', () => {
    const { container } = render(<DotRating mark={0} max={3} />);
    expect(container.querySelectorAll('span')).toHaveLength(3);
  });

  it('renders with mark equal to max (all filled)', () => {
    const { container } = render(<DotRating mark={5} max={5} />);
    expect(container.querySelectorAll('span')).toHaveLength(5);
  });
});
