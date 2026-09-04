import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import CarBooking from "@/components/sections/CarBooking";
import HotelBooking from "@/components/sections/HotelBooking";
import TourPackages from "@/components/sections/TourPackages";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CarBooking />
      <HotelBooking />
      <TourPackages />
      <WhyChooseUs />
      <CTA />
      <Contact />
    </>
  );
}
