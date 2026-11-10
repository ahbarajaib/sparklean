import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, MapPin } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white py-8 sm:py-14 lg:py-20 border-b border-[#E6E9EC] overflow-hidden">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] sm:text-[13px] font-heading font-extrabold uppercase tracking-[0.14em] text-[#A71930]">
                PROFESSIONAL CLEANING &amp; HYGIENE SOLUTIONS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.15rem] font-heading font-extrabold text-[#172B40] leading-[1.15] tracking-tight">
              Reliable Cleaning Solutions for Every Business.
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base lg:text-[1.0625rem] text-[#66717C] font-sans leading-relaxed">
              High-performance cleaning, hygiene and maintenance solutions for commercial kitchens, hospitality, healthcare, facilities and industrial environments across the UAE.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A71930] hover:bg-[#8B1226] text-white font-sans font-semibold text-sm rounded-xl transition-all shadow-subtle hover:shadow-card text-center"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact?type=quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#172B40] border border-[#D0D5DD] hover:bg-[#F7F8F6] font-sans font-semibold text-sm rounded-xl transition-all text-center"
              >
                <span>Request a Quote</span>
              </Link>
            </div>

            {/* 3 Trust Points (Horizontal scrollable chip track on mobile, 3-column grid on desktop) */}
            <div className="pt-4 sm:pt-6 border-t border-[#E6E9EC]">
              <div className="flex sm:grid sm:grid-cols-3 items-center gap-2 sm:gap-3.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0 text-xs text-[#172B40] font-medium">
                <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 sm:p-0 rounded-full sm:rounded-none bg-[#F7F8F6] sm:bg-transparent border sm:border-0 border-[#E6E9EC]">
                  <div className="w-5 h-5 rounded-full bg-[#639B48]/15 flex items-center justify-center shrink-0">
                    <Leaf className="w-3 h-3 text-[#639B48]" />
                  </div>
                  <span className="whitespace-nowrap sm:whitespace-normal">Commercial-grade performance</span>
                </div>
                <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 sm:p-0 rounded-full sm:rounded-none bg-[#F7F8F6] sm:bg-transparent border sm:border-0 border-[#E6E9EC]">
                  <div className="w-5 h-5 rounded-full bg-[#A71930]/15 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3 h-3 text-[#A71930]" />
                  </div>
                  <span className="whitespace-nowrap sm:whitespace-normal">Safe &amp; compliant formulations</span>
                </div>
                <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 sm:p-0 rounded-full sm:rounded-none bg-[#F7F8F6] sm:bg-transparent border sm:border-0 border-[#E6E9EC]">
                  <div className="w-5 h-5 rounded-full bg-[#172B40]/15 flex items-center justify-center shrink-0">
                    <MapPin className="w-3 h-3 text-[#172B40]" />
                  </div>
                  <span className="whitespace-nowrap sm:whitespace-normal">UAE-based support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Photograph */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-[#E6E9EC] bg-[#F7F8F6]">
              <img
                src="/images/hero/hero-bottles-kitchen.webp"
                alt="Sparklean commercial cleaning formulations in professional kitchen"
                className="w-full h-full object-cover object-center aspect-[1672/941]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
