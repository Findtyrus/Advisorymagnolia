import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { CheckCircle, FileText, Calendar, TrendingUp, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Magnolia Advisory Group",
  description: "Our structured approach to financial systems and growth strategy for service-based businesses.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FDFCF8] to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-[#1B3022]">
              How It Works
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A structured, disciplined approach to building financial clarity and growth systems.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-center mb-16 text-[#1B3022]">
              The Process
            </h2>
          </FadeIn>

          <div className="space-y-16">
            <FadeIn delay={0.1}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-[#1B3022] rounded-2xl p-12 text-[#FDFCF8] h-full flex flex-col justify-center">
                  <div className="text-6xl font-bold mb-4">01</div>
                  <h3 className="text-3xl font-serif font-bold mb-4 text-[#FDFCF8]">
                    Initial Consultation
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Free 30-minute call to understand your business, challenges, and goals.
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-4">What We Cover:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>Current state of your financial systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>Revenue tracking and sales processes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>Key pain points and priorities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>Which services would be most valuable</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>Honest assessment of fit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h4 className="text-2xl font-semibold mb-4">What You Receive:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>Detailed scope of work</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>Clear pricing (tier and monthly cost)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>Timeline and deliverables</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>Engagement terms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>Next steps if you move forward</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 bg-[#1B3022] rounded-2xl p-12 text-[#FDFCF8] h-full flex flex-col justify-center">
                  <div className="text-6xl font-bold mb-4">02</div>
                  <h3 className="text-3xl font-serif font-bold mb-4 text-[#FDFCF8]">
                    Custom Proposal
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Tailored solution with clear pricing, scope, and timeline.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-[#1B3022] rounded-2xl p-12 text-[#FDFCF8] h-full flex flex-col justify-center">
                  <div className="text-6xl font-bold mb-4">03</div>
                  <h3 className="text-3xl font-serif font-bold mb-4 text-[#FDFCF8]">
                    Onboarding & Setup
                  </h3>
                  <p className="text-gray-300 text-lg">
                    We gather access, review records, and set up systems.
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-4">What Happens:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>Secure access to accounting software and financial data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>Review existing books and identify cleanup needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>Set up chart of accounts and reporting structure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>Configure sales tracking (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>Establish communication rhythm</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h4 className="text-2xl font-semibold mb-4">Monthly Deliverables:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>Clean, reconciled books</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>P&L, balance sheet, cash flow summary</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>KPI tracking and performance updates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>Advisory calls (tier dependent)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#1B3022] flex-shrink-0 mt-1" size={20} />
                      <span>Responsive support via email</span>
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2 bg-[#1B3022] rounded-2xl p-12 text-[#FDFCF8] h-full flex flex-col justify-center">
                  <div className="text-6xl font-bold mb-4">04</div>
                  <h3 className="text-3xl font-serif font-bold mb-4 text-[#FDFCF8]">
                    Ongoing Management
                  </h3>
                  <p className="text-gray-300 text-lg">
                    Consistent, reliable service month after month.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFCF8]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#1B3022]">
              Our Commitment to You
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <Shield className="text-[#1B3022]" size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Partner-Led Service</h3>
                <p className="text-gray-700">
                  Every engagement is managed by a partner. You're not handed off to junior staff.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <Calendar className="text-[#1B3022]" size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Flexible Terms</h3>
                <p className="text-gray-700">
                  Month-to-month agreements. No long-term contracts. 30-day notice to cancel.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <TrendingUp className="text-[#1B3022]" size={48} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Results-Focused</h3>
                <p className="text-gray-700">
                  We measure success by the clarity and confidence you gain, not hours billed.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold text-center mb-12 text-[#1B3022]">
              Common Questions About Working Together
            </h2>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">How long does onboarding take?</h3>
                <p className="text-gray-700">
                  Typically 1-2 weeks depending on the state of your records. If cleanup is needed, we'll provide a separate timeline for that work.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">What software do I need?</h3>
                <p className="text-gray-700">
                  We work primarily with QuickBooks Online and Xero. If you don't have accounting software yet, we'll help you choose and set it up.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">Do you meet in person?</h3>
                <p className="text-gray-700">
                  We operate fully remote. All meetings happen via video call, which allows us to serve clients nationwide efficiently.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-3">What if I need to cancel?</h3>
                <p className="text-gray-700">
                  30-day notice is all we require. No penalties, no complicated contracts. We want clients who value the service, not clients locked into agreements.
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
