import { Popover } from '../Popover';
import type { PopoverProps } from '../Popover';
import { RatingList } from '../RatingList';

export type RatingTooltipProps = {
  legendLabel: string;
  labels: string[];
  align?: PopoverProps['align'];
};

export const RatingTooltip = ({ legendLabel, labels, align }: RatingTooltipProps) => (
  <Popover trigger={legendLabel} align={align}>
    <RatingList
      items={labels.map((label, index) => ({ label, mark: index + 1 }))}
    />
  </Popover>
);
