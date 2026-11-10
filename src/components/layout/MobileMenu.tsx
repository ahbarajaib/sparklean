import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import { PRODUCT_CATEGORIES, MAIN_NAV_ITEMS } from '@/data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [isProductsExpanded, setIsProductsExpanded] = useState(true);
  const location = useLocation();

  // Close menu when route changes
  React.useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  // Prevent body scroll when mobile menu is open
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
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-[#172B40]/60 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25, ease: 'easeInOut' }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-elevated flex flex-col lg:hidden border-l border-[#E6E9EC]"
            aria-label="Mobile Navigation"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6E9EC] bg-[#F7F8F6]">
              <Link to="/" onClick={onClose} className="flex items-center outline-none focus:outline-none">
                <img
                  src="/images/logo/sparklean_logo.png"
                  alt="Sparklean Global"
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="p-2 -mr-2 text-[#172B40] hover:text-[#A71930] rounded-md hover:bg-white focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links Scrollable Area */}
            <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
              {MAIN_NAV_ITEMS.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.name} className="py-1">
                      <button
                        type="button"
                        onClick={() => setIsProductsExpanded(!isProductsExpanded)}
                        className="w-full flex items-center justify-between py-3 text-left font-sans text-base font-semibold text-[#172B40] hover:text-[#A71930] transition-colors"
                        aria-expanded={isProductsExpanded}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#66717C] transition-transform duration-200 ${
                            isProductsExpanded ? 'rotate-180 text-[#A71930]' : ''
                          }`}
                        />
                      </button>

                      {/* Expandable Category List */}
                      <AnimatePresence>
                        {isProductsExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-3 space-y-1 border-l-2 border-[#A71930]/30 my-1"
                          >
                            {PRODUCT_CATEGORIES.map((category) => (
                              <NavLink
                                key={category.id}
                                to={category.href}
                                onClick={onClose}
                                className={({ isActive }) =>
                                  `flex items-center justify-between py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                                    isActive
                                      ? 'bg-[#FDF2F4] text-[#A71930] font-semibold'
                                      : 'text-[#172B40]/80 hover:text-[#A71930] hover:bg-[#F7F8F6]'
                                  }`
                                }
                              >
                                <span>{category.name}</span>
                                <ChevronRight className="w-3.5 h-3.5 text-[#66717C]/60" />
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block py-3 font-sans text-base font-semibold border-b border-[#F0F2F4] transition-colors ${
                        isActive
                          ? 'text-[#A71930] font-bold'
                          : 'text-[#172B40] hover:text-[#A71930]'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </nav>

            {/* Drawer Footer Actions */}
            <div className="p-6 border-t border-[#E6E9EC] bg-[#F7F8F6] space-y-4">
              <Link
                to="/contact?type=quote"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center px-5 py-3 text-center bg-[#A71930] text-white font-sans font-semibold text-sm rounded-md hover:bg-[#8B1226] transition-colors shadow-subtle"
              >
                Request a Quote
              </Link>

              <div className="space-y-2 text-xs text-[#66717C] pt-2 border-t border-[#E6E9EC]">
                <a
                  href="tel:+971504363896"
                  className="flex items-center gap-2 text-[#172B40] hover:text-[#A71930] transition-colors py-1"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A71930]" />
                  <span>+971 50 436 3896</span>
                </a>
                <a
                  href="mailto:info@sparkleanglobal.com"
                  className="flex items-center gap-2 text-[#172B40] hover:text-[#A71930] transition-colors py-1"
                >
                  <Mail className="w-3.5 h-3.5 text-[#A71930]" />
                  <span>info@sparkleanglobal.com</span>
                </a>
                <div className="flex items-center gap-2 py-1 text-[#66717C]">
                  <MapPin className="w-3.5 h-3.5 text-[#A71930] shrink-0" />
                  <span>Al Jurf Industrial Area, Ajman, UAE</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
