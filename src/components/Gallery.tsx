import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-seafood.jpg";
import interiorImage from "@/assets/restaurant-interior.jpg";
import seafoodImage from "@/assets/seafood-display.jpg";
import cocktailsImage from "@/assets/cocktails.jpg";

const galleryImages = [
  {
    src: interiorImage,
    alt: "Ambiente elegante do restaurante",
    span: "col-span-2 row-span-2",
  },
  {
    src: seafoodImage,
    alt: "Seleção de frutos do mar frescos",
    span: "col-span-1 row-span-1",
  },
  {
    src: cocktailsImage,
    alt: "Drinks autorais",
    span: "col-span-1 row-span-1",
  },
  {
    src: heroImage,
    alt: "Prato de frutos do mar grelhados",
    span: "col-span-2 row-span-1",
  },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ambiente" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="subtitle-elegant mb-4">Atmosfera Exclusiva</p>
          <h2 className="title-elegant text-foreground">Nosso Ambiente</h2>
          <div className="divider-elegant" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto mt-6">
            Um espaço projetado para criar momentos inesquecíveis com vista
            privilegiada para o mar
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative overflow-hidden group ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-display text-lg text-background text-center px-4">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {[
            {
              title: "Vista Para o Mar",
              description: "Desfrute de uma vista panorâmica deslumbrante da Praia de Laranjeiras",
            },
            {
              title: "Ambiente Climatizado",
              description: "Conforto em qualquer estação com climatização perfeita",
            },
            {
              title: "Música Ambiente",
              description: "Uma seleção musical sofisticada para complementar sua experiência",
            },
          ].map((feature) => (
            <div key={feature.title} className="text-center">
              <h3 className="font-display text-2xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
