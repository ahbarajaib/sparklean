import React from 'react';
import { FlaskConical, ShieldCheck, Headphones, Truck } from 'lucide-react';

export const WhySparkleanSection: React.FC = () => {
  const pillars = [
    {
      icon: FlaskConical,
      title: 'Proven Formulations',
      description: 'High-performance products for real-world, commercial use.',
    },
    {
      icon: ShieldCheck,
      title: 'Safety & Compliance',
      description: 'Quality you can trust, aligned with UAE regulations and industry standards.',
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: 'Product guidance and technical support from our experienced team.',
    },
    {
      icon: Truck,
      title: 'Reliable Supply',
      description: 'Consistent availability and timely delivery across the UAE.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F7F8F6]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
          <span className="text-xs sm:text-[13px] font-heading font-extrabold uppercase tracking-[0.14em] text-[#A71930]">
            WHY CHOOSE SPARKLEAN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-heading font-extrabold text-[#172B40] leading-[1.15]">
            A Trusted Partner for Professional Cleaning Solutions.
          </h2>
          <p className="text-sm sm:text-base text-[#66717C] font-sans leading-relaxed">
            Delivering chemical expertise, reliable stock availability, and hands-on consultation to commercial clients across the United Arab Emirates since 2011.
          </p>
        </div>

        {/* 4 Crisp White Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 sm:p-8 rounded-2xl border border-[#E6E9EC] shadow-subtle hover:shadow-card-hover hover:border-[#A71930]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FDF2F4] flex items-center justify-center text-[#A71930] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-heading font-bold text-[#172B40] mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-[13.5px] text-[#66717C] font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#F0F2F4] text-[11px] font-semibold text-[#172B40]/60 uppercase tracking-wider">
                  Sparklean Standard
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
