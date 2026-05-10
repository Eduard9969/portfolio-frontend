import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: 'Components/ButtonGroup',
  args: {
    items: [
      { value: 'en', label: 'En' },
      { value: 'ru', label: 'Ru' },
    ],
    current: 'en',
  },
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {};

export const MultipleItems: Story = {
  args: {
    items: [
      { value: 'en', label: 'En' },
      { value: 'ru', label: 'Ru' },
      { value: 'de', label: 'De' },
      { value: 'fr', label: 'Fr' },
    ],
    current: 'ru',
  },
};
