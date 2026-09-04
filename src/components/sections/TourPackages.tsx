"use client";

import Image from "next/image";
import { openWhatsApp, PREDEFINED_MESSAGES } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { tours } from "@/lib/data";

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
                  <div className="flex items-center justify-between mt-4">
                    <Link 
                      href={`/packages/${tour.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="text-white text-sm font-medium hover:text-brand-gold transition-colors duration-300 border border-white hover:border-brand-gold px-4 py-1.5 rounded-full"
                    >
                      View Package
                    </Link>
                    <button 
                      className="flex items-center text-brand-gold font-medium hover:text-white transition-colors duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        openWhatsApp(PREDEFINED_MESSAGES.tour);
                      }}
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
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
