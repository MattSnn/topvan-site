import Image from "next/image";
import Link from "next/link";
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
    <section id="turismo" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-gold-400 font-bold uppercase tracking-widest mb-4">
              Turismo e Lazer
            </p>
            <h2 className="text-4xl font-bold text-white mb-4">
              Aluguel de Van e Turismo Saindo de Piedade-SP
            </h2>
            <p className="text-gray-400 text-lg">
              Além do transporte universitário e escolar diário, a Topvan é
              especialista em fretamento turístico regional. Organize seu grupo e
              deixe a estrada por nossa conta.
            </p>
          </div>
          <Link
            href="/aluguel-de-van-turismo-piedade"
            className="inline-flex items-center gap-2 text-gold-400 border-b border-gold-400 pb-1 hover:text-white transition-colors font-semibold"
          >
            Ver página de Turismo e Fretamento <span>→</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((place) => (
            <Link
              key={place.title}
              href="/aluguel-de-van-turismo-piedade"
              className="group relative h-96 rounded-2xl overflow-hidden block border border-zinc-800 hover:border-gold-400/50 transition-colors"
            >
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors z-10" />
              <Image
                src={place.image}
                alt={place.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/95 via-black/45 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                  {place.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
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
