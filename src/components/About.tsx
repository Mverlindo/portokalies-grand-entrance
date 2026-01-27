import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import interiorImage from "@/assets/Interior.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={interiorImage}
                alt="Interior elegante do restaurante Portokalies"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <p className="subtitle-elegant mb-4">Nossa História</p>
            <h2 className="title-elegant text-foreground mb-6">
              Onde o mar encontra a tradição mediterrânea
            </h2>
            <div className="divider-elegant !mx-0 !my-8" />

            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                <span className=" text-2xl text-foreground italic">
                  Portokalies
                </span>{" "}
                vem da palavra grega "πορτοκαλιές", que significa "laranjeiras" –
                uma homenagem poética à Praia de Laranjeiras que nos acolhe.
              </p>
              <p>
                Assim como os laranjais mediterrâneos, este lugar está cercado
                de belezas naturais, charme e encanto. De frente para o mar,
                oferecemos uma experiência gastronômica inspirada na cozinha
                mediterrânea, enriquecida com a criatividade e a energia
                vibrante da costa brasileira.
              </p>
              <p>
                Cada prato é uma combinação de culturas e sabores refinados,
                pensados para serem degustados com elegância, sofisticação e
                glamour. Aprecie ótimos momentos em um ambiente exclusivo.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <div className="text-center">
                <span className="font-display text-4xl text-primary">+200</span>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">
                  Pratos
                </p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <span className="font-display text-4xl text-primary">+50</span>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">
                  Drinks
                </p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <span className="font-display text-4xl text-primary">∞</span>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-1">
                  Vista Mar
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
