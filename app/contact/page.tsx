import FadeIn from "@/components/FadeIn";
import { Mail, Phone, Calendar, MessageSquare } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Magnolia Advisory Group",
  description: "Schedule a consultation to discuss your financial systems and growth strategy needs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FDFCF8] to-white">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-[#1B3022]">
              Let's Talk
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Ready to bring structure to your business? Schedule a free consultation to discuss your needs.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8 text-[#1B3022]">
                  Schedule a Consultation
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  The best way to get started is with a free 30-minute consultation. We'll discuss your current situation, identify your needs, and outline how we can help.
                </p>

                <div className="bg-[#1B3022] rounded-2xl p-8 mb-8">
                  <div className="mb-6 flex justify-center">
                    <Calendar className="text-[#FDFCF8]" size={48} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#FDFCF8] mb-4 text-center">
                    Book Your Free Consultation
                  </h3>
                  <p className="text-gray-300 text-center mb-6">
                    Choose a time that works for you. No pressure, no obligation.
                  </p>
                  <a
                    href="https://calendly.com/magnoliaadvisory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#FDFCF8] text-[#1B3022] py-4 rounded-lg font-semibold text-center text-lg transition-all hover:bg-gray-100"
                  >
                    Schedule on Calendly
                  </a>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#FDFCF8] rounded-lg flex items-center justify-center">
                      <MessageSquare className="text-[#1B3022]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">What We'll Discuss</h4>
                      <p className="text-gray-600">
                        Your current financial systems, revenue processes, and growth challenges. We'll outline potential solutions and next steps.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#FDFCF8] rounded-lg flex items-center justify-center">
                      <Calendar className="text-[#1B3022]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">No Pressure</h4>
                      <p className="text-gray-600">
                        This is a consultation, not a sales call. We'll provide honest feedback whether we're the right fit or not.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8 text-[#1B3022]">
                  Other Ways to Reach Us
                </h2>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                    <div className="mb-4">
                      <Mail className="text-[#1B3022]" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-600 mb-4">
                      Prefer email? Send us a message and we'll respond within 24 hours.
                    </p>
                    <a
                      href="mailto:contact@magnoliaadvisory.com"
                      className="text-[#1B3022] font-semibold hover:underline"
                    >
                      contact@magnoliaadvisory.com
                    </a>
                  </div>

                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                    <div className="mb-4">
                      <Phone className="text-[#1B3022]" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600 mb-4">
                      Call us directly during business hours (M-F, 9am-5pm EST).
                    </p>
                    <a
                      href="tel:+15551234567"
                      className="text-[#1B3022] font-semibold hover:underline"
                    >
                      (555) 123-4567
                    </a>
                  </div>

                  <div className="bg-[#FDFCF8] rounded-2xl border border-gray-100 p-8">
                    <h3 className="text-xl font-semibold mb-4">Direct Partner Contact</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium mb-1">Tyrus L. Burton Jr.</p>
                        <p className="text-sm text-gray-600 mb-1">Accounting & Finance</p>
                        <a
                          href="mailto:tyrus@magnoliaadvisory.com"
                          className="text-[#1B3022] text-sm hover:underline"
                        >
                          tyrus@magnoliaadvisory.com
                        </a>
                      </div>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="font-medium mb-1">Christian Camacho</p>
                        <p className="text-sm text-gray-600 mb-1">Business Development</p>
                        <a
                          href="mailto:christian@magnoliaadvisory.com"
                          className="text-[#1B3022] text-sm hover:underline"
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFCF8]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-serif font-bold text-center mb-8 text-[#1B3022]">
              What Happens Next?
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-[#1B3022] mb-3">01</div>
                <h3 className="font-semibold mb-2">Discovery Call</h3>
                <p className="text-gray-600 text-sm">
                  30-minute consultation to understand your needs and challenges.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-[#1B3022] mb-3">02</div>
                <h3 className="font-semibold mb-2">Custom Proposal</h3>
                <p className="text-gray-600 text-sm">
                  We'll outline services, pricing, and timeline specific to your situation.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
                <div className="text-3xl font-bold text-[#1B3022] mb-3">03</div>
                <h3 className="font-semibold mb-2">Get Started</h3>
                <p className="text-gray-600 text-sm">
                  Once you approve, we begin onboarding and start bringing structure to your business.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
