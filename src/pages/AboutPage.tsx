import React from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ShieldCheck,
  Building2,
  UtensilsCrossed,
  Shirt,
  Sparkles,
  Award,
  Layers,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '@/data/navigation';

export const AboutPage: React.FC = () => {
  const industries = [
    {
      icon: UtensilsCrossed,
      title: 'Commercial Kitchens & Catering',
      description:
        'Heavy-duty degreasers, food-contact surface sanitizers, oven cleaners, and combi oven detergents.',
    },
    {
      icon: Building2,
      title: 'Hotels & Hospitality',
      description:
        'Guest amenity hand washes, luxury room housekeeping formulations, and floor maintenance solutions.',
    },
    {
      icon: Shirt,
      title: 'Commercial Laundries & Dry Cleaners',
      description:
        'Fast-acting stain pretreaters, tannin removers, rust lifters, and delicate color-protect liquid detergents.',
    },
    {
      icon: ShieldCheck,
      title: 'Healthcare & Institutional Facilities',
      description:
        'Disinfecting cleaners, hand hygiene systems, surface sanitizers, and high-standard janitorial equipment.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Breadcrumbs */}
      <div className="bg-sparklean-off-white/60 border-b border-sparklean-border-light py-4">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-sparklean-muted">
            <Link to="/" className="hover:text-sparklean-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-sparklean-muted/60" />
            <span className="text-sparklean-charcoal font-semibold">About Us</span>
          </nav>
        </div>
      </div>

      {/* 2. Hero Header */}
      <section className="bg-gradient-to-b from-sparklean-off-white/40 via-white to-white py-16 sm:py-24 border-b border-sparklean-border-light">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sparklean-primary-light text-sparklean-primary text-xs font-heading uppercase tracking-widest font-semibold border border-sparklean-primary/20">
            <Sparkles className="w-3.5 h-3.5 text-sparklean-accent" />
            <span>Commercial Cleaning &amp; Hygiene Partner Since 2011</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal leading-tight">
            Professional Cleaning Solutions Built for Every Business
          </h1>

          <p className="text-base sm:text-lg text-sparklean-muted max-w-2xl mx-auto leading-relaxed">
            Sparklean was founded in 2011 with the aim of providing the best possible long-term solutions
            to cleaning, sanitation, and hygiene-related concerns across the United Arab Emirates.
          </p>
        </div>
      </section>

      {/* 3. Company Introduction & Operational Approach */}
      <section className="py-16 sm:py-20 border-b border-sparklean-border-light">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-heading font-semibold uppercase tracking-widest text-sparklean-primary">
                Corporate Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
                A Comprehensive Solution Provider for Commercial Hygiene
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-sparklean-charcoal/85 leading-relaxed">
                <p>
                  At Sparklean, we recognize that business operations require dependable, high-yield cleaning
                  formulations that perform consistently without wasting valuable time or resources.
                  We operate as a single-source supplier for commercial sanitation, chemical formulations,
                  and janitorial equipment under one roof.
                </p>
                <p>
                  Our combination of industry knowledge and formulation consistency allows us to deliver
                  practical answers to tough operational challenges — including heavy grease removal in
                  catering kitchens, specialized tannin and rust extraction in commercial laundries, and
                  thorough surface disinfection in institutional settings.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-sparklean-off-white rounded-card border border-sparklean-border">
                  <div className="text-xl font-heading font-bold text-sparklean-primary mb-1">
                    ESTABLISHED 2011
                  </div>
                  <p className="text-xs text-sparklean-muted">
                    Over a decade of continuous operational experience across the UAE and GCC region.
                  </p>
                </div>
                <div className="p-4 bg-sparklean-off-white rounded-card border border-sparklean-border">
                  <div className="text-xl font-heading font-bold text-sparklean-accent-dark mb-1">
                    SINGLE SOURCE
                  </div>
                  <p className="text-xs text-sparklean-muted">
                    Complete portfolio covering chemicals, equipment, disposables, and technical guidelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Technical Support Card */}
            <div className="lg:col-span-5 bg-white rounded-container border border-sparklean-border p-8 shadow-card space-y-6">
              <div className="w-12 h-12 bg-sparklean-primary-light text-sparklean-primary rounded-subtle flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
                On-Site Technical Expertise
              </h3>
              <p className="text-xs sm:text-sm text-sparklean-muted leading-relaxed">
                Because we work in close partnership with our customers, we understand the specific sanitation
                and soil-load hurdles our clients encounter daily. Our technical personnel support commercial
                accounts with dilution ratios, application procedures, and sustainable cleaning practices.
              </p>
              <ul className="space-y-2 text-xs text-sparklean-charcoal font-medium border-t border-sparklean-border-light pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sparklean-accent shrink-0" />
                  <span>Stain diagnosis and chemical selection advice</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sparklean-accent shrink-0" />
                  <span>Cost-efficient dilution and dosage recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sparklean-accent shrink-0" />
                  <span>MSDS technical documentation and safety protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Commercial Customers & Industries Served */}
      <section className="py-16 sm:py-20 bg-sparklean-off-white/40 border-b border-sparklean-border-light">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-heading font-semibold uppercase tracking-widest text-sparklean-primary">
              Sectors Served
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
              Trusted by Professional Environments
            </h2>
            <p className="text-sm text-sparklean-muted leading-relaxed">
              We engineer our cleaning, sanitation, and maintenance products to meet the rigorous
              hygiene protocols demanded across diverse commercial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-card border border-sparklean-border shadow-subtle hover:shadow-card transition-shadow space-y-3"
                >
                  <div className="w-10 h-10 rounded-subtle bg-sparklean-primary-light flex items-center justify-center text-sparklean-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-sparklean-muted leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Product Range Summary */}
      <section className="py-16 sm:py-20 border-b border-sparklean-border-light">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-heading font-semibold uppercase tracking-widest text-sparklean-primary">
                Product Spectrum
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
                Our Commercial Portfolio
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs font-heading uppercase tracking-wider font-semibold text-sparklean-primary hover:text-sparklean-primary-dark transition-colors"
            >
              <span>Explore Complete Catalogue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={cat.href}
                className="group p-4 bg-sparklean-off-white/60 hover:bg-white rounded-card border border-sparklean-border hover:border-sparklean-primary/30 transition-all text-center space-y-2 shadow-subtle flex flex-col justify-between"
              >
                <div className="w-8 h-8 rounded-full bg-white mx-auto border border-sparklean-border flex items-center justify-center text-sparklean-primary group-hover:scale-110 transition-transform">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-heading font-bold uppercase tracking-wide text-sparklean-charcoal group-hover:text-sparklean-primary transition-colors">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Request a Quote CTA */}
      <section className="py-16 sm:py-20 bg-sparklean-primary text-white">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-heading font-bold uppercase tracking-wide">
            Partner With Sparklean For Your Commercial Supply
          </h2>
          <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed">
            Discover how our professional detergents, institutional packaging, and dedicated technical
            support can streamline your facility hygiene operations.
          </p>
          <div className="pt-2">
            <Link
              to="/contact?type=quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-sparklean-accent hover:bg-sparklean-accent-dark text-sparklean-charcoal font-heading font-semibold text-sm uppercase tracking-wider rounded-subtle transition-colors shadow-card"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

