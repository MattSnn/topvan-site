import Link from "next/link";
import {
  IconArrowRight,
  IconBriefcase,
  IconHeart,
  IconPlane,
  IconTicket,
} from "@/components/Icons";

const Services = () => {
  const services = [
    {
      title: "Transfer Aeroportos",
      description:
        "Levamos e buscamos você em Guarulhos (GRU), Congonhas (CGH) e Viracopos (VCP) saindo de Piedade e região com total pontualidade.",
      icon: IconPlane,
      href: "/transfer-aeroportos-eventos-piedade",
    },
    {
      title: "Shows e Festas",
      description:
        "Transporte seguro para shows em estádios, festivais e festas. Vá e volte com tranquilidade sem se preocupar com direção ou estacionamento.",
      icon: IconTicket,
      href: "/transfer-aeroportos-eventos-piedade",
    },
    {
      title: "Casamentos",
      description:
        "Logística para transporte de convidados e familiares em cerimônias em Piedade e Sorocaba, garantindo que todos cheguem juntos e seguros.",
      icon: IconHeart,
      href: "/transfer-aeroportos-eventos-piedade",
    },
    {
      title: "Fretamento Corporativo",
      description:
        "Soluções de transporte executivo para empresas, convenções, visitas técnicas e reuniões de negócios em toda a região de Sorocaba.",
      icon: IconBriefcase,
      href: "/aluguel-de-van-turismo-piedade",
    },
  ];

  return (
    <section
      id="outros-servicos"
      className="py-14 sm:py-20 lg:py-24 bg-[#070708] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-gold-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
            Mais Soluções
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Transfer para Aeroportos, Eventos e Corporativo
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="p-6 sm:p-7 bg-[#0e0e11] border border-white/10 rounded-2xl hover:border-gold-400/45 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gold-400/12 border border-gold-400/25 text-gold-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-gold-400 transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-gold-400 text-sm font-semibold">
                  <span>Saiba mais</span>
                  <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
