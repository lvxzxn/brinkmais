export const WHATSAPP_NUMBER = "5582993351212";

export const generateWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};