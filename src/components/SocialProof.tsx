import { motion } from "motion/react";
import {
  Star,
  Truck,
  Sparkles,
  CalendarCheck,
} from "lucide-react";
const SocialProof = () => {
  const stats = [
    {
      icon: <CalendarCheck size={32} />,
      value: "+120",
      label: "Eventos Realizados",
    },
    { icon: <Star size={32} />, value: "+500", label: "Clientes Satisfeitos" },
    {
      icon: <Sparkles size={32} />,
      value: "+6",
      label: "Brinquedos Disponíveis",
    },
    {
      icon: <Truck size={32} />,
      value: "Rápido",
      label: "Atendimento em Maceió",
    },
  ];

  return (
    <section className="py-12 bg-accent relative z-20 -mt-10 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-3xl shadow-cartoon border-4 border-text">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center text-center bg-white p-4 rounded-2xl shadow-cartoon border-2 border-text transform hover:-translate-y-2 transition-transform"
          >
            <div className="text-white mb-3 bg-primary p-3 rounded-full shadow-sm border-2 border-text transform rotate-3">
              {stat.icon}
            </div>
            <h3 className="text-4xl font-display font-extrabold text-text mb-1">
              {stat.value}
            </h3>
            <p className="text-sm font-bold text-slate-600 uppercase tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export { SocialProof };
