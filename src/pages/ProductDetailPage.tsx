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
      <div className="min-h-[70vh] flex items-center justify-center bg-sparklean-off-white/40 py-20 px-4">
        <div className="max-w-md w-full bg-white rounded-container border border-sparklean-border p-8 text-center space-y-4 shadow-card">
          <div className="w-14 h-14 bg-sparklean-primary-light text-sparklean-primary rounded-full flex items-center justify-center mx-auto border border-sparklean-primary/20">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
            Product Not Found
          </h1>
          <p className="text-xs sm:text-sm text-sparklean-muted leading-relaxed">
            The commercial formulation you requested could not be located in our active product directory.
          </p>
          <div className="pt-2">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-sparklean-primary text-white font-heading font-medium text-xs uppercase tracking-wider rounded-subtle hover:bg-sparklean-primary-dark transition-colors shadow-subtle"
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

  // Related products from the same category (or other commercial products if few)
  const relatedProducts = COMMERCIAL_PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || !categoryId)
  ).slice(0, 4);

  // If same category has fewer than 2 items, complement with other commercial items
  const finalRelated =
    relatedProducts.length >= 2
      ? relatedProducts
      : COMMERCIAL_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);


  return (
    <div className="bg-white min-h-screen">
      {/* 1. Breadcrumb Navigation */}
      <div className="bg-sparklean-off-white/60 border-b border-sparklean-border-light py-4">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs text-sparklean-muted">
            <Link to="/" className="hover:text-sparklean-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-sparklean-muted/60" />
            <Link to="/products" className="hover:text-sparklean-primary transition-colors">
              Product Range
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-sparklean-muted/60" />
            <Link
              to={`/products/${product.category}`}
              className="hover:text-sparklean-primary transition-colors capitalize"
            >
              {product.categoryName}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-sparklean-muted/60" />
            <span className="text-sparklean-charcoal font-semibold truncate max-w-[200px] sm:max-w-none">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* 2. Main Product Section */}
      <section className="py-10 sm:py-16 border-b border-sparklean-border-light">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Product Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              {/* Main Image Frame */}
              <div className="relative aspect-square bg-sparklean-off-white/40 rounded-card border border-sparklean-border p-8 flex items-center justify-center overflow-hidden shadow-subtle">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  src={activeImage}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain select-none"
                />

                {/* Brand watermark badge */}
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-white/95 backdrop-blur-sm border border-sparklean-border rounded-subtle text-[11px] font-heading uppercase tracking-wider text-sparklean-primary font-semibold shadow-subtle">
                  {product.brand || 'SPARKLEAN'}
                </div>
              </div>

              {/* Thumbnails (Only rendered if more than 1 image exists, no fake thumbnails!) */}
              {galleryImages.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(img)}
                      className={`relative w-20 h-20 rounded-subtle border p-2 bg-sparklean-off-white/50 shrink-0 transition-all ${
                        activeImage === img
                          ? 'border-sparklean-primary ring-2 ring-sparklean-primary/20 shadow-subtle'
                          : 'border-sparklean-border hover:border-sparklean-primary/50'
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
              {/* Category & Tag */}
              <div className="space-y-2">
                <Link
                  to={`/products/${product.category}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-sparklean-primary-light text-sparklean-primary rounded-full text-xs font-heading uppercase tracking-wider font-semibold hover:bg-sparklean-primary hover:text-white transition-colors"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{product.categoryName}</span>
                </Link>

                <h1 className="text-3xl sm:text-4xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal leading-tight">
                  {product.name}
                </h1>
              </div>

              {/* Short Description */}
              <p className="text-sm sm:text-base text-sparklean-muted leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Available Sizes / Variants Selector */}
              {product.availableSizes && product.availableSizes.length > 0 && (
                <div className="space-y-2.5 pt-2 border-t border-sparklean-border-light">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sparklean-charcoal block">
                    Available Packaging Volumes:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.availableSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-subtle text-xs font-mono uppercase tracking-wider font-semibold border transition-all flex items-center gap-2 ${
                          selectedSize === size
                            ? 'bg-sparklean-primary text-white border-sparklean-primary shadow-subtle'
                            : 'bg-sparklean-off-white text-sparklean-charcoal border-sparklean-border hover:border-sparklean-primary/50'
                        }`}
                      >
                        <Package className="w-3.5 h-3.5" />
                        <span>{size}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features Highlights */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-sparklean-border-light">
                  <span className="text-xs font-semibold uppercase tracking-wider text-sparklean-charcoal block">
                    Key Formulation Highlights:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-sparklean-charcoal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sparklean-accent shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Request a Quote CTA */}
              <div className="pt-4 border-t border-sparklean-border-light space-y-3">
                <button
                  type="button"
                  onClick={() => setIsEnquiryModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-sparklean-primary text-white font-heading font-medium text-sm uppercase tracking-wider rounded-subtle hover:bg-sparklean-primary-dark transition-colors shadow-card hover:shadow-card-hover"
                >
                  <Send className="w-4 h-4" />
                  <span>Request a Commercial Quote</span>
                </button>

                <div className="flex items-center gap-4 text-xs text-sparklean-muted pt-1">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-sparklean-accent" />
                    <span>Commercial &amp; Bulk Supply</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-sparklean-accent" />
                    <span>UAE Fast Dispatch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Additional Sections: Overview, Key Benefits, Technical Specs */}
      <section className="py-16 bg-sparklean-off-white/40 border-b border-sparklean-border-light">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section 1: Product Overview */}
          {product.fullDescription && (
            <div className="bg-white rounded-card border border-sparklean-border p-6 sm:p-8 shadow-subtle space-y-4">
              <h2 className="text-xl sm:text-2xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal border-b border-sparklean-border-light pb-3">
                1. Product Overview
              </h2>
              <p className="text-sm sm:text-base text-sparklean-charcoal/90 leading-relaxed max-w-4xl">
                {product.fullDescription}
              </p>
            </div>
          )}

          {/* Section 2: Key Benefits */}
          {product.features && product.features.length > 0 && (
            <div className="bg-white rounded-card border border-sparklean-border p-6 sm:p-8 shadow-subtle space-y-4">
              <h2 className="text-xl sm:text-2xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal border-b border-sparklean-border-light pb-3">
                2. Key Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 bg-sparklean-off-white/60 rounded-subtle border border-sparklean-border-light"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sparklean-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-sparklean-charcoal font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: Technical Specifications (Only when data exists) */}
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div className="bg-white rounded-card border border-sparklean-border p-6 sm:p-8 shadow-subtle space-y-4">
              <div className="flex items-center justify-between border-b border-sparklean-border-light pb-3">
                <h2 className="text-xl sm:text-2xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
                  3. Technical Specifications
                </h2>
                <span className="text-xs text-sparklean-muted font-mono uppercase tracking-wider flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-sparklean-accent" />
                  <span>Verified Data</span>
                </span>
              </div>

              <div className="overflow-hidden rounded-subtle border border-sparklean-border">
                <table className="w-full text-left text-xs sm:text-sm">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, val], idx) => (
                      <tr
                        key={key}
                        className={idx % 2 === 0 ? 'bg-white' : 'bg-sparklean-off-white/50'}
                      >
                        <td className="py-3 px-4 sm:px-6 font-semibold text-sparklean-charcoal w-1/3 border-b border-sparklean-border-light">
                          {key}
                        </td>
                        <td className="py-3 px-4 sm:px-6 text-sparklean-muted border-b border-sparklean-border-light">
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

      {/* 4. Section 4: Related Products */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-heading font-semibold uppercase tracking-widest text-sparklean-primary">
                Category Range
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
                Related Commercial Products
              </h2>
            </div>
            <Link
              to={`/products/${product.category}`}
              className="text-xs font-heading uppercase tracking-wider font-semibold text-sparklean-primary hover:text-sparklean-primary-dark transition-colors hidden sm:inline-flex items-center gap-1"
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
