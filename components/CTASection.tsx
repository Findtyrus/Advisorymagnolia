import Link from "next/link";
import FadeIn from "./FadeIn";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
}

const CTASection = ({
  title = "Ready for clean books and a clear financial picture?",
  description = "Schedule a free consultation to find the right fit: bookkeeping, fractional CFO, or M&A advisory.",
  primaryButtonText = "Schedule a Free Consultation",
  primaryButtonLink = "/contact",
}: CTASectionProps) => {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-blue-100/80 text-lg mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <Link
            href={primaryButtonLink}
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-primary-dark hover:shadow-xl"
          >
            {primaryButtonText}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTASection;
