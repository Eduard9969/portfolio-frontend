import { render } from '@testing-library/react';
import { LabelRow } from './LabelRow';

describe('LabelRow', () => {
  it('renders label', () => {
    const { getByText } = render(<LabelRow label="English">B2</LabelRow>);
    expect(getByText('English')).toBeTruthy();
  });

  it('renders children', () => {
    const { getByText } = render(<LabelRow label="English">B2</LabelRow>);
    expect(getByText('B2')).toBeTruthy();
  });
});
