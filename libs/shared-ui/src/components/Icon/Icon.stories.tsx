import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Components/Icon',
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const LinkedIn: Story = { args: { name: 'linkedin' } };
export const Github: Story = { args: { name: 'github' } };
export const Bitbucket: Story = { args: { name: 'bitbucket' } };
export const Telegram: Story = { args: { name: 'telegram' } };
export const Email: Story = { args: { name: 'email' } };
export const Phone: Story = { args: { name: 'phone' } };
export const Location: Story = { args: { name: 'location' } };
export const Info: Story = { args: { name: 'info' } };
