import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, FileText } from 'lucide-react';

/**
 * MobileBottomBar
 * Floating bottom quick-action bar for mobile devices (< lg breakpoint).
 * Provides 1-tap dial, direct WhatsApp, and quick quote actions.
 */
export const MobileBottomBar: React.FC = () => {
  const location = useLocation();
  const isQuotePage = location.pathname === '/contact' && location.search.includes('type=quote');

  return (
    <aside
      aria-label="Mobile quick actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#E6E9EC] px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* 1. Click to Dial */}
        <a
          href="tel:+971504363896"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2.5 bg-[#F7F8F6] hover:bg-white text-[#172B40] font-sans font-semibold text-xs rounded-xl border border-[#E6E9EC] active:scale-95 transition-all text-center"
          aria-label="Call Sparklean Global"
        >
          <Phone className="w-3.5 h-3.5 text-[#A71930] shrink-0" />
          <span className="truncate">Call</span>
        </a>

        {/* 2. Direct WhatsApp */}
        <a
          href="https://wa.me/971504363896?text=Hello%20Sparklean%20Global%2C%20I%20would%20like%20to%20inquire%20about%20commercial%20cleaning%20chemicals."
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2.5 bg-[#639B48] hover:bg-[#52823b] text-white font-sans font-semibold text-xs rounded-xl active:scale-95 transition-all shadow-sm text-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* 3. Request Quote */}
        <Link
          to="/contact?type=quote"
          className={`flex-[1.2] flex items-center justify-center gap-1.5 py-2.5 px-3 font-sans font-semibold text-xs rounded-xl active:scale-95 transition-all shadow-sm text-center ${
            isQuotePage
              ? 'bg-[#172B40] text-white ring-2 ring-[#A71930]'
              : 'bg-[#A71930] hover:bg-[#8B1226] text-white'
          }`}
          aria-label="Request a Commercial Quote"
        >
          <FileText className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Get Quote</span>
        </Link>
      </div>
    </aside>
  );
};
