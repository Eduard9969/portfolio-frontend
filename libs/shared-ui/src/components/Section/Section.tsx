import type { ReactNode } from 'react';

type SectionHeadProps = {
  title: string;
  withLine?: boolean;
};

const SectionHead = ({ title, withLine = false }: SectionHeadProps) => (
  <div className="mt-9 mb-9 [section:first-child_&]:mt-4">
    <h3 className="flex items-center">
      <span className="text-2xl font-bold border border-[var(--section-head-border,currentColor)] px-2.5 py-1.5 leading-none inline-block uppercase tracking-wide">
        {title}
      </span>
      {withLine && (
        <span className="flex-1 h-[2px] bg-text-primary" aria-hidden="true" />
      )}
    </h3>
  </div>
);

type SectionProps = {
  title: string;
  children: ReactNode;
  withLine?: boolean;
};

export const Section = ({
  title,
  children,
  withLine = false,
}: SectionProps) => (
  <section>
    <SectionHead title={title} withLine={withLine} />
    {children}
  </section>
);
