import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '@/data/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#E6E9EC] text-[#172B40] mt-auto">
      {/* Upper Footer: Responsive Multi-Column Grid */}
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          {/* Column 1: Brand & Introduction (4 cols on desktop) */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5">
            <Link to="/" className="inline-block outline-none focus:outline-none">
              <img
                src="/images/logo/sparklean_logo.png"
                alt="Sparklean Global"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-[#66717C] leading-relaxed max-w-sm">
              Sparklean Global delivers professional cleaning formulations, hygiene and maintenance solutions for commercial facilities across the UAE.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
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

          {/* Group Columns 2 & 3: 2-column grid on mobile to save vertical scrolling */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:col-span-2 lg:contents">
            {/* Column 2: Product Categories */}
            <div className="lg:col-span-3 space-y-3 sm:space-y-4">
              <h3 className="font-heading text-xs sm:text-base font-bold uppercase tracking-wider text-[#172B40]">
                Categories
              </h3>
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-[#66717C]">
                {PRODUCT_CATEGORIES.map((category) => (
                  <li key={category.id}>
                    <Link
                      to={category.href}
                      className="hover:text-[#A71930] transition-colors line-clamp-1"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              <h3 className="font-heading text-xs sm:text-base font-bold uppercase tracking-wider text-[#172B40]">
                Company
              </h3>
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-[#66717C]">
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
          </div>

          {/* Column 4: UAE Headquarters (3 cols on desktop) */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h3 className="font-heading text-xs sm:text-base font-bold uppercase tracking-wider text-[#172B40]">
              UAE Headquarters
            </h3>
            <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#66717C]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A71930] shrink-0 mt-0.5" />
                <span>Al Jurf Industrial Area, Ajman, UAE</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A71930] shrink-0" />
                <a
                  href="tel:+971504363896"
                  className="hover:text-[#A71930] transition-colors font-medium text-[#172B40]"
                >
                  +971 50 436 3896
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A71930] shrink-0" />
                <a
                  href="mailto:info@sparkleanglobal.com"
                  className="hover:text-[#A71930] transition-colors"
                >
                  info@sparkleanglobal.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#66717C] shrink-0 mt-0.5" />
                <span className="text-[11px] sm:text-xs">
                  Mon - Sat: 8:30 AM - 6:00 PM GST
                </span>
              </div>

              {/* Mobile Quick Dial & WhatsApp Buttons */}
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href="tel:+971504363896"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#F7F8F6] border border-[#E6E9EC] rounded-lg text-xs font-semibold text-[#172B40] hover:text-[#A71930] hover:border-[#A71930]/30 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A71930]" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/971504363896"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#639B48] text-white rounded-lg text-xs font-semibold hover:bg-[#52823b] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-[#E6E9EC] bg-[#F7F8F6] py-4 sm:py-5">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#66717C]">
          <p>© {currentYear} Sparklean Global. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6">
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
