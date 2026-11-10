import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, ChevronDown, ArrowRight, Search, X } from 'lucide-react';
import { PRODUCT_CATEGORIES, MAIN_NAV_ITEMS } from '@/data/navigation';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Close menus on route change
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Handle outside click & escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const isProductActive = location.pathname.startsWith('/products');

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-sparklean-border shadow-subtle transition-all">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 1. Left: Sparklean Official Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="inline-flex items-center outline-none focus:outline-none"
              aria-label="Sparklean Global Home"
            >
              <img
                src="/images/logo/sparklean_logo.png"
                alt="Sparklean Global"
                className="h-10 sm:h-12 w-auto object-contain transition-transform hover:opacity-95"
              />
            </Link>
          </div>

          {/* 2. Middle: Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-9"
            aria-label="Main Navigation"
          >
            {MAIN_NAV_ITEMS.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`inline-flex items-center gap-1.5 py-2 text-[15px] font-sans font-medium transition-colors focus:outline-none ${
                        isProductActive || isDropdownOpen
                          ? 'text-sparklean-primary font-semibold'
                          : 'text-sparklean-navy hover:text-sparklean-primary'
                      }`}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180 text-sparklean-primary' : 'text-sparklean-slate'
                        }`}
                      />
                    </button>

                    {/* Product Categories Dropdown Menu */}
                    {isDropdownOpen && (
                      <div
                        className="absolute left-0 top-full pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <div className="bg-white rounded-card shadow-elevated border border-sparklean-border p-2 space-y-1">
                          <div className="px-3 py-2 border-b border-sparklean-border-light flex items-center justify-between">
                            <span className="text-[11px] font-heading uppercase tracking-wider font-bold text-sparklean-primary">
                              Commercial Categories
                            </span>
                            <Link
                              to="/products"
                              onClick={() => setIsDropdownOpen(false)}
                              className="text-xs text-sparklean-slate hover:text-sparklean-primary flex items-center gap-1 font-medium"
                            >
                              View All <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          <div className="py-1">
                            {PRODUCT_CATEGORIES.map((category) => (
                              <NavLink
                                key={category.id}
                                to={category.href}
                                role="menuitem"
                                onClick={() => setIsDropdownOpen(false)}
                                className={({ isActive }) =>
                                  `group block px-3 py-2.5 rounded-card transition-colors ${
                                    isActive
                                      ? 'bg-sparklean-primary-light text-sparklean-primary'
                                      : 'hover:bg-sparklean-warm-white text-sparklean-navy hover:text-sparklean-primary'
                                  }`
                                }
                              >
                                <div className="text-sm font-semibold group-hover:text-sparklean-primary transition-colors">
                                  {category.name}
                                </div>
                                <p className="text-[12px] text-sparklean-slate line-clamp-1 mt-0.5">
                                  {category.description}
                                </p>
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `py-2 text-[15px] font-sans font-medium transition-colors relative ${
                      isActive
                        ? 'text-sparklean-primary font-semibold'
                        : 'text-sparklean-navy hover:text-sparklean-primary'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* 3. Right: Search & Request a Quote CTA */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Search Icon / Toggle */}
            <div className="relative">
              {isSearchOpen ? (
                <form
                  onSubmit={handleSearchSubmit}
                  className="flex items-center gap-2 bg-sparklean-warm-white border border-sparklean-border rounded-full pl-3 pr-2 py-1.5 shadow-sm"
                >
                  <Search className="w-4 h-4 text-sparklean-slate" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-44 text-xs bg-transparent focus:outline-none text-sparklean-navy placeholder-sparklean-slate"
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="p-1 hover:text-sparklean-primary text-sparklean-slate"
                    aria-label="Close search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-sparklean-navy hover:text-sparklean-primary hover:bg-sparklean-warm-white rounded-full transition-colors"
                  aria-label="Search products"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Request a Quote Button */}
            <Link
              to="/contact?type=quote"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#A71930] text-white font-sans font-semibold text-sm rounded-md hover:bg-[#8B1226] transition-all shadow-subtle hover:shadow-card"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="p-2 text-sparklean-navy hover:text-sparklean-primary rounded-md"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/contact?type=quote"
              className="inline-flex items-center justify-center px-3.5 py-1.5 bg-[#A71930] text-white font-sans font-semibold text-xs rounded-md hover:bg-[#8B1226] transition-colors"
            >
              Quote
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-sparklean-navy hover:text-sparklean-primary rounded-md hover:bg-sparklean-warm-white focus:outline-none"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};
