import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

export const ContactCtaSection: React.FC = () => {
  return (
    <section className="relative bg-[#A71930] text-white overflow-hidden">
      {/* Top Wave Curve Transition */}
      <div className="w-full overflow-hidden leading-none pointer-events-none select-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 lg:h-14 preserve-3d"
        >
          <path
            d="M0 0C480 50 960 0 1440 30V0H0Z"
            fill="#F7F8F6"
          />
        </svg>
      </div>

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Block (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs sm:text-[13px] font-heading font-extrabold uppercase tracking-[0.16em] text-[#D6A64F]">
              GET A TAILORED SOLUTION
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-extrabold text-white leading-[1.15]">
              Looking for the Right Cleaning Solution for Your Business?
            </h2>

            <p className="text-sm sm:text-base text-white/90 font-sans leading-relaxed max-w-xl">
              Speak with our team about your cleaning requirements. We'll help you select the right products, dilution protocols and supply schedule.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#172B40] hover:bg-[#F7F8F6] font-sans font-semibold text-sm sm:text-base rounded-md transition-all shadow-card"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-[#A71930]" />
              </Link>
              <Link
                to="/contact?type=quote"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/60 font-sans font-semibold text-sm sm:text-base rounded-md transition-all"
              >
                <span>Request a Quote</span>
              </Link>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-6 border-t border-white/20 flex flex-wrap items-center gap-6 text-xs text-white/85">
              <a
                href="tel:+971504363896"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D6A64F]" />
                <span className="font-medium">+971 50 436 3896</span>
              </a>
              <a
                href="mailto:info@sparkleanglobal.com"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#D6A64F]" />
                <span>info@sparkleanglobal.com</span>
              </a>
              <div className="inline-flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D6A64F]" />
                <span>Ajman, United Arab Emirates</span>
              </div>
            </div>
          </div>

          {/* Right Visual / Surface Shine Illustration (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm shadow-2xl flex items-center justify-center p-8 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent pointer-events-none" />
              <div className="space-y-4 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 mx-auto flex items-center justify-center text-white shadow-inner">
                  <span className="text-2xl font-bold font-heading">UAE</span>
                </div>
                <div className="text-xl font-heading font-bold text-white">
                  Fast Institutional Delivery
                </div>
                <p className="text-xs text-white/80 max-w-xs mx-auto leading-relaxed">
                  Bulk order dispatch, custom dilutions, and technical hygiene consultation across all 7 Emirates.
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-white/15 text-[11px] font-semibold uppercase tracking-wider text-white">
                  Direct B2B Supply
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
