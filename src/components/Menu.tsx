import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import daterra from "@/assets/daterra.jpg";
import domar from "@/assets/domar.jpg";
import dodrink from "@/assets/dodrink.jpg";


const menuCategories = [
  {
    id: "mar",
    title: "Das Águas",
    description: "Frutos do mar frescos e preparações refinadas",
    image: domar, 
    items: [
      { name: "Camarão Portokalies", price: "R$ 296", description: "Com queijo no espeto, musseline de batata e crispy de alho-poró" },
      { name: "Lagosta Portokalies", price: "R$ 485", description: "Com salmão grelhado, risoto de alho-poró e legumes tostados" },
      { name: "Polvo Grelhado", price: "R$ 340", description: "Tentáculos em azeite extra virgem, pimentões e batata aos murros" },
      { name: "Moqueca de Camarão", price: "R$ 300", description: "Acompanha arroz branco, pirão e batatas coradas" },
    ],
  },
  {
    id: "terra",
    title: "Da Terra",
    description: "Carnes selecionadas e porções especiais",
    image: daterra, 
    items: [
      { name: "Iscas de Picanha", price: "R$ 150", description: "Acebolada com farofa especial da casa" },
      { name: "Iscas de Mignon", price: "R$ 150", description: "Com gorgonzola e farofa" },
      { name: "Steak Tartar", price: "R$ 89", description: "Carne fresca picada, alcaparras, mostarda e páprica defumada" },
      { name: "Aipim Especial", price: "R$ 59", description: "Com requeijão e bacon crocante" },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    description: "Coquetéis autorais e clássicos revisitados",
    image: dodrink,
    items: [
      { name: "Portokalies", price: "R$ 49", description: "Gim, espumante, purê de morango e xarope de limão siciliano" },
      { name: "Clericot", price: "R$ 55", description: "Espumante exclusivo, água com gás, shrub de uva verde" },
      { name: "Aperol Spritz", price: "R$ 46", description: "Aperol, espumante, água com gás e rodela de laranja" },
      { name: "Negroni Prime", price: "R$ 99", description: "Gim Monkey, Campari, vermute argentino" },
    ],
  },
];

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("mar");

  const activeMenu = menuCategories.find((cat) => cat.id === activeCategory);

  return (
    <section id="cardapio" className="section-padding bg-sand" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="subtitle-elegant mb-4">Experiência Gastronômica</p>
          <h2 className="title-elegant text-foreground">Nosso Cardápio</h2>
          <div className="divider-elegant" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto mt-6">
            Uma seleção cuidadosa de pratos que celebram o melhor do
            Mediterrâneo com toques brasileiros
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-4 md:gap-8 mb-12 flex-wrap"
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`font-body text-sm tracking-[0.15em] uppercase py-2 px-4 transition-all duration-300 border-b-2 ${
                activeCategory === category.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeCategory}
                  src={activeMenu?.image}
                  alt={activeMenu?.title}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </AnimatePresence>

              {/* Overlay abaixo do texto */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-secondary/60 to-transparent pointer-events-none" />

              {/* Texto acima do overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
               <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute bottom-6 left-6 right-6 z-20"
                  >
                    <p className="font-display text-3xl text-white">
                      {activeMenu?.title}
                    </p>
                    <p className="font-body text-sm text-white/80 mt-1">
                      {activeMenu?.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

       
          {/* Menu Items */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {activeMenu?.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="menu-card group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}

            <div className="pt-6">
              <a
                href="https://drive.google.com/file/d/1E9fFa-mTQU0F3Z9nAm__cjk98JwWCdVZ/view?usp=drive_link"
                className="btn-outline-elegant inline-flex border-foreground text-foreground hover:bg-foreground hover:text-background"
              >
                Ver Cardápio Completo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
