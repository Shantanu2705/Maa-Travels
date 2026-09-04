"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { openWhatsApp, PREDEFINED_MESSAGES } from "@/lib/whatsapp";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Cars", href: "#cars" },
  { name: "Hotels", href: "#hotels" },
  { name: "Tours", href: "#tours" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-white/80 backdrop-blur-sm py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="#home" className="relative z-50 flex items-center gap-2">
            <div className="relative h-12 w-40 md:h-14 md:w-48 overflow-hidden rounded">
              <Image
                src="/logo/logo.jpeg"
                alt="Maa Travels Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-brand-navy font-medium hover:text-brand-gold transition-colors text-sm uppercase tracking-wider"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => openWhatsApp(PREDEFINED_MESSAGES.general)}
              className="bg-brand-gold hover:bg-brand-gold-light text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 text-brand-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out lg:hidden flex flex-col justify-center items-center gap-8",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="flex flex-col items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-navy text-2xl font-semibold hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            setIsMobileMenuOpen(false);
            openWhatsApp(PREDEFINED_MESSAGES.general);
          }}
          className="bg-brand-gold text-white px-8 py-3 rounded-full font-medium text-lg mt-4 shadow-lg flex items-center gap-2"
        >
          <PhoneCall className="w-5 h-5" />
          <span>Book Now</span>
        </button>
      </div>
    </header>
  );
}
