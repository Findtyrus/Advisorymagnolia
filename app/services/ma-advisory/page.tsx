import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { FileSearch, Scale, Handshake } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M&A Transaction Advisory",
  description: "M&A transaction advisory for small business owners buying, selling, or preparing for an exit — financial due diligence, valuation positioning, and deal support.",
  keywords: ["M&A advisory", "M&A transaction advisory", "sell-side advisory", "business exit planning", "financial due diligence", "small business M&A"],
};

export default function MAAdvisoryPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-navy">
              M&amp;A Advisory
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Guidance for owners buying a business, selling one, or preparing for a future exit.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-4 text-navy">
              How We Help
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Every deal is different, so every engagement is scoped individually. Here&apos;s where most clients start.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 h-full">
                <div className="mb-6">
                  <FileSearch className="text-primary" size={44} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-navy">Sell-Side Readiness</h3>
                <p className="text-2xl font-bold text-navy mb-2">Starting at $5,000</p>
                <p className="text-gray-500 text-sm mb-6">Flat project fee</p>
                <p className="text-gray-700">
                  Get your financials, records, and story buyer-ready before you go to market — clean financial packages, valuation positioning, and a data room built to withstand diligence.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-primary shadow-lg p-8 h-full relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Common
                  </span>
                </div>
                <div className="mb-6">
                  <Scale className="text-primary" size={44} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-navy">Due Diligence Support</h3>
                <p className="text-2xl font-bold text-navy mb-2">$250/hr or $7,500+ project</p>
                <p className="text-gray-500 text-sm mb-6">Buy-side or sell-side</p>
                <p className="text-gray-700">
                  Financial due diligence, quality-of-earnings review, and document preparation so you enter negotiations with confidence — and no surprises.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 h-full">
                <div className="mb-6">
                  <Handshake className="text-primary" size={44} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-navy">Full Transaction Advisory</h3>
                <p className="text-2xl font-bold text-navy mb-2">Retainer + success fee</p>
                <p className="text-gray-500 text-sm mb-6">Typically 1–3% of deal value</p>
                <p className="text-gray-700">
                  End-to-end support from valuation through close — deal structuring, negotiation support, and coordination with your attorney and lender.
                </p>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.4}>
            <p className="text-center text-gray-500 text-sm mt-10 max-w-2xl mx-auto">
              M&amp;A pricing depends heavily on deal size and complexity. Every engagement starts with a free, no-obligation review of your transaction.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">
              Common Questions
            </h2>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">What size deals do you work on?</h3>
                <p className="text-gray-700">
                  We focus on transactions involving owner-operated service businesses — typically lower-middle-market deals where big investment banks aren&apos;t a fit.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Do you help find buyers or investors?</h3>
                <p className="text-gray-700">
                  We prepare your business for a transaction and support you through negotiation and close. Buyer/investor sourcing is scoped case-by-case during your initial review.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">I'm not ready to sell — can you still help?</h3>
                <p className="text-gray-700">
                  Yes. Many owners engage us 12–24 months before a planned exit to clean up financials and strengthen valuation ahead of time.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Do you also handle legal work?</h3>
                <p className="text-gray-700">
                  No — we handle the financial side of the transaction and coordinate closely with your attorney, who handles legal documents and closing.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection
        title="Thinking about buying, selling, or exiting?"
        description="Start with a free, confidential review of your transaction and goals."
        primaryButtonText="Discuss Your Transaction"
      />
    </main>
  );
}
