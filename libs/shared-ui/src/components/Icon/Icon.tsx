import {
  faBitbucket,
  faGithub,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope
} from '@fortawesome/free-regular-svg-icons';
import { faCircleInfo, faMapLocation, faPhone } from '@fortawesome/free-solid-svg-icons';

type IconName =
  | 'linkedin'
  | 'bitbucket'
  | 'github'
  | 'telegram'
  | 'location'
  | 'phone'
  | 'email'
  | 'info';

const getIcon = (iconName: IconName) => {
  switch (iconName) {
    case 'linkedin':
      return faLinkedin;
    case 'bitbucket':
      return faBitbucket;
    case 'github':
      return faGithub;
    case 'telegram':
      return faTelegram;
    case 'location':
      return faMapLocation;
    case 'phone':
      return faPhone;
    case 'email':
      return faEnvelope;
    case 'info':
      return faCircleInfo;
  }
};

export const Icon = ({ name: iconName }: { name: IconName }) => (
  <FontAwesomeIcon icon={getIcon(iconName)} />
);
