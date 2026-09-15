import type { ReactNode } from 'react';
import {
  Avatar,
  NameTitle,
  SocialsList,
  Icon
} from '@org/shared-ui';
import type { Social } from '../../types/profile';

type HeaderProps = {
  name: string;
  title: string;
  avatar?: string;
  socials: Social[];
};

const socialIcons: Partial<Record<string, ReactNode>> = {
  linkedin: <Icon name='linkedin' />,
  bitbucket: <Icon name='bitbucket' />,
  github: <Icon name='github' />,
};

export const Header = ({ name, title, avatar, socials }: HeaderProps) => (
  <header className="flex max-lg:block">
    <div
      className={`${avatar ? 'w-[70%]' : 'w-full'} min-h-96 bg-accent print:bg-white flex flex-col justify-center items-center text-center p-8 max-lg:w-full max-lg:min-h-0`}
    >
      <NameTitle name={name} title={title} />
      <div className="mt-11 print:hidden">
        <SocialsList
          items={socials
            .map((social) => ({
              label: social.title,
              url: social.url,
              icon: socialIcons[social.icon],
            }))
            .filter(
              (social): social is typeof social & { icon: ReactNode } =>
                social.icon != null,
            )}
        />
      </div>
    </div>
    {!!avatar && (
      <div className="w-[30%] min-h-96 bg-photo-bg max-lg:hidden">
        <Avatar src={avatar} alt={name} />
      </div>
    )}
  </header>
);
