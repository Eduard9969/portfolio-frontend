import { LabelRow } from '../LabelRow';
import { DotRating } from '../DotRating';
import type { LabelRowProps } from '../LabelRow';
import type { DotRatingProps } from '../DotRating';

type RatingItem = Pick<LabelRowProps, 'label'> & Pick<DotRatingProps, 'mark'>;

type RatingListProps = {
  items: RatingItem[];
  max?: number;
};

export const RatingList = ({ items, max }: RatingListProps) => (
  <ul className="list-none m-0 p-0">
    {items.map((item, index) => (
      <li key={index}>
        <LabelRow label={item.label}>
          <DotRating mark={item.mark} max={max} />
        </LabelRow>
      </li>
    ))}
  </ul>
);
