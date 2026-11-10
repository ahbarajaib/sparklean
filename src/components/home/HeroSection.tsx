import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, MapPin } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20 border-b border-[#E6E9EC] overflow-hidden">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-[13px] font-heading font-extrabold uppercase tracking-[0.12em] text-[#A71930]">
                PROFESSIONAL CLEANING &amp; HYGIENE SOLUTIONS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.15rem] font-heading font-extrabold text-[#172B40] leading-[1.12] tracking-tight">
              Reliable Cleaning Solutions for Every Business.
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base lg:text-[1.0625rem] text-[#66717C] font-sans leading-relaxed">
              High-performance cleaning, hygiene and maintenance solutions for commercial kitchens, hospitality, healthcare, facilities and industrial environments across the UAE.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#A71930] hover:bg-[#8B1226] text-white font-sans font-semibold text-sm sm:text-base rounded-md transition-all shadow-subtle hover:shadow-card"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact?type=quote"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#172B40] border border-[#D0D5DD] hover:bg-[#F7F8F6] hover:border-[#172B40]/40 font-sans font-semibold text-sm sm:text-base rounded-md transition-all"
              >
                <span>Request a Quote</span>
              </Link>
            </div>

            {/* 3 Trust Points */}
            <div className="pt-6 border-t border-[#E6E9EC] grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs text-[#172B40] font-medium">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#639B48]/10 flex items-center justify-center shrink-0">
                  <Leaf className="w-3.5 h-3.5 text-[#639B48]" />
                </div>
                <span>Commercial-grade performance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#A71930]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A71930]" />
                </div>
                <span>Safe &amp; compliant formulations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#172B40]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#172B40]" />
                </div>
                <span>UAE-based support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Photograph (7 columns on desktop) */}
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
