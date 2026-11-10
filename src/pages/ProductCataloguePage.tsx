import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Search,
  X,
  ChevronRight,
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
      <section className="bg-[#F7F8F6] border-b border-[#E6E9EC] py-10 sm:py-14">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#66717C]">
            <Link to="/" className="hover:text-[#A71930] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#66717C]/60" />
            <Link
              to="/products"
              onClick={() => handleCategorySelect('all')}
              className={activeCategoryName ? 'hover:text-[#A71930] transition-colors' : 'text-[#172B40] font-semibold'}
            >
              Our Products
            </Link>
            {activeCategoryName && (
              <>
                <ChevronRight className="w-3.5 h-3.5 text-[#66717C]/60" />
                <span className="text-[#A71930] font-semibold">
                  {activeCategoryName}
                </span>
              </>
            )}
          </nav>

          {/* Page Heading & Short Introduction */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans uppercase tracking-wider bg-[#FDF2F4] text-[#A71930] font-semibold">
              <Sparkles className="w-3 h-3 text-[#D6A64F]" />
              <span>Commercial &amp; Institutional Portfolio</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#172B40] leading-tight">
              {activeCategoryName ? activeCategoryName : 'Our Commercial Products'}
            </h1>
            <p className="text-sm sm:text-base text-[#66717C] leading-relaxed">
              Explore Sparklean&apos;s professional cleaning, hygiene, and maintenance formulations.
              Engineered specifically for hospitality facilities, commercial catering operations,
              industrial laundries, and healthcare institutions across the United Arab Emirates.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filtering & Search Bar */}
      <section className="sticky top-20 z-20 bg-white/98 backdrop-blur-md border-b border-[#E6E9EC] py-4 shadow-subtle">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Filter Pills (Scrollable horizontally on mobile) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              <button
                type="button"
                onClick={() => handleCategorySelect('all')}
                className={`px-4 py-2 rounded-full text-xs font-sans font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedCategory === 'all'
                    ? 'bg-[#A71930] text-white shadow-sm'
                    : 'bg-[#F7F8F6] text-[#172B40] hover:bg-[#FDF2F4] hover:text-[#A71930] border border-[#E6E9EC]'
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
                  className={`px-4 py-2 rounded-full text-xs font-sans font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#A71930] text-white shadow-sm'
                      : 'bg-[#F7F8F6] text-[#172B40] hover:bg-[#FDF2F4] hover:text-[#A71930] border border-[#E6E9EC]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-4 h-4 text-[#66717C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-9 pr-8 py-2 bg-[#F7F8F6] text-[#172B40] text-xs font-sans rounded-full border border-[#E6E9EC] focus:outline-none focus:border-[#A71930] transition-all placeholder:text-[#66717C]"
                aria-label="Search commercial products"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#66717C] hover:text-[#172B40]"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Results count & active search summary */}
          <div className="flex items-center justify-between text-xs text-[#66717C] pt-1">
            <span className="font-sans">
              Showing {filteredProducts.length}{' '}
              {filteredProducts.length === 1 ? 'commercial product' : 'commercial products'}
              {selectedCategory !== 'all' && (
                <>
                  {' '}in{' '}
                  <span className="text-[#A71930] font-semibold">
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
                className="text-xs text-[#A71930] hover:underline font-semibold"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3. Product Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="py-16 text-center max-w-md mx-auto space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#F7F8F6] border border-[#E6E9EC] flex items-center justify-center mx-auto text-[#66717C]">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold text-[#172B40]">
                No Formulations Found
              </h3>
              <p className="text-sm text-[#66717C] leading-relaxed">
                We couldn&apos;t find any commercial products matching your criteria &quot;{searchQuery}&quot;. Try adjusting your search term or selecting a different category.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                    navigate('/products');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#A71930] hover:bg-[#8B1226] text-white font-sans font-semibold text-xs rounded-md transition-colors shadow-sm"
                >
                  <span>View All Commercial Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. Request a Quote CTA Banner */}
      <section className="py-16 bg-[#F7F8F6] border-t border-[#E6E9EC]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#172B40] text-white rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-card">
            <div className="space-y-3 max-w-xl text-center lg:text-left">
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#D6A64F]">
                Institutional Procurement
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold leading-tight">
                Need Bulk Pricing or Custom Chemical Specifications?
              </h2>
              <p className="text-sm text-white/80 leading-relaxed">
                Speak directly with our technical team for institutional quotations, custom drum sizes,
                and scheduled site delivery anywhere in the UAE.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                to="/contact?type=quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A71930] hover:bg-[#8B1226] text-white font-sans font-semibold text-sm rounded-md transition-colors shadow-subtle"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/30 font-sans font-semibold text-sm rounded-md transition-colors"
              >
                <span>Contact Technical Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCataloguePage;
