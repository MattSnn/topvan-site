"use client";

import { useState, FormEvent } from "react";
import {
  IconMail,
  IconMapPin,
  IconPhone,
  IconWhatsApp,
} from "@/components/Icons";
import { COMPANY, buildWhatsAppUrl } from "@/lib/site";

const SERVICE_OPTIONS = [
  {
    id: "Transporte Universitário",
    placeholder: "Ex: UNISO, FACENS, UNIP, Anhanguera...",
  },
  {
    id: "Transporte Escolar",
    placeholder: "Ex: Colégio Ser, Objetivo, Anglo, ETEC...",
  },
  {
    id: "Turismo / Viagem",
    placeholder: "Ex: Aparecida do Norte, Litoral, Parque...",
  },
  {
    id: "Aeroporto / Evento",
    placeholder: "Ex: Aeroporto GRU, Viracopos, Casamento...",
  },
] as const;

const Contact = () => {
  const [selectedService, setSelectedService] = useState<string>(
    SERVICE_OPTIONS[0].id
  );
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    route: "",
    message: "",
  });

  const activeOption =
    SERVICE_OPTIONS.find((opt) => opt.id === selectedService) ??
    SERVICE_OPTIONS[0];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formattedDate = formData.date
      ? formData.date.split("-").reverse().join("/")
      : "A combinar";

    let text = `Olá! Gostaria de um orçamento da Topvan.\n\n*Serviço:* ${selectedService}\n*Nome:* ${formData.name}\n*Data:* ${formattedDate}\n*Trajeto / Destino:* ${formData.route}`;

    if (formData.message.trim()) {
      text += `\n*Mensagem:* ${formData.message.trim()}`;
    }

    window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contato"
      className="py-14 sm:py-20 lg:py-24 bg-[#0b0b0e] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Info */}
          <div>
            <p className="text-gold-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
              Contato
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Solicite seu Orçamento Grátis
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
              Atendemos estudantes, famílias e empresas em Piedade-SP, Sorocaba
              e toda a região. Escolha o serviço ao lado ou fale diretamente nos
              nossos canais.
            </p>

            <div className="space-y-3.5">
              <a
                href={`tel:${COMPANY.phoneE164}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#121216] border border-white/10 hover:border-gold-400/40 transition-colors"
              >
                <div className="w-11 h-11 bg-gold-400 rounded-xl flex items-center justify-center text-black flex-shrink-0">
                  <IconPhone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base">
                    Telefone / WhatsApp
                  </h3>
                  <p className="text-gold-300 font-semibold text-sm sm:text-base">
                    {COMPANY.phoneDisplay}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#121216] border border-white/10 hover:border-gold-400/40 transition-colors"
              >
                <div className="w-11 h-11 bg-gold-400 rounded-xl flex items-center justify-center text-black flex-shrink-0">
                  <IconMail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-sm sm:text-base">
                    E-mail Comercial
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base truncate">
                    {COMPANY.email}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#121216] border border-white/10">
                <div className="w-11 h-11 bg-gold-400 rounded-xl flex items-center justify-center text-black flex-shrink-0">
                  <IconMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm sm:text-base">
                    Localização e Cobertura
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    {COMPANY.streetAddress} — {COMPANY.city}/{COMPANY.state}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                    Atendemos Piedade, Sorocaba, Votorantim e toda a região
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#121216] p-5 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
                1. Tipo de atendimento
              </p>
              <div className="flex flex-wrap gap-2">
                {SERVICE_OPTIONS.map((option) => {
                  const isActive = option.id === selectedService;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedService(option.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-gold-400 text-black shadow-[0_0_16px_rgba(212,175,55,0.25)]"
                          : "bg-black/60 text-gray-300 border border-white/10 hover:border-gold-400/40"
                      }`}
                    >
                      {option.id}
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-bold text-gray-300 mb-1.5"
                >
                  Nome
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-base text-white focus:border-gold-400 outline-none transition-all"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-date"
                  className="block text-sm font-bold text-gray-300 mb-1.5"
                >
                  Data da Viagem / Início das Aulas
                </label>
                <input
                  id="contact-date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  onClick={(e) => {
                    if (typeof e.currentTarget.showPicker === "function") {
                      e.currentTarget.showPicker();
                    }
                  }}
                  className={`w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-base focus:border-gold-400 outline-none transition-all cursor-pointer ${
                    formData.date ? "text-white" : "text-gray-400"
                  }`}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-route"
                  className="block text-sm font-bold text-gray-300 mb-1.5"
                >
                  Destino (ou Escola/Faculdade)
                </label>
                <input
                  id="contact-route"
                  type="text"
                  name="route"
                  value={formData.route}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-base text-white focus:border-gold-400 outline-none transition-all"
                  placeholder={activeOption.placeholder}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-bold text-gray-300 mb-1.5"
                >
                  Mensagem (Opcional)
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/15 rounded-xl px-4 py-3 text-base text-white focus:border-gold-400 outline-none transition-all"
                  placeholder="Informe bairro em Piedade, quantidade de passageiros ou período (manhã/noite)..."
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-[52px] py-3.5 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:brightness-110 text-black font-bold rounded-xl text-base sm:text-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_24px_rgba(212,175,55,0.2)]"
              >
                <IconWhatsApp className="w-5 h-5" />
                <span>Enviar Orçamento no WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
