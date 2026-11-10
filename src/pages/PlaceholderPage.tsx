import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, Layers } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '@/data/navigation';

export const PlaceholderPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  // Determine title and details based on path
  let title = 'Section In Progress';
  let categoryName = '';
  let description = 'This section will be developed in an upcoming stage according to the phased implementation plan.';

  if (path === '/about') {
    title = 'About Sparklean Global';
    description =
      'Founded in 2011 in the UAE, Sparklean Global specializes in high-grade commercial detergents, kitchen stewardship solutions, and industrial hygiene systems.';
  } else if (path === '/contact') {
    title = location.search.includes('type=quote') ? 'Request a Commercial Quotation' : 'Contact Sparklean Global';
    description =
      'Connect with our technical cleaning consultants in Ajman & Dubai, UAE. Comprehensive quote builder and inquiry forms will be established in the contact stage.';
  } else if (path === '/privacy') {
    title = 'Privacy Policy';
    description =
      'Commercial client privacy guidelines, data compliance, and confidentiality policies for Sparklean Global.';
  } else if (path === '/products') {
    title = 'Commercial Product Range';
    description =
      'Explore our full portfolio of chemical formulations, sanitation concentrates, and dispensing equipment across 6 core commercial categories.';
  } else if (path.startsWith('/products/')) {
    const categorySlug = path.replace('/products/', '');
    const matchedCategory = PRODUCT_CATEGORIES.find((c) => c.id === categorySlug);
    if (matchedCategory) {
      categoryName = matchedCategory.name;
      title = matchedCategory.name;
      description = matchedCategory.description;
    }
  }

  return (
    <div className="bg-sparklean-off-white/40 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-narrow mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-sparklean-primary-light text-sparklean-primary border border-sparklean-primary/20">
          <Sparkles className="w-3.5 h-3.5 text-sparklean-accent" />
          <span>Stage 2 Navigation Destination</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-heading font-bold uppercase tracking-wider text-sparklean-charcoal">
          {title}
        </h1>

        {categoryName && (
          <p className="text-xs uppercase font-mono tracking-widest text-sparklean-accent font-semibold">
            Product Category: {categoryName}
          </p>
        )}

        <p className="text-sm sm:text-base text-sparklean-muted max-w-lg mx-auto leading-relaxed">
          {description}
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-sparklean-primary text-white font-heading font-medium text-sm uppercase tracking-wider rounded-subtle hover:bg-sparklean-primary-dark transition-colors shadow-subtle"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Preview
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-sparklean-charcoal border border-sparklean-border font-heading font-medium text-sm uppercase tracking-wider rounded-subtle hover:bg-sparklean-off-white transition-colors"
          >
            <Layers className="w-4 h-4 text-sparklean-accent" /> Browse Categories
          </Link>
        </div>
      </div>
    </div>
  );
};

