import Link from "next/link";
import { BookOpen, LineChart, Handshake, Package } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Bookkeeping, Fractional CFO & M&A Advisory",
  description: "Bookkeeping, fractional CFO, and M&A transaction advisory for owner-operated service businesses. Clear pricing, no long-term contracts.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-navy">
              Our Services
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Financial clarity for owner-operated businesses, at every stage.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FadeIn delay={0.1}>
              <Link href="/services/bookkeeping" className="block group h-full">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-2xl mb-6">
                    <BookOpen className="text-white" size={26} />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-navy">
                    Bookkeeping
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Clean, current books every month.
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-6 text-sm">
                    <li>Transaction categorization</li>
                    <li>Reconciliations</li>
                    <li>Monthly P&amp;L and balance sheet</li>
                    <li>Cash-flow summary</li>
                  </ul>
                  <div className="text-primary font-semibold group-hover:underline">
                    View pricing and details →
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link href="/services/cfo" className="block group h-full">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-2xl mb-6">
                    <LineChart className="text-white" size={26} />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-navy">
                    Fractional CFO
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Strategy without the full-time cost.
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-6 text-sm">
                    <li>Cash-flow forecasting</li>
                    <li>KPI dashboards</li>
                    <li>Pricing and margin analysis</li>
                    <li>Monthly strategy sessions</li>
                  </ul>
                  <div className="text-primary font-semibold group-hover:underline">
                    View pricing and details →
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Link href="/services/ma-advisory" className="block group h-full">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-2xl mb-6">
                    <Handshake className="text-white" size={26} />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-navy">
                    M&amp;A Advisory
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Guidance to buy, sell, or exit.
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-6 text-sm">
                    <li>Sell-side readiness</li>
                    <li>Financial due diligence</li>
                    <li>Valuation positioning</li>
                    <li>Deal structuring</li>
                  </ul>
                  <div className="text-primary font-semibold group-hover:underline">
                    View pricing and details →
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="bg-navy rounded-2xl p-10 text-center">
              <div className="mb-6 flex justify-center">
                <Package className="text-white" size={48} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Bookkeeping + Fractional CFO Bundle
              </h2>
              <p className="text-blue-100/80 mb-6">
                Starting at $1,600/month.
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

      <CTASection />
    </main>
  );
}
