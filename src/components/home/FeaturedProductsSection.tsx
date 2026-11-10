import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { FEATURED_PRODUCTS } from '@/data/products';

export const FeaturedProductsSection: React.FC = () => {
  const featured = FEATURED_PRODUCTS.slice(0, 4);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white border-t border-[#E6E9EC]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] sm:text-[13px] font-heading font-extrabold uppercase tracking-[0.14em] text-[#A71930]">
                FEATURED FORMULATIONS
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-heading font-extrabold text-[#172B40] leading-tight">
              High-Performance Cleaning Formulations.
            </h2>
            <p className="text-xs sm:text-base text-[#66717C] font-sans leading-relaxed">
              Professional-grade, tested and trusted solutions for demanding commercial environments across the UAE.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#A71930] hover:bg-[#8B1226] text-white font-sans font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-subtle hover:shadow-card self-start sm:self-auto shrink-0"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
        </div>

        {/* 4 Product Packshots Grid / Mobile Touch Snap Carousel */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-7 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar pb-3 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
          {featured.map((product) => (
            <div
              key={product.id}
              className="w-[78vw] max-w-[280px] sm:w-auto shrink-0 snap-start group bg-white rounded-2xl border border-[#E6E9EC] p-4 sm:p-5 flex flex-col justify-between hover:shadow-card-hover hover:border-[#A71930]/30 transition-all duration-300"
            >
              <div>
                {/* Packshot Image Container with Contain Fit */}
                <div className="relative aspect-square bg-[#F7F8F6] rounded-xl overflow-hidden p-4 mb-4 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#639B48] text-white shadow-sm">
                    <Sparkles className="w-2.5 h-2.5" />
                    Commercial
                  </span>
                </div>

                {/* Product Metadata */}
                <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-wider text-[#A71930] block mb-1">
                  {product.categoryName}
                </span>

                <h3 className="text-sm sm:text-base lg:text-[1.05rem] font-heading font-bold text-[#172B40] group-hover:text-[#A71930] transition-colors leading-snug line-clamp-2 mb-1.5">
                  <Link to={`/products/${product.category}/${product.slug}`}>
                    {product.name}
                  </Link>
                </h3>

                <p className="text-xs text-[#66717C] font-sans leading-relaxed line-clamp-2 mb-3">
                  {product.shortDescription}
                </p>
              </div>

              {/* Bottom Specs & CTA */}
              <div className="pt-3 border-t border-[#F0F2F4] space-y-2.5">
                <div className="flex items-center gap-1.5 text-[11px] text-[#66717C]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#639B48] shrink-0" />
                  <span className="truncate">Commercial concentrated</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-semibold text-[#172B40]">
                    {product.availableSizes?.[0] || 'Bulk Pack'}
                  </span>
                  <Link
                    to={`/products/${product.category}/${product.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#A71930] hover:text-[#8B1226] group-hover:translate-x-1 transition-all"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
