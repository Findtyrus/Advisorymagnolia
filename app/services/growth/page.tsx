import PricingCard from "@/components/PricingCard";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { Target, BarChart3, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Development | Magnolia Advisory Group",
  description: "Practical sales systems and revenue infrastructure for predictable growth.",
  keywords: ["sales systems", "business development", "revenue strategy", "CRM setup", "growth consulting"],
};

export default function GrowthPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FDFCF8] to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-[#1B3022]">
              Business Development Division
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Practical systems for predictable growth.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-[#1B3022]">
              Our Approach
            </h2>
            <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
              Sales should be structured. Processes should be measurable. Growth should be intentional.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 h-full">
                <div className="mb-6">
                  <Target className="text-[#1B3022]" size={48} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">Strategic Advisory</h3>
                <p className="text-2xl font-bold text-[#1B3022] mb-4">$750–$1,500/month</p>
                <p className="text-gray-600 mb-6">Monthly retainer</p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li>• Revenue strategy review</li>
                  <li>• Pricing analysis</li>
                  <li>• Process improvement</li>
                  <li>• Monthly advisory call</li>
                  <li>• Performance tracking</li>
                </ul>
                <a
                  href="/contact"
                  className="block text-center w-full py-3 rounded-lg font-semibold bg-gray-100 text-[#1B3022] hover:bg-gray-200 transition-all"
                >
                  Get Started
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-[#1B3022] shadow-lg p-8 h-full relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#1B3022] text-[#FDFCF8] px-4 py-1 rounded-full text-sm font-semibold">
                    Most Requested
                  </span>
                </div>
                <div className="mb-6">
                  <BarChart3 className="text-[#1B3022]" size={48} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">Sales System Development</h3>
                <p className="text-2xl font-bold text-[#1B3022] mb-4">$1,500–$4,000</p>
                <p className="text-gray-600 mb-6">One-time project</p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li>• CRM setup & configuration</li>
                  <li>• Pipeline structure design</li>
                  <li>• Sales scripts & templates</li>
                  <li>• KPI dashboard creation</li>
                  <li>• 2 training sessions</li>
                </ul>
                <a
                  href="/contact"
                  className="block text-center w-full py-3 rounded-lg font-semibold bg-[#1B3022] text-[#FDFCF8] hover:opacity-90 transition-all"
                >
                  Get Started
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 h-full">
                <div className="mb-6">
                  <Globe className="text-[#1B3022]" size={48} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">Website & Funnel Builds</h3>
                <p className="text-lg font-semibold text-[#1B3022] mb-4">Starting at $500</p>
                <p className="text-gray-600 mb-6">Project-based</p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li>• Starter Website: $500–$1,000</li>
                  <li>• Funnel Build: $600–$1,000</li>
                  <li>• Ongoing Management: $100–$200/mo</li>
                </ul>
                <p className="text-sm text-gray-600 italic mb-6">
                  Practical, conversion-focused sites for small businesses.
                </p>
                <a
                  href="/contact"
                  className="block text-center w-full py-3 rounded-lg font-semibold bg-gray-100 text-[#1B3022] hover:bg-gray-200 transition-all"
                >
                  Get Started
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFCF8]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12 text-[#1B3022]">
              What You Get
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-2xl font-serif font-bold mb-4">Strategic Advisory Includes:</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#1B3022] font-bold mt-1">→</span>
                    <span><strong>Revenue Strategy Review:</strong> Analysis of current revenue streams and opportunities for optimization.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#1B3022] font-bold mt-1">→</span>
                    <span><strong>Pricing Analysis:</strong> Review of pricing structure and recommendations for improvement.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#1B3022] font-bold mt-1">→</span>
                    <span><strong>Process Improvement:</strong> Identification and elimination of bottlenecks in sales processes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#1B3022] font-bold mt-1">→</span>
                    <span><strong>Monthly Advisory Call:</strong> Dedicated time to review performance and adjust strategy.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-2xl font-serif font-bold mb-4">Sales System Development Includes:</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-[#1B3022] font-bold mt-1">→</span>
                    <span><strong>CRM Setup:</strong> Complete configuration of your CRM platform (HubSpot, Pipedrive, etc.).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#1B3022] font-bold mt-1">→</span>
                    <span><strong>Pipeline Structure:</strong> Custom-designed sales pipeline aligned with your process.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#1B3022] font-bold mt-1">→</span>
                    <span><strong>Scripts & Templates:</strong> Sales scripts, email templates, and follow-up sequences.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#1B3022] font-bold mt-1">→</span>
                    <span><strong>Training Sessions:</strong> Two comprehensive training sessions for your team.</span>
                  </li>
                </ul>
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
                <h3 className="text-xl font-semibold mb-3">What CRM platforms do you work with?</h3>
                <p className="text-gray-700">
                  We specialize in HubSpot, Pipedrive, and Zoho CRM. We can also work with other platforms depending on your needs.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Do you build enterprise-level marketing systems?</h3>
                <p className="text-gray-700">
                  No. We focus on practical, conversion-focused solutions for small and growing businesses. We do not offer enterprise marketing automation.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">How long does a sales system project take?</h3>
                <p className="text-gray-700">
                  Typically 3-6 weeks depending on complexity and responsiveness. We work efficiently but thoroughly.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Can you help with ongoing sales management?</h3>
                <p className="text-gray-700">
                  Yes. Strategic Advisory retainers include ongoing support for sales process management and performance tracking.
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
