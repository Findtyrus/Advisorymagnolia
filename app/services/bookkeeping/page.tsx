import PricingCard from "@/components/PricingCard";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { Shield, FileText, LayoutDashboard } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookkeeping Services",
  description: "Monthly bookkeeping for small businesses — transaction categorization, reconciliations, and P&L, balance sheet, and cash-flow reporting. Starting at $300/month.",
  keywords: ["bookkeeping services", "small business bookkeeping", "monthly bookkeeping", "QuickBooks", "Xero", "reconciliation"],
};

export default function BookkeepingPage() {
  const essentialFeatures = [
    "Transaction categorization (up to 150/mo)",
    "1 bank + 1 credit card reconciliation",
    "Monthly P&L & balance sheet",
    "Monthly cash-flow summary",
    "Tax-ready records for your CPA",
    "Email support (48-hour response)",
  ];

  const professionalFeatures = [
    "Everything in Essential",
    "Transaction categorization (up to 300/mo)",
    "Up to 4 accounts reconciled",
    "Dedicated bookkeeper",
    "Quarterly 30-min review call",
    "Basic KPI summary",
    "Priority support",
  ];

  const premiumFeatures = [
    "Everything in Professional",
    "Transaction categorization (up to 600/mo)",
    "Multi-entity support",
    "Custom reporting",
    "Monthly 45-min review call",
    "24-hour support",
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
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Clean, reconciled books every month — so you always know where your business stands.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-4 text-navy">
              Monthly Bookkeeping Plans
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Every plan includes transaction categorization, reconciliations, and monthly P&amp;L, balance sheet, and cash-flow summaries. Starting at $300/month.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FadeIn delay={0.1}>
              <PricingCard
                title="Essential"
                price="$300–$350/mo"
                description="Freelancers and solo owners under $100K revenue"
                features={essentialFeatures}
                ctaText="Start Bookkeeping"
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <PricingCard
                title="Professional"
                price="$375–$450/mo"
                description="Growing service businesses under $500K revenue"
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
            <div className="bg-navy rounded-2xl p-10 text-center text-white">
              <div className="mb-6 flex justify-center">
                <Shield className="text-white" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Risk-Free First Month
              </h3>
              <p className="text-blue-100/80 text-lg max-w-3xl mx-auto mb-4">
                100% satisfaction in your first month of bookkeeping — or you don&apos;t pay.
              </p>
              <p className="text-blue-100/60">
                No long-term contracts. Month-to-month with 30-day notice.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-4 text-navy">
              Cleanup &amp; Catch-Up
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
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
                    <tr className="hover:bg-surface transition-colors">
                      <td className="px-6 py-4 font-medium">Under 3 months</td>
                      <td className="px-6 py-4 text-navy font-semibold">$900–$1,500</td>
                    </tr>
                    <tr className="hover:bg-surface transition-colors">
                      <td className="px-6 py-4 font-medium">3–12 months</td>
                      <td className="px-6 py-4 text-navy font-semibold">$1,500–$3,500</td>
                    </tr>
                    <tr className="hover:bg-surface transition-colors">
                      <td className="px-6 py-4 font-medium">12–24 months</td>
                      <td className="px-6 py-4 text-navy font-semibold">$3,500–$6,000</td>
                    </tr>
                    <tr className="hover:bg-surface transition-colors">
                      <td className="px-6 py-4 font-medium">24+ months</td>
                      <td className="px-6 py-4 text-navy font-semibold">Custom Quote</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-surface px-6 py-4 text-sm text-gray-600">
                50% upfront, 50% upon completion. The satisfaction guarantee does not apply to cleanup projects.
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12 text-navy">
              One-Time Setup Projects
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <div className="mb-4">
                  <FileText className="text-primary" size={36} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy">Financial Systems Setup</h3>
                <p className="text-2xl font-bold text-navy mb-4">$750–$1,500</p>
                <p className="text-gray-600">
                  Chart of accounts, software setup, and workflows built for your business from day one.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <div className="mb-4">
                  <LayoutDashboard className="text-primary" size={36} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy">Custom Reporting Dashboard</h3>
                <p className="text-2xl font-bold text-navy mb-4">$500–$1,200</p>
                <p className="text-gray-600">
                  A dashboard built around the metrics that matter most to your business.
                </p>
              </div>
            </FadeIn>
          </div>
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
                <h3 className="text-xl font-semibold mb-3">Do you offer tax filing?</h3>
                <p className="text-gray-700">
                  No — we focus on bookkeeping and management accounting. We keep your books tax-ready so your CPA can file efficiently.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">What accounting software do you support?</h3>
                <p className="text-gray-700">
                  QuickBooks Online and Xero. Using something else? Reach out and we&apos;ll discuss compatibility.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Is there a minimum commitment?</h3>
                <p className="text-gray-700">
                  No. Bookkeeping is month-to-month with 30-day notice — no long-term contracts.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for books you can trust?"
        description="Start with a free consultation — we'll review your current setup and recommend the right plan."
        primaryButtonText="Start Bookkeeping"
      />
    </main>
  );
}
