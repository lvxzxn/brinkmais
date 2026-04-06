import { motion } from "motion/react";

const Testimonials = () => {
  const reviews = [
    {
      imageSrc: "/feedbacks/1.jpeg",
    },
    {
      imageSrc: "/feedbacks/2.jpeg",
    },
    {
      imageSrc: "/feedbacks/3.jpeg",
    },
    {
      imageSrc: "/feedbacks/4.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-extrabold text-text mb-4">
            O que dizem nossos{" "}
            <span className="text-primary ">clientes</span>
          </h2>
          <p className="text-2xl font-bold text-black">
            A satisfação de quem já viveu a experiência{" "}
            <span className="text-black font-bold">Brink</span>
            <span className="text-accent font-bold">Mais</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-14 rounded-3xl shadow-cartoon border-2 border-text relative transform hover:-rotate-2 transition-transform"
            >
              <img
                src={review.imageSrc}
                className="w-full h-full rounded-xl object-cover"
              />
              <div className="absolute -top-6 -right-2 text-white bg-primary p-4 rounded-full border-2 border-text shadow-cartoon transform rotate-12">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonials };
