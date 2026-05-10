import type { Meta, StoryObj } from '@storybook/react';
import { RatingTooltip } from './RatingTooltip';

const meta: Meta<typeof RatingTooltip> = {
  component: RatingTooltip,
  title: 'Components/RatingTooltip',
  args: {
    legendLabel: 'Rating',
    labels: ['Elementary', 'Basic', 'Intermediate', 'Advanced', 'Expert'],
  },
};

export default meta;

type Story = StoryObj<typeof RatingTooltip>;

export const AlignRight: Story = {};

export const AlignLeft: Story = {
  args: { align: 'left' },
};

export const ManyLabels: Story = {
  args: {
    labels: ['Beginner', 'Elementary', 'Intermediate', 'Upper-Intermediate', 'Advanced', 'Proficient', 'Expert'],
  },
};
