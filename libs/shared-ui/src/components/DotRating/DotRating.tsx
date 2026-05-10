export type DotRatingProps = {
  mark: number;
  max?: number;
};

export const DotRating = ({ mark, max = 5 }: DotRatingProps) => (
  <>
    {Array.from({ length: max }, (_, index) => index + 1).map((dotLevel) => (
      <span
        key={dotLevel}
        className={`inline-block align-middle w-2.5 h-2.5 mr-1.5 last:mr-0 rounded-full ${dotLevel > mark ? 'bg-bg' : 'bg-accent'}`}
      />
    ))}
  </>
);
