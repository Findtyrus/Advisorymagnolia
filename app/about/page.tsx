import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { Shield, Target, TrendingUp, Handshake } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Magnolia Advisory Group gives owner-operated service businesses clean books and CFO-level strategy.",
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
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real financial clarity, without big-firm fees or complexity.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Most small businesses don&apos;t struggle from lack of effort. They struggle from lack of structure: messy books, unclear cash flow, and decisions made on gut feel.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Magnolia was built to fix that with two services: bookkeeping and fractional CFO support.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We&apos;re a growing firm. As our client base expands, so does our team, but every engagement is still personally overseen by our managing director.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-10 text-navy">
              How We Work
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Shield className="text-primary" size={36} />
                </div>
                <h3 className="text-base font-semibold mb-1 text-navy">Direct Access</h3>
                <p className="text-gray-600 text-sm">
                  Every engagement is personally overseen by our managing director.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Target className="text-primary" size={36} />
                </div>
                <h3 className="text-base font-semibold mb-1 text-navy">Clear Pricing</h3>
                <p className="text-gray-600 text-sm">
                  Published rates. No hourly guesswork.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <TrendingUp className="text-primary" size={36} />
                </div>
                <h3 className="text-base font-semibold mb-1 text-navy">Month to Month</h3>
                <p className="text-gray-600 text-sm">
                  No long-term contracts, 30-day notice.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Handshake className="text-primary" size={36} />
                </div>
                <h3 className="text-base font-semibold mb-1 text-navy">Built to Grow</h3>
                <p className="text-gray-600 text-sm">
                  Ready to support financing and growth.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 text-navy">
              Who We Work With
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Service businesses up to $1M in revenue who want clean books, real financial strategy, and a partner who helps them grow with confidence.
            </p>
            <Link
              href="/team"
              className="inline-block bg-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-navy-light"
            >
              Meet the Team
            </Link>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
