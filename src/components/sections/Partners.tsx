"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";

const PARTNERS = [
  { name: "Air India", src: "/partners/air_india.svg" },
  { name: "Indigo", src: "/partners/indigo.svg" },
  { name: "SpiceJet", src: "/partners/spicejet.svg" },
  { name: "IRCTC", src: "/partners/irctc.svg" },
];

export default function Partners() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Booking Partners"
          subtitle="Trusted travel providers we work with"
        />
        
        <div className="mt-12 flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70 hover:opacity-100 transition-opacity duration-300">
          {PARTNERS.map((partner) => (
            <div key={partner.name} className="relative h-16 w-32 md:h-20 md:w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={partner.src}
                alt={`${partner.name} Logo`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
