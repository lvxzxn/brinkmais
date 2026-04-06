export const WHATSAPP_NUMBER = "5582993351212";

export const generateWhatsAppLink = (toyName?: string) => {
  const message = `Olá, tudo bem? Vim pelo site e gostaria de um orçamento!🎉
Nome: 
Tipo do evento: 
Data do evento: 
Horário: 
Endereço: 
Brinquedos desejados: ${toyName ? toyName : ""}`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};