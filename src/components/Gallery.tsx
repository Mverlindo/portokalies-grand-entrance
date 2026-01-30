import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import galeria_7 from "@/assets/GALERIA/1.webp";
import galeria_2 from "@/assets/GALERIA/2.webp";
import galeria_3 from "@/assets/GALERIA/3.webp";
import galeria_4 from "@/assets/GALERIA/4.webp";
import galeria_5 from "@/assets/GALERIA/5.webp";
import galeria_6 from "@/assets/GALERIA/6.webp";
import galeria_1 from "@/assets/GALERIA/7.webp";
import galeria_8 from "@/assets/GALERIA/8.webp";
import galeria_9 from "@/assets/GALERIA/9.webp";
import galeria_10 from "@/assets/GALERIA/10.webp";
import galeria_11 from "@/assets/GALERIA/11.webp";
import galeria_12 from "@/assets/GALERIA/12.webp";
import galeria_13 from "@/assets/GALERIA/13.webp";

const galleryImages = [
  { src: galeria_6, alt: "Ambiente elegante do restaurante" },
  { src: galeria_2, alt: "Arquitetura única" },
  { src: galeria_4, alt: "Vista panorâmica para o mar" },
  { src: galeria_5, alt: "Lounge e iluminação aconchegante" },
  { src: galeria_1, alt: "Bar e detalhes de acabamento" },
  { src: galeria_7, alt: "Atmosfera sofisticada" },
  { src: galeria_8, alt: "Momentos à beira-mar" },
  { src: galeria_9, alt: "Bar e detalhes de acabamento" },
  { src: galeria_10, alt: "Atmosfera sofisticada" },
  { src: galeria_11, alt: "Momentos à beira-mar" },
  { src: galeria_12, alt: "Atmosfera sofisticada" },
  { src: galeria_13, alt: "Momentos à beira-mar" }

];

const Gallery = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [isHovering, setIsHovering] = useState(false);

  const total = galleryImages.length;

  const goTo = (nextIndex: number, direction: 1 | -1) => {
    setDir(direction);
    setCurrent((prev) => {
      const v = (nextIndex + total) % total;
      return v;
    });
  };

  const next = () => goTo(current + 1, 1);
  const prev = () => goTo(current - 1, -1);

  // Autoplay (opcional)
  useEffect(() => {
    const autoPlay = true; // <- se quiser desligar, troque para false
    const interval = 4500;

    if (!autoPlay || isHovering || total <= 1) return;

    const t = setInterval(() => {
      setDir(1);
      setCurrent((c) => (c + 1) % total);
    }, interval);

    return () => clearInterval(t);
  }, [isHovering, total]);

  const swipeThreshold = 60;

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

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-sm">
            <div className="relative h-[320px] md:h-[620px] bg-black/5">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.img
                  key={current}
                  src={galleryImages[current].src}
                  alt={galleryImages[current].alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 28, scale: 1.03 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: dir * -28, scale: 1.01 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  onDragEnd={(_, info) => {
                    if (info.offset.x > swipeThreshold) prev();
                    else if (info.offset.x < -swipeThreshold) next();
                  }}
                />
              </AnimatePresence>

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Texto com animação */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`caption-${current}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <p className="font-display text-2xl md:text-3xl text-white">
                    {galleryImages[current].alt}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Arrows */}
              {total > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 rounded-full grid place-items-center backdrop-blur transition"
                    aria-label="Anterior"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white w-10 h-10 rounded-full grid place-items-center backdrop-blur transition"
                    aria-label="Próximo"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Dots */}
          {total > 1 && (
            <div className="flex justify-center gap-2 mt-5">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current
                      ? "w-8 bg-foreground"
                      : "w-2.5 bg-foreground/30 hover:bg-foreground/50"
                  }`}
                  aria-label={`Ir para slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>

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
              description:
                "Desfrute de uma vista panorâmica deslumbrante da Praia de Laranjeiras",
            },
            {
              title: "Ambiente Climatizado",
              description:
                "Conforto em qualquer estação com climatização perfeita",
            },
            {
              title: "Deck Panorâmico",
              description:
                "Um espaço ao ar livre pensado para relaxar, apreciar a vista e viver momentos únicos à beira-mar.",
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
