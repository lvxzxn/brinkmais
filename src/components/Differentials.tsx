import React, { useState } from "react";
import { motion } from "motion/react";
import {
  MessageCircle,
  Truck,
  ShieldCheck,
  Sparkles,
  CreditCard,
} from "lucide-react";
const Differentials = () => {
  const diffs = [
    {
      icon: <Truck size={40} />,
      title: "Entrega e Montagem",
      desc: "Inclusa para toda Maceió. Nós cuidamos do trabalho pesado!",
    },
    {
      icon: <CreditCard size={40} />,
      title: "Pagamento Facilitado",
      desc: "Parcele tudo em até 10x sem juros nos cartões de crédito.",
    },
    {
      icon: <Sparkles size={40} />,
      title: "Higienização Garantida",
      desc: "Brinquedos limpos e sanitizados antes de cada evento.",
    },
    {
      icon: <MessageCircle size={40} />,
      title: "Atendimento Rápido",
      desc: "Suporte via WhatsApp para tirar todas as suas dúvidas na hora.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Segurança Total",
      desc: "Equipamentos revisados e seguros para a tranquilidade dos pais.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text mb-4">
            Por que escolher a{" "}
            <span className="text-black">Brink</span>
            <span className="text-[#FFD700]">Mais</span>?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            O melhor aluguel de infláveis em Alagoas com diferenciais que fazem
            a diferença na sua festa.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {diffs.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-cartoon hover:shadow-cartoon-hover border-2 border-text text-center flex flex-col items-center transition-all w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[250px] max-w-[320px] flex-grow"
            >
              <div className="text-white mb-6 bg-secondary p-5 rounded-full shadow-cartoon border-2 border-text transform -rotate-6 animate-wiggle">
                {diff.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-text mb-3">
                {diff.title}
              </h3>
              <p className="text-slate-600 font-bold">{diff.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Differentials };
