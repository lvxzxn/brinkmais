import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageCircle,
  Menu,
  X,
  Maximize2
} from "lucide-react";
import { generateWhatsAppLink } from "../utils/whatsapp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 mt-4 mb-4">
          <div className="flex items-center">
            <img
              src="/IMG_7772.png"
              alt="BrinkMais Logo"
              className="h-full w-40 md:w-50 mt-4 object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display font-extrabold text-2xl tracking-wide">
                <span className="text-black">BRINK</span>
                <span className="text-accent ml-1">MAIS</span>
              </span>
              <span className="font-display font-bold text-md text-gray/700 tracking-widest">
                INFLÁVEIS
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-slate-600 hover:text-primary font-bold transition-colors"
            >
              Início
            </a>
            <a
              href="#catalogo"
              className="text-slate-600 hover:text-primary font-bold transition-colors"
            >
              Brinquedos
            </a>
            <a
              href={generateWhatsAppLink(
                "Olá! Gostaria de um orçamento para aluguel de brinquedos infláveis em Maceió.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-2.5 rounded-full font-display font-bold transition-all shadow-cartoon hover:shadow-cartoon-hover flex items-center gap-2 border-2 border-text"
            >
              <MessageCircle size={18} />
              Orçamento
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-bold text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md"
              >
                Início
              </a>
              <a
                href="#catalogo"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-bold text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md"
              >
                Brinquedos
              </a>
              <a
                href={generateWhatsAppLink(
                  "Olá! Gostaria de um orçamento para aluguel de brinquedos infláveis em Maceió.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-3 py-3 rounded-full font-display font-bold text-center flex items-center justify-center gap-2 border-2 border-text shadow-cartoon"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export { Navbar };
