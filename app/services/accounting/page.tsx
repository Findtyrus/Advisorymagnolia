import PricingCard from "@/components/PricingCard";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { Shield, TrendingUp, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounting & Finance | Magnolia Advisory Group",
  description: "Clean books, clear decisions, and structured financial systems for growing service businesses.",
  keywords: ["bookkeeping services", "small business accounting", "financial advisory", "QuickBooks", "Xero"],
};

export default function AccountingPage() {
  const essentialFeatures = [
    "Up to 150 transactions/month",
    "1 bank + 1 credit card reconciliation",
    "Monthly P&L & balance sheet",
    "Tax-ready records",
    "Email support (48-hour response)",
  ];

  const professionalFeatures = [
    "Everything in Essential",
    "Up to 300 transactions/month",
    "Up to 4 accounts reconciliation",
    "Dedicated bookkeeper",
    "Quarterly 30-min review call",
    "Basic KPI summary",
    "Priority support",
  ];

  const premiumFeatures = [
    "Everything in Professional",
    "Up to 600 transactions/month",
    "Multi-entity support",
    "Custom reporting",
    "Monthly 45-min review call",
    "Cash flow summary",
    "24-hour support",
  ];

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FDFCF8] to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-[#1B3022]">
              Accounting & Finance Division
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Clean books. Clear decisions. Structured systems.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-[#1B3022]">
              Monthly Bookkeeping
            </h2>
            <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
              Tiered pricing designed for growing businesses.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FadeIn delay={0.1}>
              <PricingCard
                title="Essential"
                price="$300–$350/mo"
                description="For freelancers and solo owners under $100K revenue"
                features={essentialFeatures}
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <PricingCard
                title="Professional"
                price="$375–$450/mo"
                description="For growing service businesses under $500K revenue"
                features={professionalFeatures}
                isPopular={true}
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <PricingCard
                title="Premium"
                price="Starting at $500/mo"
                description="For established or multi-entity businesses"
                features={premiumFeatures}
              />
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="bg-[#1B3022] rounded-2xl p-10 text-center text-[#FDFCF8]">
              <div className="mb-6 flex justify-center">
                <Shield className="text-[#FDFCF8]" size={56} />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-[#FDFCF8]">
                Risk-Free First Month
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-4">
                100% satisfaction in your first month of bookkeeping — or you don't pay.
              </p>
              <p className="text-gray-400">
                No long-term contracts. Month-to-month agreements with 30-day notice.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFCF8]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-[#1B3022]">
              Cleanup & Catch-Up
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12">
              Get your books back on track.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#1B3022] text-[#FDFCF8]">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Timeframe</th>
                      <th className="px-6 py-4 text-left font-semibold">Investment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium">Under 3 months</td>
                      <td className="px-6 py-4 text-[#1B3022] font-semibold">$900–$1,500</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium">3–12 months</td>
                      <td className="px-6 py-4 text-[#1B3022] font-semibold">$1,500–$3,500</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium">12–24 months</td>
                      <td className="px-6 py-4 text-[#1B3022] font-semibold">$3,500–$6,000</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium">24+ months</td>
                      <td className="px-6 py-4 text-[#1B3022] font-semibold">Custom Quote</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
                50% upfront. 50% upon completion. No guarantee applies to cleanup services.
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-[#1B3022]">
              Consulting & Systems
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <div className="mb-4">
                  <FileText className="text-[#1B3022]" size={40} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">Financial Systems Setup</h3>
                <p className="text-2xl font-bold text-[#1B3022] mb-4">$750–$1,500</p>
                <p className="text-gray-600 mb-4">One-time project</p>
                <p className="text-gray-700">
                  Complete setup of your accounting infrastructure, chart of accounts, and workflows.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <div className="mb-4">
                  <TrendingUp className="text-[#1B3022]" size={40} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">Custom Excel Dashboard</h3>
                <p className="text-2xl font-bold text-[#1B3022] mb-4">$500–$1,200</p>
                <p className="text-gray-600 mb-4">One-time project</p>
                <p className="text-gray-700">
                  Customized Excel-based financial dashboard for tracking key metrics and KPIs.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <div className="mb-4">
                  <Shield className="text-[#1B3022]" size={40} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">Financial Advisory Retainer</h3>
                <p className="text-2xl font-bold text-[#1B3022] mb-4">$600–$1,200/mo</p>
                <p className="text-gray-600 mb-4">Monthly retainer</p>
                <p className="text-gray-700">
                  Ongoing strategic advisory for complex financial decisions and planning.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFCF8]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-[#1B3022]">
              Common Questions
            </h2>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Do you offer tax filing?</h3>
                <p className="text-gray-700">
                  No, we focus on management accounting and systems. We provide tax-ready books for your CPA to file returns efficiently.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">What accounting software do you support?</h3>
                <p className="text-gray-700">
                  We specialize in QuickBooks Online and Xero. If you use different software, contact us to discuss compatibility.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Where are you located?</h3>
                <p className="text-gray-700">
                  We operate fully remote and serve clients nationwide. Location is not a barrier to great service.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Is there a minimum commitment?</h3>
                <p className="text-gray-700">
                  Our bookkeeping services are month-to-month with 30-day notice. No long-term contracts required.
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
