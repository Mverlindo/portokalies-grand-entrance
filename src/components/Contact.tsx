import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Instagram, Facebook, Mail } from "lucide-react";
import React, { useMemo, useState } from "react";

const WHATSAPP_BASE = "https://wa.me/5547997939559";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // criação do link de reserva via WhatsApp
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [data, setData] = useState(""); // YYYY-MM-DD
  const [horario, setHorario] = useState("");
  const [pessoas, setPessoas] = useState("");
  const [observacao, setObservacao] = useState("");

  const dataBR = useMemo(() => {
    if (!data) return "";
    const [y, m, d] = data.split("-");
    if (!y || !m || !d) return data;
    return `${d}/${m}/${y}`;
  }, [data]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nome.trim() || !data || !horario || !pessoas) {
      alert("Preencha Nome, Data, Horário e Número de Pessoas.");
      return;
    }

    const obs = observacao.trim();
    const obsTxt = obs ? `\nObs: ${obs}` : "";

    const mensagem =
      `Olá, me chamo ${nome} e gostaria de reservar para a data ${dataBR} ` +
      `no horário ${horario} para ${pessoas}!` +
      `${obsTxt}\nObrigada.`;

    const url = `${WHATSAPP_BASE}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // criação do link de reserva via WhatsApp

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
      lines: ["(47) 99793-9559", "WhatsApp: (47) 99793-9559"],
    },
    {
      icon: Clock,
      title: "Horário",
      lines: [
        "Segunda a Domingo: 11h às 18h",
        "Sabado: 11h às 19h",
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
                  { icon: Instagram, href: "https://www.instagram.com/portokalies/" },
                  { icon: Phone, href: "https://wa.me/47997939559" },
                  { icon: Mail, href: "mailto:contato@portokalies.com.br" },
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
           <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-body text-xs tracking-widest uppercase block mb-2 text-secondary-foreground/70">
                  Nome
                </label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full bg-transparent border border-secondary-foreground/30 px-4 py-3 font-body text-sm focus:border-primary focus:outline-none transition-colors"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <label className="font-body text-xs tracking-widest uppercase block mb-2 text-secondary-foreground/70">
                  Telefone
                </label>
                <input
                  type="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
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
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  className="w-full bg-transparent border border-secondary-foreground/30 px-4 py-3 font-body text-sm focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="font-body text-xs tracking-widest uppercase block mb-2 text-secondary-foreground/70">
                  Horário
                </label>
                <select
                  value={horario}
                  onChange={(e) => setHorario(e.target.value)}
                  className="w-full bg-transparent border border-secondary-foreground/30 px-4 py-3 font-body text-sm focus:border-primary focus:outline-none transition-colors"
                  required
                >
                  <option value="" className="bg-secondary">Selecione</option>
                  <option value="11:00" className="bg-secondary">12:00</option>
                  <option value="12:00" className="bg-secondary">13:00</option>
                  <option value="13:00" className="bg-secondary">14:00</option>
                  <option value="14:00" className="bg-secondary">19:00</option>
                  <option value="15:00" className="bg-secondary">20:00</option>
                  <option value="16:00" className="bg-secondary">21:00</option>
                  <option value="17:00" className="bg-secondary">19:00</option>
                  <option value="18:00" className="bg-secondary">20:00</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-body text-xs tracking-widest uppercase block mb-2 text-secondary-foreground/70">
                Número de Pessoas
              </label>
              <select
                value={pessoas}
                onChange={(e) => setPessoas(e.target.value)}
                className="w-full bg-transparent border border-secondary-foreground/30 px-4 py-3 font-body text-sm focus:border-primary focus:outline-none transition-colors"
                required
              >
                <option value="" className="bg-secondary">Selecione</option>
                <option value="2 pessoas" className="bg-secondary">2 pessoas</option>
                <option value="4 pessoas" className="bg-secondary">4 pessoas</option>
                <option value="6 pessoas" className="bg-secondary">6 pessoas</option>
                <option value="8 pessoas" className="bg-secondary">8 pessoas</option>
                <option value="10+ pessoas" className="bg-secondary">10+ pessoas</option>
              </select>
            </div>

            <div>
              <label className="font-body text-xs tracking-widest uppercase block mb-2 text-secondary-foreground/70">
                Observações
              </label>
              <textarea
                rows={3}
                value={observacao}
                onChange={(e) => setObservacao(e.target.value)}
                className="w-full bg-transparent border border-secondary-foreground/30 px-4 py-3 font-body text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Alguma solicitação especial?"
              />
            </div>

            <button type="submit" className="w-full btn-elegant py-4">
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
