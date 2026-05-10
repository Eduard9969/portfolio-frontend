import { Header } from '../components/Header';
import { Main } from '../components/Main';
import type { Profile as ProfileData } from '../types/profile';

type ProfileProps = { profile: ProfileData };

export const Profile = ({ profile }: ProfileProps) => (
  <>
    <Header
      name={profile.name}
      title={profile.title}
      avatar={profile.avatar}
      socials={profile.socials}
    />
    <Main
      mainSections={profile.mainSections}
      sidebarSections={profile.sidebarSections}
    />
  </>
);
