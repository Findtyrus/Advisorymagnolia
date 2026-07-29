"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Investment", href: "/investment" },
    { name: "About", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-serif font-bold text-[#1B3022] group-hover:text-[#631D11] transition-colors">
              Magnolia Advisory Group
            </span>
          </Link>

          <div className="hidden lg:flex items-center" style={{ gap: '2.5rem' }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#1B3022] transition-colors font-medium text-base relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#1B3022] after:transition-all hover:after:w-full whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#1B3022] text-white px-7 py-3.5 rounded-xl font-semibold transition-all hover:bg-[#0f1e14] hover:shadow-lg hover:scale-105 whitespace-nowrap"
            >
              Book a Consultation
            </Link>
          </div>

          <button
            className="lg:hidden text-gray-700 hover:text-[#1B3022] transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 bg-white border-t border-gray-100" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-[#1B3022] hover:bg-gray-50 transition-all font-medium py-3 px-6 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block bg-[#1B3022] text-white px-6 py-3.5 rounded-xl text-center font-semibold transition-all hover:bg-[#0f1e14] mx-4 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Consultation
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
