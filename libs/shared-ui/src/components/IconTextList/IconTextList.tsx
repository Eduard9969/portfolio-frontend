import { IconTextRow } from '../IconTextRow';
import type { IconTextRowProps } from '../IconTextRow';

export type IconTextListProps = {
  items: IconTextRowProps[];
};

export const IconTextList = ({ items }: IconTextListProps) => (
  <ul className="list-none m-0 p-0">
    {items.map((item, index) => (
      <li key={index}>
        <IconTextRow {...item} />
      </li>
    ))}
  </ul>
);
