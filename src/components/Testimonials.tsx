import { COMPANY } from "@/lib/site";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Roberto Silva",
      role: "Diretor Comercial",
      content:
        "Serviço impecável. A van estava extremamente limpa e o motorista foi muito profissional durante todo o traslado da nossa equipe.",
    },
    {
      name: "Mariana Costa",
      role: "Noiva",
      content:
        "Contratei para o transporte dos convidados do meu casamento e foi a melhor escolha. Todos elogiaram o conforto e a pontualidade.",
    },
    {
      name: "Carlos Eduardo",
      role: "Turista",
      content:
        "Fizemos uma viagem em família para o litoral e a Topvan superou nossas expectativas. Espaço de sobra para as malas e muito conforto.",
    },
  ];

  const reviewHref = COMPANY.googleReviewUrl || COMPANY.googleMapsSearchUrl;

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gold-400 font-bold uppercase tracking-widest mb-4">
            Depoimentos
          </p>
          <h2 className="text-4xl font-bold text-white">
            O que dizem nossos clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl relative pt-12"
            >
              <div
                aria-hidden="true"
                className="text-gold-400 text-6xl absolute top-2 left-4 opacity-20 font-serif leading-none"
              >
                &ldquo;
              </div>
              <p className="text-gray-300 mb-8 relative z-10 italic">
                {item.content}
              </p>
              <div>
                <h3 className="text-white font-bold">{item.name}</h3>
                <p className="text-gold-400/80 text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="mt-14 p-8 bg-zinc-950 border border-gold-400/25 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Já viajou com a Topvan? Deixe sua avaliação no Google!
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Sua opinião ajuda outros estudantes, famílias e viajantes de
              Piedade-SP a encontrarem um transporte seguro e pontual.
            </p>
          </div>
          <a
            href={reviewHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-gold-400 hover:bg-gold-500 text-black font-bold px-7 py-3.5 rounded-full transition-all hover:scale-105 text-sm md:text-base"
          >
            Avaliar a Topvan no Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
