import type { ReactNode } from 'react';

type ButtonProps = {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

export const Button = ({ active = false, onClick, children }: ButtonProps) => (
  <button
    type="button"
    className={`bg-transparent border-0 p-0 font-[inherit] text-[length:inherit] no-underline ${
      active
        ? 'text-muted cursor-default'
        : 'text-link cursor-pointer hover:underline'
    }`}
    onClick={onClick}
    disabled={active}
  >
    {children}
  </button>
);
