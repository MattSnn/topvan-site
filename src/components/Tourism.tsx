import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";
import { IMAGES } from "@/lib/site";

const Tourism = () => {
  const destinations = [
    {
      title: "Aparecida do Norte",
      description:
        "Romarias e viagens religiosas saindo de Piedade com conforto absoluto para o grupo.",
      image: IMAGES.tourismAparecida,
      alt: "Van Topvan em viagem e romaria para Aparecida do Norte saindo de Piedade-SP",
    },
    {
      title: "Eventos Esportivos",
      description:
        "Transporte de atletas e equipes de Piedade para campeonatos em todo o estado.",
      image: IMAGES.tourismSports,
      alt: "Transporte de equipe esportiva do Kaikan de Piedade com a van executiva Topvan",
    },
    {
      title: "Parques Aquáticos",
      description:
        "Excursões para Castelo Park Aquático em Cesário Lange, Thermas e parques de diversões.",
      image: IMAGES.tourismWaterPark,
      alt: "Van da Topvan em excursão de turismo para parque aquático saindo de Piedade-SP",
    },
    {
      title: "Litoral, Holambra e Capital",
      description:
        "Roteiros personalizados para praias de São Paulo, passeios em Holambra e turismo em grupo.",
      image: IMAGES.hero,
      alt: "Mercedes-Benz Sprinter executiva da Topvan para fretamento de turismo em Piedade e região",
    },
  ];

  return (
    <section id="turismo" className="py-14 sm:py-20 lg:py-24 bg-[#0b0b0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <p className="text-gold-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
              Turismo e Lazer
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Aluguel de Van e Turismo Saindo de Piedade-SP
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Além do transporte universitário e escolar diário, a Topvan é
              especialista em fretamento turístico regional. Organize seu grupo e
              deixe a estrada por nossa conta.
            </p>
          </div>
          <Link
            href="/aluguel-de-van-turismo-piedade"
            className="inline-flex items-center gap-2 text-gold-400 border-b border-gold-400 pb-1 hover:text-white transition-colors font-semibold text-sm sm:text-base"
          >
            <span>Ver página de Turismo e Fretamento</span>
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-xs text-gray-400 mb-3 flex items-center gap-1.5 md:hidden">
          <span>Deslize para ver os destinos</span>
          <IconArrowRight className="w-3.5 h-3.5 text-gold-400" />
        </p>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-4 px-4 pb-2 no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible md:mx-0 md:px-0 md:pb-0">
          {destinations.map((place) => (
            <Link
              key={place.title}
              href="/aluguel-de-van-turismo-piedade"
              className="group relative h-80 sm:h-96 w-[82vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none rounded-2xl overflow-hidden block border border-white/10 hover:border-gold-400/50 transition-colors"
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors z-10" />
              <Image
                src={place.image}
                alt={place.alt}
                fill
                sizes="(max-width: 768px) 82vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/95 via-black/45 to-transparent flex flex-col justify-end p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 group-hover:text-gold-400 transition-colors">
                  {place.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {place.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tourism;
