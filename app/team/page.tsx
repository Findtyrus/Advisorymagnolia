import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { Mail, Shield, Users, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Team",
  description: "Meet the team at Magnolia Advisory Group, led by Managing Director Tyrus L. Burton Jr.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-navy">
              Meet the Team
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Led by a managing director who oversees every engagement personally.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
                    href="mailto:tyrus@advisorymagnolia.com"
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
                    Tyrus founded Magnolia and oversees every engagement, across bookkeeping, fractional CFO, and M&amp;A advisory. His personal focus is fractional CFO and M&amp;A work.
                  </p>
                  <p>
                    His background is in audit and financial analysis, testing high-risk accounts and supporting regulatory compliance. That discipline shapes how he approaches every client&apos;s books and every deal.
                  </p>
                  <p>
                    Every client relationship starts with Tyrus, and he stays involved through the life of the engagement.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 text-navy">
              A Growing Team
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Magnolia is built to grow. As our client base expands, so will our team of bookkeepers and analysts, brought on to maintain the same standard of quality and responsiveness clients expect from day one.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
                  <Shield className="text-primary" size={26} />
                </div>
                <h3 className="font-bold text-navy mb-1">Senior Oversight</h3>
                <p className="text-gray-600 text-sm">
                  Every engagement is reviewed and led by Tyrus.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
                  <Users className="text-primary" size={26} />
                </div>
                <h3 className="font-bold text-navy mb-1">Built to Scale</h3>
                <p className="text-gray-600 text-sm">
                  Growing deliberately, without sacrificing quality.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-4">
                  <TrendingUp className="text-primary" size={26} />
                </div>
                <h3 className="font-bold text-navy mb-1">Consistent Standards</h3>
                <p className="text-gray-600 text-sm">
                  Same process and reporting quality as the team grows.
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
