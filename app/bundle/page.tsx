import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { Check, Package } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookkeeping + Fractional CFO Bundle",
  description: "Combine monthly bookkeeping with fractional CFO strategy for one integrated monthly price. Starting at $1,600/month.",
};

export default function BundlePage() {
  const bundleFeatures = [
    "Professional-tier bookkeeping (up to 300 transactions/mo)",
    "Monthly P&L, balance sheet, and cash-flow summary",
    "Cash-flow forecasting and budgeting",
    "KPI dashboard and board-ready reporting",
    "Two strategy calls per month",
  ];

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <div className="mb-6 flex justify-center">
              <Package className="text-primary" size={56} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-navy">
              The Growth Bundle
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-semibold">
              Bookkeeping + Fractional CFO
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clean books and the strategy to act on them, in one monthly engagement.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="bg-navy rounded-2xl p-12 text-center text-white mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Starting at $1,600/month
              </h2>
              <p className="text-lg text-blue-100/80">
                Less than booking both services separately.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-2xl font-bold mb-6 text-navy">What&apos;s Included</h2>
                <ul className="space-y-4">
                  {bundleFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="text-primary flex-shrink-0 mt-1" size={22} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-2xl font-bold mb-6 text-navy">Who This Is For</h2>
                <p className="text-gray-700 leading-relaxed">
                  Owner-operated businesses with 1 to 5 employees who need accurate books and financial strategy, and want one advisory partner instead of juggling vendors.
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
              Common Questions
            </h2>
          </FadeIn>

          <div className="space-y-4">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2">Can I upgrade from a standalone service?</h3>
                <p className="text-gray-700">
                  Yes. If you&apos;re on bookkeeping or CFO services alone, we can move you to the bundle at any time.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2">Is this month-to-month?</h3>
                <p className="text-gray-700">
                  Yes, with 30-day notice, same as our other services.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2">What determines the exact price?</h3>
                <p className="text-gray-700">
                  Transaction volume and the level of CFO support you need. We confirm pricing during your free consultation.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for aligned books and strategy?"
        description="Schedule a consultation to discuss the Growth Bundle."
        primaryButtonText="Schedule a Free Consultation"
      />
    </main>
  );
}
