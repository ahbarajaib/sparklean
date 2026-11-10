import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-sparklean-off-white/60 border-b border-sparklean-border-light py-4">
        <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-sparklean-muted">
            <Link to="/" className="hover:text-sparklean-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-sparklean-muted/60" />
            <span className="text-sparklean-charcoal font-semibold">Privacy Policy</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-narrow mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="space-y-2 border-b border-sparklean-border-light pb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-heading uppercase tracking-wider bg-sparklean-primary-light text-sparklean-primary font-medium">
            <ShieldCheck className="w-3 h-3 text-sparklean-primary" />
            <span>Commercial Confidentiality</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
            Privacy Policy
          </h1>
          <p className="text-xs text-sparklean-muted">
            Last Updated: 2026 | Sparklean Global UAE
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-sparklean-charcoal/85 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
              1. Commercial Data Collection
            </h2>
            <p>
              Sparklean Global collects business and contact details (including company name, corporate
              email address, contact telephone, and inquiry specifications) strictly to fulfill quotation
              requests, process chemical supply orders, and provide technical sanitation support.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
              2. Use of Information
            </h2>
            <p>
              Information submitted via our online enquiry forms is utilized exclusively for direct
              business-to-business communications, dispatch coordination within the UAE and GCC, and
              delivering requested material safety data sheets (MSDS) or standard operating procedures (SOP).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
              3. Confidentiality &amp; Third-Party Disclosure
            </h2>
            <p>
              We do not sell, lease, or distribute commercial customer data to outside third parties.
              Client operational information is treated with strict commercial confidentiality.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-heading font-bold uppercase tracking-wide text-sparklean-charcoal">
              4. Contact for Privacy Enquiries
            </h2>
            <p>
              For questions regarding our privacy practices or commercial data management, please contact
              our central office at <strong className="text-sparklean-charcoal">info@sparkleanglobal.com</strong> or
              by phone at <strong className="text-sparklean-charcoal">+971 6 731 4701</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

