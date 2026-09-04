"use client";

import { Phone, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, DISPLAY_NUMBER } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Let's Plan Your Journey"
          subtitle="Reach out to us for any travel assistance."
        />

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden mt-12 flex flex-col md:flex-row">
          
          {/* Left Side: Contact Details */}
          <div className="w-full md:w-1/2 bg-brand-navy p-10 lg:p-14 text-white flex flex-col justify-center relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            
            <h3 className="text-3xl font-bold mb-8 relative z-10">Get In Touch</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <MapPin className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-brand-gold font-medium mb-1">Our Office</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Maa Travels, <br />
                    Bimal Sinha Sarani, <br />
                    Opp. Upkar Club, Hakimpara, <br />
                    Near Gouri Shankar Market, <br />
                    Siliguri, West Bengal, India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full shrink-0">
                  <Phone className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="text-brand-gold font-medium mb-1">Phone & WhatsApp</h4>
                  <p className="text-gray-300 text-lg">
                    +91 {DISPLAY_NUMBER}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: CTA actions */}
          <div className="w-full md:w-1/2 p-10 lg:p-14 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">We are here to help</h3>
            <p className="text-gray-600 mb-10 max-w-sm">
              Whether you need a car, a hotel room, or a complete tour package, contact us today for the best travel experience.
            </p>

            <div className="flex flex-col w-full gap-4 max-w-xs mx-auto">
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20b858] text-white py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
