import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  ChevronRight,
  Filter,
  ArrowRight,
  Sparkles,
  Layers,
} from 'lucide-react';
import { COMMERCIAL_PRODUCTS } from '@/data/products';
import { PRODUCT_CATEGORIES } from '@/data/navigation';
import { ProductCard } from '@/components/product/ProductCard';

export const ProductCataloguePage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryId || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Sync state if categoryId in route params changes
  useEffect(() => {
    if (categoryId) {
      setSelectedCategory(categoryId);
    } else {
      setSelectedCategory('all');
    }
  }, [categoryId]);

  // Handle category tab change
  const handleCategorySelect = (slug: string) => {
    setSelectedCategory(slug);
    if (slug === 'all') {
      navigate('/products');
    } else {
      navigate(`/products/${slug}`);
    }
  };

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return COMMERCIAL_PRODUCTS.filter((product) => {
      // 1. Category match
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      // 2. Search query match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        product.categoryName.toLowerCase().includes(query) ||
        (product.brand && product.brand.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Active category display name for breadcrumbs and headings
  const activeCategoryObj = PRODUCT_CATEGORIES.find((c) => c.id === selectedCategory);
  const activeCategoryName = activeCategoryObj ? activeCategoryObj.name : null;

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Breadcrumbs & Header Section */}
      <section className="bg-sparklean-off-white/60 border-b border-sparklean-border-light py-8 sm:py-12">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-sparklean-muted">
            <Link to="/" className="hover:text-sparklean-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-sparklean-muted/60" />
            <Link
              to="/products"
              onClick={() => handleCategorySelect('all')}
              className={activeCategoryName ? 'hover:text-sparklean-primary transition-colors' : 'text-sparklean-charcoal font-semibold'}
            >
              Our Products
            </Link>
            {activeCategoryName && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-sparklean-muted/60" />
                <span className="text-sparklean-primary font-semibold">
                  {activeCategoryName}
                </span>
              </>
            )}
          </nav>

          {/* Page Heading & Short Introduction */}
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-heading uppercase tracking-wider bg-sparklean-primary-light text-sparklean-primary font-medium">
              <Sparkles className="w-3 h-3 text-sparklean-accent" />
              <span>Commercial &amp; Institutional Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
              {activeCategoryName ? activeCategoryName : 'Our Products'}
            </h1>
            <p className="text-sm sm:text-base text-sparklean-muted leading-relaxed">
              Explore Sparklean&apos;s professional cleaning, hygiene, and maintenance formulations.
              Engineered specifically for hospitality facilities, commercial catering operations,
              industrial laundries, and healthcare institutions across the United Arab Emirates.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filtering & Search Bar */}
      <section className="sticky top-20 z-20 bg-white/95 backdrop-blur-md border-b border-sparklean-border py-4 shadow-subtle">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Filter Pills (Scrollable horizontally on mobile) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              <button
                type="button"
                onClick={() => handleCategorySelect('all')}
                className={`px-4 py-2 rounded-subtle text-xs font-heading uppercase tracking-wider font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  selectedCategory === 'all'
                    ? 'bg-sparklean-primary text-white shadow-subtle'
                    : 'bg-sparklean-off-white text-sparklean-charcoal hover:bg-sparklean-primary-light hover:text-sparklean-primary border border-sparklean-border'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>All Products</span>
              </button>

              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`px-4 py-2 rounded-subtle text-xs font-heading uppercase tracking-wider font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-sparklean-primary text-white shadow-subtle'
                      : 'bg-sparklean-off-white text-sparklean-charcoal hover:bg-sparklean-primary-light hover:text-sparklean-primary border border-sparklean-border'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Simple Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-4 h-4 text-sparklean-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-9 pr-8 py-2 bg-sparklean-off-white text-sparklean-charcoal text-xs font-sans rounded-subtle border border-sparklean-border focus:outline-none focus:ring-1 focus:ring-sparklean-primary focus:border-sparklean-primary transition-all placeholder:text-sparklean-muted"
                aria-label="Search commercial products"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-sparklean-muted hover:text-sparklean-charcoal"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Results count & active search summary */}
          <div className="flex items-center justify-between text-xs text-sparklean-muted pt-1">
            <span className="font-mono">
              Showing {filteredProducts.length}{' '}
              {filteredProducts.length === 1 ? 'commercial product' : 'commercial products'}
              {selectedCategory !== 'all' && (
                <>
                  {' '}in{' '}
                  <span className="text-sparklean-primary font-semibold">
                    {activeCategoryName}
                  </span>
                </>
              )}
            </span>

            {(selectedCategory !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  navigate('/products');
                }}
                className="text-sparklean-primary hover:text-sparklean-primary-dark font-medium underline underline-offset-2 flex items-center gap-1"
              >
                <span>Reset all filters</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3. Product Grid Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              <motion.div
                key={`${selectedCategory}-${searchQuery}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            ) : (
              /* Empty State */
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20 px-4 bg-sparklean-off-white/40 rounded-container border border-sparklean-border max-w-lg mx-auto space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-sparklean-off-white border border-sparklean-border flex items-center justify-center mx-auto text-sparklean-muted">
                  <Filter className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
                  No Formulations Found
                </h3>
                <p className="text-xs sm:text-sm text-sparklean-muted">
                  We could not find any products matching your current category filter or search query.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery('');
                      navigate('/products');
                    }}
                    className="px-6 py-2.5 bg-sparklean-primary text-white font-heading font-medium text-xs uppercase tracking-wider rounded-subtle hover:bg-sparklean-primary-dark transition-colors shadow-subtle"
                  >
                    View All Products
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Request a Quote CTA Banner */}
      <section className="py-16 sm:py-20 bg-sparklean-off-white border-t border-sparklean-border">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-container border border-sparklean-border p-8 sm:p-12 shadow-card flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="text-xs font-heading font-semibold uppercase tracking-widest text-sparklean-primary">
                Bulk Orders &amp; Institutional Supply
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
                Need Customized Quantities or Technical Data Sheets?
              </h2>
              <p className="text-sm text-sparklean-muted leading-relaxed">
                Our technical sales team provides tailored commercial quotations, MSDS documentation,
                dilution ratio guidelines, and scheduled delivery plans for hospitality and industrial facilities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <Link
                to="/contact?type=quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-sparklean-primary text-white font-heading font-medium text-sm uppercase tracking-wider rounded-subtle hover:bg-sparklean-primary-dark transition-colors shadow-subtle"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-sparklean-charcoal border border-sparklean-border font-heading font-medium text-sm uppercase tracking-wider rounded-subtle hover:bg-sparklean-off-white transition-colors"
              >
                <span>Contact Sales</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCataloguePage;

