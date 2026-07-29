import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Founders | Magnolia Advisory Group",
  description: "Meet Tyrus L. Burton Jr. and Christian Camacho, the founders of Magnolia Advisory Group.",
};

export default function FoundersPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FDFCF8] to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-[#1B3022]">
              Meet the Founders
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Magnolia Advisory Group was founded by two professionals who believe structure changes outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="bg-[#FDFCF8] rounded-2xl border border-gray-100 p-10 mb-16 text-center">
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                Our backgrounds are different — accounting and audit on one side, operations and sales on the other — but our philosophy is the same:
              </p>
              <p className="text-3xl font-serif font-bold text-[#1B3022]">
                Discipline. Clarity. Execution.
              </p>
              <p className="text-lg text-gray-700 mt-6">
                We built Magnolia to bring those principles to growing businesses.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-20">
            <FadeIn delay={0.1}>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="order-2 md:order-1">
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/tyrus-burton.png"
                      alt="Tyrus L. Burton Jr."
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="mt-6 flex gap-4 justify-center">
                    <a
                      href="mailto:tyrus@magnoliaadvisory.com"
                      className="flex items-center gap-2 text-[#1B3022] hover:text-[#631D11] transition-colors"
                    >
                      <Mail size={20} />
                      <span className="text-sm font-medium">Contact</span>
                    </a>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-4xl font-serif font-bold mb-2 text-[#1B3022]">
                    Tyrus L. Burton Jr.
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    Managing Partner, Accounting & Finance
                  </p>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                    <p>
                      Tyrus focuses on building clean, reliable financial systems that allow business owners to make confident decisions.
                    </p>
                    <p>
                      With experience in audit and financial analysis, his foundation is built on accuracy, compliance, and structured reporting. He has worked in audit environments where precision matters — testing high-risk accounts, supporting regulatory compliance, and operating under strict engagement standards.
                    </p>
                    <p className="font-semibold text-[#1B3022]">
                      That background shaped how he approaches advisory work today:
                    </p>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>Clean books are non-negotiable</li>
                      <li>Reporting should drive decisions</li>
                      <li>Financial clarity creates confidence</li>
                    </ul>
                    <p>
                      In addition to audit experience, Tyrus has worked in cost estimation and financial planning environments, collaborating with cross-functional teams and supporting structured budgeting processes.
                    </p>
                    <p>
                      As a former collegiate football player and team captain, discipline and accountability are central to how he operates — both personally and professionally.
                    </p>
                    <p className="font-semibold text-[#1B3022]">
                      At Magnolia, Tyrus leads all Accounting & Finance engagements, ensuring that every client's financial foundation is structured, organized, and decision-ready.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/christian-camacho.png"
                      alt="Christian Camacho"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-6 flex gap-4 justify-center">
                    <a
                      href="mailto:christian@magnoliaadvisory.com"
                      className="flex items-center gap-2 text-[#1B3022] hover:text-[#631D11] transition-colors"
                    >
                      <Mail size={20} />
                      <span className="text-sm font-medium">Contact</span>
                    </a>
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl font-serif font-bold mb-2 text-[#1B3022]">
                    Christian Camacho
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    Managing Partner, Growth & Market Development
                  </p>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                    <p>
                      Christian specializes in revenue systems, operational efficiency, and sales performance.
                    </p>
                    <p>
                      With experience in internal audit, supply chain operations, and sales leadership, he understands how structure drives measurable results. He has worked inside high-volume operational environments and corporate audit functions, identifying inefficiencies and improving performance.
                    </p>
                    <p>
                      Prior to Magnolia, Christian led sales teams and developed revenue strategies that increased market share and improved customer retention. That real-world sales leadership experience shapes how he approaches business development advisory:
                    </p>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>Sales should be structured</li>
                      <li>Processes should be measurable</li>
                      <li>Growth should be intentional</li>
                    </ul>
                    <p>
                      His background in operations and audit reinforces one principle: systems matter.
                    </p>
                    <p className="font-semibold text-[#1B3022]">
                      At Magnolia, Christian leads Business Development engagements — designing revenue infrastructure, improving sales processes, and helping business owners move from inconsistent growth to predictable performance.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFCF8]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#1B3022]">
              Why We Built Magnolia
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                We've both seen how lack of structure limits businesses.
              </p>
              <ul className="space-y-3 text-lg text-gray-700 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-[#1B3022] font-bold mt-1">•</span>
                  <span>Books that are months behind.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1B3022] font-bold mt-1">•</span>
                  <span>Revenue without tracking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1B3022] font-bold mt-1">•</span>
                  <span>Owners making decisions without clarity.</span>
                </li>
              </ul>
              <p className="text-xl font-semibold text-[#1B3022] mb-6">
                We started Magnolia Advisory Group to bridge that gap.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Not with complexity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Not with inflated consulting models.
              </p>
              <p className="text-xl font-semibold text-[#1B3022]">
                But with disciplined, practical systems that growing businesses can actually use.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl font-serif font-bold mb-8 text-[#1B3022]">
              Our Commitment
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                Every engagement is partner-led.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                We are hands-on.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-4">
                We are accessible.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We operate with structure and accountability.
              </p>
              <p className="text-2xl font-serif font-bold text-[#1B3022]">
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
