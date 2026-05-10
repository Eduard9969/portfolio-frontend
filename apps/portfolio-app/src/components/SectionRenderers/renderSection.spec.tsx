import { render } from '@testing-library/react';
import { renderSection } from './index';

vi.mock('./TextSectionRenderer', () => ({
  TextSectionRenderer: () => <div data-testid="text-renderer" />,
}));
vi.mock('./IconListSectionRenderer', () => ({
  IconListSectionRenderer: () => <div data-testid="icon-list-renderer" />,
}));
vi.mock('./SkillListSectionRenderer', () => ({
  SkillListSectionRenderer: () => <div data-testid="skill-list-renderer" />,
}));
vi.mock('./TextValueListSectionRenderer', () => ({
  TextValueListSectionRenderer: () => <div data-testid="text-value-list-renderer" />,
}));
vi.mock('./TimelineSectionRenderer', () => ({
  TimelineSectionRenderer: () => <div data-testid="timeline-renderer" />,
}));

describe('renderSection', () => {
  it('renders TextSectionRenderer for text type', () => {
    const { getByTestId } = render(<>{renderSection({ type: 'text', title: 'About', text: 'Hello' })}</>);
    expect(getByTestId('text-renderer')).toBeTruthy();
  });

  it('renders IconListSectionRenderer for icon-list type', () => {
    const { getByTestId } = render(<>{renderSection({ type: 'icon-list', title: 'Icons', items: [] })}</>);
    expect(getByTestId('icon-list-renderer')).toBeTruthy();
  });

  it('renders SkillListSectionRenderer for skill-list type', () => {
    const { getByTestId } = render(<>{renderSection({ type: 'skill-list', title: 'Skills', items: [] })}</>);
    expect(getByTestId('skill-list-renderer')).toBeTruthy();
  });

  it('renders TextValueListSectionRenderer for text-value-list type', () => {
    const { getByTestId } = render(<>{renderSection({ type: 'text-value-list', title: 'Info', items: [] })}</>);
    expect(getByTestId('text-value-list-renderer')).toBeTruthy();
  });

  it('renders TimelineSectionRenderer for timeline type', () => {
    const { getByTestId } = render(<>{renderSection({ type: 'timeline', title: 'Experience', items: [] })}</>);
    expect(getByTestId('timeline-renderer')).toBeTruthy();
  });
});
