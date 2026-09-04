"use client";

import { MessageCircle, Phone } from "lucide-react";
import { openWhatsApp, PREDEFINED_MESSAGES, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 pointer-events-none px-4 md:px-6 flex justify-between items-end">
      {/* Call Button - Bottom Left */}
      <a
        href={`tel:+${WHATSAPP_NUMBER}`}
        className="pointer-events-auto bg-brand-navy text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 group relative flex items-center justify-center"
        aria-label="Call Maa Travels"
        title="Call Maa Travels"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute left-full ml-3 bg-brand-navy text-white text-sm font-medium py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          Call Maa Travels
        </span>
      </a>

      {/* WhatsApp Button - Bottom Right */}
      <button
        onClick={() => openWhatsApp(PREDEFINED_MESSAGES.general)}
        className="pointer-events-auto bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 group relative flex items-center justify-center"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-3 bg-[#25D366] text-white text-sm font-medium py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
}
