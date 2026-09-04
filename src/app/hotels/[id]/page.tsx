import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, MapPin, Sparkles } from "lucide-react";
import { getWhatsAppUrl, PREDEFINED_MESSAGES } from "@/lib/whatsapp";
import CTA from "@/components/sections/CTA";
import { hotels } from "@/lib/data";

export default async function HotelDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const hotelDetails = hotels.find((h) => h.id === resolvedParams.id);

  if (!hotelDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Hotel not found</h1>
          <Link href="/#hotels" className="text-brand-gold hover:underline">
            Return to Hotels
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <Link href="/#hotels" className="inline-flex items-center text-brand-navy hover:text-brand-gold mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Hotels
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={hotelDetails.image}
              alt={hotelDetails.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-brand-navy font-bold py-2 px-4 rounded-xl flex items-center shadow-lg">
              <Star className="w-5 h-5 text-brand-gold mr-1 fill-brand-gold" />
              <span>{hotelDetails.rating}</span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center text-gray-500 mb-4">
              <MapPin className="w-5 h-5 mr-2 text-brand-gold" />
              <span className="text-lg">{hotelDetails.location}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              {hotelDetails.title}
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              {hotelDetails.description}
            </p>

            <div className="bg-brand-navy text-white rounded-3xl p-8 mb-10 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Sparkles className="w-6 h-6 text-brand-gold mr-3" />
                Premium Amenities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {hotelDetails.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 flex-shrink-0" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={getWhatsAppUrl(`${PREDEFINED_MESSAGES.hotel} I am interested in booking the ${hotelDetails.title} hotel.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-gold hover:bg-brand-yellow text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors duration-300 w-full sm:w-auto text-center shadow-md hover:shadow-lg"
            >
              Book This Hotel
            </a>
          </div>
        </div>
      </div>
      
      <CTA />
    </main>
  );
}
