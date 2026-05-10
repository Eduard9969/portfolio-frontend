import { SectionList } from '../SectionList';
import type { SectionPrimitive } from '../../types/profile';

type MainSectionProps = {
  sections: SectionPrimitive[];
};

export const MainSection = ({ sections }: MainSectionProps) => (
  <SectionList sections={sections} withLine />
);
