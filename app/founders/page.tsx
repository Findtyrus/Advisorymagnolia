import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Founders",
  description: "Meet Tyrus L. Burton Jr. and Christian Camacho, the founders of Magnolia Advisory Group.",
};

export default function FoundersPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-navy">
              Meet the Founders
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Magnolia Advisory Group was founded by two professionals who believe structure changes outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="bg-surface rounded-2xl border border-gray-100 p-10 mb-16 text-center">
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                Our backgrounds are different — accounting and audit on one side, operations and corporate finance on the other — but our philosophy is the same:
              </p>
              <p className="text-3xl font-bold text-navy">
                Discipline. Clarity. Execution.
              </p>
              <p className="text-lg text-gray-700 mt-6">
                We built Magnolia to bring those principles to growing businesses.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-20">
            <FadeIn delay={0.1}>
              <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start">
                <div className="mx-auto md:mx-0">
                  <div className="relative w-40 md:w-full aspect-square rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src="/tyrus-burton.png"
                      alt="Tyrus L. Burton Jr."
                      fill
                      sizes="220px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="mt-4 flex justify-center">
                    <a
                      href="mailto:tyrus@magnoliaadvisory.com"
                      className="flex items-center gap-2 text-navy hover:text-primary transition-colors"
                    >
                      <Mail size={18} />
                      <span className="text-sm font-medium">Contact</span>
                    </a>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-navy">
                    Tyrus L. Burton Jr.
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    Managing Partner, Bookkeeping &amp; Accounting
                  </p>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Tyrus leads Magnolia&apos;s bookkeeping practice, building clean, reliable books that let business owners make confident decisions.
                    </p>
                    <p>
                      His foundation is in audit and financial analysis — testing high-risk accounts, supporting regulatory compliance, and operating under strict engagement standards. That precision now shapes how every client&apos;s books are built.
                    </p>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>Clean books are non-negotiable</li>
                      <li>Reporting should drive decisions</li>
                      <li>Financial clarity creates confidence</li>
                    </ul>
                    <p>
                      He&apos;s also worked in cost estimation and financial planning, collaborating with cross-functional teams on structured budgeting processes.
                    </p>
                    <p className="font-semibold text-navy">
                      At Magnolia, Tyrus leads every bookkeeping engagement, ensuring each client&apos;s financial foundation is organized and decision-ready.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start">
                <div className="mx-auto md:mx-0">
                  <div className="relative w-40 md:w-full aspect-square rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src="/christian-camacho.png"
                      alt="Christian Camacho"
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 flex justify-center">
                    <a
                      href="mailto:christian@magnoliaadvisory.com"
                      className="flex items-center gap-2 text-navy hover:text-primary transition-colors"
                    >
                      <Mail size={18} />
                      <span className="text-sm font-medium">Contact</span>
                    </a>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-navy">
                    Christian Camacho
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    Managing Partner, Fractional CFO &amp; M&amp;A Advisory
                  </p>
                  <div className="text-gray-700 space-y-4">
                    <p>
                      Christian leads Magnolia&apos;s CFO and M&amp;A advisory work, helping owners turn their financials into a strategy they can act on.
                    </p>
                    <p>
                      His background spans internal audit, corporate finance, and operations — experience inside high-volume, high-scrutiny environments where structure directly drives results.
                    </p>
                    <p>
                      Prior to Magnolia, Christian led teams through periods of growth and change, developing the negotiation and process skills that now guide his advisory and deal-support work:
                    </p>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>Financial strategy should be structured</li>
                      <li>Decisions should be measurable</li>
                      <li>Growth — and every transaction — should be intentional</li>
                    </ul>
                    <p className="font-semibold text-navy">
                      At Magnolia, Christian leads Fractional CFO engagements and M&amp;A advisory, helping owners plan ahead, manage cash and financing, and prepare for a future sale or transition.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12 text-navy">
              Why We Built Magnolia
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We&apos;ve both seen how lack of structure limits businesses.
              </p>
              <ul className="space-y-3 text-lg text-gray-700 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Books that are months behind.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Growth without a financial plan.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Owners making decisions without clarity.</span>
                </li>
              </ul>
              <p className="text-xl font-semibold text-navy mb-6">
                We started Magnolia Advisory Group to bridge that gap.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Not with complexity. Not with inflated consulting models.
              </p>
              <p className="text-xl font-semibold text-navy">
                With disciplined, practical systems that growing businesses can actually use.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-8 text-navy">
              Our Commitment
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                Every engagement is partner-led. We are hands-on, accessible, and structured.
              </p>
              <p className="text-2xl font-bold text-navy mt-6">
                Magnolia Advisory Group is being built intentionally — and we bring that same intentional approach to every client relationship.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
