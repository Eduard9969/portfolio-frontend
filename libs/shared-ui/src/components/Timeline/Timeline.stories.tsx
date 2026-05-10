import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from './Timeline';

const meta: Meta<typeof Timeline> = {
  component: Timeline,
  title: 'Components/Timeline',
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    items: [
      {
        period: '2020–2023',
        title: 'Company Name',
        subtitle: 'Senior Developer',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula libero nec arcu gravida, at fermentum erat tincidunt.',
      },
      {
        period: '2017–2020',
        title: 'Another Company',
        subtitle: 'Frontend Developer',
        description: 'Short description of the role and responsibilities.',
      },
      {
        period: '2015–2017',
        title: 'First Job',
        subtitle: 'Junior Developer',
        description: 'Entry level position with focus on UI development.',
      },
    ],
  },
};

export const Single: Story = {
  args: {
    items: [
      {
        period: '2020–present',
        title: 'Company Name',
        subtitle: 'Lead Developer',
        description: 'Description of current role.',
      },
    ],
  },
};
