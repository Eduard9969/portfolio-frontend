export type TimelineItemProps = {
  period: string;
  title: string;
  subtitle: string;
  description: string;
};

export const TimelineItem = ({ period, title, subtitle, description }: TimelineItemProps) => {
  return (
    <div className="text-[0]">
      <div className="w-[30%] pr-7.5 inline-block align-top">
        <span className="font-bold text-xl block">{period}</span>
      </div>
      <div className="w-[70%] relative inline-block align-top after:content-[''] after:block after:absolute after:top-[3%] after:right-[105%] after:w-[2px] after:min-h-full after:bg-timeline before:content-[''] before:block before:absolute before:top-[3%] before:right-[105%] before:border-2 before:border-timeline before:w-[10px] before:h-[10px] before:rounded-full before:bg-[var(--timeline-dot-bg,white)] before:translate-x-[43%] before:z-[2]">
        <div>
          <span className="font-bold text-xl block">{title}</span>
          <span className="font-bold text-xl block leading-[2.2rem]">{subtitle}</span>
        </div>
        <div className="pt-3 pb-6 text-base">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
