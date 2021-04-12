import { IconType } from 'react-icons';
import { FaHome, FaMoneyCheckAlt } from 'react-icons/fa';

type FooterItem = {
  label: string;
  href: string;
  icon: IconType;
};

export const FOOTER_ITEMS: Array<FooterItem> = [
  {
    label: 'Acasă',
    href: '/',
    icon: FaHome
  },
  {
    label: 'Donează',
    href: '/profile',
    icon: FaMoneyCheckAlt
  }
];

export default FOOTER_ITEMS;
