import type { ReactNode } from 'react';

export type LabelRowProps = {
  label: string;
  children: ReactNode;
};

export const LabelRow = ({ label, children }: LabelRowProps) => (
  <div className="mt-4 flex items-center justify-between">
    <span className="inline-block align-middle">{label}</span>
    <span className="inline-block align-middle">{children}</span>
  </div>
);
