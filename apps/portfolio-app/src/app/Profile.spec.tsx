import { render } from '@testing-library/react';
import { Profile } from './Profile';
import type { Profile as ProfileData } from '../types/profile';

vi.mock('../components/Header', () => ({
  Header: ({ name, title }: { name: string; title: string }) => (
    <div data-testid="header" data-name={name} data-title={title} />
  ),
}));

vi.mock('../components/Main', () => ({
  Main: ({
    mainSections,
    sidebarSections,
  }: {
    mainSections: unknown[];
    sidebarSections: unknown[];
  }) => (
    <div
      data-testid="main"
      data-main-count={mainSections.length}
      data-sidebar-count={sidebarSections.length}
    />
  ),
}));

const mockProfile: ProfileData = {
  name: 'John Doe',
  title: 'Software Engineer',
  avatar: '/avatar.jpg',
  socials: [{ title: 'GitHub', url: 'https://github.com', icon: 'github' }],
  mainSections: [{ type: 'text', title: 'About', text: 'Hello' }],
  sidebarSections: [
    { type: 'text', title: 'Skills', text: 'React' },
    { type: 'text', title: 'Contact', text: 'email@test.com' },
  ],
};

describe('Profile', () => {
  it('passes name to Header', () => {
    const { getByTestId } = render(<Profile profile={mockProfile} />);
    expect(getByTestId('header').dataset.name).toBe('John Doe');
  });

  it('passes title to Header', () => {
    const { getByTestId } = render(<Profile profile={mockProfile} />);
    expect(getByTestId('header').dataset.title).toBe('Software Engineer');
  });

  it('passes mainSections to Main', () => {
    const { getByTestId } = render(<Profile profile={mockProfile} />);
    expect(getByTestId('main').dataset.mainCount).toBe('1');
  });

  it('passes sidebarSections to Main', () => {
    const { getByTestId } = render(<Profile profile={mockProfile} />);
    expect(getByTestId('main').dataset.sidebarCount).toBe('2');
  });
});
