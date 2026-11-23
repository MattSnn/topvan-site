import { IconArrowRight, IconStar } from "@/components/Icons";
import { COMPANY } from "@/lib/site";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Karen de Oliveira",
      role: "Avaliação no Google",
      content:
        "Juliano é um ótimo motorista! Oferece um conforto excepcional nas vans, elas são equipadas com bancos de couro reclináveis, porta automática, tomada para carregar o celular, iluminação interna e TV. Recomendo a todos.",
    },
    {
      name: "João",
      role: "Avaliação no Google",
      content:
        "Experiência excelente! Van muito confortável, bem equipada, ar-condicionado, tomadas, assentos reclináveis e cortinas. Além do motorista muito gente boa e pontual!",
    },
    {
      name: "Lais Vieira Machado",
      role: "Avaliação no Google",
      content:
        "Qualidade, segurança e conforto é com a Top Van! Recomendo demais!!",
    },
  ];

  const reviewHref = COMPANY.googleReviewUrl || COMPANY.googleMapsSearchUrl;

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#0b0b0e] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-14">
          <p className="text-gold-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
            Depoimentos
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            O que dizem nossos clientes
          </h2>
        </div>

        <p className="text-xs text-gray-400 mb-3 flex items-center gap-1.5 md:hidden">
          <span>Deslize para ler os depoimentos</span>
          <IconArrowRight className="w-3.5 h-3.5 text-gold-400" />
        </p>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-4 px-4 pb-2 no-scrollbar md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:mx-0 md:px-0 md:pb-0">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="w-[84vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none p-6 sm:p-7 bg-[#121216] border border-white/10 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-gold-400 mb-4">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <IconStar key={star} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-white font-bold text-sm sm:text-base">
                  {item.name}
                </h3>
                <p className="text-gold-400/80 text-xs sm:text-sm">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="mt-10 sm:mt-14 p-6 sm:p-8 bg-gradient-to-br from-[#131318] to-[#09090c] border border-gold-400/25 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <h3 className="text-lg sm:text-2xl font-bold text-white mb-1.5">
              Já viajou com a Topvan? Deixe sua avaliação no Google!
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Sua opinião ajuda outros estudantes, famílias e viajantes de
              Piedade-SP a encontrarem um transporte seguro e pontual.
            </p>
          </div>
          <a
            href={reviewHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto min-h-[48px] flex-shrink-0 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:brightness-110 text-black font-bold px-6 py-3 rounded-2xl md:rounded-full transition-all text-sm sm:text-base"
          >
            <span>Avaliar a Topvan no Google</span>
            <IconArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
