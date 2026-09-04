"use client";

import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Comfortable Travel",
    description: "Travel with comfort and convenience.",
  },
  {
    title: "Reliable Service",
    description: "We focus on making your journey simple and stress-free.",
  },
  {
    title: "Personalized Assistance",
    description: "Get travel assistance based on your requirements.",
  },
  {
    title: "Easy Booking",
    description: "Book through WhatsApp with a simple conversation.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Why Travel With Maa Travels?"
          subtitle="We are committed to providing the best travel experience for you."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-light p-8 rounded-2xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
