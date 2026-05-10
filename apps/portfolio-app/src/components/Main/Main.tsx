import { Footer } from '../Footer';
import { MainSection } from '../MainSection';
import { Sidebar } from '../Sidebar';
import type { SectionPrimitive } from '../../types/profile';

type MainProps = {
  mainSections: SectionPrimitive[];
  sidebarSections: SectionPrimitive[];
};

export const Main = ({ mainSections, sidebarSections }: MainProps) => (
  <main className="min-h-125">
    <div className="flex max-lg:block">
      <div className="w-[70%] p-8 pb-16 relative max-lg:w-full">
        <MainSection sections={mainSections} />
        <Footer />
      </div>
      <Sidebar sections={sidebarSections} />
    </div>
  </main>
);
