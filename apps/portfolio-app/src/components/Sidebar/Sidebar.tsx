import { SectionList } from '../SectionList';
import type { SectionPrimitive } from '../../types/profile';

type SidebarProps = {
  sections: SectionPrimitive[];
};

export const Sidebar = ({ sections }: SidebarProps) => (
  <aside
    style={{ '--section-head-border': 'var(--color-accent)' } as React.CSSProperties}
    className="w-[30%] bg-surface text-white p-8 pb-16 max-lg:w-full"
  >
    <SectionList sections={sections} />
  </aside>
);
