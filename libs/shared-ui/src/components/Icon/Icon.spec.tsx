import { render } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
  const names = [
    'linkedin',
    'github',
    'bitbucket',
    'telegram',
    'email',
    'phone',
    'location',
    'info',
  ] as const;

  names.forEach((name) => {
    it(`renders svg for name="${name}"`, () => {
      const { container } = render(<Icon name={name} />);
      expect(container.querySelector('svg')).not.toBeNull();
    });
  });
});
