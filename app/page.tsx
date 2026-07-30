import Link from "next/link";
import { BookOpen, LineChart, Handshake, Shield, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-white to-white"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <FadeIn>
              <span className="inline-block bg-surface text-primary-dark px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
                For service businesses up to $1M in revenue
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy tracking-tight leading-[1.05]">
                Clean books.<br />
                <span className="text-primary">Clear financial strategy.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Bookkeeping, fractional CFO, and M&amp;A advisory for small businesses. No big-firm complexity or price tag.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center pt-4" style={{ gap: '1rem' }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all hover:bg-primary-dark hover:shadow-xl hover:scale-105 min-w-[240px]"
                >
                  Book a Free Consultation
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center bg-white border-2 border-navy text-navy px-10 py-5 rounded-xl font-semibold text-lg transition-all hover:bg-surface min-w-[240px]"
                >
                  View Pricing
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Three services, one goal: financial clarity you can act on.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl p-10 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 shadow-sm">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-2xl mb-6">
                  <BookOpen className="text-white" size={26} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-navy">Bookkeeping</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Transaction categorization, reconciliations, and monthly P&amp;L, balance sheet, and cash-flow summaries.
                </p>
                <div className="mt-auto">
                  <p className="text-sm text-gray-500 mb-4">Starting at <span className="font-semibold text-navy">$300/month</span></p>
                  <Link
                    href="/services/bookkeeping"
                    className="inline-flex items-center justify-center w-full bg-navy text-white px-6 py-3.5 rounded-xl font-semibold transition-all hover:bg-navy-light"
                  >
                    Start Bookkeeping
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl p-10 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-primary shadow-sm relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-xs font-semibold tracking-wide">
                    MOST POPULAR
                  </span>
                </div>
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-2xl mb-6">
                  <LineChart className="text-white" size={26} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-navy">Fractional CFO</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Forecasting, budgeting, and KPI reporting. CFO-level guidance without a full-time hire.
                </p>
                <div className="mt-auto">
                  <p className="text-sm text-gray-500 mb-4">Starting at <span className="font-semibold text-navy">$1,500/month</span></p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full bg-primary text-white px-6 py-3.5 rounded-xl font-semibold transition-all hover:bg-primary-dark"
                  >
                    Schedule CFO Consultation
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-3xl p-10 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 shadow-sm">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-2xl mb-6">
                  <Handshake className="text-white" size={26} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-navy">M&amp;A Advisory</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Support for buying, selling, or preparing for an exit, from valuation through close.
                </p>
                <div className="mt-auto">
                  <p className="text-sm text-gray-500 mb-4">Custom scope, <span className="font-semibold text-navy">free initial review</span></p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full bg-navy text-white px-6 py-3.5 rounded-xl font-semibold transition-all hover:bg-navy-light"
                  >
                    Discuss Your Transaction
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Magnolia */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                Why Owners Choose Magnolia
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="text-center p-8 rounded-2xl bg-white hover:shadow-md transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <Shield className="text-primary" size={30} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-navy">Direct Access</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every engagement is personally overseen by our managing director.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center p-8 rounded-2xl bg-white hover:shadow-md transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <CheckCircle className="text-primary" size={30} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-navy">Transparent Pricing</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Published pricing. No surprise invoices.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-center p-8 rounded-2xl bg-white hover:shadow-md transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <Calendar className="text-primary" size={30} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-navy">Month-to-Month</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  No long-term contracts. 30-day notice.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="text-center p-8 rounded-2xl bg-white hover:shadow-md transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <Shield className="text-primary" size={30} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-navy">Risk-Free First Month</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  100% satisfaction guarantee on bookkeeping.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing Snapshot */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-navy">
              Pricing Snapshot
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 h-full">
                <h3 className="text-xl font-bold mb-2 text-navy">Bookkeeping</h3>
                <div className="text-3xl font-bold text-navy mb-4">
                  $300<span className="text-lg text-gray-500">+/month</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Categorization, reconciliations, and monthly statements.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-navy rounded-2xl shadow-lg p-8 text-white h-full relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Fractional CFO</h3>
                <div className="text-3xl font-bold mb-4">
                  $1,500<span className="text-lg text-blue-100/70">+/month</span>
                </div>
                <p className="text-blue-100/80 text-sm">
                  Forecasting, budgeting, and KPI reporting.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 h-full">
                <h3 className="text-xl font-bold mb-2 text-navy">M&amp;A Advisory</h3>
                <div className="text-3xl font-bold text-navy mb-4">
                  Custom
                </div>
                <p className="text-gray-600 text-sm">
                  Scoped to your transaction.
                </p>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.4}>
            <Link
              href="/pricing"
              className="inline-block bg-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-navy-light"
            >
              View Full Pricing
            </Link>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
