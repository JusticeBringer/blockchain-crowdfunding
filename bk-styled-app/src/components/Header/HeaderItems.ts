export type NavItem = {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
};

export const HEADER_NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Acasă',
    href: '/'
  },
  {
    label: 'Donează',
    href: '/profile'
  }
];

export default HEADER_NAV_ITEMS;
