import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maatravelssiliguri.com"),
  title: "Maa Travels | Car Booking, Hotel Booking & Tour Packages in Siliguri",
  description: "Maa Travels offers car booking, hotel booking and tour package assistance in Siliguri, West Bengal. Plan your next journey with Maa Travels.",
  keywords: ["Travel Agency", "Siliguri", "Car Booking", "Hotel Booking", "Tour Packages", "West Bengal", "Maa Travels"],
  authors: [{ name: "Maa Travels" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://maatravelssiliguri.com",
    title: "Maa Travels | Premium Travel Services in Siliguri",
    description: "Travel comfortably. Explore freely with Maa Travels. Car bookings, hotel stays, and tour packages.",
    siteName: "Maa Travels",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Maa Travels",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1E36",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-white text-slate-900 overflow-x-hidden`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
