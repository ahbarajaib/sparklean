import React from 'react';
import { Phone, Mail, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#A71930] text-white text-[12px] font-sans py-2 px-4 sm:px-6 lg:px-8 select-none transition-colors">
      <div className="max-w-site mx-auto flex items-center justify-between">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-5 text-white/95">
          <a
            href="tel:+971504363896"
            className="inline-flex items-center gap-1.5 hover:text-white hover:underline transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-white/90" />
            <span className="font-medium">+971 50 436 3896</span>
          </a>
          <span className="text-white/40 hidden sm:inline">|</span>
          <a
            href="mailto:info@sparkleanglobal.com"
            className="hidden sm:inline-flex items-center gap-1.5 hover:text-white hover:underline transition-all"
          >
            <Mail className="w-3.5 h-3.5 text-white/90" />
            <span>info@sparkleanglobal.com</span>
          </a>
        </div>

        {/* Right: Brand message */}
        <div className="flex items-center gap-2 text-white/95 text-right font-medium">
          <Sparkles className="w-3.5 h-3.5 text-white/90 shrink-0 hidden md:inline" />
          <span className="tracking-normal text-[11.5px] sm:text-[12px]">
            Professional Cleaning &amp; Hygiene Solutions for Businesses
          </span>
        </div>
      </div>
    </div>
  );
};
