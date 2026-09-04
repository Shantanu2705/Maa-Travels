"use client";

import Image from "next/image";
import { openWhatsApp, PREDEFINED_MESSAGES } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

import Link from "next/link";
import { cars } from "@/lib/data";

export default function CarBooking() {
  return (
    <section id="cars" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Travel Comfortably"
          subtitle="Choose a comfortable ride for your next journey."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {cars.map((car, index) => (
            <motion.div
              key={car.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-light rounded-2xl overflow-hidden border border-gray-100 group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.category}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{car.category}</h3>
                <p className="text-gray-600 mb-6 min-h-[48px]">
                  {car.description}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
                  <Link
                    href={`/cars/${car.id}`}
                    className="w-full sm:w-auto inline-block border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-medium px-6 py-2 rounded-full text-center transition-colors duration-300"
                  >
                    View Cars
                  </Link>
                  <button
                    onClick={() => openWhatsApp(PREDEFINED_MESSAGES.car)}
                    className="w-full sm:w-auto inline-block border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-medium px-6 py-2 rounded-full transition-colors duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
