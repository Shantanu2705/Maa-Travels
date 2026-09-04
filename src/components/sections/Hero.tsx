"use client";

import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { openWhatsApp, PREDEFINED_MESSAGES } from "@/lib/whatsapp";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Beautiful travel landscape"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-brand-navy/60 bg-gradient-to-t from-brand-navy/80 to-transparent mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 text-sm font-medium tracking-wider mb-6 uppercase">
              Premium Travel Services
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Your Journey Begins With <span className="text-brand-gold">Maa Travels</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-light drop-shadow-md">
              Car bookings, comfortable stays and memorable tour experiences &mdash; all arranged with care.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => openWhatsApp(PREDEFINED_MESSAGES.general)}
              className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold-light text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-brand-gold/50 flex items-center justify-center gap-2 group"
            >
              <span>Book Your Trip</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => openWhatsApp(PREDEFINED_MESSAGES.general)}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
