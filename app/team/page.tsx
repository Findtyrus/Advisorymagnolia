import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet Tyrus L. Burton Jr., Managing Director of Magnolia Advisory Group.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-navy">
              Our Team
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              One point of contact. Direct access to the person doing the work.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="grid md:grid-cols-[240px_1fr] gap-10 items-start">
              <div className="mx-auto md:mx-0">
                <div className="relative w-48 md:w-full aspect-square rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/tyrus-burton.png"
                    alt="Tyrus L. Burton Jr."
                    fill
                    sizes="240px"
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
                  Managing Director
                </p>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Tyrus leads every engagement at Magnolia, across bookkeeping, fractional CFO, and M&amp;A advisory. His focus is fractional CFO and M&amp;A work.
                  </p>
                  <p>
                    His background is in audit and financial analysis, testing high-risk accounts and supporting regulatory compliance. That discipline shapes how he approaches every client&apos;s books and every deal.
                  </p>
                  <p>
                    When you work with Magnolia, you work directly with Tyrus. No account handoffs, no junior staff.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
