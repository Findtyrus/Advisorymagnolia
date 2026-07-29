import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { Target, Shield, TrendingUp, Handshake } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "A partner-led advisory firm giving owner-operated service businesses clean books, CFO-level strategy, and M&A readiness.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-navy">
              About Magnolia Advisory Group
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A partner-led advisory firm built by operators.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Small businesses deserve real financial clarity — without the inflated fees or unnecessary complexity of a big firm.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our backgrounds are in audit, corporate finance, and operations. Across both structured corporate environments and hands-on business roles, we&apos;ve seen the same pattern:
              </p>
              <p className="text-xl font-semibold text-navy mb-8">
                Businesses don&apos;t struggle from lack of effort — they struggle from lack of structure.
              </p>
              <ul className="space-y-2 text-gray-700 mb-8 text-lg list-disc pl-6">
                <li>Messy, months-behind books</li>
                <li>No clear picture of cash flow or margins</li>
                <li>Decisions made on gut feel instead of data</li>
                <li>No plan for financing, growth, or an eventual exit</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Magnolia was built to fix that — with three focused services:
              </p>
              <ul className="space-y-2 text-gray-700 mb-8 text-lg list-disc pl-6">
                <li><strong>Bookkeeping</strong> — accurate, current books every month</li>
                <li><strong>Fractional CFO</strong> — strategy and forecasting to guide decisions</li>
                <li><strong>M&amp;A Advisory</strong> — support when you&apos;re ready to buy, sell, or exit</li>
              </ul>
              <p className="text-xl font-semibold text-navy">
                We align the numbers with the strategy — so owners make confident decisions, not reactive ones.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12 text-navy">
              Our Approach
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We operate differently than large firms and differently than freelancers.
              </p>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Every client engagement is partner-led</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Clear, published pricing — no hourly guesswork</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Month-to-month, with 30-day notice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Responsive, direct communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Focused on systems, not one-off fixes</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Shield className="text-primary" size={40} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-navy">Partner-Led</h3>
                <p className="text-gray-600 text-sm">
                  Direct access to partners, not junior staff
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Target className="text-primary" size={40} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-navy">Audit Discipline</h3>
                <p className="text-gray-600 text-sm">
                  Precision and compliance standards
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <TrendingUp className="text-primary" size={40} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-navy">Strategic Finance</h3>
                <p className="text-gray-600 text-sm">
                  CFO-level guidance for growth decisions
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Handshake className="text-primary" size={40} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-navy">Transaction Ready</h3>
                <p className="text-gray-600 text-sm">
                  Prepared for financing, growth, or exit
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12 text-navy">
              Who We Work With
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-surface rounded-2xl border border-gray-100 p-10">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We serve owner-operated service businesses with 1–5 employees who want:
              </p>
              <ul className="space-y-3 text-lg text-gray-700 mb-8 list-disc pl-6">
                <li>Clean, accurate books they can trust</li>
                <li>Financial strategy without a full-time CFO</li>
                <li>A clear-eyed partner when buying, selling, or exiting</li>
              </ul>
              <p className="text-xl font-semibold text-navy mb-4">
                We don&apos;t aim to be the biggest firm.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We aim to be the most structured and reliable partner for growing businesses at our stage of development.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-8 text-navy">
              Long-Term Vision
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Magnolia is being built intentionally — systems and client relationships designed to grow with our expertise over time.
              </p>
              <p className="text-2xl font-bold text-navy mb-12">
                Our goal: help businesses move from financial uncertainty to operational confidence.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Link
              href="/founders"
              className="inline-block bg-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-navy-light"
            >
              Meet the Founders
            </Link>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
