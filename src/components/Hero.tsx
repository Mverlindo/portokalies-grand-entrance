import { motion } from "framer-motion";
import heroImage from "@/assets/hero-seafood.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Gastronomia mediterrânea de alto padrão"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-secondary/40 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs md:text-sm tracking-[0.4em] uppercase text-background/80 mb-6"
        >
          Praia de Laranjeiras • Balneário Camboriú
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-background font-light tracking-wide mb-6"
        >
          Portokalies
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-24 h-px bg-primary mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-display text-xl md:text-2xl lg:text-3xl text-background/90 font-light italic max-w-3xl mx-auto mb-12"
        >
          Uma experiência mediterrânea à beira-mar com o melhor da gastronomia
          e um toque vibrante da costa brasileira
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#cardapio"
            className="btn-elegant bg-primary hover:bg-accent"
          >
            Ver Cardápio
          </a>
          <a
            href="#reservas"
            className="btn-outline-elegant border-background/60 text-background hover:bg-background hover:text-secondary"
          >
            Fazer Reserva
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-background/40 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-background/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
