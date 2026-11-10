import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { CategorySection } from '@/components/home/CategorySection';
import { FeaturedProductsSection } from '@/components/home/FeaturedProductsSection';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { WhySparkleanSection } from '@/components/home/WhySparkleanSection';
import { ContactCtaSection } from '@/components/home/ContactCtaSection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. Hero Section with split layout, Manrope headline & trust badges */}
      <HeroSection />

      {/* 2. Commercial Product Categories (6 cards on warm-white) */}
      <CategorySection />

      {/* 3. Featured Formulations (4 studio packshots on white cards) */}
      <FeaturedProductsSection />

      {/* 4. Industries Served (Dark forest green corporate banner with minimal icons) */}
      <IndustriesSection />

      {/* 5. Why Choose Sparklean (4 crisp white cards) */}
      <WhySparkleanSection />

      {/* 6. Tailored Solution / Final Contact CTA (Organic red curved wave) */}
      <ContactCtaSection />
    </div>
  );
};

export default HomePage;
