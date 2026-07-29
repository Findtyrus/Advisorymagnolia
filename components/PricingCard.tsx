import { Check } from "lucide-react";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  ctaText = "Get Started",
  ctaLink = "/contact",
}: PricingCardProps) => {
  return (
    <div
      className={`relative bg-white rounded-2xl border ${
        isPopular ? "border-primary shadow-lg" : "border-gray-200"
      } shadow-sm p-8 transition-all hover:shadow-md`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="text-4xl font-bold text-navy mb-2">{price}</div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="text-primary flex-shrink-0 mt-1" size={18} />
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaLink}
        className={`block text-center w-full py-3 rounded-lg font-semibold transition-all ${
          isPopular
            ? "bg-primary text-white hover:bg-primary-dark"
            : "bg-surface text-navy hover:bg-blue-100"
        }`}
      >
        {ctaText}
      </Link>
    </div>
  );
};

export default PricingCard;
