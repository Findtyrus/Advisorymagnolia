import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { Target, Shield, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Magnolia Advisory Group",
  description: "A partner-led advisory firm built by operators, focused on structured financial systems and practical growth strategy for small businesses.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FDFCF8] to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-[#1B3022]">
              About Magnolia Advisory Group
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A partner-led advisory firm built by operators.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Magnolia Advisory Group was founded on a simple belief:
              </p>
              <p className="text-2xl font-semibold text-[#1B3022] mb-8">
                Small businesses deserve structured financial systems and practical growth strategy — without inflated fees or unnecessary complexity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are a partner-led advisory firm built by operators.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our backgrounds are in audit, corporate finance, operations, and sales leadership. Through our experience in both structured corporate environments and hands-on business roles, we've seen the same pattern repeatedly:
              </p>
              <p className="text-xl font-semibold text-[#1B3022] italic mb-8">
                Businesses don't fail because of lack of effort. They struggle because of lack of structure.
              </p>
              <ul className="space-y-2 text-gray-700 mb-8 text-lg">
                <li>Messy books.</li>
                <li>Unclear margins.</li>
                <li>Inconsistent revenue.</li>
                <li>Decisions made without data.</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Magnolia was created to fix that.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We focus on two core areas:
              </p>
              <ul className="space-y-2 text-gray-700 mb-8 text-lg list-disc pl-6">
                <li>Clean, reliable financial systems</li>
                <li>Practical revenue and growth infrastructure</li>
              </ul>
              <p className="text-xl font-semibold text-[#1B3022] mb-8">
                We align the numbers with the strategy — so business owners can make confident decisions, not reactive ones.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFCF8]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#1B3022]">
              Our Approach
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We operate differently than large firms and differently than freelancers.
              </p>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#1B3022] font-bold mt-1">•</span>
                  <span>Every client engagement is partner-led</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1B3022] font-bold mt-1">•</span>
                  <span>We use clear, tiered pricing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1B3022] font-bold mt-1">•</span>
                  <span>We work month-to-month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1B3022] font-bold mt-1">•</span>
                  <span>We prioritize responsiveness and clarity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1B3022] font-bold mt-1">•</span>
                  <span>We focus on systems, not surface-level fixes</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-8">
                We are early in our careers, but we are disciplined in our approach. Our foundation comes from audit standards, financial analysis, operations management, and real-world sales leadership — not theory.
              </p>
              <p className="text-lg font-semibold text-[#1B3022] mt-6">
                That discipline shows up in how we serve our clients.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Shield className="text-[#1B3022]" size={48} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Partner-Led</h3>
                <p className="text-gray-600 text-sm">
                  Direct access to partners, not junior staff
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Target className="text-[#1B3022]" size={48} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Audit Discipline</h3>
                <p className="text-gray-600 text-sm">
                  Precision and compliance standards
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <TrendingUp className="text-[#1B3022]" size={48} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Operations Focus</h3>
                <p className="text-gray-600 text-sm">
                  Practical systems that actually work
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Users className="text-[#1B3022]" size={48} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Sales Leadership</h3>
                <p className="text-gray-600 text-sm">
                  Real-world revenue experience
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#1B3022]">
              Who We Work With
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-[#FDFCF8] rounded-2xl border border-gray-100 p-10">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We serve:
              </p>
              <ul className="space-y-3 text-lg text-gray-700 mb-8 list-disc pl-6">
                <li>Service-based businesses</li>
                <li>Founder-led companies</li>
                <li>Small businesses</li>
                <li>Business owners who want clarity and structure</li>
              </ul>
              <p className="text-xl font-semibold text-[#1B3022] mb-4">
                We do not aim to be the biggest firm.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We aim to be the most structured and reliable partner for growing businesses in our stage of development.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFCF8]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#1B3022]">
              Long-Term Vision
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Magnolia Advisory Group is being built intentionally.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are developing systems, processes, and long-term client relationships that will grow with our experience and expertise over time.
              </p>
              <p className="text-xl font-semibold text-[#1B3022] mb-8">
                Our goal is simple:
              </p>
              <p className="text-2xl font-serif font-bold text-[#1B3022] mb-12">
                To build a disciplined advisory firm that helps businesses move from financial uncertainty to operational confidence.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="text-center">
              <Link
                href="/founders"
                className="inline-block bg-[#1B3022] text-[#FDFCF8] px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:opacity-90"
              >
                Meet the Founders
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
