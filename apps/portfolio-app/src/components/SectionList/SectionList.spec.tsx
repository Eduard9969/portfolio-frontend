import { render } from '@testing-library/react';
import { SectionList } from './SectionList';
import type { SectionPrimitive } from '../../types/profile';

vi.mock('../SectionRenderers', () => ({
  renderSection: (section: SectionPrimitive) => (
    <span data-testid={`renderer-${section.type}`} />
  ),
}));

describe('SectionList', () => {
  it('renders a section element for each item', () => {
    const sections: SectionPrimitive[] = [
      { type: 'text', title: 'About', text: 'Hello' },
      { type: 'text', title: 'Skills', text: 'React' },
    ];
    const { container } = render(<SectionList sections={sections} />);
    expect(container.querySelectorAll('section')).toHaveLength(2);
  });

  it('renders each section title', () => {
    const sections: SectionPrimitive[] = [
      { type: 'text', title: 'About Me', text: 'Hello' },
    ];
    const { getByText } = render(<SectionList sections={sections} />);
    expect(getByText('About Me')).toBeTruthy();
  });

  it('dispatches to the correct renderer for each section type', () => {
    const sections: SectionPrimitive[] = [
      { type: 'text', title: 'About', text: 'Hello' },
      { type: 'icon-list', title: 'Icons', items: [] },
    ];
    const { getByTestId } = render(<SectionList sections={sections} />);
    expect(getByTestId('renderer-text')).toBeTruthy();
    expect(getByTestId('renderer-icon-list')).toBeTruthy();
  });
});
