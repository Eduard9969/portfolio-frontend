import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
  component: Popover,
  title: 'Components/Popover',
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const AlignRight: Story = {
  args: {
    trigger: 'show legend',
    children: <p style={{ margin: 0 }}>Any content goes here.</p>,
  },
};

export const AlignLeft: Story = {
  args: {
    trigger: 'show legend',
    align: 'left',
    children: <p style={{ margin: 0 }}>Any content goes here.</p>,
  },
};
