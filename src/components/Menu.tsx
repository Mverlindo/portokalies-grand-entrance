import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import seafoodImage from "@/assets/seafood-display.jpg";
import cocktailsImage from "@/assets/cocktails.jpg";

const menuCategories = [
  {
    id: "mar",
    title: "Das Águas",
    description: "Frutos do mar frescos e preparações refinadas",
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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <img
              src={activeCategory === "drinks" ? cocktailsImage : seafoodImage}
              alt={activeMenu?.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-3xl text-background">
                {activeMenu?.title}
              </p>
              <p className="font-body text-sm text-background/80 mt-1">
                {activeMenu?.description}
              </p>
            </div>
          </motion.div>

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
                  <span className="font-display text-xl text-primary whitespace-nowrap ml-4">
                    {item.price}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}

            <div className="pt-6">
              <a
                href="#"
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
