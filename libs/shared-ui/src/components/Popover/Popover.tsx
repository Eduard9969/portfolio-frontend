import { useState } from 'react';
import type { ReactNode } from 'react';
import { Icon } from '../Icon';

export type PopoverProps = {
  trigger: string;
  children: ReactNode;
  align?: 'left' | 'right';
};

export const Popover = ({ trigger, children, align = 'right' }: PopoverProps) => {
  const [open, setOpen] = useState(false);
  const isRight = align === 'right';

  return (
    <div className="relative text-sm -mt-4">
      <div className={`flex ${isRight ? 'justify-end' : 'justify-start'}`}>
        <button
          type="button"
          className="cursor-pointer lowercase bg-transparent border-0 p-0 text-[length:inherit] text-inherit font-[inherit] no-underline hover:underline flex items-center gap-1.5"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          {trigger}
          <Icon name='info' />
        </button>
      </div>
      <div
        className={`${open ? 'block' : 'hidden'} rounded-[3px] bg-bg text-surface absolute left-0 right-0 top-[180%] p-2.5 z-50 ring-1 ring-black/10 after:content-[''] after:w-0 after:h-0 after:border-b-[8px] after:border-b-bg after:border-l-[8px] after:border-l-transparent after:border-r-[8px] after:border-r-transparent after:absolute after:bottom-full before:content-[''] before:w-0 before:h-0 before:border-b-[9px] before:border-b-black/10 before:border-l-[9px] before:border-l-transparent before:border-r-[9px] before:border-r-transparent before:absolute before:bottom-[calc(100%_+_1px)] ${isRight ? 'after:right-[2%] before:right-[2%]' : 'after:left-[2%] before:left-[2%]'}`}
      >
        {children}
      </div>
    </div>
  );
};
