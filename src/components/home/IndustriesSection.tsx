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
    description: 'Sanitary environments, patient facilities & high-touch disinfection.',
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
    <section className="relative bg-[#13382C] text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Architectural Glass Texture & Subtle Lighting */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
      <div className="absolute -right-20 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/5 to-transparent pointer-events-none hidden lg:block" />

      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
          <span className="text-xs sm:text-[13px] font-heading font-extrabold uppercase tracking-[0.16em] text-[#639B48]">
            TRUSTED BY BUSINESSES ACROSS THE UAE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-heading font-extrabold text-white leading-[1.15]">
            Serving a Wide Range of Industries.
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
            From high-volume commercial kitchens to five-star hospitality and healthcare facilities, our formulations are engineered to meet strict hygiene standards.
          </p>
        </div>

        {/* 5 Industry Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {INDUSTRIES.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <div
                key={idx}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#639B48] group-hover:text-white group-hover:scale-110 transition-all mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-sm sm:text-base font-heading font-bold text-white mb-2 leading-snug">
                    {industry.name}
                  </h3>

                  <p className="text-xs text-white/70 font-sans leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10">
                  <span className="text-[11px] font-semibold text-[#639B48] uppercase tracking-wider group-hover:text-white transition-colors">
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

