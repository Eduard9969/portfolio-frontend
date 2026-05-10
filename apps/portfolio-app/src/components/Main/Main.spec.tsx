import { render } from '@testing-library/react';
import { Main } from './Main';
import type { SectionPrimitive } from '../../types/profile';

vi.mock('../MainSection', () => ({
  MainSection: ({ sections }: { sections: unknown[] }) => (
    <div data-testid="main-section" data-count={sections.length} />
  ),
}));
vi.mock('../Sidebar', () => ({
  Sidebar: ({ sections }: { sections: unknown[] }) => (
    <div data-testid="sidebar" data-count={sections.length} />
  ),
}));
vi.mock('../Footer', () => ({
  Footer: () => <div data-testid="footer" />,
}));

function makeSection(title: string): SectionPrimitive {
  return { type: 'text', title, text: '' };
}

describe('Main', () => {
  it('passes mainSections to MainSection', () => {
    const { getByTestId } = render(
      <Main mainSections={[makeSection('Experience')]} sidebarSections={[]} />
    );
    expect(getByTestId('main-section').dataset.count).toBe('1');
  });

  it('passes sidebarSections to Sidebar', () => {
    const { getByTestId } = render(
      <Main mainSections={[]} sidebarSections={[makeSection('Skills')]} />
    );
    expect(getByTestId('sidebar').dataset.count).toBe('1');
  });

  it('renders Footer', () => {
    const { getByTestId } = render(<Main mainSections={[]} sidebarSections={[]} />);
    expect(getByTestId('footer')).toBeTruthy();
  });
});
