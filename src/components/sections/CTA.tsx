"use client";

import Image from "next/image";
import { MessageCircle, PlaneTakeoff } from "lucide-react";
import { openWhatsApp, PREDEFINED_MESSAGES } from "@/lib/whatsapp";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-bg.jpg"
          alt="Ready for your next journey"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready For Your <br className="hidden md:block" /> Next Journey?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-xl leading-relaxed">
              Tell us where you want to go. Maa Travels will help you plan the journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openWhatsApp(PREDEFINED_MESSAGES.general)}
                className="bg-brand-gold hover:bg-brand-gold-light text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
              >
                <PlaneTakeoff className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                <span>Plan My Trip</span>
              </button>
              
              <button
                onClick={() => openWhatsApp(PREDEFINED_MESSAGES.general)}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Maa Travels</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
