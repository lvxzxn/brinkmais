import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageCircle,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { generateWhatsAppLink } from "../utils/whatsapp";

const CAROUSEL_IMAGES = [
  "/carousel-1.jpeg",
  "/carousel-2.jpeg",
  "/carousel-3.jpeg",
];

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const carouselVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0.5,
    scale: 0.8,
    rotate: direction > 0 ? 5 : -5,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 1.1,
    rotate: direction < 0 ? 5 : -5,
  }),
};

const Hero = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, CAROUSEL_IMAGES.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 pb-48 group">
      <div className="absolute inset-0 w-full h-full z-0 bg-background overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={CAROUSEL_IMAGES[imageIndex]}
            custom={direction}
            variants={carouselVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 25 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.6 },
              rotate: { type: "spring", stiffness: 100, damping: 20 }
            }}
            alt={`Banner animado ${imageIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover origin-center"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>
      </div>

      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 z-30 p-3 md:p-4 bg-accent hover:bg-yellow-400 text-white rounded-full shadow-cartoon hover:shadow-cartoon-hover transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110 active:scale-95 border-2 border-text -translate-y-1/2 top-1/2"
        aria-label="Imagem anterior"
      >
        <ChevronLeft size={36} className="text-text" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 z-30 p-3 md:p-4 bg-accent hover:bg-yellow-400 text-white rounded-full shadow-cartoon hover:shadow-cartoon-hover transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hover:scale-110 active:scale-95 border-2 border-text -translate-y-1/2 top-1/2"
        aria-label="Próxima imagem"
      >
        <ChevronRight size={36} className="text-text" />
      </button>

      {/* Stylized Animated Dots */}
      <div className="absolute bottom-20 md:bottom-28 left-0 right-0 z-30 flex items-center justify-center gap-4">
        {CAROUSEL_IMAGES.map((_, index) => {
          const isActive = index === imageIndex;
          return (
            <button
              key={index}
              onClick={() => {
                const diff = index - imageIndex;
                if (diff !== 0) setPage([page + diff, diff > 0 ? 1 : -1]);
              }}
              className="relative group/dot flex items-center justify-center p-2"
              aria-label={`Ir para a imagem ${index + 1}`}
            >
              <motion.div
                initial={false}
                animate={{
                  width: isActive ? 48 : 16,
                  backgroundColor: isActive ? "#FFD166" : "rgba(255,255,255,0.5)",
                }}
                className={`h-4 rounded-full border-2 border-text shadow-cartoon transition-all hover:bg-white`}
              />
              {isActive && (
                <motion.div
                  layoutId="activeDotOutline"
                  className="absolute inset-0 rounded-full border-2 border-white pointer-events-none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-12 sm:px-16 lg:px-24 text-center mt-10">
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
