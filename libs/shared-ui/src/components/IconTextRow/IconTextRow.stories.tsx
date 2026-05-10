import type { Meta, StoryObj } from '@storybook/react';
import { IconTextRow } from './IconTextRow';
import { Icon } from '../Icon';

const meta: Meta<typeof IconTextRow> = {
  component: IconTextRow,
  title: 'Components/IconTextRow',
};

export default meta;

type Story = StoryObj<typeof IconTextRow>;

export const Email: Story = {
  args: {
    text: 'user@example.com',
    icon: <Icon name='email' />,
  },
};

export const Phone: Story = {
  args: {
    text: '+1 234 567 8900',
    icon: <Icon name='phone' />,
  },
};

export const Telegram: Story = {
  args: {
    text: '@handle',
    icon: <Icon name='telegram' />,
  },
};

export const Location: Story = {
  args: {
    text: 'City, Country',
    icon: <Icon name='location' />,
  },
};

export const LongText: Story = {
  args: {
    text: 'very.long.email.address.that.wraps.onto.the.next.line@example.com',
    icon: <Icon name='email' />,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 200 }}>
        <Story />
      </div>
    ),
  ],
};
