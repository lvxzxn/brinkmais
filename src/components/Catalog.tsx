import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageCircle,
  CheckCircle2,
  Star,
  MapPin,
  Truck,
  ShieldCheck,
  Sparkles,
  CalendarCheck,
  ChevronRight,
  Menu,
  X,
  Maximize2
} from "lucide-react";
import { generateWhatsAppLink } from "../utils/whatsapp";
import { toys } from "../data/toys";

const Catalog = () => {
  // Estado para controlar a imagem expandida
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="catalogo" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-text mb-4">
            Nosso Catálogo de{" "}
            <span className="text-primary ">Diversão</span>
          </h2>
          <p className="text-xl font-bold text-slate-600 max-w-2xl mx-auto">
            Escolha os melhores brinquedos para festa infantil Maceió. Diversão com segurança!
          </p>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {toys.map((toy) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                key={toy.id}
                className="bg-white rounded-2xl shadow-cartoon hover:shadow-cartoon-hover border-2 border-text overflow-hidden transition-all group flex flex-col"
              >
                {/* Container da Imagem com Gatilho de Expansão */}
                <div
                  className="relative h-56 overflow-hidden border-b-2 border-text cursor-zoom-in"
                  onClick={() => setSelectedImage(toy.image)}
                >
                  <img
                    src={toy.image}
                    alt={toy.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay de Hover para indicar que pode expandir */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white p-2 rounded-full shadow-lg">
                      <Maximize2 size={24} className="text-primary" />
                    </div>
                  </div>
                </div>

                <div className="p-5 flex flex-col grow">
                  <h3 className="text-xl font-bold text-text mb-2">{toy.name}</h3>
                  <p className="text-slate-600 text-sm mb-6 grow">{toy.description}</p>

                  <div className="flex flex-col gap-3 mt-auto">
                    <a
                      href={generateWhatsAppLink(toy.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-display font-bold py-3 px-2 rounded-full flex items-center justify-center gap-2 transition-all shadow-cartoon hover:shadow-cartoon-hover border-2 border-text"
                    >
                      <MessageCircle size={20} />
                      Consultar no WhatsApp
                    </a>
                    <a
                      href={generateWhatsAppLink(toy.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-secondary hover:bg-cyan-400 text-white font-display font-bold py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-cartoon hover:shadow-cartoon-hover border-2 border-text mt-2"
                    >
                      <CalendarCheck size={20} />
                      Ver disponibilidade
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* MODAL DE IMAGEM EXPANDIDA */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.button
              className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </motion.button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border-2 border-white/20 object-contain"
              alt="Visualização expandida"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export { Catalog };
