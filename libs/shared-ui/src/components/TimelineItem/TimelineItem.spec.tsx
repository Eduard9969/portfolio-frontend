import { render } from '@testing-library/react';
import { TimelineItem } from './TimelineItem';

const props = {
  period: '2020–2023',
  title: 'Acme Corp',
  subtitle: 'Frontend Developer',
  description: 'Built scalable UI components.',
};

describe('TimelineItem', () => {
  it('renders period', () => {
    const { getByText } = render(<TimelineItem {...props} />);
    expect(getByText('2020–2023')).toBeTruthy();
  });

  it('renders title', () => {
    const { getByText } = render(<TimelineItem {...props} />);
    expect(getByText('Acme Corp')).toBeTruthy();
  });

  it('renders subtitle', () => {
    const { getByText } = render(<TimelineItem {...props} />);
    expect(getByText('Frontend Developer')).toBeTruthy();
  });

  it('renders description', () => {
    const { getByText } = render(<TimelineItem {...props} />);
    expect(getByText('Built scalable UI components.')).toBeTruthy();
  });
});
