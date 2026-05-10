import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Components/Avatar',
  decorators: [
    (Story) => (
      <div style={{ width: 300, height: 385 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: 'https://placehold.co/200x200',
    alt: 'User photo',
  },
};

export const BrokenSrc: Story = {
  args: {
    src: '/nonexistent.jpg',
    alt: 'User photo',
  },
};
