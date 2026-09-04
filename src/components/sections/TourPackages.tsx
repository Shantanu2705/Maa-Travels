"use client";

import Image from "next/image";
import { openWhatsApp, PREDEFINED_MESSAGES } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const tours = [
  {
    title: "Mountain Escape",
    description: "Experience the serene beauty of the mountains and refreshing misty mornings.",
    image: "/images/tour-1.jpg",
  },
  {
    title: "Nature Getaway",
    description: "Relax in lush green surroundings and reconnect with nature.",
    image: "/images/tour-2.jpg",
  },
  {
    title: "Weekend Escape",
    description: "Quick and refreshing getaways to recharge your energy.",
    image: "/images/tour-3.jpg",
  },
];

export default function TourPackages() {
  return (
    <section id="tours" className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Explore Beautiful Destinations"
          subtitle="Let Maa Travels help you turn your travel plans into memorable experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => openWhatsApp(PREDEFINED_MESSAGES.tour)}
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{tour.title}</h3>
                  <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {tour.description}
                  </p>
                  <div className="flex items-center text-brand-gold font-medium">
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
