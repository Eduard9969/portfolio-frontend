import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'Components/Loader',
  decorators: [
    (Story) => (
      <div style={{ padding: 40, display: 'inline-block', color: 'green' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {};
