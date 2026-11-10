import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Send, Building2, User, Mail, Phone, Package } from 'lucide-react';
import { Product } from '@/types';

interface ProductEnquiryModalProps {
  product: Product;
  selectedSize?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductEnquiryModal: React.FC<ProductEnquiryModalProps> = ({
  product,
  selectedSize,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: `Hello Sparklean team,\n\nI would like to request commercial pricing, bulk availability, and the technical specification data sheet for ${product.name}${
      selectedSize ? ` (${selectedSize})` : ''
    }.\n\nPlease contact me with quotation details.`,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Validate form
  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.company.trim()) errs.company = 'Company / Business name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Contact telephone is required';
    if (!formData.message.trim()) errs.message = 'Please include enquiry details';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const randomRef = 'SPK-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(randomRef);
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
      message: '',
    });
    setErrors({});
    onClose();
  };

  // Close on Escape
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock background scroll
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#172B40]/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-elevated border border-[#E6E9EC] overflow-hidden z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6E9EC] bg-[#F7F8F6]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FDF2F4] flex items-center justify-center text-[#A71930] shrink-0">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <h3 id="modal-title" className="text-base font-heading font-bold text-[#172B40]">
                    Request a Quotation
                  </h3>
                  <p className="text-xs text-[#66717C] line-clamp-1">
                    {product.name} {selectedSize && `• ${selectedSize}`}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-[#66717C] hover:text-[#172B40] rounded-md hover:bg-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {isSubmitted ? (
                /* Success State */
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-[#F0F7ED] text-[#639B48] rounded-full flex items-center justify-center mx-auto border border-[#639B48]/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h4 className="text-2xl font-heading font-bold text-[#172B40]">
                    Quotation Request Received
                  </h4>

                  <div className="bg-[#F7F8F6] p-3 rounded-xl border border-[#E6E9EC] max-w-sm mx-auto">
                    <span className="text-xs text-[#66717C] uppercase tracking-wider block">
                      Reference Number
                    </span>
                    <span className="font-mono text-base font-bold text-[#A71930]">
                      {referenceId}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#66717C] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#172B40]">{formData.name}</strong>.
                    Our commercial sales desk at Sparklean UAE will review your request for{' '}
                    <strong className="text-[#172B40]">{product.name}</strong> and email
                    a formal wholesale quotation to{' '}
                    <strong className="text-[#172B40]">{formData.email}</strong> shortly.
                  </p>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-8 py-3 bg-[#A71930] hover:bg-[#8B1226] text-white font-sans font-semibold text-xs rounded-md transition-colors shadow-subtle"
                    >
                      Done &amp; Return to Product
                    </button>
                  </div>
                </div>
              ) : (
                /* Enquiry Form */
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Size reminder badge if selected */}
                  {selectedSize && (
                    <div className="flex items-center gap-2 p-2.5 bg-[#FDF2F4] border border-[#A71930]/15 rounded-xl text-xs text-[#A71930] font-medium">
                      <Package className="w-3.5 h-3.5 text-[#A71930] shrink-0" />
                      <span>Inquiring for packaging volume: <strong>{selectedSize}</strong></span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#172B40] uppercase tracking-wider mb-1">
                        Full Name <span className="text-[#A71930]">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-[#66717C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Tariq Mansoor"
                          className={`w-full pl-9 pr-3 py-2 bg-[#F7F8F6] text-xs text-[#172B40] rounded-md border ${
                            errors.name ? 'border-red-500' : 'border-[#E6E9EC]'
                          } focus:outline-none focus:border-[#A71930]`}
                        />
                      </div>
                      {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#172B40] uppercase tracking-wider mb-1">
                        Company / Business <span className="text-[#A71930]">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-3.5 h-3.5 text-[#66717C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Grand Horizon Hotel"
                          className={`w-full pl-9 pr-3 py-2 bg-[#F7F8F6] text-xs text-[#172B40] rounded-md border ${
                            errors.company ? 'border-red-500' : 'border-[#E6E9EC]'
                          } focus:outline-none focus:border-[#A71930]`}
                        />
                      </div>
                      {errors.company && <p className="text-[11px] text-red-600 mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-[#172B40] uppercase tracking-wider mb-1">
                        Business Email <span className="text-[#A71930]">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-[#66717C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="procurement@company.ae"
                          className={`w-full pl-9 pr-3 py-2 bg-[#F7F8F6] text-xs text-[#172B40] rounded-md border ${
                            errors.email ? 'border-red-500' : 'border-[#E6E9EC]'
                          } focus:outline-none focus:border-[#A71930]`}
                        />
                      </div>
                      {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-[#172B40] uppercase tracking-wider mb-1">
                        Contact Phone <span className="text-[#A71930]">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-[#66717C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+971 50 123 4567"
                          className={`w-full pl-9 pr-3 py-2 bg-[#F7F8F6] text-xs text-[#172B40] rounded-md border ${
                            errors.phone ? 'border-red-500' : 'border-[#E6E9EC]'
                          } focus:outline-none focus:border-[#A71930]`}
                        />
                      </div>
                      {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#172B40] uppercase tracking-wider mb-1">
                      Enquiry Requirements <span className="text-[#A71930]">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full p-3 bg-[#F7F8F6] text-xs text-[#172B40] rounded-md border ${
                        errors.message ? 'border-red-500' : 'border-[#E6E9EC]'
                      } focus:outline-none focus:border-[#A71930] resize-none`}
                    />
                    {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-2.5 text-xs font-sans font-semibold text-[#66717C] hover:text-[#172B40] transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#A71930] hover:bg-[#8B1226] text-white font-sans font-semibold text-xs rounded-md transition-colors shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Quote Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
