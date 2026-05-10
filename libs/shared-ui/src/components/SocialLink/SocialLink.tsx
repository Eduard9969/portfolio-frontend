import type { ReactNode } from 'react';

export type SocialLinkProps = {
  url: string;
  label: string;
  icon: ReactNode;
};

export const SocialLink = ({ url, label, icon }: SocialLinkProps) => {
  return (
    <a
      href={url}
      title={label}
      rel="nofollow noreferrer"
      target="_blank"
      className="group flex items-center text-lg cursor-pointer text-text-primary no-underline hover:text-text-hover hover:no-underline active:text-text-hover"
    >
      <span className="w-6 h-6 mr-2.5 fill-text-primary shrink-0 flex items-center justify-center group-hover:fill-text-hover group-active:fill-text-hover">{icon}</span>
      <span>{label}</span>
    </a>
  );
};
