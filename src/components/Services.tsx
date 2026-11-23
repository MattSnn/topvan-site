import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: "Transfer Aeroportos",
      description:
        "Levamos e buscamos você em Guarulhos (GRU), Congonhas (CGH) e Viracopos (VCP) saindo de Piedade e região com total pontualidade.",
      icon: "✈️",
      href: "/transfer-aeroportos-eventos-piedade",
    },
    {
      title: "Shows e Festas",
      description:
        "Transporte seguro para shows em estádios, festivais e festas. Vá e volte com tranquilidade sem se preocupar com direção ou estacionamento.",
      icon: "🎟️",
      href: "/transfer-aeroportos-eventos-piedade",
    },
    {
      title: "Casamentos",
      description:
        "Logística para transporte de convidados e familiares em cerimônias em Piedade e Sorocaba, garantindo que todos cheguem juntos e seguros.",
      icon: "💍",
      href: "/transfer-aeroportos-eventos-piedade",
    },
    {
      title: "Fretamento Corporativo",
      description:
        "Soluções de transporte executivo para empresas, convenções, visitas técnicas e reuniões de negócios em toda a região de Sorocaba.",
      icon: "💼",
      href: "/aluguel-de-van-turismo-piedade",
    },
  ];

  return (
    <section
      id="outros-servicos"
      className="py-24 bg-black border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold-400 font-bold uppercase tracking-widest mb-4">
            Mais Soluções
          </p>
          <h2 className="text-3xl font-bold text-white">
            Transfer para Aeroportos, Eventos e Corporativo
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-gold-400/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div
                  aria-hidden="true"
                  className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block"
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
              <span className="mt-6 text-gold-400 text-sm font-semibold">
                Saiba mais →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
