import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { openWhatsApp, PREDEFINED_MESSAGES } from "@/lib/whatsapp";
import CTA from "@/components/sections/CTA";
import { cars } from "@/lib/data";

export default function CarDetails({ params }: { params: { id: string } }) {
  const carDetails = cars.find((c) => c.id === params.id);

  if (!carDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Car not found</h1>
          <Link href="/#cars" className="text-brand-gold hover:underline">
            Return to Cars
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <Link href="/#cars" className="inline-flex items-center text-brand-navy hover:text-brand-gold mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Cars
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={carDetails.image}
              alt={carDetails.category}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              {carDetails.category}
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {carDetails.description}
            </p>

            <div className="mb-8 p-6 bg-brand-light rounded-2xl">
              <h3 className="text-xl font-semibold text-brand-navy mb-2">Ideal For</h3>
              <p className="text-gray-700">{carDetails.idealFor}</p>
            </div>

            <h3 className="text-2xl font-bold text-brand-navy mb-4">Key Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {carDetails.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => openWhatsApp(`${PREDEFINED_MESSAGES.car} I am interested in booking the ${carDetails.category}.`)}
              className="bg-brand-gold hover:bg-brand-yellow text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors duration-300 w-full sm:w-auto text-center shadow-md hover:shadow-lg"
            >
              Book This Car
            </button>
          </div>
        </div>
      </div>
      
      <CTA />
    </main>
  );
}
