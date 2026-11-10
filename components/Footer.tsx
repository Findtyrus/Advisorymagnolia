import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo theme="dark" />
            <p className="text-blue-100/70 text-sm">
              Bookkeeping. Fractional CFO.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/bookkeeping"
                  className="text-blue-100/70 hover:text-white transition-colors"
                >
                  Bookkeeping
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cfo"
                  className="text-blue-100/70 hover:text-white transition-colors"
                >
                  Fractional CFO
                </Link>
              </li>
              <li>
                <Link
                  href="/bundle"
                  className="text-blue-100/70 hover:text-white transition-colors"
                >
                  Bookkeeping + CFO Bundle
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-blue-100/70 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-blue-100/70 hover:text-white transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-blue-100/70 hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-blue-100/70 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-blue-100/70">
                <Mail size={16} />
                <a
                  href="mailto:contact@advisorymagnolia.com"
                  className="hover:text-white transition-colors"
                >
                  contact@advisorymagnolia.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-blue-100/70">
                <Phone size={16} />
                <a
                  href="tel:+17377044959"
                  className="hover:text-white transition-colors"
                >
                  (737) 704-4959
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-blue-100/50">
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
