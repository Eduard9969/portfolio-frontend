import { render } from '@testing-library/react';
import { Section } from './Section';

describe('Section', () => {
  it('renders title', () => {
    const { getByText } = render(<Section title="Experience">Content</Section>);
    expect(getByText('Experience')).toBeTruthy();
  });

  it('renders children', () => {
    const { getByText } = render(<Section title="Skills">Skill content</Section>);
    expect(getByText('Skill content')).toBeTruthy();
  });

  it('renders without errors with withLine prop', () => {
    const { getByText } = render(<Section title="Skills" withLine>Content</Section>);
    expect(getByText('Skills')).toBeTruthy();
  });
});
