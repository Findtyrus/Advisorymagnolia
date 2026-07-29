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
    "Bank and credit card reconciliations",
    "Monthly P&L, balance sheet, and cash-flow summary",
    "Cash-flow forecasting and budgeting",
    "KPI dashboard and board-ready reporting",
    "Two strategy calls per month with your CFO",
    "Priority support across both services",
    "One point of contact for your entire financial picture",
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
              Clean books and the strategy to act on them — in one integrated monthly engagement.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="bg-navy rounded-2xl p-12 text-center text-white mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Starting at $1,600/month
              </h2>
              <p className="text-xl text-blue-100/80 max-w-2xl mx-auto">
                Bundled pricing is less than booking bookkeeping and CFO services separately.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-navy">What&apos;s Included</h2>
                <ul className="space-y-4">
                  {bundleFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="text-primary flex-shrink-0 mt-1" size={22} />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-navy">Who This Is For</h2>
                <div className="space-y-6">
                  <div className="bg-surface rounded-xl p-6 border border-gray-100">
                    <h3 className="font-semibold text-xl mb-3 text-navy">Growing Service Businesses</h3>
                    <p className="text-gray-700">
                      Owner-operated businesses with 1–5 employees who need both accurate books and strategic guidance.
                    </p>
                  </div>
                  <div className="bg-surface rounded-xl p-6 border border-gray-100">
                    <h3 className="font-semibold text-xl mb-3 text-navy">Owners Planning Ahead</h3>
                    <p className="text-gray-700">
                      Business owners preparing for financing, hiring, or an eventual exit who want their numbers ready.
                    </p>
                  </div>
                  <div className="bg-surface rounded-xl p-6 border border-gray-100">
                    <h3 className="font-semibold text-xl mb-3 text-navy">Serious Operators</h3>
                    <p className="text-gray-700">
                      Founders who want one advisory partner for their entire financial picture instead of juggling vendors.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="bg-surface rounded-2xl p-10 border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-center text-navy">The Magnolia Difference</h2>
              <p className="text-gray-700 text-lg mb-8 text-center max-w-3xl mx-auto">
                Most firms separate bookkeeping from strategy. We combine them because the numbers your bookkeeper produces should directly inform the decisions your CFO helps you make.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Integrated</div>
                  <p className="text-gray-600">Books and strategy from one team</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Partner-Led</div>
                  <p className="text-gray-600">Direct access to your CFO, not a call center</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Transparent</div>
                  <p className="text-gray-600">One clear monthly price</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">
              Common Questions
            </h2>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Can I upgrade from a standalone service to the bundle?</h3>
                <p className="text-gray-700">
                  Yes. If you&apos;re currently on bookkeeping or CFO services alone, we can move you to the bundle at any time.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Is this month-to-month like your other services?</h3>
                <p className="text-gray-700">
                  Yes. The bundle follows the same flexible terms — month-to-month with 30-day notice.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">What determines the exact price?</h3>
                <p className="text-gray-700">
                  Transaction volume, number of accounts or entities, and the level of CFO support you need. We confirm exact pricing during your free consultation.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for aligned books and strategy?"
        description="Schedule a consultation to discuss the Growth Bundle and how we can serve your business."
        primaryButtonText="Schedule a Free Consultation"
      />
    </main>
  );
}
