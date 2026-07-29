import PricingCard from "@/components/PricingCard";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { TrendingUp, PieChart, Landmark } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional CFO Services",
  description: "Outsourced CFO services for small businesses — cash-flow forecasting, budgeting, KPI reporting, and strategic financial guidance. Starting at $1,500/month.",
  keywords: ["fractional CFO", "outsourced CFO", "part-time CFO", "small business CFO services", "cash flow forecasting"],
};

export default function CFOPage() {
  const foundationsFeatures = [
    "Monthly financial review call",
    "Cash-flow forecasting",
    "KPI dashboard",
    "Board/investor-ready reporting",
    "Email support",
  ];

  const growthFeatures = [
    "Everything in Foundations",
    "Annual budgeting & re-forecasting",
    "Pricing & margin analysis",
    "Banking & financing support",
    "Two strategy calls per month",
    "Priority support",
  ];

  const strategicFeatures = [
    "Everything in Growth",
    "Scenario & sensitivity planning",
    "Exit and M&A readiness support",
    "Investor relations support",
    "Weekly availability",
  ];

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-navy">
              Fractional CFO
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Strategic financial guidance — forecasting, budgeting, and decision support — without the cost of a full-time CFO.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
                  <TrendingUp className="text-primary" size={26} />
                </div>
                <h3 className="font-bold text-navy mb-2">Forecasting &amp; Budgeting</h3>
                <p className="text-gray-600 text-sm">Know what&apos;s coming before it happens.</p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
                  <PieChart className="text-primary" size={26} />
                </div>
                <h3 className="font-bold text-navy mb-2">KPI &amp; Board Reporting</h3>
                <p className="text-gray-600 text-sm">Reporting built for decisions, not just compliance.</p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
                  <Landmark className="text-primary" size={26} />
                </div>
                <h3 className="font-bold text-navy mb-2">Banking &amp; Financing</h3>
                <p className="text-gray-600 text-sm">Support preparing for loans, lines of credit, or investment.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-4 text-navy">
              Fractional CFO Plans
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Monthly retainers scoped to how much strategic support your business needs.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <PricingCard
                title="Foundations"
                price="$1,500/mo"
                description="For owners who need reliable forecasting and reporting"
                features={foundationsFeatures}
                ctaText="Schedule CFO Consultation"
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <PricingCard
                title="Growth"
                price="$2,500/mo"
                description="For businesses actively scaling and managing financing"
                features={growthFeatures}
                isPopular={true}
                ctaText="Schedule CFO Consultation"
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <PricingCard
                title="Strategic"
                price="Starting at $3,500/mo"
                description="For owners preparing for a raise, sale, or major transition"
                features={strategicFeatures}
                ctaText="Schedule CFO Consultation"
              />
            </FadeIn>
          </div>
          <FadeIn delay={0.4}>
            <p className="text-center text-gray-500 text-sm mt-8">
              Final pricing depends on transaction volume, entity complexity, and scope. We&apos;ll confirm your exact rate during a free consultation.
            </p>
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
                <h3 className="text-xl font-semibold mb-3">How is this different from bookkeeping?</h3>
                <p className="text-gray-700">
                  Bookkeeping keeps your books accurate. Fractional CFO uses those numbers to guide decisions — pricing, hiring, cash-flow planning, and growth strategy. Many clients use both together.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Do I need clean books first?</h3>
                <p className="text-gray-700">
                  It helps, but it&apos;s not required. If your books need cleanup, we&apos;ll fold that into onboarding or pair CFO services with bookkeeping.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Is there a minimum commitment?</h3>
                <p className="text-gray-700">
                  CFO retainers are month-to-month with 30-day notice, same as our bookkeeping plans.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready for a financial strategist in your corner?"
        description="Schedule a free consultation to talk through your business and the right level of CFO support."
        primaryButtonText="Schedule CFO Consultation"
      />
    </main>
  );
}
