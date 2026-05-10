import type { Meta, StoryObj } from '@storybook/react';
import { TimelineItem } from './TimelineItem';

const meta: Meta<typeof TimelineItem> = {
  component: TimelineItem,
  title: 'Components/TimelineItem',
};

export default meta;

type Story = StoryObj<typeof TimelineItem>;

export const Default: Story = {
  args: {
    period: '2020–2023',
    title: 'Company Name',
    subtitle: 'Job Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula libero nec arcu gravida, at fermentum erat tincidunt.',
  },
};

export const ShortDescription: Story = {
  args: {
    period: '2018–2020',
    title: 'Org Name',
    subtitle: 'Job Title',
    description: 'Short description of the role.',
  },
};
