import type { Meta, StoryObj } from '@storybook/react';
import { RatingList } from './RatingList';

const meta: Meta<typeof RatingList> = {
  component: RatingList,
  title: 'Components/RatingList',
};

export default meta;

type Story = StoryObj<typeof RatingList>;

export const Default: Story = {
  args: {
    items: [
      { label: 'JavaScript', mark: 5 },
      { label: 'TypeScript', mark: 4 },
      { label: 'React', mark: 5 },
      { label: 'CSS', mark: 3 },
    ],
  },
};

export const CustomMax: Story = {
  args: {
    max: 7,
    items: [
      { label: 'JavaScript', mark: 6 },
      { label: 'TypeScript', mark: 5 },
    ],
  },
};
