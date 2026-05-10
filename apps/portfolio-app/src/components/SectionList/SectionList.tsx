import { Section } from '@org/shared-ui';
import { renderSection } from '../SectionRenderers';
import type { SectionPrimitive } from '../../types/profile';

type SectionListProps = {
  sections: SectionPrimitive[];
  withLine?: boolean;
};

export const SectionList = ({ sections, withLine = false }: SectionListProps) => (
  <>
    {sections.map((section) => (
      <Section key={section.title} title={section.title} withLine={withLine}>
        {renderSection(section)}
      </Section>
    ))}
  </>
);
