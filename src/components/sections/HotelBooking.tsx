"use client";

import Image from "next/image";
import { openWhatsApp, PREDEFINED_MESSAGES } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const hotels = [
  {
    image: "/images/hotel-1.jpg",
    description: "Relax in beautifully designed rooms after a long day of travel.",
  },
  {
    image: "/images/hotel-2.jpg",
    description: "Enjoy premium resort-style accommodation with great views.",
  },
  {
    image: "/images/hotel-3.jpg",
    description: "Experience elegant dining and world-class hospitality.",
  },
];

export default function HotelBooking() {
  return (
    <section id="hotels" className="py-24 bg-brand-navy text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 relative inline-block">
            Comfortable Stays, Wherever You Go
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-brand-gold rounded-full"></span>
          </h2>
          <p className="mt-6 text-gray-300 max-w-2xl text-lg mx-auto leading-relaxed">
            Make your journey even better with comfortable accommodation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {hotels.map((hotel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={hotel.image}
                  alt="Comfortable Stay"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-brand-gold text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                  Comfortable Stay
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-6 line-clamp-2">
                  {hotel.description}
                </p>
                <button
                  onClick={() => openWhatsApp(PREDEFINED_MESSAGES.hotel)}
                  className="w-full bg-white text-brand-navy hover:bg-brand-gold hover:text-white font-semibold py-3 rounded-xl transition-colors duration-300"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
