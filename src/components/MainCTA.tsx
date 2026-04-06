import { motion } from "motion/react";
import {
  MessageCircle,
} from "lucide-react";
import { generateWhatsAppLink } from "../utils/whatsapp";

const MainCTA = () => {
  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute left-10 top-10 w-24 h-24 text-white animate-spin-slow"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
        </svg>
        <svg
          className="absolute right-20 bottom-10 w-32 h-32 text-white animate-bounce-slight"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight"
        >
          Garanta a diversão da sua festa em Maceió!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/90 mb-10 font-medium"
        >
          Não deixe para a última hora. Nossos brinquedos mais populares esgotam
          rápido.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-display font-extrabold text-2xl py-5 px-10 rounded-full shadow-cartoon hover:shadow-cartoon-hover transition-all border-4 border-text"
          >
            <MessageCircle size={28} className="text-white" />
            Falar no WhatsApp agora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export { MainCTA };
