import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { DollarSign, Calendar, Shield, HelpCircle } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for bookkeeping, fractional CFO, and M&A advisory services. Month-to-month terms, no hidden fees.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-navy">
              Pricing
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transparent pricing, no hidden fees. Month-to-month flexibility on every service.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-4 text-navy">
              Bookkeeping
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Starting at $300/month.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-3 text-navy">Essential</h3>
                <div className="text-4xl font-bold text-navy mb-2">$300–$350</div>
                <p className="text-gray-500 mb-6">/month</p>
                <p className="text-gray-700">
                  For freelancers and solo owners under $100K revenue.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-navy rounded-2xl shadow-lg p-8 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Professional</h3>
                <div className="text-4xl font-bold text-white mb-2">$375–$450</div>
                <p className="text-blue-100/70 mb-6">/month</p>
                <p className="text-blue-100/80">
                  For growing service businesses under $500K revenue.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-3 text-navy">Premium</h3>
                <div className="text-4xl font-bold text-navy mb-2">$500+</div>
                <p className="text-gray-500 mb-6">/month</p>
                <p className="text-gray-700">
                  For established or multi-entity businesses.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mb-20">
              <Link
                href="/services/bookkeeping"
                className="inline-block text-primary font-semibold hover:underline"
              >
                View full bookkeeping details →
              </Link>
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-4 text-navy">
              Fractional CFO
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Monthly retainers starting at $1,500.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-3 text-navy">Foundations</h3>
                <div className="text-4xl font-bold text-navy mb-2">$1,500</div>
                <p className="text-gray-500 mb-6">/month</p>
                <p className="text-gray-700">
                  Reliable forecasting, KPI reporting, and a monthly review call.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-navy rounded-2xl shadow-lg p-8 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Growth</h3>
                <div className="text-4xl font-bold text-white mb-2">$2,500</div>
                <p className="text-blue-100/70 mb-6">/month</p>
                <p className="text-blue-100/80">
                  Budgeting, financing support, and two strategy calls per month.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-3 text-navy">Strategic</h3>
                <div className="text-4xl font-bold text-navy mb-2">$3,500+</div>
                <p className="text-gray-500 mb-6">/month</p>
                <p className="text-gray-700">
                  For owners preparing for a raise, sale, or major transition.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mb-20">
              <Link
                href="/services/cfo"
                className="inline-block text-primary font-semibold hover:underline"
              >
                View full fractional CFO details →
              </Link>
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-4 text-navy">
              M&amp;A Advisory
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Scoped to your transaction — every deal starts with a free review.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-3 text-navy">Sell-Side Readiness</h3>
                <div className="text-4xl font-bold text-navy mb-2">$5,000+</div>
                <p className="text-gray-500 mb-6">project</p>
                <p className="text-gray-700">
                  Financial cleanup, valuation positioning, and a buyer-ready data room.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-3 text-navy">Due Diligence Support</h3>
                <div className="text-4xl font-bold text-navy mb-2">$250/hr</div>
                <p className="text-gray-500 mb-6">or $7,500+ project</p>
                <p className="text-gray-700">
                  Financial due diligence and quality-of-earnings review for either side of a deal.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-3 text-navy">Full Transaction Advisory</h3>
                <div className="text-4xl font-bold text-navy mb-2">1–3%</div>
                <p className="text-gray-500 mb-6">of deal value + retainer</p>
                <p className="text-gray-700">
                  End-to-end support from valuation through close.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mb-20">
              <Link
                href="/services/ma-advisory"
                className="inline-block text-primary font-semibold hover:underline"
              >
                View full M&amp;A advisory details →
              </Link>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-navy rounded-2xl p-10 text-center">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Bookkeeping + Fractional CFO Bundle
              </h2>
              <div className="text-5xl font-bold text-white mb-4">$1,600+</div>
              <p className="text-blue-100/70 text-lg mb-6">/month</p>
              <p className="text-blue-100/80 max-w-3xl mx-auto mb-8">
                Combine day-to-day bookkeeping with ongoing CFO strategy for one integrated monthly price.
              </p>
              <Link
                href="/bundle"
                className="inline-block bg-white text-navy px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-blue-50"
              >
                Learn More About the Bundle
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12 text-navy">
              How We Work
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <DollarSign className="text-primary" size={48} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-navy">Transparent Pricing</h3>
                <p className="text-gray-700">
                  No hidden fees. No surprise charges. Clear pricing based on your needs.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <Calendar className="text-primary" size={48} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-navy">Month-to-Month</h3>
                <p className="text-gray-700">
                  Flexible terms with 30-day notice on bookkeeping and CFO services. No long-term contracts.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <Shield className="text-primary" size={48} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-navy">Satisfaction Guarantee</h3>
                <p className="text-gray-700">
                  100% satisfaction in your first month of bookkeeping — or you don&apos;t pay.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="mb-12 flex justify-center">
              <HelpCircle className="text-primary" size={48} />
            </div>
            <h2 className="text-4xl font-bold text-center mb-12 text-navy">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Do you offer tax filing?</h3>
                <p className="text-gray-700">
                  No — we focus on bookkeeping, CFO strategy, and transaction advisory. We keep books tax-ready for your CPA and can recommend one if needed.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">What accounting software do you support?</h3>
                <p className="text-gray-700">
                  QuickBooks Online and Xero. If you use different software, contact us to discuss compatibility.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Where are you located?</h3>
                <p className="text-gray-700">
                  We operate fully remote and serve clients nationwide via video calls, email, and shared platforms.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Is there a minimum commitment?</h3>
                <p className="text-gray-700">
                  Bookkeeping and CFO retainers are month-to-month with 30-day notice. Project-based work (cleanup, M&A engagements) runs to completion but carries no ongoing commitment.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Can I switch tiers as my business grows?</h3>
                <p className="text-gray-700">
                  Yes. As transaction volume or complexity increases, we&apos;ll adjust your tier with 30-day notice.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">What determines pricing within each tier?</h3>
                <p className="text-gray-700">
                  Transaction volume, number of accounts or entities, and support level needed. We assess this during your free consultation and provide a clear quote.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Who do you work with?</h3>
                <p className="text-gray-700">
                  Owner-operated service businesses with 1–5 employees. We don&apos;t currently serve e-commerce, retail, or manufacturing.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">How quickly can we get started?</h3>
                <p className="text-gray-700">
                  After your consultation, onboarding typically takes 1-2 weeks depending on the state of your records. Cleanup and M&A engagements may take longer upfront.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
