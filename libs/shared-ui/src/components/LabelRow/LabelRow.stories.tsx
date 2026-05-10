import type { Meta, StoryObj } from '@storybook/react';
import { LabelRow } from './LabelRow';
import { DotRating } from '../DotRating';

const meta: Meta<typeof LabelRow> = {
  component: LabelRow,
  title: 'Components/LabelRow',
};

export default meta;

type Story = StoryObj<typeof LabelRow>;

export const Text: Story = {
  args: {
    label: 'English',
    children: 'Fluent',
  },
};

export const LongLabel: Story = {
  args: {
    label: 'Spanish (Latin American)',
    children: 'Intermediate',
  },
};

export const WithDotRating: Story = {
  args: {
    label: 'JavaScript',
    children: <DotRating mark={4} />,
  },
};
