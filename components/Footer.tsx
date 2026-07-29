import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1B3022] text-[#FDFCF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-[#FDFCF8]">
              Magnolia Advisory Group
            </h3>
            <p className="text-gray-300 text-sm">
              Financial clarity. Structured growth.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#FDFCF8]">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/accounting"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Accounting & Finance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/growth"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Business Development
                </Link>
              </li>
              <li>
                <Link
                  href="/bundle"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Flagship Bundle
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#FDFCF8]">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/founders"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Meet the Founders
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/investment"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Investment & FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#FDFCF8]">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={16} />
                <a
                  href="mailto:contact@magnoliaadvisory.com"
                  className="hover:text-white transition-colors"
                >
                  contact@magnoliaadvisory.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Magnolia Advisory Group. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
