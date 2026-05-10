import type { Meta, StoryObj } from '@storybook/react';
import { LabelValueList } from './LabelValueList';

const meta: Meta<typeof LabelValueList> = {
  component: LabelValueList,
  title: 'Components/LabelValueList',
};

export default meta;

type Story = StoryObj<typeof LabelValueList>;

export const Default: Story = {
  args: {
    items: [
      { label: 'English', value: 'Fluent' },
      { label: 'Spanish', value: 'Intermediate' },
      { label: 'French', value: 'Beginner' },
    ],
  },
};
