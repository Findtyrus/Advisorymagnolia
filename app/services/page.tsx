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
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Three services, one focus: giving owner-operated businesses the financial clarity to make confident decisions.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FadeIn delay={0.1}>
              <Link href="/services/bookkeeping" className="block group h-full">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-2xl mb-6">
                    <BookOpen className="text-white" size={26} />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-navy">
                    Bookkeeping
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Clean, current books every month.
                  </p>
                  <ul className="space-y-2.5 text-gray-600 mb-6 text-sm">
                    <li>• Transaction categorization</li>
                    <li>• Bank &amp; credit card reconciliations</li>
                    <li>• Monthly P&amp;L and balance sheet</li>
                    <li>• Monthly cash-flow summary</li>
                    <li>• Cleanup &amp; catch-up available</li>
                  </ul>
                  <div className="text-primary font-semibold group-hover:underline">
                    View pricing &amp; details →
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link href="/services/cfo" className="block group h-full">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-2xl mb-6">
                    <LineChart className="text-white" size={26} />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-navy">
                    Fractional CFO
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Strategic financial guidance, without the full-time cost.
                  </p>
                  <ul className="space-y-2.5 text-gray-600 mb-6 text-sm">
                    <li>• Cash-flow forecasting &amp; budgeting</li>
                    <li>• KPI dashboards &amp; board-ready reporting</li>
                    <li>• Pricing &amp; margin analysis</li>
                    <li>• Banking &amp; financing support</li>
                    <li>• Monthly strategy sessions</li>
                  </ul>
                  <div className="text-primary font-semibold group-hover:underline">
                    View pricing &amp; details →
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Link href="/services/ma-advisory" className="block group h-full">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-2xl mb-6">
                    <Handshake className="text-white" size={26} />
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-navy">
                    M&amp;A Advisory
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Guidance for buying, selling, or preparing to exit.
                  </p>
                  <ul className="space-y-2.5 text-gray-600 mb-6 text-sm">
                    <li>• Exit &amp; sell-side readiness</li>
                    <li>• Financial due diligence support</li>
                    <li>• Valuation positioning</li>
                    <li>• Deal structuring guidance</li>
                    <li>• Buyer &amp; lender-ready financials</li>
                  </ul>
                  <div className="text-primary font-semibold group-hover:underline">
                    View pricing &amp; details →
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
              <h2 className="text-3xl font-bold mb-4 text-white">
                Bookkeeping + Fractional CFO Bundle
              </h2>
              <p className="text-blue-100/80 text-lg mb-6 max-w-3xl mx-auto">
                Combine day-to-day bookkeeping with ongoing CFO strategy for one integrated monthly price.
              </p>
              <p className="text-2xl font-bold text-white mb-6">
                Starting at $1,600/month
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
