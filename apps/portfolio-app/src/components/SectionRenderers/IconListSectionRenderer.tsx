import type { FC, ReactNode } from 'react';
import {
  IconTextList,
  Icon,
} from '@org/shared-ui';
import type { IconListSection } from '../../types/profile';

const iconMap: Record<string, ReactNode> = {
  location: <Icon name='location' />,
  phone: <Icon name='phone' />,
  telegram: <Icon name='telegram' />,
  email: <Icon name='email' />,
};

export const IconListSectionRenderer: FC<IconListSection> = ({ items }) => (
  <IconTextList
    items={items.map((item) => ({ text: item.text, icon: iconMap[item.icon] }))}
  />
);
