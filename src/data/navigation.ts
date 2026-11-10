export interface NavCategory {
  id: string;
  name: string;
  href: string;
  description: string;
}

export const PRODUCT_CATEGORIES: NavCategory[] = [
  {
    id: 'kitchen-and-catering',
    name: 'Kitchen and Catering',
    href: '/products/kitchen-and-catering',
    description: 'Degreasers, dishwashing detergents, sanitizers & specialty oven care',
  },
  {
    id: 'housekeeping',
    name: 'Housekeeping',
    href: '/products/housekeeping',
    description: 'Floor cleaners, glass sprays, multi-surface disinfectants & air care',
  },
  {
    id: 'rational-and-mkn',
    name: 'Rational and MKN',
    href: '/products/rational-and-mkn',
    description: 'Combi steamer cleaning tablets, rinse aids & descaling solutions',
  },
  {
    id: 'laundry-products',
    name: 'Laundry Products',
    href: '/products/laundry-products',
    description: 'Commercial detergents, stain removers, fabric softeners & bleaches',
  },
  {
    id: 'janitorial-products',
    name: 'Janitorial Products',
    href: '/products/janitorial-products',
    description: 'Mops, trolleys, heavy-duty brushware & facility hygiene tools',
  },
  {
    id: 'disposables-and-packaging',
    name: 'Disposables and Packaging',
    href: '/products/disposables-and-packaging',
    description: 'Food grade containers, gloves, wrapping films & catering disposables',
  },
];

export interface NavLinkItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

export const MAIN_NAV_ITEMS: NavLinkItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Product Range', href: '/products', hasDropdown: true },
  { name: 'About Us', href: '/about' },
  { name: 'Resources', href: '/about#resources' },
  { name: 'Contact Us', href: '/contact' },
];

