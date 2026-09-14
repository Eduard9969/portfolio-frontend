import { SocialLink } from '../SocialLink';
import type { SocialLinkProps } from '../SocialLink';

export type SocialsListProps = {
  items: SocialLinkProps[];
};

export const SocialsList = ({ items }: SocialsListProps) => (
  <ul className="list-none m-0 p-0">
    {items.map((social, index) => (
      <li key={index} className="inline-block align-middle mt-4 mx-6 max-sm:block max-sm:my-5 max-sm:mx-0">
        <SocialLink {...social} />
      </li>
    ))}
  </ul>
);
