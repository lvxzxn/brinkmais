import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "../utils/whatsapp";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", delay: 1 }}
      href={generateWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-cartoon hover:shadow-cartoon-hover hover:bg-[#128C7E] transition-all group flex items-center gap-0 hover:gap-3 overflow-hidden border-2 border-text"
    >
      <MessageCircle size={32} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-display font-bold text-lg">
        Fale Conosco
      </span>

      <span className="absolute top-0 right-0 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
      </span>
    </motion.a>
  );
};

export { FloatingWhatsApp };
