import { SectionList } from '../SectionList';
import type { SectionPrimitive } from '../../types/profile';

type SidebarProps = {
  sections: SectionPrimitive[];
};

export const Sidebar = ({ sections }: SidebarProps) => (
  <aside className="w-[30%] bg-surface text-white print:bg-white print:text-text-primary p-8 pb-16 max-lg:w-full [--section-head-border:var(--color-accent)] print:[--section-head-border:var(--color-text-primary)]">
    <SectionList sections={sections} />
  </aside>
);
