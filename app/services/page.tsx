import Link from "next/link";
import { BookOpen, TrendingUp, Package } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Magnolia Advisory Group",
  description: "Comprehensive accounting, finance, and business development services for growing businesses.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FDFCF8] to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-[#1B3022]">
              Our Services
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We focus on two core areas: clean, reliable financial systems and practical revenue infrastructure.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <FadeIn delay={0.1}>
              <Link href="/services/accounting" className="block group">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 h-full transition-all hover:shadow-md">
                  <div className="mb-6">
                    <BookOpen className="text-[#1B3022]" size={56} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold mb-4 group-hover:text-[#631D11] transition-colors">
                    Accounting & Finance Division
                  </h2>
                  <p className="text-gray-700 text-lg mb-6">
                    Clean books. Clear decisions. Structured systems.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li>• Monthly bookkeeping services</li>
                    <li>• Financial advisory & strategy</li>
                    <li>• Cleanup & catch-up services</li>
                    <li>• Custom financial reporting</li>
                    <li>• KPI tracking & dashboards</li>
                  </ul>
                  <div className="text-[#1B3022] font-semibold group-hover:underline">
                    View pricing & details →
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link href="/services/growth" className="block group">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 h-full transition-all hover:shadow-md">
                  <div className="mb-6">
                    <TrendingUp className="text-[#1B3022]" size={56} />
                  </div>
                  <h2 className="text-3xl font-serif font-bold mb-4 group-hover:text-[#631D11] transition-colors">
                    Business Development Division
                  </h2>
                  <p className="text-gray-700 text-lg mb-6">
                    Practical systems for predictable growth.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li>• Strategic advisory services</li>
                    <li>• Sales system development</li>
                    <li>• CRM setup & optimization</li>
                    <li>• Website & funnel builds</li>
                    <li>• Revenue process improvement</li>
                  </ul>
                  <div className="text-[#1B3022] font-semibold group-hover:underline">
                    View pricing & details →
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="bg-[#1B3022] rounded-2xl p-10 text-center">
              <div className="mb-6 flex justify-center">
                <Package className="text-[#FDFCF8]" size={56} />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4 text-[#FDFCF8]">
                The Flagship Bundle
              </h2>
              <p className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto">
                Combine accounting and growth services for complete financial and operational alignment.
              </p>
              <p className="text-2xl font-bold text-[#FDFCF8] mb-6">
                $1,200–$2,000/month
              </p>
              <Link
                href="/bundle"
                className="inline-block bg-[#FDFCF8] text-[#1B3022] px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-gray-100"
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
