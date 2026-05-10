import type { FC } from 'react';
import type { TextSection } from '../../types/profile';

export const TextSectionRenderer: FC<TextSection> = ({ text }) => (
  <p className="leading-6">{text}</p>
);
