import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { CheckCircle, Calendar, TrendingUp, Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Our process for bookkeeping and fractional CFO engagements, from consultation to ongoing service.",
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-navy">
              How It Works
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A simple process to get your books clean and your strategy on track.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-navy rounded-2xl p-6 text-white h-full">
                <div className="text-4xl font-bold mb-3">01</div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  Consultation
                </h3>
                <p className="text-blue-100/80 text-sm">
                  Free 30-minute call to understand your business and goals.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-navy rounded-2xl p-6 text-white h-full">
                <div className="text-4xl font-bold mb-3">02</div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  Proposal
                </h3>
                <p className="text-blue-100/80 text-sm">
                  Clear scope, pricing, and timeline.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-navy rounded-2xl p-6 text-white h-full">
                <div className="text-4xl font-bold mb-3">03</div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  Onboarding
                </h3>
                <p className="text-blue-100/80 text-sm">
                  Secure access, records review, systems setup.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-navy rounded-2xl p-6 text-white h-full">
                <div className="text-4xl font-bold mb-3">04</div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  Ongoing Service
                </h3>
                <p className="text-blue-100/80 text-sm">
                  Reliable delivery, month after month.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-10 text-navy">
              Our Commitment to You
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <Shield className="text-primary" size={40} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-navy">Direct Access</h3>
                <p className="text-gray-700 text-sm">
                  Every engagement is personally overseen by our managing director.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <Calendar className="text-primary" size={40} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-navy">Flexible Terms</h3>
                <p className="text-gray-700 text-sm">
                  Month-to-month, 30-day notice to cancel.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <TrendingUp className="text-primary" size={40} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-navy">Results-Focused</h3>
                <p className="text-gray-700 text-sm">
                  We measure success by clarity gained, not hours billed.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold text-center mb-8 text-navy">
              Common Questions
            </h2>
          </FadeIn>

          <div className="space-y-4">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle className="text-primary" size={18} />
                  How long does onboarding take?
                </h3>
                <p className="text-gray-700">
                  Typically 1 to 2 weeks depending on the state of your records.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle className="text-primary" size={18} />
                  What software do I need?
                </h3>
                <p className="text-gray-700">
                  QuickBooks Online or Xero. We&apos;ll help you set one up if needed.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle className="text-primary" size={18} />
                  Do you meet in person?
                </h3>
                <p className="text-gray-700">
                  We operate fully remote and serve clients nationwide by video call.
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
