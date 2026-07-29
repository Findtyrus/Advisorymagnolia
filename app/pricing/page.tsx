import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { Calendar, Shield } from "lucide-react";
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
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              No hidden fees. Month-to-month on every service.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-8 text-navy">
              Bookkeeping
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-bold mb-2 text-navy">Essential</h3>
                <div className="text-3xl font-bold text-navy mb-1">$300-$350</div>
                <p className="text-gray-500 mb-4">/month</p>
                <p className="text-gray-700 text-sm">
                  Freelancers and solo owners under $100K revenue.
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
                <h3 className="text-xl font-bold mb-2 text-white">Professional</h3>
                <div className="text-3xl font-bold text-white mb-1">$375-$450</div>
                <p className="text-blue-100/70 mb-4">/month</p>
                <p className="text-blue-100/80 text-sm">
                  Growing businesses under $500K revenue.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-bold mb-2 text-navy">Premium</h3>
                <div className="text-3xl font-bold text-navy mb-1">$500+</div>
                <p className="text-gray-500 mb-4">/month</p>
                <p className="text-gray-700 text-sm">
                  Established or multi-entity businesses.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mb-16">
              <Link
                href="/services/bookkeeping"
                className="inline-block text-primary font-semibold hover:underline"
              >
                View full bookkeeping details →
              </Link>
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-8 text-navy">
              Fractional CFO
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-bold mb-2 text-navy">Foundations</h3>
                <div className="text-3xl font-bold text-navy mb-1">$1,500</div>
                <p className="text-gray-500 mb-4">/month</p>
                <p className="text-gray-700 text-sm">
                  Forecasting, KPI reporting, monthly call.
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
                <h3 className="text-xl font-bold mb-2 text-white">Growth</h3>
                <div className="text-3xl font-bold text-white mb-1">$2,500</div>
                <p className="text-blue-100/70 mb-4">/month</p>
                <p className="text-blue-100/80 text-sm">
                  Budgeting, financing support, two calls monthly.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-bold mb-2 text-navy">Strategic</h3>
                <div className="text-3xl font-bold text-navy mb-1">$3,500+</div>
                <p className="text-gray-500 mb-4">/month</p>
                <p className="text-gray-700 text-sm">
                  Raising, selling, or major transitions.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mb-16">
              <Link
                href="/services/cfo"
                className="inline-block text-primary font-semibold hover:underline"
              >
                View full fractional CFO details →
              </Link>
            </div>
          </FadeIn>

          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-8 text-navy">
              M&amp;A Advisory
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-bold mb-2 text-navy">Sell-Side Readiness</h3>
                <div className="text-3xl font-bold text-navy mb-1">$5,000+</div>
                <p className="text-gray-500 mb-4">project</p>
                <p className="text-gray-700 text-sm">
                  Valuation positioning, buyer-ready data room.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-bold mb-2 text-navy">Due Diligence</h3>
                <div className="text-3xl font-bold text-navy mb-1">$250/hr</div>
                <p className="text-gray-500 mb-4">or $7,500+ project</p>
                <p className="text-gray-700 text-sm">
                  Financial due diligence for either side of a deal.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-bold mb-2 text-navy">Full Advisory</h3>
                <div className="text-3xl font-bold text-navy mb-1">1-3%</div>
                <p className="text-gray-500 mb-4">of deal value + retainer</p>
                <p className="text-gray-700 text-sm">
                  Support from valuation through close.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mb-16">
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
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Bookkeeping + Fractional CFO Bundle
              </h2>
              <div className="text-4xl font-bold text-white mb-1">$1,600+</div>
              <p className="text-blue-100/70 mb-6">/month</p>
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Calendar className="text-primary" size={40} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-navy">Month-to-Month</h3>
                <p className="text-gray-700 text-sm">
                  30-day notice on bookkeeping and CFO services. No long-term contracts.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <Shield className="text-primary" size={40} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-navy">Satisfaction Guarantee</h3>
                <p className="text-gray-700 text-sm">
                  100% satisfaction in month one of bookkeeping, or you don&apos;t pay.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold text-center mb-8 text-navy">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <div className="space-y-4">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2">Do you offer tax filing?</h3>
                <p className="text-gray-700">
                  No. We keep books tax-ready for your CPA and can recommend one if needed.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2">Is there a minimum commitment?</h3>
                <p className="text-gray-700">
                  Bookkeeping and CFO retainers are month-to-month with 30-day notice. Project work runs to completion with no ongoing commitment.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2">What determines pricing within a tier?</h3>
                <p className="text-gray-700">
                  Transaction volume, entity complexity, and support level. We confirm pricing during your free consultation.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2">Who do you work with?</h3>
                <p className="text-gray-700">
                  Owner-operated service businesses with 1 to 5 employees.
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
