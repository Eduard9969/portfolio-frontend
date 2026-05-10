import { render, fireEvent } from '@testing-library/react';
import { RatingTooltip } from './RatingTooltip';

const labels = ['Beginner', 'Elementary', 'Intermediate', 'Advanced', 'Expert'];

describe('RatingTooltip', () => {
  it('renders legend label as trigger', () => {
    const { getByText } = render(<RatingTooltip legendLabel="Rating legend" labels={labels} />);
    expect(getByText('Rating legend')).toBeTruthy();
  });

  it('shows all labels after clicking trigger', () => {
    const { getByRole, getByText } = render(<RatingTooltip legendLabel="Legend" labels={labels} />);
    fireEvent.click(getByRole('button'));
    labels.forEach((label) => expect(getByText(label)).toBeTruthy());
  });

  it('renders one rating row per label', () => {
    const { getByRole, container } = render(<RatingTooltip legendLabel="Legend" labels={labels} />);
    fireEvent.click(getByRole('button'));
    expect(container.querySelectorAll('li')).toHaveLength(labels.length);
  });

  it('aligns right by default', () => {
    const { getByRole } = render(<RatingTooltip legendLabel="Legend" labels={labels} />);
    expect(getByRole('button').parentElement?.className).toContain('justify-end');
  });

  it('aligns left when align="left"', () => {
    const { getByRole } = render(<RatingTooltip legendLabel="Legend" labels={labels} align="left" />);
    expect(getByRole('button').parentElement?.className).toContain('justify-start');
  });
});
