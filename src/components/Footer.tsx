import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="font-display text-2xl tracking-[0.15em]">
              PORTOKALIES
            </span>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-background/60 mt-1">
              Restaurante
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["Sobre", "Cardápio", "Ambiente", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-body text-xs tracking-widest uppercase text-background/70 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="font-body text-xs text-background/50 text-center md:text-right">
            © {new Date().getFullYear()} Portokalies. <br className="md:hidden" />
            Todos os direitos reservados.
          </p>
        </div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-px bg-background/10 mt-8"
        />

        <p className="font-body text-[10px] text-background/30 text-center mt-6 tracking-widest uppercase">
          Praia de Laranjeiras • Balneário Camboriú, SC
        </p>
      </div>
    </footer>
  );
};

export default Footer;
