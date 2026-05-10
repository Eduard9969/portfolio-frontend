import type { Meta, StoryObj } from '@storybook/react';
import { SocialLink } from './SocialLink';
import { Icon } from '../Icon';

const meta: Meta<typeof SocialLink> = {
  component: SocialLink,
  title: 'Components/SocialLink',
};

export default meta;

type Story = StoryObj<typeof SocialLink>;

export const LinkedIn: Story = {
  args: {
    url: '#',
    label: 'linkedin',
    icon: <Icon name='linkedin' />,
  },
};

export const Github: Story = {
  args: {
    url: '#',
    label: 'github',
    icon: <Icon name='github' />,
  },
};

export const Bitbucket: Story = {
  args: {
    url: '#',
    label: 'bitbucket',
    icon: <Icon name='bitbucket' />,
  },
};
