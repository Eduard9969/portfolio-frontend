import type { Meta, StoryObj } from '@storybook/react';
import { NameTitle } from './NameTitle';

const meta: Meta<typeof NameTitle> = {
  component: NameTitle,
  title: 'Components/NameTitle',
};

export default meta;

type Story = StoryObj<typeof NameTitle>;

export const Default: Story = {
  args: {
    name: 'John Doe',
    title: 'Full-Stack Developer',
  },
};

export const LongTitle: Story = {
  args: {
    name: 'John Doe',
    title: 'Full-Stack Developer & SEO Specialist',
  },
};
