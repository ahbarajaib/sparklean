import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  UtensilsCrossed,
  SprayCan,
  Shirt,
  Flame,
  Sparkles,
  PackageCheck,
} from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  href: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'kitchen-and-catering',
    name: 'Kitchen & Catering',
    slug: 'kitchen-and-catering',
    href: '/products/kitchen-and-catering',
    image: '/images/categories/cat-kitchen.webp',
    icon: UtensilsCrossed,
    description: 'Heavy-duty detergents, dishwashing solutions, surface cleaners and degreasers for commercial kitchens.',
  },
  {
    id: 'housekeeping',
    name: 'Housekeeping & Facility Care',
    slug: 'housekeeping',
    href: '/products/housekeeping',
    image: '/images/categories/cat-housekeeping.webp',
    icon: SprayCan,
    description: 'Daily cleaning, disinfectants and surface care solutions for buildings and facilities.',
  },
  {
    id: 'laundry-products',
    name: 'Laundry Products & Textile Care',
    slug: 'laundry-products',
    href: '/products/laundry-products',
    image: '/images/categories/cat-laundry.webp',
    icon: Shirt,
    description: 'Effective laundry detergents, softeners and fabric care solutions for commercial laundry operations.',
  },
  {
    id: 'rational-and-mkn',
    name: 'Rational & MKN Cleaning Solutions',
    slug: 'rational-and-mkn',
    href: '/products/rational-and-mkn',
    image: '/images/categories/cat-rational.webp',
    icon: Flame,
    description: 'Certified cleaning and care products for Rational oven and MKN equipment.',
  },
  {
    id: 'janitorial-products',
    name: 'Janitorial Products & Facility Hardware',
    slug: 'janitorial-products',
    href: '/products/janitorial-products',
    image: '/images/categories/cat-janitorial.webp',
    icon: Sparkles,
    description: 'Floor care, tools, wipes and cleaning accessories for efficient facility maintenance.',
  },
  {
    id: 'disposables-and-packaging',
    name: 'Disposables & Packaging',
    slug: 'disposables-and-packaging',
    href: '/products/disposables-and-packaging',
    image: '/images/categories/cat-disposables.webp',
    icon: PackageCheck,
    description: 'Food-safe disposables, packaging and hygiene essentials for daily operations.',
  },
];

export const CategorySection: React.FC = () => {
  return (
    <section className="py-8 sm:py-16 lg:py-24 bg-[#F7F8F6]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-12 lg:mb-16 gap-3 sm:gap-6">
          <div className="max-w-2xl space-y-1.5 sm:space-y-3">
            <span className="text-[10px] sm:text-[13px] font-heading font-extrabold uppercase tracking-[0.14em] text-[#A71930]">
              OUR PRODUCT CATEGORIES
            </span>
            <h2 className="text-xl sm:text-4xl lg:text-[2.65rem] font-heading font-extrabold text-[#172B40] leading-tight">
              Complete Cleaning Solutions for Professional Environments.
            </h2>
            <p className="text-xs sm:text-base text-[#66717C] font-sans leading-relaxed">
              A comprehensive range of high-performance cleaning, hygiene and maintenance products for businesses across multiple industries.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full border border-[#D0D5DD] bg-white text-xs sm:text-sm font-sans font-semibold text-[#172B40] hover:border-[#A71930] hover:text-[#A71930] transition-all shadow-sm self-start md:self-auto shrink-0"
          >
            <span>View Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Categories Grid (2 Columns on mobile, 3 Columns on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {CATEGORIES.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.id}
                to={category.href}
                className="group bg-white rounded-xl sm:rounded-2xl border border-[#E6E9EC] overflow-hidden shadow-subtle hover:shadow-card-hover hover:border-[#A71930]/30 transition-all duration-300 flex flex-col"
              >
                {/* Category Photograph */}
                <div className="relative aspect-square sm:aspect-[4/3] bg-[#F0F2F4] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Floating Icon Badge */}
                  <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-4 w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/95 backdrop-blur-sm border border-[#E6E9EC] shadow-sm flex items-center justify-center text-[#A71930] group-hover:bg-[#A71930] group-hover:text-white transition-colors">
                    <IconComponent className="w-3 h-3 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-2.5 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between space-y-2 sm:space-y-4">
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-xs sm:text-base lg:text-[1.18rem] font-heading font-bold text-[#172B40] group-hover:text-[#A71930] transition-colors leading-snug line-clamp-2">
                      {category.name}
                    </h3>
                    <p className="hidden sm:block text-xs sm:text-[13.5px] text-[#66717C] font-sans leading-relaxed line-clamp-2">
                      {category.description}
                    </p>
                  </div>

                  <div className="pt-0.5 text-[10.5px] sm:text-xs lg:text-sm font-sans font-semibold text-[#A71930] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
