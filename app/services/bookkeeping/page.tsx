import PricingCard from "@/components/PricingCard";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookkeeping Services",
  description: "Monthly bookkeeping for small businesses: transaction categorization, reconciliations, and P&L, balance sheet, and cash-flow reporting. Starting at $300/month.",
  keywords: ["bookkeeping services", "small business bookkeeping", "monthly bookkeeping", "QuickBooks", "Xero", "reconciliation"],
};

export default function BookkeepingPage() {
  const essentialFeatures = [
    "Up to 150 transactions/month",
    "1 bank + 1 credit card reconciliation",
    "Monthly P&L, balance sheet, cash flow",
    "Tax-ready records for your CPA",
  ];

  const professionalFeatures = [
    "Everything in Essential",
    "Up to 300 transactions/month",
    "Up to 4 accounts reconciled",
    "Quarterly review call",
  ];

  const premiumFeatures = [
    "Everything in Professional",
    "Up to 600 transactions/month",
    "Multi-entity support",
    "Monthly review call",
  ];

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-navy">
              Bookkeeping
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Clean, reconciled books every month.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Every plan includes categorization, reconciliations, and monthly reporting. Starting at $300/month.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FadeIn delay={0.1}>
              <PricingCard
                title="Essential"
                price="$300-$350/mo"
                description="Freelancers and solo owners under $100K"
                features={essentialFeatures}
                ctaText="Start Bookkeeping"
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <PricingCard
                title="Professional"
                price="$375-$450/mo"
                description="Growing businesses under $500K"
                features={professionalFeatures}
                isPopular={true}
                ctaText="Start Bookkeeping"
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <PricingCard
                title="Premium"
                price="Starting at $500/mo"
                description="Established or multi-entity businesses"
                features={premiumFeatures}
                ctaText="Start Bookkeeping"
              />
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="bg-navy rounded-2xl p-8 text-center text-white">
              <div className="mb-4 flex justify-center">
                <Shield className="text-white" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Risk-Free First Month
              </h3>
              <p className="text-blue-100/80">
                100% satisfaction in month one, or you don&apos;t pay. Month-to-month after that, 30-day notice.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-2 text-navy">
              Cleanup &amp; Catch-Up
            </h2>
            <p className="text-lg text-gray-600 text-center mb-10">
              Behind on your books? We&apos;ll get you current.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Timeframe</th>
                      <th className="px-6 py-4 text-left font-semibold">Investment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-6 py-4 font-medium">Under 3 months</td>
                      <td className="px-6 py-4 text-navy font-semibold">$900-$1,500</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">3-12 months</td>
                      <td className="px-6 py-4 text-navy font-semibold">$1,500-$3,500</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">12+ months</td>
                      <td className="px-6 py-4 text-navy font-semibold">Custom quote</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-surface px-6 py-3 text-sm text-gray-600">
                50% upfront, 50% on completion. Guarantee does not apply to cleanup projects.
              </div>
            </div>
          </FadeIn>
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
                <h3 className="text-lg font-semibold mb-2">Do you offer tax filing?</h3>
                <p className="text-gray-700">
                  No, we keep your books tax-ready for your CPA to file.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2">What software do you support?</h3>
                <p className="text-gray-700">
                  QuickBooks Online and Xero.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2">Is there a minimum commitment?</h3>
                <p className="text-gray-700">
                  No. Month-to-month with 30-day notice.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for books you can trust?"
        description="Start with a free consultation."
        primaryButtonText="Start Bookkeeping"
      />
    </main>
  );
}
