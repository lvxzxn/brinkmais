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
import { Logo } from "./Logo";
import { generateWhatsAppLink } from "../utils/whatsapp";
import { toys } from "../data/toys";

const About = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative rounded-3xl overflow-hidden group">
              <video
                src="/brinkmais-animated2.mp4?v=50"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl z-10 
               border-10 border-dashed border-accent 
               opacity-90 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              ></div>
              <div className="absolute top-0 left-0 right-0 h-16 bg-linear-to-b from-white/60 to-transparent z-0 pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-5xl md:text-6xl font-display font-extrabold text-text mb-6">
              Sobre a{" "}
              <span className="text-black">Brink</span>
              <span className="text-[#FFD700] ">Mais</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-700 font-bold">
              <p>
                Somos especialistas em{" "}
                <strong className="text-secondary text-xl">
                  aluguel de brinquedos infláveis em Maceió
                </strong>
                . Nosso objetivo é levar{" "}
                <span className="text-accent text-xl">alegria</span>,{" "}
                <span className="text-primary text-xl">cor</span> e muita{" "}
                <span className="text-green-fun text-xl">diversão</span> para o
                seu evento, garantindo que as crianças tenham momentos
                inesquecíveis.
              </p>
              <p>
                Com anos de experiência no mercado de festas infantis,
                entendemos que a{" "}
                <strong className="text-purple-fun text-xl">
                  segurança e a confiança
                </strong>{" "}
                são fundamentais. Por isso, todos os nossos equipamentos passam
                por rigorosas manutenções e higienizações.
              </p>
              <ul className="space-y-4 mt-8">
                {[
                  "Pula-pula aluguel Maceió com melhor custo-benefício",
                  "Equipe treinada para montagem segura",
                  "Pontualidade britânica na entrega",
                  "Atendimento humanizado e focado em você",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-cartoon border-2 border-text"
                  >
                    <CheckCircle2
                      className="text-green-fun shrink-0"
                      size={28}
                    />
                    <span className="font-display font-bold text-text text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { About };
