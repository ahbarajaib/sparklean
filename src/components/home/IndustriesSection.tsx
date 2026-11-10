import React from 'react';
import { Utensils, Hotel, Cross, Building2, Factory } from 'lucide-react';

interface IndustryItem {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  description: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    icon: Utensils,
    name: 'Hospitality & Food Service',
    description: 'Commercial kitchens, cloud kitchens, bakeries & dining venues.',
  },
  {
    icon: Hotel,
    name: 'Hotels & Resorts',
    description: 'Guest room housekeeping, public areas & linen care.',
  },
  {
    icon: Cross,
    name: 'Healthcare & Clinics',
    description: 'Sanitary environments, patient facilities & disinfection.',
  },
  {
    icon: Building2,
    name: 'Commercial Facilities',
    description: 'Corporate towers, educational campuses & retail centers.',
  },
  {
    icon: Factory,
    name: 'Industrial Operations',
    description: 'Heavy machinery degreasing, warehouse floors & workshops.',
  },
];

export const IndustriesSection: React.FC = () => {
  return (
    <section className="relative bg-[#13382C] text-white py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Background Architectural Glass Facade */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none opacity-25 lg:opacity-35 overflow-hidden">
        <img
          src="/images/industries/corporate-architecture.webp"
          alt="Modern commercial corporate facility"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13382C] via-[#13382C]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13382C] via-transparent to-[#13382C]/60" />
      </div>

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12 lg:mb-16 space-y-2 sm:space-y-3">
          <span className="text-[11px] sm:text-[13px] font-heading font-extrabold uppercase tracking-[0.16em] text-[#639B48]">
            TRUSTED BY BUSINESSES ACROSS THE UAE
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-heading font-extrabold text-white leading-tight">
            Serving a Wide Range of Industries.
          </h2>
          <p className="text-xs sm:text-base text-white/80 font-sans leading-relaxed">
            From high-volume commercial kitchens to five-star hospitality and healthcare facilities, our formulations are engineered to meet strict hygiene standards.
          </p>
        </div>

        {/* 5 Industry Columns (2 columns on mobile with 5th spanning full, 5 on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6">
          {INDUSTRIES.map((industry, idx) => {
            const Icon = industry.icon;
            const isLastOnMobile = idx === 4;
            return (
              <div
                key={idx}
                className={`group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 flex flex-col justify-between ${
                  isLastOnMobile ? 'col-span-2 lg:col-span-1' : 'col-span-1'
                }`}
              >
                <div>
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#639B48] group-hover:text-white group-hover:scale-105 transition-all mb-3 sm:mb-4">
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>

                  <h3 className="text-xs sm:text-base font-heading font-bold text-white mb-1.5 leading-snug">
                    {industry.name}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-white/70 font-sans leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/10">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#639B48] uppercase tracking-wider group-hover:text-white transition-colors">
                    Institutional Grade
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
