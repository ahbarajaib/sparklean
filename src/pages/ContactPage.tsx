import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  Building2,
  User,
  Package,
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '@/data/navigation';
import { COMMERCIAL_PRODUCTS } from '@/data/products';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get('product') || '';
  const enquiryType = searchParams.get('type') || '';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productInterest: prefilledProduct || 'General Commercial Enquiry',
    message: prefilledProduct
      ? `Hello Sparklean team,\n\nWe would like to request commercial wholesale pricing and specification data sheets for ${prefilledProduct}.\n\nPlease provide quotation and delivery schedule for the UAE.`
      : enquiryType === 'quote'
      ? 'Hello Sparklean team,\n\nWe are looking to request a customized commercial supply quote for our business operations.'
      : '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Update prefilled product if URL query param changes
  useEffect(() => {
    if (prefilledProduct) {
      setFormData((prev) => ({
        ...prev,
        productInterest: prefilledProduct,
        message: `Hello Sparklean team,\n\nWe would like to request commercial wholesale pricing and specification data sheets for ${prefilledProduct}.\n\nPlease provide quotation and delivery schedule for the UAE.`,
      }));
    }
  }, [prefilledProduct]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.company.trim()) errs.company = 'Company name is required';
    if (!formData.email.trim()) {
      errs.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Contact telephone is required';
    if (!formData.message.trim()) errs.message = 'Please provide details for your enquiry';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const generatedRef = 'SPK-ENQ-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      productInterest: 'General Commercial Enquiry',
      message: '',
    });
    setErrors({});
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Breadcrumbs */}
      <div className="bg-sparklean-off-white/60 border-b border-sparklean-border-light py-4">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-sparklean-muted">
            <Link to="/" className="hover:text-sparklean-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-sparklean-muted/60" />
            <span className="text-sparklean-charcoal font-semibold">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* 2. Header Introduction */}
      <section className="bg-sparklean-off-white/40 py-12 sm:py-16 border-b border-sparklean-border-light">
        <div className="max-w-narrow mx-auto px-4 text-center space-y-3">
          <span className="text-xs font-heading font-semibold uppercase tracking-widest text-sparklean-primary">
            Commercial Support &amp; Quotations
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
            Contact Sparklean Global
          </h1>
          <p className="text-sm sm:text-base text-sparklean-muted leading-relaxed">
            Reach out to our commercial sales office in Ajman, UAE for product specifications,
            bulk supply agreements, and technical sanitation consultation.
          </p>
        </div>
      </section>

      {/* 3. Main Contact & Enquiry Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Verified UAE Headquarters & Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-heading font-semibold uppercase tracking-widest text-sparklean-primary">
                  Official Channels
                </span>
                <h2 className="text-2xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
                  UAE Headquarters
                </h2>
                <p className="text-xs sm:text-sm text-sparklean-muted leading-relaxed">
                  Direct commercial inquiries are managed from our central office and distribution facility
                  in the Al Jurf Industrial Area, Ajman.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                {/* Physical Location */}
                <div className="p-5 bg-sparklean-off-white/60 rounded-card border border-sparklean-border space-y-2">
                  <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
                    <MapPin className="w-4 h-4 text-sparklean-primary" />
                    <span>Business Address</span>
                  </div>
                  <p className="text-xs sm:text-sm text-sparklean-charcoal pl-6">
                    PO BOX: 30304, Al Jurf Industrial Area, Ajman, United Arab Emirates
                  </p>
                  {/* Verified External Map Link */}
                  <div className="pl-6 pt-1">
                    <a
                      href="https://maps.google.com/?q=Al+Jurf+Ajman+United+Arab+Emirates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sparklean-primary hover:text-sparklean-primary-dark transition-colors"
                    >
                      <span>View Location on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Telephone & WhatsApp */}
                <div className="p-5 bg-sparklean-off-white/60 rounded-card border border-sparklean-border space-y-2">
                  <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
                    <Phone className="w-4 h-4 text-sparklean-primary" />
                    <span>Direct Phone Numbers</span>
                  </div>
                  <div className="text-xs sm:text-sm text-sparklean-charcoal pl-6 space-y-1">
                    <div>
                      <a
                        href="tel:+971504363896"
                        className="font-medium hover:text-sparklean-primary transition-colors"
                      >
                        +971 50 436 3896
                      </a>{' '}
                      <span className="text-xs text-sparklean-muted">(Mobile / WhatsApp)</span>
                    </div>
                    <div>
                      <a
                        href="tel:+97167314701"
                        className="font-medium hover:text-sparklean-primary transition-colors"
                      >
                        +971 6 731 4701
                      </a>{' '}
                      <span className="text-xs text-sparklean-muted">(Telephone)</span>
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="p-5 bg-sparklean-off-white/60 rounded-card border border-sparklean-border space-y-2">
                  <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
                    <Mail className="w-4 h-4 text-sparklean-primary" />
                    <span>Email Communications</span>
                  </div>
                  <div className="pl-6">
                    <a
                      href="mailto:info@sparkleanglobal.com"
                      className="text-xs sm:text-sm font-medium text-sparklean-charcoal hover:text-sparklean-primary transition-colors break-all"
                    >
                      info@sparkleanglobal.com
                    </a>
                    <p className="text-[11px] text-sparklean-muted mt-0.5">
                      For corporate procurement, distributor inquiries, and MSDS requests.
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="p-5 bg-sparklean-off-white/60 rounded-card border border-sparklean-border space-y-2">
                  <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
                    <Clock className="w-4 h-4 text-sparklean-primary" />
                    <span>Operating Hours</span>
                  </div>
                  <p className="text-xs sm:text-sm text-sparklean-charcoal pl-6">
                    Monday – Saturday: 8:00 AM – 6:00 PM (Gulf Standard Time)
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Frontend Enquiry & Quote Request Form */}
            <div className="lg:col-span-7 bg-white rounded-container border border-sparklean-border p-6 sm:p-10 shadow-card">
              {isSubmitted ? (
                /* Success Confirmation State */
                <div className="py-10 text-center space-y-5">
                  <div className="w-16 h-16 bg-sparklean-primary-light text-sparklean-primary rounded-full flex items-center justify-center mx-auto border border-sparklean-primary/20">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
                    Enquiry Submitted Successfully
                  </h3>

                  <div className="bg-sparklean-off-white p-4 rounded-card border border-sparklean-border max-w-sm mx-auto">
                    <span className="text-xs text-sparklean-muted uppercase tracking-wider block">
                      Enquiry Reference ID
                    </span>
                    <span className="font-mono text-lg font-bold text-sparklean-primary">
                      {referenceId}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-sparklean-muted max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-sparklean-charcoal">{formData.name}</strong> from{' '}
                    <strong className="text-sparklean-charcoal">{formData.company}</strong>. Your enquiry
                    regarding{' '}
                    <strong className="text-sparklean-charcoal">{formData.productInterest}</strong> has been
                    registered in our demonstration system. A response will be coordinated to{' '}
                    <strong className="text-sparklean-charcoal">{formData.email}</strong>.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-2.5 bg-sparklean-primary text-white font-heading font-medium text-xs uppercase tracking-wider rounded-subtle hover:bg-sparklean-primary-dark transition-colors shadow-subtle"
                    >
                      Submit Another Enquiry
                    </button>
                    <Link
                      to="/products"
                      className="w-full sm:w-auto px-6 py-2.5 bg-white text-sparklean-charcoal border border-sparklean-border font-heading font-medium text-xs uppercase tracking-wider rounded-subtle hover:bg-sparklean-off-white transition-colors"
                    >
                      Browse Catalogue
                    </Link>
                  </div>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-sparklean-border-light pb-4 space-y-1">
                    <h2 className="text-xl sm:text-2xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
                      Commercial Enquiry Form
                    </h2>
                    <p className="text-xs text-sparklean-muted">
                      Complete this form to request commercial pricing, sample evaluations, or delivery schedules.
                    </p>
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-sparklean-charcoal uppercase tracking-wider mb-1">
                        Full Name <span className="text-sparklean-primary">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-sparklean-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Salim Al Nuaimi"
                          className={`w-full pl-9 pr-3 py-2.5 bg-sparklean-off-white text-xs text-sparklean-charcoal rounded-subtle border ${
                            errors.name ? 'border-red-500' : 'border-sparklean-border'
                          } focus:outline-none focus:ring-1 focus:ring-sparklean-primary`}
                        />
                      </div>
                      {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-sparklean-charcoal uppercase tracking-wider mb-1">
                        Company Name <span className="text-sparklean-primary">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-sparklean-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Emirates Hospitality Group"
                          className={`w-full pl-9 pr-3 py-2.5 bg-sparklean-off-white text-xs text-sparklean-charcoal rounded-subtle border ${
                            errors.company ? 'border-red-500' : 'border-sparklean-border'
                          } focus:outline-none focus:ring-1 focus:ring-sparklean-primary`}
                        />
                      </div>
                      {errors.company && <p className="text-[11px] text-red-600 mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-sparklean-charcoal uppercase tracking-wider mb-1">
                        Business Email <span className="text-sparklean-primary">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-sparklean-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="procurement@company.ae"
                          className={`w-full pl-9 pr-3 py-2.5 bg-sparklean-off-white text-xs text-sparklean-charcoal rounded-subtle border ${
                            errors.email ? 'border-red-500' : 'border-sparklean-border'
                          } focus:outline-none focus:ring-1 focus:ring-sparklean-primary`}
                        />
                      </div>
                      {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-sparklean-charcoal uppercase tracking-wider mb-1">
                        Phone Number <span className="text-sparklean-primary">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-sparklean-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 50 000 0000"
                          className={`w-full pl-9 pr-3 py-2.5 bg-sparklean-off-white text-xs text-sparklean-charcoal rounded-subtle border ${
                            errors.phone ? 'border-red-500' : 'border-sparklean-border'
                          } focus:outline-none focus:ring-1 focus:ring-sparklean-primary`}
                        />
                      </div>
                      {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Product of Interest Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-sparklean-charcoal uppercase tracking-wider mb-1">
                      Product of Interest
                    </label>
                    <div className="relative">
                      <Package className="w-4 h-4 text-sparklean-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={formData.productInterest}
                        onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                        className="w-full pl-9 pr-8 py-2.5 bg-sparklean-off-white text-xs text-sparklean-charcoal rounded-subtle border border-sparklean-border focus:outline-none focus:ring-1 focus:ring-sparklean-primary cursor-pointer"
                      >
                        <option value="General Commercial Enquiry">General Commercial Enquiry</option>
                        <optgroup label="Core Commercial Categories">
                          {PRODUCT_CATEGORIES.map((c) => (
                            <option key={c.id} value={`Category: ${c.name}`}>
                              {c.name} (All Products)
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Specific Commercial Products">
                          {COMMERCIAL_PRODUCTS.map((p) => (
                            <option key={p.id} value={p.name}>
                              {p.name}
                            </option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-sparklean-charcoal uppercase tracking-wider mb-1">
                      Enquiry Message <span className="text-sparklean-primary">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-sparklean-muted absolute left-3 top-3 pointer-events-none" />
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your facility's requirements, estimated volume, or requested technical data..."
                        className={`w-full pl-9 pr-3 py-2.5 bg-sparklean-off-white text-xs text-sparklean-charcoal rounded-subtle border ${
                          errors.message ? 'border-red-500' : 'border-sparklean-border'
                        } focus:outline-none focus:ring-1 focus:ring-sparklean-primary resize-none`}
                      />
                    </div>
                    {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-sparklean-primary text-white font-heading font-medium text-sm uppercase tracking-wider rounded-subtle hover:bg-sparklean-primary-dark transition-colors shadow-subtle"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Commercial Enquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

