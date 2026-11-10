import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { HomePage } from '@/pages/HomePage';
import { ProductCataloguePage } from '@/pages/ProductCataloguePage';
import { ProductDetailPage } from '@/pages/ProductDetailPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicyPage';
import { DesignSystemPreview } from '@/pages/DesignSystemPreview';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {/* Main Homepage */}
          <Route path="/" element={<HomePage />} />
          
          {/* Product Range / Catalogue */}
          <Route path="/products" element={<ProductCataloguePage />} />
          <Route path="/products/:categoryId" element={<ProductCataloguePage />} />
          
          {/* Product Detail Page */}
          <Route path="/products/:categoryId/:productSlug" element={<ProductDetailPage />} />
          <Route path="/product/:productSlug" element={<ProductDetailPage />} />
          
          {/* Supporting Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          
          {/* Design System Preview */}
          <Route path="/design-system" element={<DesignSystemPreview />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
