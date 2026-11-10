import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '@/data/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#E6E9EC] text-[#172B40] mt-auto">
      {/* Upper Footer: 4-Column Grid */}
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Introduction (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block outline-none focus:outline-none">
              <img
                src="/images/logo/sparklean_logo.png"
                alt="Sparklean Global"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[#66717C] leading-relaxed max-w-sm">
              Sparklean Global delivers professional cleaning formulations, hygiene and maintenance solutions for businesses across the UAE.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#F7F8F6] hover:bg-[#A71930] hover:text-white text-[#66717C] border border-[#E6E9EC] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#F7F8F6] hover:bg-[#A71930] hover:text-white text-[#66717C] border border-[#E6E9EC] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#F7F8F6] hover:bg-[#A71930] hover:text-white text-[#66717C] border border-[#E6E9EC] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#F7F8F6] hover:bg-[#A71930] hover:text-white text-[#66717C] border border-[#E6E9EC] flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Product Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading text-base font-bold text-[#172B40]">
              Product Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-[#66717C]">
              {PRODUCT_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    to={category.href}
                    className="hover:text-[#A71930] transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-heading text-base font-bold text-[#172B40]">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm text-[#66717C]">
              <li>
                <Link to="/about" className="hover:text-[#A71930] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about#resources" className="hover:text-[#A71930] transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact?type=quote" className="hover:text-[#A71930] transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#A71930] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: UAE Headquarters (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-heading text-base font-bold text-[#172B40]">
              UAE Headquarters
            </h3>
            <div className="space-y-3 text-sm text-[#66717C]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#A71930] shrink-0 mt-0.5" />
                <span>Al Jurf Industrial Area, Ajman, United Arab Emirates</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#A71930] shrink-0" />
                <a
                  href="tel:+971504363896"
                  className="hover:text-[#A71930] transition-colors font-medium text-[#172B40]"
                >
                  +971 50 436 3896
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#A71930] shrink-0" />
                <a
                  href="mailto:info@sparkleanglobal.com"
                  className="hover:text-[#A71930] transition-colors"
                >
                  info@sparkleanglobal.com
                </a>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-[#66717C] shrink-0 mt-0.5" />
                <span className="text-xs">
                  Mon - Sat: 8:30 AM - 6:00 PM GST
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-[#E6E9EC] bg-[#F7F8F6] py-5">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#66717C]">
          <p>© {currentYear} Sparklean Global. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#A71930] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/privacy" className="hover:text-[#A71930] transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
