import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { Check, Package } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth & Financial Alignment Package | Magnolia Advisory Group",
  description: "Combine accounting and growth services for complete financial and operational alignment.",
};

export default function BundlePage() {
  const bundleFeatures = [
    "Professional bookkeeping (up to 300 transactions)",
    "Monthly advisory call with partners",
    "Custom KPI dashboard",
    "Sales process review and optimization",
    "Quarterly strategy session",
    "Priority support across all services",
    "Integrated financial and revenue reporting",
    "Access to both division partners",
  ];

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FDFCF8] to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <div className="mb-6 flex justify-center">
              <Package className="text-[#1B3022]" size={64} />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-[#1B3022]">
              The Flagship Bundle
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-semibold">
              Growth & Financial Alignment Package
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The complete solution for businesses that want aligned numbers and structured growth.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="bg-[#1B3022] rounded-2xl p-12 text-center text-[#FDFCF8] mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#FDFCF8]">
                $1,200–$2,000/month
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Complete financial clarity and structured growth in one integrated package.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">What's Included</h2>
                <ul className="space-y-4">
                  {bundleFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="text-[#1B3022] flex-shrink-0 mt-1" size={24} />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Who This Is For</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="font-semibold text-xl mb-3">Service-Based Businesses</h3>
                    <p className="text-gray-700">
                      Operating between $100K–$500K in annual revenue who need both financial clarity and revenue systems.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="font-semibold text-xl mb-3">Growth-Focused Owners</h3>
                    <p className="text-gray-700">
                      Business owners who understand that clean books and structured sales are interconnected.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="font-semibold text-xl mb-3">Serious Operators</h3>
                    <p className="text-gray-700">
                      Founders committed to building disciplined, sustainable businesses.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="bg-[#FDFCF8] rounded-2xl p-10 border border-gray-100">
              <h2 className="text-3xl font-serif font-bold mb-6 text-center">The Magnolia Difference</h2>
              <p className="text-gray-700 text-lg mb-8 text-center max-w-3xl mx-auto">
                Most firms separate accounting and growth services. We integrate them because your financial data should inform your revenue strategy — and your revenue strategy should be reflected in your financial reporting.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1B3022] mb-2">Integrated</div>
                  <p className="text-gray-600">Numbers aligned with strategy</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1B3022] mb-2">Partner-Led</div>
                  <p className="text-gray-600">Direct access to both partners</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1B3022] mb-2">Structured</div>
                  <p className="text-gray-600">Disciplined systems, not chaos</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFCF8]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#1B3022]">
              How It Works
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                <div className="text-3xl font-bold text-[#1B3022] mb-3">01</div>
                <h3 className="font-semibold mb-2">Initial Assessment</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive review of your financial and revenue systems.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                <div className="text-3xl font-bold text-[#1B3022] mb-3">02</div>
                <h3 className="font-semibold mb-2">System Setup</h3>
                <p className="text-gray-600 text-sm">
                  Clean up books, establish reporting, configure revenue tracking.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                <div className="text-3xl font-bold text-[#1B3022] mb-3">03</div>
                <h3 className="font-semibold mb-2">Ongoing Management</h3>
                <p className="text-gray-600 text-sm">
                  Monthly bookkeeping, advisory calls, and performance tracking.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                <div className="text-3xl font-bold text-[#1B3022] mb-3">04</div>
                <h3 className="font-semibold mb-2">Quarterly Review</h3>
                <p className="text-gray-600 text-sm">
                  Strategic sessions to align financial performance with growth goals.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-[#1B3022]">
              Common Questions
            </h2>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Can I upgrade from a standalone service to the bundle?</h3>
                <p className="text-gray-700">
                  Yes. If you're currently using one division's services, we can upgrade you to the bundle at any time.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Is this month-to-month like your other services?</h3>
                <p className="text-gray-700">
                  Yes. The bundle follows the same flexible terms — month-to-month with 30-day notice.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Do both partners work with me?</h3>
                <p className="text-gray-700">
                  Yes. You'll have direct access to both partners — Tyrus for accounting and finance, Christian for business development.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">What determines the pricing within the range?</h3>
                <p className="text-gray-700">
                  Transaction volume, complexity of revenue streams, number of entities, and level of advisory support needed.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready for aligned growth and financial clarity?"
        description="Schedule a consultation to discuss the Flagship Bundle and how we can serve your business."
      />
    </main>
  );
}
