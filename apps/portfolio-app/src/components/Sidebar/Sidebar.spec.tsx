import { render } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import type { SectionPrimitive } from '../../types/profile';

vi.mock('../SectionList', () => ({
  SectionList: ({ sections }: { sections: unknown[] }) => (
    <div data-testid="section-list" data-count={sections.length} />
  ),
}));

function makeSection(title: string): SectionPrimitive {
  return { type: 'text', title, text: '' };
}

describe('Sidebar', () => {
  it('passes sections to SectionList', () => {
    const { getByTestId } = render(<Sidebar sections={[makeSection('Skills')]} />);
    expect(getByTestId('section-list').dataset.count).toBe('1');
  });
});
