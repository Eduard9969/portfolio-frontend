import type { Meta, StoryObj } from '@storybook/react';
import { SocialsList } from './SocialsList';
import { Icon } from '../Icon';

const meta: Meta<typeof SocialsList> = {
  component: SocialsList,
  title: 'Components/SocialsList',
};

export default meta;

type Story = StoryObj<typeof SocialsList>;

export const Default: Story = {
  args: {
    items: [
      { label: 'linkedin', url: '#', icon: <Icon name='linkedin' /> },
      { label: 'github', url: '#', icon: <Icon name='github' /> },
      { label: 'bitbucket', url: '#', icon: <Icon name='bitbucket' /> },
    ],
  },
};

export const Single: Story = {
  args: {
    items: [{ label: 'github', url: '#', icon: <Icon name='github' /> }],
  },
};
