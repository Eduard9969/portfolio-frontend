import type { FC } from 'react';
import { LabelValueList } from '@org/shared-ui';
import type { TextValueListSection } from '../../types/profile';

export const TextValueListSectionRenderer: FC<TextValueListSection> = ({ items }) => (
  <LabelValueList items={items.map((item) => ({ label: item.name, value: item.value }))} />
);
