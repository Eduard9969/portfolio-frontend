import type { ReactNode } from 'react';

export type IconTextRowProps = {
  text: string;
  icon: ReactNode;
};

export const IconTextRow = ({ text, icon }: IconTextRowProps) => {
  return (
    <div className="mt-4 flex items-center">
      <span className="w-[18px] h-[18px] mr-4 shrink-0 flex items-center justify-center">
        {icon}
      </span>
      <span className="break-all">{text}</span>
    </div>
  );
};
