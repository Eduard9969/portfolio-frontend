import type { FC } from 'react';
import { Timeline } from '@org/shared-ui';
import type { TimelineSection } from '../../types/profile';

export const TimelineSectionRenderer: FC<TimelineSection> = ({ items }) => (
  <Timeline
    items={items.map((item) => ({
      period: item.period,
      title: item.org,
      subtitle: item.role,
      description: item.description,
    }))}
  />
);
