import { z } from 'zod';
import { ProfileSchema, SectionPrimitiveSchema } from './profile.schema';

export type Profile = z.infer<typeof ProfileSchema>;
export type SectionPrimitive = z.infer<typeof SectionPrimitiveSchema>;

export type Social = Profile['socials'][number];

export type TextSection = Extract<SectionPrimitive, { type: 'text' }>;
export type IconListSection = Extract<SectionPrimitive, { type: 'icon-list' }>;
export type SkillListSection = Extract<SectionPrimitive, { type: 'skill-list' }>;
export type TextValueListSection = Extract<SectionPrimitive, { type: 'text-value-list' }>;
export type TimelineSection = Extract<SectionPrimitive, { type: 'timeline' }>;
