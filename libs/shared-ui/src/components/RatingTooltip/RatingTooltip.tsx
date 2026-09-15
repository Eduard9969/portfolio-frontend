import { Popover } from '../Popover';
import type { PopoverProps } from '../Popover';
import { RatingList } from '../RatingList';

export type RatingTooltipProps = {
  legendLabel: string;
  labels: string[];
  align?: PopoverProps['align'];
  className?: string;
};

export const RatingTooltip = ({ legendLabel, labels, align, className }: RatingTooltipProps) => (
  <Popover trigger={legendLabel} align={align} className={className}>
    <RatingList
      items={labels.map((label, index) => ({ label, mark: index + 1 }))}
    />
  </Popover>
);
