import FadeIn from "@/components/FadeIn";
import { Mail, Phone, Calendar, MessageSquare } from "lucide-react";
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
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready for clean books, CFO-level strategy, or M&amp;A support? Schedule a free consultation to discuss your business.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold mb-8 text-navy">
                  Schedule a Consultation
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  The best way to get started is a free 30-minute consultation. We&apos;ll discuss your current situation, identify your needs, and outline how we can help — bookkeeping, fractional CFO, or M&amp;A advisory.
                </p>

                <div className="bg-navy rounded-2xl p-8 mb-8">
                  <div className="mb-6 flex justify-center">
                    <Calendar className="text-white" size={44} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    Book Your Free Consultation
                  </h3>
                  <p className="text-blue-100/80 text-center mb-6">
                    Choose a time that works for you. No pressure, no obligation.
                  </p>
                  <a
                    href="https://calendly.com/magnoliaadvisory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary text-white py-4 rounded-lg font-semibold text-center text-lg transition-all hover:bg-primary-dark"
                  >
                    Schedule on Calendly
                  </a>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-surface rounded-lg flex items-center justify-center">
                      <MessageSquare className="text-primary" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-navy">What We&apos;ll Discuss</h4>
                      <p className="text-gray-600">
                        Your current financial systems, growth goals, and challenges — plus which service is the right fit.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-surface rounded-lg flex items-center justify-center">
                      <Calendar className="text-primary" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-navy">No Pressure</h4>
                      <p className="text-gray-600">
                        This is a consultation, not a sales call. We&apos;ll tell you honestly whether we&apos;re the right fit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-3xl font-bold mb-8 text-navy">
                  Other Ways to Reach Us
                </h2>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                    <div className="mb-4">
                      <Mail className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-navy">Email</h3>
                    <p className="text-gray-600 mb-4">
                      Prefer email? Send us a message and we&apos;ll respond within 24 hours.
                    </p>
                    <a
                      href="mailto:contact@magnoliaadvisory.com"
                      className="text-primary font-semibold hover:underline"
                    >
                      contact@magnoliaadvisory.com
                    </a>
                  </div>

                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                    <div className="mb-4">
                      <Phone className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-navy">Phone</h3>
                    <p className="text-gray-600 mb-4">
                      Call us directly during business hours (M-F, 9am-5pm EST).
                    </p>
                    <a
                      href="tel:+15551234567"
                      className="text-primary font-semibold hover:underline"
                    >
                      (555) 123-4567
                    </a>
                  </div>

                  <div className="bg-surface rounded-2xl border border-gray-100 p-8">
                    <h3 className="text-xl font-semibold mb-4 text-navy">Direct Partner Contact</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium mb-1">Tyrus L. Burton Jr.</p>
                        <p className="text-sm text-gray-600 mb-1">Bookkeeping &amp; Accounting</p>
                        <a
                          href="mailto:tyrus@magnoliaadvisory.com"
                          className="text-primary text-sm hover:underline"
                        >
                          tyrus@magnoliaadvisory.com
                        </a>
                      </div>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="font-medium mb-1">Christian Camacho</p>
                        <p className="text-sm text-gray-600 mb-1">Fractional CFO &amp; M&amp;A Advisory</p>
                        <a
                          href="mailto:christian@magnoliaadvisory.com"
                          className="text-primary text-sm hover:underline"
                        >
                          christian@magnoliaadvisory.com
                        </a>
                      </div>
                    </div>
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
            <h2 className="text-3xl font-bold text-center mb-8 text-navy">
              What Happens Next?
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-3">01</div>
                <h3 className="font-semibold mb-2 text-navy">Discovery Call</h3>
                <p className="text-gray-600 text-sm">
                  30-minute consultation to understand your needs and challenges.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-3">02</div>
                <h3 className="font-semibold mb-2 text-navy">Custom Proposal</h3>
                <p className="text-gray-600 text-sm">
                  We&apos;ll outline services, pricing, and timeline specific to your situation.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-3">03</div>
                <h3 className="font-semibold mb-2 text-navy">Get Started</h3>
                <p className="text-gray-600 text-sm">
                  Once you approve, we begin onboarding and bring structure to your business.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
