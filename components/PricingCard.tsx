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
        isPopular ? "border-[#1B3022] shadow-lg" : "border-gray-100"
      } shadow-sm p-8 transition-all hover:shadow-md`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#1B3022] text-[#FDFCF8] px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-serif font-bold mb-2">{title}</h3>
        <div className="text-4xl font-bold text-[#1B3022] mb-2">{price}</div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="text-[#1B3022] flex-shrink-0 mt-1" size={18} />
            <span className="text-gray-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaLink}
        className={`block text-center w-full py-3 rounded-lg font-semibold transition-all ${
          isPopular
            ? "bg-[#1B3022] text-[#FDFCF8] hover:opacity-90"
            : "bg-gray-100 text-[#1B3022] hover:bg-gray-200"
        }`}
      >
        {ctaText}
      </Link>
    </div>
  );
};

export default PricingCard;
