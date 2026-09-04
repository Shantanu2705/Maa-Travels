"use client";

import Image from "next/image";
import { Car, Hotel, Map } from "lucide-react";
import { openWhatsApp, PREDEFINED_MESSAGES } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const services = [
  {
    title: "Car Booking",
    description: "Comfortable and reliable cars for local travel, sightseeing and outstation journeys.",
    icon: Car,
    image: "/images/car-suv.jpg",
    cta: "Book a Car",
    message: PREDEFINED_MESSAGES.car,
  },
  {
    title: "Hotel Booking",
    description: "Find comfortable stays for your journey with convenient hotel booking assistance.",
    icon: Hotel,
    image: "/images/hotel-1.jpg",
    cta: "Book a Hotel",
    message: PREDEFINED_MESSAGES.hotel,
  },
  {
    title: "Tour Packages",
    description: "Explore carefully planned destinations and travel experiences with Maa Travels.",
    icon: Map,
    image: "/images/tour-1.jpg",
    cta: "Explore Tours",
    message: PREDEFINED_MESSAGES.tour,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Travel Services"
          subtitle="Everything you need for a comfortable and memorable journey."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="bg-brand-gold p-2 rounded-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={() => openWhatsApp(service.message)}
                  className="w-full bg-brand-navy hover:bg-brand-gold text-white font-medium py-3 rounded-xl transition-colors duration-300"
                >
                  {service.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
