import { en } from './en';
import { ru } from './ru';
import type { Translation } from './types';

export type { Translation } from './types';
export const defaultLocale = 'en';
export const messages: Record<string, Translation> = { en, ru };
