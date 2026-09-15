import { LabelRow } from '../LabelRow';
import { DotRating } from '../DotRating';
import type { LabelRowProps } from '../LabelRow';
import type { DotRatingProps } from '../DotRating';

export type RatingItem = Pick<LabelRowProps, 'label'> & Pick<DotRatingProps, 'mark'>;

export type RatingListProps = {
  items: RatingItem[];
  max?: number;
};

export const RatingList = ({ items, max }: RatingListProps) => (
  <ul className="list-none m-0 p-0">
    {items.map((item, index) => (
      <li key={index} className="print:break-inside-avoid">
        <LabelRow label={item.label}>
          <DotRating mark={item.mark} max={max} />
        </LabelRow>
      </li>
    ))}
  </ul>
);
