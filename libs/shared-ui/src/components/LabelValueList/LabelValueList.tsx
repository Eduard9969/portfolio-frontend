import { LabelRow } from '../LabelRow';
import type { LabelRowProps } from '../LabelRow';

export type LabelValueItem = Pick<LabelRowProps, 'label'> & { value: string };

export type LabelValueListProps = {
  items: LabelValueItem[];
};

export const LabelValueList = ({ items }: LabelValueListProps) => (
  <ul className="list-none m-0 p-0">
    {items.map((item, index) => (
      <li key={index} className="print:break-inside-avoid">
        <LabelRow label={item.label}>{item.value}</LabelRow>
      </li>
    ))}
  </ul>
);
