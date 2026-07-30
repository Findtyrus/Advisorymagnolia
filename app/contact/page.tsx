import FadeIn from "@/components/FadeIn";
import { Mail, Phone, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Schedule a free consultation to discuss bookkeeping, fractional CFO, or M&A advisory for your business.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-navy">
              Let&apos;s Talk
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Schedule a free consultation to discuss your business.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-navy">
                  Schedule a Consultation
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  A free 30-minute call to discuss your business and find the right fit: bookkeeping, fractional CFO, or M&amp;A advisory.
                </p>

                <div className="bg-navy rounded-2xl p-8">
                  <div className="mb-6 flex justify-center">
                    <Calendar className="text-white" size={44} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    Book Your Free Consultation
                  </h3>
                  <p className="text-blue-100/80 text-center mb-6">
                    No pressure, no obligation.
                  </p>
                  <a
                    href="https://calendly.com/tyrus-burton7/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary text-white py-4 rounded-lg font-semibold text-center text-lg transition-all hover:bg-primary-dark"
                  >
                    Schedule on Calendly
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-navy">
                  Other Ways to Reach Us
                </h2>

                <div className="space-y-4">
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                    <div className="mb-3">
                      <Mail className="text-primary" size={26} />
                    </div>
                    <h3 className="text-lg font-semibold mb-1 text-navy">Email</h3>
                    <a
                      href="mailto:tyrus@advisorymagnolia.com"
                      className="text-primary font-semibold hover:underline"
                    >
                      tyrus@advisorymagnolia.com
                    </a>
                  </div>

                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                    <div className="mb-3">
                      <Phone className="text-primary" size={26} />
                    </div>
                    <h3 className="text-lg font-semibold mb-1 text-navy">Phone</h3>
                    <a
                      href="tel:+17377044959"
                      className="text-primary font-semibold hover:underline"
                    >
                      (737) 704-4959
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold text-center mb-8 text-navy">
              What Happens Next?
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-3">01</div>
                <h3 className="font-semibold mb-2 text-navy">Discovery Call</h3>
                <p className="text-gray-600 text-sm">
                  30 minutes to understand your business.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-3">02</div>
                <h3 className="font-semibold mb-2 text-navy">Custom Proposal</h3>
                <p className="text-gray-600 text-sm">
                  Clear scope, pricing, and timeline.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-3">03</div>
                <h3 className="font-semibold mb-2 text-navy">Get Started</h3>
                <p className="text-gray-600 text-sm">
                  We onboard and bring structure to your books.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
