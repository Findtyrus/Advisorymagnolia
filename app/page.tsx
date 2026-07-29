import Link from "next/link";
import { BookOpen, TrendingUp, Shield, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF8] via-white to-[#FDFCF8] opacity-60"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <FadeIn>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-[#1B3022] tracking-tight leading-none">
                Financial Clarity.<br />
                <span className="text-[#631D11]">Structured Growth.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                Magnolia Advisory Group helps growing service businesses build clean books and practical revenue systems — without the complexity or inflated fees of large firms.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center pt-4" style={{ gap: '1rem' }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#1B3022] text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all hover:bg-[#0f1e14] hover:shadow-xl hover:scale-105 min-w-[240px]"
                >
                  Book a Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center bg-white border-2 border-[#1B3022] text-[#1B3022] px-10 py-5 rounded-xl font-semibold text-lg transition-all hover:bg-gray-50 hover:border-[#0f1e14] min-w-[240px]"
                >
                  View Services
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1B3022] mb-6">
                The Problem
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Small businesses lose thousands each year due to lack of structure
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 border border-gray-200 h-full">
                <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  The Chaos
                </div>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                    <span className="text-lg text-gray-700">Messy books months behind</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                    <span className="text-lg text-gray-700">Unclear margins and cash flow</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                    <span className="text-lg text-gray-700">Inconsistent sales and revenue</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                    <span className="text-lg text-gray-700">Decisions made without data</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-[#1B3022] to-[#0f1e14] rounded-3xl p-10 text-white h-full shadow-2xl">
                <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  The Magnolia Method
                </div>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="flex-shrink-0 text-green-400 mt-0.5" size={24} />
                    <span className="text-lg">Clean, structured financial systems</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="flex-shrink-0 text-green-400 mt-0.5" size={24} />
                    <span className="text-lg">Predictable revenue infrastructure</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="flex-shrink-0 text-green-400 mt-0.5" size={24} />
                    <span className="text-lg">Disciplined partner-led service</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="flex-shrink-0 text-green-400 mt-0.5" size={24} />
                    <span className="text-lg">Systems over chaos</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Two Core Divisions */}
      <section className="py-24 px-6 bg-[#FDFCF8]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1B3022] mb-6">
                Two Core Divisions
              </h2>
              <p className="text-2xl text-gray-600 font-light">
                We align the numbers with the strategy.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <Link href="/services/accounting" className="block group h-full">
                <div className="bg-white rounded-3xl p-12 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-[#1B3022]">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1B3022] rounded-2xl mb-8">
                    <BookOpen className="text-white" size={32} />
                  </div>
                  <h3 className="text-4xl font-serif font-bold mb-4 text-[#1B3022] group-hover:text-[#631D11] transition-colors">
                    Accounting & Finance
                  </h3>
                  <p className="text-xl text-gray-600 mb-6 font-semibold">
                    Clean books. Clear decisions. Structured systems.
                  </p>
                  <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                    From bookkeeping to financial advisory, we provide the clarity you need to make confident business decisions.
                  </p>
                  <div className="inline-flex items-center text-[#1B3022] font-semibold text-lg group-hover:gap-3 gap-2 transition-all">
                    Learn more
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/services/growth" className="block group h-full">
                <div className="bg-white rounded-3xl p-12 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-[#1B3022]">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1B3022] rounded-2xl mb-8">
                    <TrendingUp className="text-white" size={32} />
                  </div>
                  <h3 className="text-4xl font-serif font-bold mb-4 text-[#1B3022] group-hover:text-[#631D11] transition-colors">
                    Business Development
                  </h3>
                  <p className="text-xl text-gray-600 mb-6 font-semibold">
                    Practical systems for predictable growth.
                  </p>
                  <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                    Sales strategy, revenue systems, and growth infrastructure that moves you from inconsistent to intentional.
                  </p>
                  <div className="inline-flex items-center text-[#1B3022] font-semibold text-lg group-hover:gap-3 gap-2 transition-all">
                    Learn more
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Magnolia */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1B3022] mb-6">
                Why Magnolia
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Structured service built for growing businesses
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1B3022] bg-opacity-10 rounded-2xl mb-6">
                  <Shield className="text-[#1B3022]" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1B3022]">Partner-Led Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every engagement is led by a partner, not delegated to junior staff.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1B3022] bg-opacity-10 rounded-2xl mb-6">
                  <CheckCircle className="text-[#1B3022]" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1B3022]">Tiered Pricing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Clear, transparent pricing designed for growing businesses.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1B3022] bg-opacity-10 rounded-2xl mb-6">
                  <Calendar className="text-[#1B3022]" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1B3022]">Month-to-Month</h3>
                <p className="text-gray-600 leading-relaxed">
                  No long-term contracts. Flexibility with 30-day notice.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="text-center p-8 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1B3022] bg-opacity-10 rounded-2xl mb-6">
                  <Shield className="text-[#1B3022]" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1B3022]">100% Guarantee</h3>
                <p className="text-gray-600 leading-relaxed">
                  Risk-free first month on bookkeeping services.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFCF8]">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-[#1B3022]">
              Pricing Snapshot
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Transparent, tiered pricing for growing service businesses.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-2xl font-serif font-bold mb-2">Essential</h3>
                <div className="text-3xl font-bold text-[#1B3022] mb-4">
                  $300–$350<span className="text-lg text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">
                  For freelancers and solo owners under $100K revenue.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-[#1B3022] rounded-2xl shadow-lg p-8 text-[#FDFCF8] relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#631D11] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2 text-[#FDFCF8]">Professional</h3>
                <div className="text-3xl font-bold mb-4">
                  $375–$450<span className="text-lg text-gray-300">/month</span>
                </div>
                <p className="text-gray-300">
                  For growing service businesses under $500K revenue.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-2xl font-serif font-bold mb-2">Premium</h3>
                <div className="text-3xl font-bold text-[#1B3022] mb-4">
                  $500+<span className="text-lg text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">
                  For established or multi-entity businesses.
                </p>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.4}>
            <Link
              href="/investment"
              className="inline-block bg-[#1B3022] text-[#FDFCF8] px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:opacity-90"
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
