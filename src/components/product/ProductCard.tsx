import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl border border-[#E6E9EC] overflow-hidden shadow-subtle hover:shadow-card-hover hover:border-[#A71930]/30 transition-all duration-300 flex flex-col h-full">
      {/* Product Image Frame */}
      <Link
        to={`/products/${product.category}/${product.slug}`}
        className="relative aspect-square bg-[#F7F8F6] p-6 flex items-center justify-center border-b border-[#F0F2F4] overflow-hidden block"
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Category Badge */}
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-sm border border-[#E6E9EC] rounded-full text-[11px] font-sans font-semibold uppercase tracking-wider text-[#A71930] shadow-sm">
          {product.categoryName}
        </span>

        {/* Available Sizes Tag */}
        {product.availableSizes && product.availableSizes.length > 0 && (
          <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-[#172B40]/85 text-white rounded-md text-[10px] font-sans font-medium flex items-center gap-1 backdrop-blur-sm">
            <Package className="w-3 h-3 text-[#D6A64F]" />
            <span>{product.availableSizes[0]}</span>
          </span>
        )}
      </Link>

      {/* Product Details Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {product.brand && (
            <span className="text-[11px] font-sans uppercase tracking-wider text-[#66717C] font-semibold block">
              {product.brand}
            </span>
          )}

          <Link to={`/products/${product.category}/${product.slug}`}>
            <h3 className="text-base sm:text-[1.05rem] font-heading font-bold text-[#172B40] group-hover:text-[#A71930] transition-colors leading-snug line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-[#66717C] font-sans leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* View Details Action Link */}
        <div className="pt-3 border-t border-[#F0F2F4]">
          <Link
            to={`/products/${product.category}/${product.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F7F8F6] hover:bg-[#A71930] text-[#172B40] hover:text-white font-sans font-semibold text-xs rounded-md transition-colors border border-[#E6E9EC] hover:border-transparent shadow-sm"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
