import type { Meta, StoryObj } from '@storybook/react';
import { IconTextList } from './IconTextList';
import { Icon } from '../Icon';

const meta: Meta<typeof IconTextList> = {
  component: IconTextList,
  title: 'Components/IconTextList',
};

export default meta;

type Story = StoryObj<typeof IconTextList>;

export const Default: Story = {
  args: {
    items: [
      { text: 'City, Country', icon: <Icon name='location' /> },
      { text: '+1 234 567 8900', icon: <Icon name='phone' /> },
      { text: '@handle', icon: <Icon name='telegram' /> },
      { text: 'user@example.com', icon: <Icon name='email' /> },
    ],
  },
};
