import React from 'react';
import { Outlet } from 'react-router-dom';
import { AnnouncementBar } from './AnnouncementBar';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileBottomBar } from './MobileBottomBar';

/**
 * Global App Layout featuring:
 * 1. Slim announcement bar
 * 2. Sticky navigation header with dropdown and mobile drawer
 * 3. Main content area (Outlet)
 * 4. 4-column minimal professional footer
 * 5. Mobile-first sticky bottom quick action bar
 */
export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-sparklean-charcoal font-sans antialiased selection:bg-sparklean-primary selection:text-white">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Desktop & Mobile Header Navigation */}
      <Header />

      {/* 3. Main Page Content */}
      <main className="flex-1 w-full pb-14 lg:pb-0">
        <Outlet />
      </main>

      {/* 4. Global Brand Footer */}
      <Footer />

      {/* 5. Mobile Fast Conversion Sticky Bottom Bar */}
      <MobileBottomBar />
    </div>
  );
};
