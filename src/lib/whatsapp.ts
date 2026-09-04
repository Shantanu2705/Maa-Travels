export const WHATSAPP_NUMBER = "919641316494";
export const DISPLAY_NUMBER = "9641316494";

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string) {
  window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

export const PREDEFINED_MESSAGES = {
  general: "Hello Maa Travels, I would like to plan a trip. Please help me with the available options.",
  car: "Hello Maa Travels, I am interested in booking a car. Please share the available options and pricing.",
  hotel: "Hello Maa Travels, I am interested in hotel booking. Please share the available hotel options and pricing.",
  tour: "Hello Maa Travels, I am interested in your tour packages. Please share the available packages and details.",
};
