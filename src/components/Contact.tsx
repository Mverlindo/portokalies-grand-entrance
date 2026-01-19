import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Instagram, Facebook, Mail } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      lines: [
        "Praia de Laranjeiras",
        "Balneário Camboriú, SC",
      ],
    },
    {
      icon: Phone,
      title: "Telefone",
      lines: ["(47) 3000-0000", "WhatsApp: (47) 99999-9999"],
    },
    {
      icon: Clock,
      title: "Horário",
      lines: [
        "Terça a Domingo: 12h às 23h",
        "Segunda: Fechado",
      ],
    },
  ];

  return (
    <section id="contato" className="section-padding bg-secondary text-secondary-foreground" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Visite-nos
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-wide mb-8">
              Venha nos conhecer
            </h2>
            <div className="w-16 h-px bg-primary mb-10" />

            <div className="space-y-8">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <info.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl mb-1">{info.title}</h3>
                    {info.lines.map((line) => (
                      <p key={line} className="font-body text-sm text-secondary-foreground/70">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p className="font-body text-xs tracking-widest uppercase text-secondary-foreground/70 mb-4">
                Siga-nos
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Mail, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 rounded-full border border-secondary-foreground/30 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="reservas"
            className="bg-background/5 backdrop-blur-sm p-8 md:p-10"
          >
            <h3 className="font-display text-3xl mb-6">Faça sua Reserva</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-xs tracking-widest uppercase block mb-2 text-secondary-foreground/70">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-secondary-foreground/30 px-4 py-3 font-body text-sm focus:border-primary focus:outline-none transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-widest uppercase block mb-2 text-secondary-foreground/70">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border border-secondary-foreground/30 px-4 py-3 font-body text-sm focus:border-primary focus:outline-none transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-xs tracking-widest uppercase block mb-2 text-secondary-foreground/70">
                    Data
                  </label>
                  <input
                    type="date"
                    className="w-full bg-transparent border border-secondary-foreground/30 px-4 py-3 font-body text-sm focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-widest uppercase block mb-2 text-secondary-foreground/70">
                    Horário
                  </label>
                  <select className="w-full bg-transparent border border-secondary-foreground/30 px-4 py-3 font-body text-sm focus:border-primary focus:outline-none transition-colors">
                    <option value="" className="bg-secondary">Selecione</option>
                    <option value="12:00" className="bg-secondary">12:00</option>
                    <option value="13:00" className="bg-secondary">13:00</option>
                    <option value="14:00" className="bg-secondary">14:00</option>
                    <option value="19:00" className="bg-secondary">19:00</option>
                    <option value="20:00" className="bg-secondary">20:00</option>
                    <option value="21:00" className="bg-secondary">21:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-body text-xs tracking-widest uppercase block mb-2 text-secondary-foreground/70">
                  Número de Pessoas
                </label>
                <select className="w-full bg-transparent border border-secondary-foreground/30 px-4 py-3 font-body text-sm focus:border-primary focus:outline-none transition-colors">
                  <option value="" className="bg-secondary">Selecione</option>
                  <option value="2" className="bg-secondary">2 pessoas</option>
                  <option value="4" className="bg-secondary">4 pessoas</option>
                  <option value="6" className="bg-secondary">6 pessoas</option>
                  <option value="8" className="bg-secondary">8 pessoas</option>
                  <option value="10+" className="bg-secondary">10+ pessoas</option>
                </select>
              </div>

              <div>
                <label className="font-body text-xs tracking-widest uppercase block mb-2 text-secondary-foreground/70">
                  Observações
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-transparent border border-secondary-foreground/30 px-4 py-3 font-body text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Alguma solicitação especial?"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-elegant py-4"
              >
                Solicitar Reserva
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
