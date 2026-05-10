import { render } from '@testing-library/react';
import { NameTitle } from './NameTitle';

describe('NameTitle', () => {
  it('renders name', () => {
    const { getByText } = render(<NameTitle name="John Doe" title="Developer" />);
    expect(getByText('John Doe')).toBeTruthy();
  });

  it('renders title', () => {
    const { getByText } = render(<NameTitle name="John Doe" title="Frontend Developer" />);
    expect(getByText('Frontend Developer')).toBeTruthy();
  });
});
