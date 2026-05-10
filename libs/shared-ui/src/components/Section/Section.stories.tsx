import type { Meta, StoryObj } from '@storybook/react';
import { Section } from './Section';

const meta: Meta<typeof Section> = {
  component: Section,
  title: 'Components/Section',
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: { title: 'Experience', children: 'Section content goes here.' },
};

export const WithLine: Story = {
  args: { title: 'Experience', withLine: true, children: 'Section content goes here.' },
};

export const InSidebar: Story = {
  args: { title: 'About me', children: 'Sidebar section content.' },
  decorators: [
    (Story) => (
      <aside
        style={{ '--section-head-border': 'var(--color-accent)' } as React.CSSProperties}
        className="bg-surface text-white p-8"
      >
        <Story />
      </aside>
    ),
  ],
};
