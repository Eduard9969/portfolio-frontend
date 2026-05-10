import { render } from '@testing-library/react';
import { MainSection } from './MainSection';
import type { SectionPrimitive } from '../../types/profile';

vi.mock('../SectionList', () => ({
  SectionList: ({ sections, withLine }: { sections: unknown[]; withLine?: boolean }) => (
    <div
      data-testid="section-list"
      data-count={sections.length}
      data-with-line={String(withLine ?? false)}
    />
  ),
}));

function makeSection(title: string): SectionPrimitive {
  return { type: 'text', title, text: '' };
}

describe('MainSection', () => {
  it('passes sections to SectionList', () => {
    const { getByTestId } = render(<MainSection sections={[makeSection('Experience')]} />);
    expect(getByTestId('section-list').dataset.count).toBe('1');
  });

  it('passes withLine to SectionList', () => {
    const { getByTestId } = render(<MainSection sections={[]} />);
    expect(getByTestId('section-list').dataset.withLine).toBe('true');
  });
});
