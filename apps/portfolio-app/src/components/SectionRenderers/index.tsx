import type { ReactNode } from 'react';
import type { SectionPrimitive } from '../../types/profile';
import { TextSectionRenderer } from './TextSectionRenderer';
import { IconListSectionRenderer } from './IconListSectionRenderer';
import { SkillListSectionRenderer } from './SkillListSectionRenderer';
import { TextValueListSectionRenderer } from './TextValueListSectionRenderer';
import { TimelineSectionRenderer } from './TimelineSectionRenderer';

export function renderSection(section: SectionPrimitive): ReactNode {
  switch (section.type) {
    case 'text':            return <TextSectionRenderer {...section} />;
    case 'icon-list':       return <IconListSectionRenderer {...section} />;
    case 'skill-list':      return <SkillListSectionRenderer {...section} />;
    case 'text-value-list': return <TextValueListSectionRenderer {...section} />;
    case 'timeline':        return <TimelineSectionRenderer {...section} />;
  }
}
