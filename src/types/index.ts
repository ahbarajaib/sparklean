/**
 * Core TypeScript definitions for Sparklean application
 */

export interface ProductVariant {
  id: string;
  sku: string;
  volume: string; // e.g. "500g", "100ml", "5L", "20L"
  priceAED?: number;
  inStock: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryName: string;
  image: string;
  images?: string[];
  shortDescription: string;
  fullDescription?: string;
  availableSizes?: string[];
  specifications?: Record<string, string>;
  features?: string[];
  brand?: string;
  priceAED?: number;
}

export interface CategoryCardData {
  id: string;
  name: string;
  slug: string;
  href: string;
  image: string;
  description: string;
  itemCountLabel: string;
}

export interface ProductEnquiryData {
  productName: string;
  selectedSize?: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}
