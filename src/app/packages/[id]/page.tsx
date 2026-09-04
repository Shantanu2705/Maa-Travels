import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { openWhatsApp, PREDEFINED_MESSAGES } from "@/lib/whatsapp";
import CTA from "@/components/sections/CTA";

import { tours } from "@/lib/data";

export default function PackageDetails({ params }: { params: { id: string } }) {
  const packageDetails = tours.find((t) => t.id === params.id);

  if (!packageDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Package not found</h1>
          <Link href="/" className="text-brand-gold hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <Link href="/#tours" className="inline-flex items-center text-brand-navy hover:text-brand-gold mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Packages
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={packageDetails.image}
              alt={packageDetails.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="inline-block bg-brand-light text-brand-navy font-semibold px-4 py-2 rounded-full mb-6 w-fit">
              {packageDetails.duration}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              {packageDetails.title} Tour
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {packageDetails.description}
            </p>

            <h3 className="text-2xl font-bold text-brand-navy mb-4">Tour Highlights</h3>
            <ul className="space-y-3 mb-10">
              {packageDetails.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mr-3" />
                  {highlight}
                </li>
              ))}
            </ul>

            <button
              onClick={() => openWhatsApp(`${PREDEFINED_MESSAGES.tour} I am interested in the ${packageDetails.title} package.`)}
              className="bg-brand-gold hover:bg-brand-yellow text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Book This Package
            </button>
          </div>
        </div>
      </div>
      
      <CTA />
    </main>
  );
}
