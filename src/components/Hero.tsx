import { motion } from "motion/react";
import {
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { generateWhatsAppLink } from "../utils/whatsapp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 pb-48">
      <div className="absolute inset-0 w-full h-full z-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
      >
        <source src="/brinkmais-brinquedos.mp4" type="video/mp4" />
      </video>
        <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block bg-accent px-6 py-2 rounded-full shadow-cartoon text-white font-bold text-lg mb-6 border-2 border-text transform -rotate-2 animate-wiggle"
          >
            ✨ A diversão não pode parar!
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight mb-6 drop-shadow-2xl">
            Aluguel de <br />
            <span className="text-accent drop-shadow-md">
              Brinquedos Infláveis
            </span>{" "}
            <br />
            em Maceió
          </h1>

          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto font-bold drop-shadow-lg">
            Transforme a festa do seu filho em uma{" "}
            <span className="text-accent">aventura inesquecível</span>! Os
            melhores e mais divertidos brinquedos da região.
          </p>

          <div className="relative z-30 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-2xl mx-auto">
            <a
              href="#catalogo"
              className="w-full sm:w-auto bg-accent hover:bg-yellow-400 text-white font-display font-bold text-xl py-4 px-8 rounded-full shadow-cartoon hover:shadow-cartoon-hover transition-all flex items-center justify-center gap-2 border-2 border-text"
            >
              Ver brinquedos
              <ChevronRight size={24} />
            </a>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white font-display font-bold text-xl py-4 px-8 rounded-full shadow-cartoon hover:shadow-cartoon-hover transition-all flex items-center justify-center gap-2 border-2 border-text"
            >
              <MessageCircle size={24} />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="relative block w-full h-12.5 md:h-25"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C80.3,119.82,156.8,109.1,223.3,86.9,257.6,75.4,290.7,62.2,321.4,56.4Z"
            className="fill-background"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export { Hero };
