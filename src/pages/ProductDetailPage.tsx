import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ShieldCheck,
  Package,
  CheckCircle2,
  Send,
  ArrowLeft,
  FileText,
  AlertCircle,
  Building2,
  Layers,
} from 'lucide-react';
import { COMMERCIAL_PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { ProductEnquiryModal } from '@/components/product/ProductEnquiryModal';

export const ProductDetailPage: React.FC = () => {
  const { categoryId, productSlug } = useParams<{
    categoryId?: string;
    productSlug?: string;
  }>();

  // Find product by slug
  const product = COMMERCIAL_PRODUCTS.find((p) => p.slug === productSlug);

  // Gallery state: active displayed image
  const [activeImage, setActiveImage] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  // Sync state whenever productSlug changes
  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      if (product.availableSizes && product.availableSizes.length > 0) {
        setSelectedSize(product.availableSizes[0]);
      } else {
        setSelectedSize('');
      }
      window.scrollTo(0, 0);
    }
  }, [product, productSlug]);

  // Handle Invalid Product Slug / Not Found
  if (!product) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#F7F8F6] py-20 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl border border-[#E6E9EC] p-8 text-center space-y-4 shadow-card">
          <div className="w-14 h-14 bg-[#FDF2F4] text-[#A71930] rounded-full flex items-center justify-center mx-auto border border-[#A71930]/20">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-heading font-bold text-[#172B40]">
            Product Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#66717C] leading-relaxed">
            The commercial formulation you requested could not be located in our active product directory.
          </p>
          <div className="pt-2">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#A71930] hover:bg-[#8B1226] text-white font-sans font-semibold text-xs rounded-md transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Product Catalogue</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Gallery images array
  const galleryImages =
    product.images && product.images.length > 0 ? product.images : [product.image];

  // Related products from the same category
  const relatedProducts = COMMERCIAL_PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || !categoryId)
  ).slice(0, 4);

  const finalRelated =
    relatedProducts.length >= 2
      ? relatedProducts
      : COMMERCIAL_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Breadcrumb Navigation */}
      <div className="bg-[#F7F8F6] border-b border-[#E6E9EC] py-4">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs text-[#66717C]">
            <Link to="/" className="hover:text-[#A71930] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#66717C]/60" />
            <Link to="/products" className="hover:text-[#A71930] transition-colors">
              Product Range
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#66717C]/60" />
            <Link
              to={`/products/${product.category}`}
              className="hover:text-[#A71930] transition-colors capitalize"
            >
              {product.categoryName}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#66717C]/60" />
            <span className="text-[#172B40] font-semibold truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* 2. Main Product Section */}
      <section className="py-10 sm:py-16 border-b border-[#E6E9EC]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Product Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              {/* Main Image Frame */}
              <div className="relative aspect-square bg-[#F7F8F6] rounded-2xl border border-[#E6E9EC] p-8 flex items-center justify-center overflow-hidden shadow-subtle">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  src={activeImage}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain select-none"
                />

                {/* Brand badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-sm border border-[#E6E9EC] rounded-full text-[11px] font-sans uppercase tracking-wider text-[#A71930] font-bold shadow-sm">
                  {product.brand || 'SPARKLEAN'}
                </div>
              </div>

              {/* Thumbnails (Only rendered if more than 1 image exists) */}
              {galleryImages.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(img)}
                      className={`relative w-20 h-20 rounded-xl border p-2 bg-[#F7F8F6] shrink-0 transition-all ${
                        activeImage === img
                          ? 'border-[#A71930] ring-2 ring-[#A71930]/20 shadow-sm'
                          : 'border-[#E6E9EC] hover:border-[#A71930]/50'
                      }`}
                      aria-label={`View image thumbnail ${idx + 1}`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${idx + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Information */}
            <div className="lg:col-span-6 space-y-6">
              {/* Category & Title */}
              <div className="space-y-3">
                <Link
                  to={`/products/${product.category}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FDF2F4] text-[#A71930] rounded-full text-xs font-sans uppercase tracking-wider font-semibold hover:bg-[#A71930] hover:text-white transition-colors"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{product.categoryName}</span>
                </Link>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#172B40] leading-tight">
                  {product.name}
                </h1>
              </div>

              {/* Short Description */}
              <p className="text-sm sm:text-base text-[#66717C] leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Available Packaging Selector */}
              {product.availableSizes && product.availableSizes.length > 0 && (
                <div className="space-y-2.5 pt-3 border-t border-[#F0F2F4]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#172B40] block">
                    Available Packaging Volumes:
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {product.availableSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg text-xs font-sans font-semibold border transition-all flex items-center gap-2 ${
                          selectedSize === size
                            ? 'bg-[#A71930] text-white border-[#A71930] shadow-sm'
                            : 'bg-[#F7F8F6] text-[#172B40] border-[#E6E9EC] hover:border-[#A71930]/50'
                        }`}
                      >
                        <Package className="w-3.5 h-3.5 text-[#D6A64F]" />
                        <span>{size}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Highlights */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-2.5 pt-3 border-t border-[#F0F2F4]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#172B40] block">
                    Key Formulation Highlights:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#172B40]">
                        <CheckCircle2 className="w-4 h-4 text-[#639B48] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Request a Quote CTA */}
              <div className="pt-4 border-t border-[#F0F2F4] space-y-3">
                <button
                  type="button"
                  onClick={() => setIsEnquiryModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#A71930] hover:bg-[#8B1226] text-white font-sans font-semibold text-sm rounded-md transition-all shadow-subtle hover:shadow-card"
                >
                  <Send className="w-4 h-4" />
                  <span>Request a Commercial Quote</span>
                </button>

                <div className="flex items-center gap-5 text-xs text-[#66717C] pt-1">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#639B48]" />
                    <span>Commercial &amp; Bulk Supply</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#639B48]" />
                    <span>UAE Fast Dispatch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Overview, Key Benefits, Technical Specifications */}
      <section className="py-16 bg-[#F7F8F6] border-b border-[#E6E9EC]">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Section 1: Product Overview */}
          {product.fullDescription && (
            <div className="bg-white rounded-2xl border border-[#E6E9EC] p-6 sm:p-8 shadow-subtle space-y-4">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#172B40] border-b border-[#F0F2F4] pb-3">
                1. Product Overview
              </h2>
              <p className="text-sm sm:text-base text-[#172B40]/90 leading-relaxed max-w-4xl">
                {product.fullDescription}
              </p>
            </div>
          )}

          {/* Section 2: Key Benefits */}
          {product.features && product.features.length > 0 && (
            <div className="bg-white rounded-2xl border border-[#E6E9EC] p-6 sm:p-8 shadow-subtle space-y-4">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#172B40] border-b border-[#F0F2F4] pb-3">
                2. Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 bg-[#F7F8F6] rounded-xl border border-[#E6E9EC]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#639B48] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#172B40] font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: Technical Specifications */}
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div className="bg-white rounded-2xl border border-[#E6E9EC] p-6 sm:p-8 shadow-subtle space-y-4">
              <div className="flex items-center justify-between border-b border-[#F0F2F4] pb-3">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-[#172B40]">
                  3. Technical Specifications
                </h2>
                <span className="text-xs text-[#66717C] font-mono uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#D6A64F]" />
                  <span>Verified Specifications</span>
                </span>
              </div>

              <div className="overflow-hidden rounded-xl border border-[#E6E9EC]">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, val], idx) => (
                      <tr
                        key={key}
                        className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F7F8F6]'}
                      >
                        <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#172B40] w-1/3 border-b border-[#E6E9EC]">
                          {key}
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 text-[#66717C] border-b border-[#E6E9EC]">
                          {val}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. Related Products */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-heading font-extrabold uppercase tracking-[0.14em] text-[#A71930]">
                CATEGORY RANGE
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#172B40]">
                Related Commercial Products
              </h2>
            </div>
            <Link
              to={`/products/${product.category}`}
              className="text-xs font-sans font-semibold text-[#A71930] hover:text-[#8B1226] hidden sm:inline-flex items-center gap-1 transition-colors"
            >
              <span>View All in Category</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {finalRelated.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Enquiry Modal */}
      <ProductEnquiryModal
        product={product}
        selectedSize={selectedSize}
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </div>
  );
};

export default ProductDetailPage;
