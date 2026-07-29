import PricingCard from "@/components/PricingCard";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { TrendingUp, PieChart, Landmark } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fractional CFO Services",
  description: "Outsourced CFO services for small businesses: cash-flow forecasting, budgeting, KPI reporting, and strategic financial guidance. Starting at $1,500/month.",
  keywords: ["fractional CFO", "outsourced CFO", "part-time CFO", "small business CFO services", "cash flow forecasting"],
};

export default function CFOPage() {
  const foundationsFeatures = [
    "Monthly financial review call",
    "Cash-flow forecasting",
    "KPI dashboard",
  ];

  const growthFeatures = [
    "Everything in Foundations",
    "Annual budgeting",
    "Banking and financing support",
    "Two calls per month",
  ];

  const strategicFeatures = [
    "Everything in Growth",
    "Scenario planning",
    "Exit and M&A readiness",
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
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Strategic guidance, without the full-time cost.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
                <TrendingUp className="text-primary" size={26} />
              </div>
              <h3 className="font-bold text-navy mb-1">Forecasting &amp; Budgeting</h3>
              <p className="text-gray-600 text-sm">Know what&apos;s coming.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
                <PieChart className="text-primary" size={26} />
              </div>
              <h3 className="font-bold text-navy mb-1">KPI Reporting</h3>
              <p className="text-gray-600 text-sm">Built for decisions.</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
                <Landmark className="text-primary" size={26} />
              </div>
              <h3 className="font-bold text-navy mb-1">Financing Support</h3>
              <p className="text-gray-600 text-sm">Ready for loans or investment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-10 text-navy">
              Fractional CFO Plans
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <PricingCard
                title="Foundations"
                price="$1,500/mo"
                description="Reliable forecasting and reporting"
                features={foundationsFeatures}
                ctaText="Schedule CFO Consultation"
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <PricingCard
                title="Growth"
                price="$2,500/mo"
                description="For scaling businesses"
                features={growthFeatures}
                isPopular={true}
                ctaText="Schedule CFO Consultation"
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <PricingCard
                title="Strategic"
                price="Starting at $3,500/mo"
                description="Raising, selling, or transitioning"
                features={strategicFeatures}
                ctaText="Schedule CFO Consultation"
              />
            </FadeIn>
          </div>
          <FadeIn delay={0.4}>
            <p className="text-center text-gray-500 text-sm mt-8">
              Final pricing depends on scope. Confirmed during a free consultation.
            </p>
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
                <h3 className="text-lg font-semibold mb-2">How is this different from bookkeeping?</h3>
                <p className="text-gray-700">
                  Bookkeeping keeps your books accurate. CFO work uses those numbers to guide decisions. Many clients use both.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2">Do I need clean books first?</h3>
                <p className="text-gray-700">
                  It helps, but it&apos;s not required. We can fold cleanup into onboarding.
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
        title="Ready for a financial strategist in your corner?"
        description="Schedule a free consultation."
        primaryButtonText="Schedule CFO Consultation"
      />
    </main>
  );
}
