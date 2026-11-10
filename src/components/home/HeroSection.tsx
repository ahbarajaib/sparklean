import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, MapPin } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white pt-4 pb-6 sm:py-14 lg:py-20 border-b border-[#E6E9EC] overflow-hidden">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-12 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-2.5 sm:space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[13px] font-heading font-extrabold uppercase tracking-[0.14em] text-[#A71930]">
                PROFESSIONAL CLEANING &amp; HYGIENE
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[1.55rem] sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.15rem] font-heading font-extrabold text-[#172B40] leading-[1.18] tracking-tight">
              Reliable Cleaning Solutions for Every Business.
            </h1>

            {/* Supporting Text */}
            <p className="text-xs sm:text-base lg:text-[1.0625rem] text-[#66717C] font-sans leading-relaxed">
              Commercial-grade cleaning, hygiene and maintenance formulations engineered for hospitality, healthcare, facilities and industry across the UAE.
            </p>

            {/* Action Buttons: Side-by-Side on Mobile */}
            <div className="flex flex-row items-center gap-2 sm:gap-3 pt-0.5 sm:pt-1">
              <Link
                to="/products"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:px-6 sm:py-3.5 bg-[#A71930] hover:bg-[#8B1226] text-white font-sans font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-subtle hover:shadow-card text-center"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/contact?type=quote"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:px-6 sm:py-3.5 bg-white text-[#172B40] border border-[#D0D5DD] hover:bg-[#F7F8F6] font-sans font-semibold text-xs sm:text-sm rounded-xl transition-all text-center"
              >
                <span>Request a Quote</span>
              </Link>
            </div>

            {/* Desktop-only Trust Points (3-column grid under copy) */}
            <div className="hidden lg:block pt-6 border-t border-[#E6E9EC]">
              <div className="grid grid-cols-3 items-center gap-3.5 text-xs text-[#172B40] font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#639B48]/15 flex items-center justify-center shrink-0">
                    <Leaf className="w-3 h-3 text-[#639B48]" />
                  </div>
                  <span>Commercial-grade performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#A71930]/15 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3 h-3 text-[#A71930]" />
                  </div>
                  <span>Safe &amp; compliant formulations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#172B40]/15 flex items-center justify-center shrink-0">
                    <MapPin className="w-3 h-3 text-[#172B40]" />
                  </div>
                  <span>UAE-based support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Photograph (Appears immediately below buttons on mobile) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-card sm:shadow-elevated border border-[#E6E9EC] bg-[#F7F8F6]">
              <img
                src="/images/hero/hero-bottles-kitchen.webp"
                alt="Sparklean commercial cleaning formulations in professional kitchen"
                className="w-full h-auto object-cover object-center aspect-[16/9] sm:aspect-[1672/941]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Mobile-only Trust Points Track (Placed right under the photograph on mobile) */}
        <div className="block lg:hidden pt-3 mt-3 border-t border-[#E6E9EC]/70">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 text-[11px] text-[#172B40] font-medium">
            <div className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F7F8F6] border border-[#E6E9EC]">
              <div className="w-4 h-4 rounded-full bg-[#639B48]/15 flex items-center justify-center shrink-0">
                <Leaf className="w-2.5 h-2.5 text-[#639B48]" />
              </div>
              <span className="whitespace-nowrap">Commercial-grade</span>
            </div>
            <div className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F7F8F6] border border-[#E6E9EC]">
              <div className="w-4 h-4 rounded-full bg-[#A71930]/15 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-2.5 h-2.5 text-[#A71930]" />
              </div>
              <span className="whitespace-nowrap">Safe &amp; compliant</span>
            </div>
            <div className="shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F7F8F6] border border-[#E6E9EC]">
              <div className="w-4 h-4 rounded-full bg-[#172B40]/15 flex items-center justify-center shrink-0">
                <MapPin className="w-2.5 h-2.5 text-[#172B40]" />
              </div>
              <span className="whitespace-nowrap">UAE-based support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
