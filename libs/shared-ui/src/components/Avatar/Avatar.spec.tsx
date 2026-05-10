import { render } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders image with correct src', () => {
    const { getByRole } = render(<Avatar src="/photo.jpg" alt="User" />);
    expect((getByRole('img') as HTMLImageElement).src).toContain('/photo.jpg');
  });

  it('renders image with correct alt', () => {
    const { getByRole } = render(<Avatar src="/photo.jpg" alt="John Doe" />);
    expect((getByRole('img') as HTMLImageElement).alt).toBe('John Doe');
  });
});
