import Link from "next/link";
import FadeIn from "./FadeIn";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
}

const CTASection = ({
  title = "Ready to bring structure to your business?",
  description = "Schedule a free consultation to discuss your needs and explore how we can help.",
  primaryButtonText = "Schedule a Free Consultation",
  primaryButtonLink = "/contact",
}: CTASectionProps) => {
  return (
    <section className="bg-[#1B3022] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#FDFCF8] mb-6">
            {title}
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <Link
            href={primaryButtonLink}
            className="inline-block bg-[#FDFCF8] text-[#1B3022] px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-gray-100"
          >
            {primaryButtonText}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTASection;
