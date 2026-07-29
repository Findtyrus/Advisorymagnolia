import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { FileSearch, Scale, Handshake } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M&A Transaction Advisory",
  description: "M&A transaction advisory for small business owners buying, selling, or preparing for an exit: financial due diligence, valuation positioning, and deal support.",
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
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Guidance for buying, selling, or planning a future exit.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Every deal is scoped individually. Here&apos;s where most clients start.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 h-full">
                <div className="mb-4">
                  <FileSearch className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy">Sell-Side Readiness</h3>
                <p className="text-2xl font-bold text-navy mb-1">Starting at $5,000</p>
                <p className="text-gray-500 text-sm mb-4">Flat project fee</p>
                <p className="text-gray-700 text-sm">
                  Buyer-ready financial packages, valuation positioning, and a data room built to hold up under diligence.
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
                <div className="mb-4">
                  <Scale className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy">Due Diligence Support</h3>
                <p className="text-2xl font-bold text-navy mb-1">$250/hr or $7,500+</p>
                <p className="text-gray-500 text-sm mb-4">Buy-side or sell-side</p>
                <p className="text-gray-700 text-sm">
                  Financial due diligence and quality-of-earnings review, so you enter negotiations with no surprises.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 h-full">
                <div className="mb-4">
                  <Handshake className="text-primary" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy">Full Transaction Advisory</h3>
                <p className="text-2xl font-bold text-navy mb-1">Retainer + success fee</p>
                <p className="text-gray-500 text-sm mb-4">Typically 1-3% of deal value</p>
                <p className="text-gray-700 text-sm">
                  End-to-end support from valuation through close, coordinated with your attorney and lender.
                </p>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.4}>
            <p className="text-center text-gray-500 text-sm mt-10">
              Every engagement starts with a free, confidential review of your transaction.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold text-center mb-8 text-navy">
              Common Questions
            </h2>
          </FadeIn>

          <div className="space-y-4">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2">What size deals do you work on?</h3>
                <p className="text-gray-700">
                  Owner-operated service businesses, where large investment banks aren&apos;t a fit.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2">Do you find buyers or investors?</h3>
                <p className="text-gray-700">
                  We prepare your business and support negotiations. Sourcing is scoped case by case.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2">I&apos;m not ready to sell. Can you still help?</h3>
                <p className="text-gray-700">
                  Yes. Many owners start 12 to 24 months ahead to strengthen valuation early.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection
        title="Thinking about buying, selling, or exiting?"
        description="Start with a free, confidential review."
        primaryButtonText="Discuss Your Transaction"
      />
    </main>
  );
}
