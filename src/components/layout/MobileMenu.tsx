import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Search,
  MessageCircle,
  FileText,
} from 'lucide-react';
import { PRODUCT_CATEGORIES, MAIN_NAV_ITEMS } from '@/data/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [isProductsExpanded, setIsProductsExpanded] = useState(true);
  const [drawerSearch, setDrawerSearch] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const prevPathRef = useRef(location.pathname);

  // Close menu ONLY when route path actually changes
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      onClose();
      prevPathRef.current = location.pathname;
    }
  }, [location.pathname, onClose]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (drawerSearch.trim()) {
      navigate(`/products?search=${encodeURIComponent(drawerSearch.trim())}`);
      onClose();
      setDrawerSearch('');
    }
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#172B40]/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[340px] sm:max-w-sm bg-white shadow-2xl flex flex-col border-l border-[#E6E9EC] z-10"
            aria-label="Mobile Navigation Drawer"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#E6E9EC] bg-[#F7F8F6]">
              <Link to="/" onClick={onClose} className="flex items-center outline-none">
                <img
                  src="/images/logo/sparklean_logo.png"
                  alt="Sparklean Global"
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center text-[#172B40] hover:text-[#A71930] rounded-full hover:bg-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* In-Drawer Search Bar */}
            <div className="p-4 border-b border-[#E6E9EC] bg-white">
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="w-4 h-4 text-[#66717C] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={drawerSearch}
                  onChange={(e) => setDrawerSearch(e.target.value)}
                  placeholder="Search catalogue..."
                  className="w-full pl-9 pr-4 py-2.5 bg-[#F7F8F6] text-[#172B40] text-xs font-sans rounded-xl border border-[#E6E9EC] focus:outline-none focus:border-[#A71930] placeholder:text-[#66717C]"
                />
              </form>
            </div>

            {/* Navigation Links Scrollable Area */}
            <nav className="flex-1 overflow-y-auto px-5 py-4 space-y-1 divide-y divide-[#F0F2F4]">
              {MAIN_NAV_ITEMS.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.name} className="py-2">
                      <button
                        type="button"
                        onClick={() => setIsProductsExpanded(!isProductsExpanded)}
                        className="w-full flex items-center justify-between py-2 text-left font-sans text-[15px] font-bold text-[#172B40] hover:text-[#A71930] transition-colors"
                        aria-expanded={isProductsExpanded}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#A71930]" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-[#66717C] transition-transform duration-200 ${
                            isProductsExpanded ? 'rotate-180 text-[#A71930]' : ''
                          }`}
                        />
                      </button>

                      {/* Expandable Category Matrix */}
                      <AnimatePresence>
                        {isProductsExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-3 space-y-1 my-2 border-l-2 border-[#A71930]/30"
                          >
                            <Link
                              to="/products"
                              onClick={onClose}
                              className="flex items-center justify-between py-2 px-3 rounded-lg text-xs font-semibold text-[#A71930] bg-[#FDF2F4] mb-1"
                            >
                              <span>View Complete Catalogue</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </Link>

                            {PRODUCT_CATEGORIES.map((category) => (
                              <NavLink
                                key={category.id}
                                to={category.href}
                                onClick={onClose}
                                className={({ isActive }) =>
                                  `flex items-center justify-between py-2 px-3 rounded-lg text-xs font-medium transition-colors ${
                                    isActive
                                      ? 'bg-[#FDF2F4] text-[#A71930] font-bold'
                                      : 'text-[#172B40]/85 hover:text-[#A71930] hover:bg-[#F7F8F6]'
                                  }`
                                }
                              >
                                <span>{category.name}</span>
                                <ChevronRight className="w-3.5 h-3.5 text-[#66717C]/50" />
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <div key={item.name} className="py-2">
                    <NavLink
                      to={item.href}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `block py-1.5 font-sans text-[15px] font-semibold transition-colors ${
                          isActive
                            ? 'text-[#A71930] font-bold'
                            : 'text-[#172B40] hover:text-[#A71930]'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </div>
                );
              })}
            </nav>

            {/* Quick Actions & UAE Direct Communication Footer */}
            <div className="p-4 border-t border-[#E6E9EC] bg-[#F7F8F6] space-y-3">
              {/* Primary Quote CTA */}
              <Link
                to="/contact?type=quote"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#A71930] hover:bg-[#8B1226] text-white font-sans font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-subtle text-center"
              >
                <FileText className="w-4 h-4" />
                <span>Request a Quote</span>
              </Link>

              {/* Direct Communication Buttons (1-Tap Call & WhatsApp) */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:+971504363896"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white border border-[#E6E9EC] rounded-xl text-xs font-semibold text-[#172B40] hover:text-[#A71930] hover:border-[#A71930]/40 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A71930]" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/971504363896"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#639B48] text-white rounded-xl text-xs font-semibold hover:bg-[#52823b] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Verified Address & Hours */}
              <div className="pt-2 text-[11px] text-[#66717C] space-y-1">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#A71930] shrink-0" />
                  <span className="truncate">Al Jurf Industrial Area, Ajman, UAE</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/90">
                  <Mail className="w-3 h-3 text-[#A71930] shrink-0" />
                  <a href="mailto:info@sparkleanglobal.com" className="hover:text-[#A71930] text-[#66717C]">
                    info@sparkleanglobal.com
                  </a>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
