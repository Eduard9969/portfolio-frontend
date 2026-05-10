import type { Meta, StoryObj } from '@storybook/react';
import { DotRating } from './DotRating';

const meta: Meta<typeof DotRating> = {
  component: DotRating,
  title: 'Components/DotRating',
};

export default meta;

type Story = StoryObj<typeof DotRating>;

export const One: Story = { args: { mark: 1 } };
export const Two: Story = { args: { mark: 2 } };
export const Three: Story = { args: { mark: 3 } };
export const Four: Story = { args: { mark: 4 } };
export const Five: Story = { args: { mark: 5 } };

export const CustomMax: Story = { args: { mark: 3, max: 7 } };
