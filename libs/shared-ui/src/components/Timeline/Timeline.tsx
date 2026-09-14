import { TimelineItem, type TimelineItemProps } from '../TimelineItem/TimelineItem';

export type TimelineProps = {
  items: TimelineItemProps[];
};

export const Timeline = ({ items }: TimelineProps) => (
  <ul className="list-none m-0 p-0">
    {items.map((item) => (
      <li key={`${item.period}-${item.title}`}>
        <TimelineItem {...item} />
      </li>
    ))}
  </ul>
);
