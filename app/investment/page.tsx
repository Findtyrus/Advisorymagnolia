import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { DollarSign, Calendar, Shield, HelpCircle } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investment & FAQ | Magnolia Advisory Group",
  description: "Transparent, tiered pricing designed for growing businesses with flexible month-to-month terms.",
};

export default function InvestmentPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FDFCF8] to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-[#1B3022]">
              Investment in Structure
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Transparent, tiered pricing designed for growing businesses. Month-to-month flexibility.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-center mb-4 text-[#1B3022]">
              Accounting & Finance Pricing
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12">
              Clean books and clear decisions.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-2xl font-serif font-bold mb-3">Essential</h3>
                <div className="text-4xl font-bold text-[#1B3022] mb-2">$300–$350</div>
                <p className="text-gray-600 mb-6">/month</p>
                <p className="text-gray-700">
                  For freelancers and solo owners under $100K revenue.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-[#1B3022] rounded-2xl shadow-lg p-8 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#631D11] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-[#FDFCF8]">Professional</h3>
                <div className="text-4xl font-bold text-[#FDFCF8] mb-2">$375–$450</div>
                <p className="text-gray-300 mb-6">/month</p>
                <p className="text-gray-300">
                  For growing service businesses under $500K revenue.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-2xl font-serif font-bold mb-3">Premium</h3>
                <div className="text-4xl font-bold text-[#1B3022] mb-2">$500+</div>
                <p className="text-gray-600 mb-6">/month</p>
                <p className="text-gray-700">
                  For established or multi-entity businesses.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mb-16">
              <Link
                href="/services/accounting"
                className="inline-block text-[#1B3022] font-semibold hover:underline"
              >
                View full accounting services details →
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <h2 className="text-4xl font-serif font-bold text-center mb-4 text-[#1B3022]">
              Business Development Pricing
            </h2>
            <p className="text-xl text-gray-700 text-center mb-12">
              Practical systems for predictable growth.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <FadeIn delay={0.6}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-2xl font-serif font-bold mb-3">Strategic Advisory</h3>
                <div className="text-4xl font-bold text-[#1B3022] mb-2">$750–$1,500</div>
                <p className="text-gray-600 mb-6">/month</p>
                <p className="text-gray-700">
                  Monthly retainer for revenue strategy and growth guidance.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-2xl font-serif font-bold mb-3">Sales System</h3>
                <div className="text-4xl font-bold text-[#1B3022] mb-2">$1,500–$4,000</div>
                <p className="text-gray-600 mb-6">project</p>
                <p className="text-gray-700">
                  Complete CRM setup, pipeline design, and sales infrastructure.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-2xl font-serif font-bold mb-3">Website & Funnels</h3>
                <div className="text-4xl font-bold text-[#1B3022] mb-2">$500–$1,000</div>
                <p className="text-gray-600 mb-6">project</p>
                <p className="text-gray-700">
                  Practical, conversion-focused sites for small businesses.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.9}>
            <div className="text-center mb-16">
              <Link
                href="/services/growth"
                className="inline-block text-[#1B3022] font-semibold hover:underline"
              >
                View full business development details →
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={1.0}>
            <div className="bg-[#1B3022] rounded-2xl p-10 text-center">
              <h2 className="text-4xl font-serif font-bold mb-4 text-[#FDFCF8]">
                The Flagship Bundle
              </h2>
              <div className="text-5xl font-bold text-[#FDFCF8] mb-4">$1,200–$2,000</div>
              <p className="text-gray-300 text-lg mb-6">/month</p>
              <p className="text-gray-300 max-w-3xl mx-auto mb-8">
                Combined accounting and growth services for complete financial and operational alignment.
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFCF8]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#1B3022]">
              How We Work
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <DollarSign className="text-[#1B3022]" size={56} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">Transparent Pricing</h3>
                <p className="text-gray-700">
                  No hidden fees. No surprise charges. Clear tiered pricing based on your needs.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <Calendar className="text-[#1B3022]" size={56} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">Month-to-Month</h3>
                <p className="text-gray-700">
                  Flexible terms with 30-day notice. No long-term contracts required.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <Shield className="text-[#1B3022]" size={56} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">Satisfaction Guarantee</h3>
                <p className="text-gray-700">
                  100% satisfaction in your first month of bookkeeping — or you don't pay.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="mb-12 flex justify-center">
              <HelpCircle className="text-[#1B3022]" size={56} />
            </div>
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#1B3022]">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Do you offer tax filing?</h3>
                <p className="text-gray-700">
                  No, we focus on management accounting and systems. We provide tax-ready books for your CPA to file returns efficiently. We can recommend CPAs if needed.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">What accounting software do you support?</h3>
                <p className="text-gray-700">
                  We specialize in QuickBooks Online and Xero. These are the most robust platforms for small business management accounting. If you use different software, contact us to discuss compatibility.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Where are you located?</h3>
                <p className="text-gray-700">
                  We operate fully remote and serve clients nationwide. Location is not a barrier to great service. All communication happens via video calls, email, and shared platforms.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Is there a minimum commitment?</h3>
                <p className="text-gray-700">
                  Our bookkeeping services are month-to-month with 30-day notice. Project-based work (cleanup, sales systems) requires completion but no ongoing commitment. No long-term contracts.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Do you work remotely?</h3>
                <p className="text-gray-700">
                  Yes. All of our services are delivered remotely. We use secure cloud-based platforms for all client work and communication.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Can I switch tiers if my business grows?</h3>
                <p className="text-gray-700">
                  Absolutely. As your transaction volume or complexity increases, we'll adjust your tier accordingly. Pricing adjustments happen with 30-day notice.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">What determines pricing within each tier?</h3>
                <p className="text-gray-700">
                  Transaction volume, number of accounts, complexity of reporting, and support level needed. We assess during the initial consultation and provide a clear quote.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.8}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Do you serve industries outside of service-based businesses?</h3>
                <p className="text-gray-700">
                  We focus on service-based businesses because that's where our expertise is strongest. We do not serve e-commerce, retail, or manufacturing at this time.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.9}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">How quickly can we get started?</h3>
                <p className="text-gray-700">
                  After an initial consultation, onboarding typically takes 1-2 weeks depending on the state of your records. Cleanup projects may require additional time upfront.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={1.0}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">What if I need services beyond what you offer?</h3>
                <p className="text-gray-700">
                  We maintain relationships with CPAs, attorneys, and other professionals. If you need services outside our scope, we can make introductions.
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
