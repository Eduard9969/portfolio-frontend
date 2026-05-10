import { z } from 'zod';

const SocialSchema = z.object({
  title: z.string(),
  url: z.string(),
  icon: z.string(),
});

const IconListItemSchema = z.object({
  text: z.string(),
  icon: z.string(),
});

const SkillItemSchema = z.object({
  name: z.string(),
  mark: z.number(),
});

const TextValueItemSchema = z.object({
  name: z.string(),
  value: z.string(),
});

const TimelineItemSchema = z.object({
  period: z.string(),
  org: z.string(),
  role: z.string(),
  description: z.string(),
});

const TextSectionSchema = z.object({
  type: z.literal('text'),
  title: z.string(),
  text: z.string(),
});

const IconListSectionSchema = z.object({
  type: z.literal('icon-list'),
  title: z.string(),
  items: z.array(IconListItemSchema),
});

const SkillListSectionSchema = z.object({
  type: z.literal('skill-list'),
  title: z.string(),
  items: z.array(SkillItemSchema),
  withTooltip: z.boolean().optional(),
});

const TextValueListSectionSchema = z.object({
  type: z.literal('text-value-list'),
  title: z.string(),
  items: z.array(TextValueItemSchema),
});

const TimelineSectionSchema = z.object({
  type: z.literal('timeline'),
  title: z.string(),
  items: z.array(TimelineItemSchema),
});

export const SectionPrimitiveSchema = z.discriminatedUnion('type', [
  TextSectionSchema,
  IconListSectionSchema,
  SkillListSectionSchema,
  TextValueListSectionSchema,
  TimelineSectionSchema,
]);

export const ProfileSchema = z.object({
  name: z.string(),
  title: z.string(),
  avatar: z.string().optional(),
  socials: z.array(SocialSchema),
  mainSections: z.array(SectionPrimitiveSchema),
  sidebarSections: z.array(SectionPrimitiveSchema),
});
