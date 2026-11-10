import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Sparkles,
  Layers,
  Palette,
  Type,
  Maximize2,
  ShieldCheck,
  Package,
} from 'lucide-react';
import { colors, layout } from '@/tokens';

export const DesignSystemPreview: React.FC = () => {
  const colorSwatches = [
    {
      name: 'Primary Burgundy',
      hex: colors.primary,
      token: 'sparklean-primary / #78052F',
      role: 'Brand identity, primary buttons, major headings & accents',
      bgClass: 'bg-sparklean-primary',
      textClass: 'text-white',
      borderClass: 'border-transparent',
    },
    {
      name: 'Charcoal Text',
      hex: colors.charcoal,
      token: 'sparklean-charcoal / #33383D',
      role: 'Primary typography, dark surfaces, high-contrast borders',
      bgClass: 'bg-sparklean-charcoal',
      textClass: 'text-white',
      borderClass: 'border-transparent',
    },
    {
      name: 'Accent Gold',
      hex: colors.accent,
      token: 'sparklean-accent / #D6A64F',
      role: 'Highlights, secondary badges, premium accents, subtle banners',
      bgClass: 'bg-sparklean-accent',
      textClass: 'text-sparklean-charcoal',
      borderClass: 'border-transparent',
    },
    {
      name: 'Muted Text',
      hex: colors.muted,
      token: 'sparklean-muted / #737373',
      role: 'Secondary body text, supporting metadata, disabled states',
      bgClass: 'bg-sparklean-muted',
      textClass: 'text-white',
      borderClass: 'border-transparent',
    },
    {
      name: 'Off-White Secondary',
      hex: colors.offWhite,
      token: 'sparklean-off-white / #F5F5F2',
      role: 'Alternative section backgrounds, input fields, subtle panels',
      bgClass: 'bg-sparklean-off-white',
      textClass: 'text-sparklean-charcoal',
      borderClass: 'border-sparklean-border',
    },
    {
      name: 'Pure White',
      hex: colors.white,
      token: 'sparklean-white / #FFFFFF',
      role: 'Primary clean canvas, cards, contrast surfaces',
      bgClass: 'bg-sparklean-white',
      textClass: 'text-sparklean-charcoal',
      borderClass: 'border-sparklean-border',
    },
  ];

  return (
    <div className="min-h-screen bg-sparklean-off-white/40 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-site mx-auto space-y-16">
        {/* Verification Banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white border border-sparklean-border rounded-container p-6 sm:p-8 shadow-card"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-sparklean-border-light">
            <div className="flex items-center gap-4">
              <div className="h-12 w-auto bg-sparklean-off-white p-2 rounded-subtle border border-sparklean-border flex items-center">
                <img
                  src="/images/logo/sparklean_logo.png"
                  alt="Sparklean Global Original Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-sparklean-primary-light text-sparklean-primary">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Stage 1 Completed
                </div>
                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-sparklean-charcoal tracking-wide mt-1 uppercase">
                  Project Setup & Design System Verification
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-sparklean-muted uppercase tracking-wider font-semibold">
                Environment:
              </span>
              <span className="px-3 py-1 bg-sparklean-off-white text-xs font-mono rounded-subtle border border-sparklean-border text-sparklean-charcoal">
                React 19 + Vite + TS + Tailwind
              </span>
            </div>
          </div>

          <p className="mt-4 text-sm sm:text-base text-sparklean-muted max-w-narrow leading-relaxed">
            This temporary dashboard confirms the operational status of typography, color tokens,
            spacing, responsive containers, Lucide icons, Framer Motion, and original brand assets.
          </p>
        </motion.div>

        {/* Brand Palette Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-sparklean-primary" />
            <h2 className="text-xl sm:text-2xl font-heading uppercase tracking-wide text-sparklean-charcoal">
              Sparklean Color System
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {colorSwatches.map((swatch) => (
              <div
                key={swatch.hex}
                className="bg-white rounded-card border border-sparklean-border overflow-hidden shadow-subtle hover:shadow-card transition-shadow"
              >
                <div
                  className={`h-24 ${swatch.bgClass} ${swatch.textClass} p-4 flex items-end justify-between border-b ${swatch.borderClass}`}
                >
                  <span className="font-heading font-medium tracking-wide uppercase text-sm">
                    {swatch.name}
                  </span>
                  <span className="font-mono text-xs opacity-90">{swatch.hex}</span>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-xs font-mono text-sparklean-primary font-semibold">
                    {swatch.token}
                  </p>
                  <p className="text-xs text-sparklean-muted leading-relaxed">
                    {swatch.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography System Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Type className="w-5 h-5 text-sparklean-primary" />
            <h2 className="text-xl sm:text-2xl font-heading uppercase tracking-wide text-sparklean-charcoal">
              Typography System (Oswald + Inter)
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Oswald Heading Hierarchy */}
            <div className="bg-white p-6 sm:p-8 rounded-card border border-sparklean-border shadow-subtle space-y-6">
              <div className="pb-3 border-b border-sparklean-border-light flex justify-between items-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-sparklean-primary">
                  Headings — Oswald
                </span>
                <span className="text-xs font-mono text-sparklean-muted">Google Font: Oswald</span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs text-sparklean-muted block mb-1">H1 Display / 48px Bold</span>
                  <h1 className="text-4xl font-heading font-bold uppercase tracking-wider text-sparklean-charcoal">
                    Commercial Hygiene Solutions
                  </h1>
                </div>

                <div>
                  <span className="text-xs text-sparklean-muted block mb-1">H2 Section / 32px Semibold</span>
                  <h2 className="text-2xl font-heading font-semibold uppercase tracking-wide text-sparklean-charcoal">
                    Kitchen Stewardship & Degreasers
                  </h2>
                </div>

                <div>
                  <span className="text-xs text-sparklean-muted block mb-1">H3 Card Header / 24px Medium</span>
                  <h3 className="text-xl font-heading font-medium uppercase tracking-wide text-sparklean-charcoal">
                    Heavy-Duty Oven & Grill Cleaner
                  </h3>
                </div>

                <div>
                  <span className="text-xs text-sparklean-muted block mb-1">H4 Component Title / 18px Medium</span>
                  <h4 className="text-lg font-heading font-medium uppercase tracking-wide text-sparklean-primary">
                    Product Specifications & Technical Data
                  </h4>
                </div>
              </div>
            </div>

            {/* Inter Body Hierarchy */}
            <div className="bg-white p-6 sm:p-8 rounded-card border border-sparklean-border shadow-subtle space-y-6">
              <div className="pb-3 border-b border-sparklean-border-light flex justify-between items-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-sparklean-primary">
                  Body & UI — Inter
                </span>
                <span className="text-xs font-mono text-sparklean-muted">Google Font: Inter</span>
              </div>

              <div className="space-y-4 text-sparklean-charcoal">
                <div>
                  <span className="text-xs text-sparklean-muted block mb-1">Lead Paragraph (18px Regular)</span>
                  <p className="text-lg leading-relaxed">
                    Sparklean Global manufactures high-performance cleaning chemical formulations engineered for hospitality, healthcare, and industrial institutions.
                  </p>
                </div>

                <div>
                  <span className="text-xs text-sparklean-muted block mb-1">Standard Body (15px / 16px Regular)</span>
                  <p className="text-sm sm:text-base leading-relaxed text-sparklean-charcoal/90">
                    Formulated with concentrated surfactants and non-corrosive sequestering agents, our industrial detergents guarantee spot-free sanitation and cost-efficient dilution ratios.
                  </p>
                </div>

                <div>
                  <span className="text-xs text-sparklean-muted block mb-1">Muted Secondary Text (14px)</span>
                  <p className="text-sm text-sparklean-muted">
                    Available in 5L and 20L containers. ISO 9001:2015 certified production in Dubai, UAE.
                  </p>
                </div>

                <div>
                  <span className="text-xs text-sparklean-muted block mb-1">Small Print & Metadata (12px)</span>
                  <p className="text-xs text-sparklean-muted uppercase tracking-wider font-mono">
                    SKU: SPK-BRW-5L | REG: DM-2026-HQ | PH: 11.5 ± 0.5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Layout & UI Tokens Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-sparklean-primary" />
            <h2 className="text-xl sm:text-2xl font-heading uppercase tracking-wide text-sparklean-charcoal">
              Tokens: Shadows, Radius & Buttons
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Subtle Card */}
            <div className="bg-white p-6 rounded-subtle border border-sparklean-border shadow-subtle">
              <span className="text-xs font-mono text-sparklean-muted uppercase block mb-2">
                Radius: Subtle (4px) | Shadow: Subtle
              </span>
              <p className="text-sm text-sparklean-charcoal font-medium">
                Standard baseline panel with minimal elevation.
              </p>
            </div>

            {/* Standard Card */}
            <div className="bg-white p-6 rounded-card border border-sparklean-border shadow-card">
              <span className="text-xs font-mono text-sparklean-primary uppercase block mb-2 font-semibold">
                Radius: Card (6px) | Shadow: Card
              </span>
              <p className="text-sm text-sparklean-charcoal font-medium">
                Standard interactive card component for products and categories.
              </p>
            </div>

            {/* Elevated Container */}
            <div className="bg-white p-6 rounded-container border border-sparklean-border shadow-elevated">
              <span className="text-xs font-mono text-sparklean-accent uppercase block mb-2 font-semibold">
                Radius: Container (8px) | Shadow: Elevated
              </span>
              <p className="text-sm text-sparklean-charcoal font-medium">
                Highlighted container with burgundy ambient elevation.
              </p>
            </div>
          </div>

          {/* Button Styles Preview */}
          <div className="bg-white p-6 sm:p-8 rounded-card border border-sparklean-border space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sparklean-muted">
              Interactive Button & Badge States
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="px-6 py-2.5 bg-sparklean-primary text-white font-medium text-sm rounded-subtle hover:bg-sparklean-primary-dark transition-colors shadow-subtle inline-flex items-center gap-2 uppercase tracking-wide"
              >
                <Sparkles className="w-4 h-4" /> Primary Button
              </button>

              <button
                type="button"
                className="px-6 py-2.5 bg-sparklean-accent text-sparklean-charcoal font-medium text-sm rounded-subtle hover:bg-sparklean-accent-dark transition-colors shadow-subtle inline-flex items-center gap-2 uppercase tracking-wide"
              >
                <Package className="w-4 h-4" /> Accent Button
              </button>

              <button
                type="button"
                className="px-6 py-2.5 bg-white text-sparklean-charcoal border border-sparklean-border font-medium text-sm rounded-subtle hover:bg-sparklean-off-white transition-colors inline-flex items-center gap-2 uppercase tracking-wide"
              >
                <ShieldCheck className="w-4 h-4 text-sparklean-muted" /> Outline Button
              </button>

              <span className="inline-flex items-center px-3 py-1 bg-sparklean-primary-light text-sparklean-primary text-xs font-medium rounded-full">
                Primary Badge
              </span>

              <span className="inline-flex items-center px-3 py-1 bg-sparklean-accent-light text-sparklean-accent-dark text-xs font-medium rounded-full">
                Accent Badge
              </span>
            </div>
          </div>
        </section>

        {/* Container Boundaries Indicator */}
        <section className="bg-white p-6 rounded-card border border-sparklean-border space-y-3">
          <div className="flex items-center gap-2 text-sparklean-muted">
            <Maximize2 className="w-4 h-4" />
            <h3 className="text-xs uppercase tracking-wider font-semibold">
              Responsive Container Scale
            </h3>
          </div>
          <div className="text-xs text-sparklean-muted font-mono flex flex-wrap gap-4">
            <span>Site Max-Width: {layout.containerMaxWidth} (1280px)</span>
            <span>Content Max-Width: {layout.contentMaxWidth} (1120px)</span>
            <span>Narrow Max-Width: {layout.narrowMaxWidth} (800px)</span>
          </div>
        </section>
      </div>
    </div>
  );
};

