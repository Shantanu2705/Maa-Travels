import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, MessageCircle, Mail } from "lucide-react";
import { WHATSAPP_NUMBER, DISPLAY_NUMBER } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="bg-white p-2 rounded inline-block">
              <div className="relative h-12 w-40">
                <Image
                  src="/logo/logo.jpeg"
                  alt="Maa Travels Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Maa Travels — Making every journey more comfortable and memorable. Your trusted partner for car bookings, hotel stays, and tour packages.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-brand-gold">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#home" className="text-gray-300 hover:text-brand-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-brand-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-brand-gold transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-brand-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-brand-gold">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#cars" className="text-gray-300 hover:text-brand-gold transition-colors">Car Booking</Link>
              </li>
              <li>
                <Link href="#hotels" className="text-gray-300 hover:text-brand-gold transition-colors">Hotel Booking</Link>
              </li>
              <li>
                <Link href="#tours" className="text-gray-300 hover:text-brand-gold transition-colors">Tour Packages</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-brand-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                <span>
                  Bimal Sinha Sarani, <br />
                  Opp. Upkar Club, Hakimpara, <br />
                  Near Gouri Shankar Market, <br />
                  Siliguri, West Bengal, India.
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:text-brand-gold transition-colors">
                  +91 {DISPLAY_NUMBER}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <MessageCircle className="w-5 h-5 text-brand-gold shrink-0" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>© {currentYear} Maa Travels. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed for a premium travel experience.</p>
        </div>
      </div>
    </footer>
  );
}
