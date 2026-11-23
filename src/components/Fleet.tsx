import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconSeat,
  IconSnowflake,
  IconSparkles,
  IconTv,
} from "@/components/Icons";
import { IMAGES } from "@/lib/site";

const Fleet = () => {
  const highlights = [
    {
      icon: IconSeat,
      title: "18 Lugares em Couro",
      description: "Bancos executivos reclináveis para máximo descanso.",
      featured: false,
    },
    {
      icon: IconSnowflake,
      title: "Climatização Total",
      description: "Ar-condicionado com dutos para todos os passageiros.",
      featured: false,
    },
    {
      icon: IconTv,
      title: "Tecnologia a Bordo",
      description: "TV Digital e sistema de som integrado.",
      featured: false,
    },
    {
      icon: IconSparkles,
      title: "Conectividade Alexa",
      description: "Escolha sua música e interaja durante a viagem.",
      featured: true,
    },
  ];

  return (
    <section
      id="frota"
      className="py-14 sm:py-20 lg:py-24 bg-[#070708] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#111116] to-transparent opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image first on mobile */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={IMAGES.fleet}
                alt="Mercedes-Benz Sprinter Executiva preta da Topvan para 18 passageiros em Piedade-SP"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-between">
                <div>
                  <p className="text-gold-400 text-xs font-bold uppercase tracking-wider">
                    Padrão Executivo
                  </p>
                  <p className="text-white font-display font-bold text-base sm:text-lg">
                    Mercedes-Benz Sprinter • 18 Lugares
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-gold-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
              Nossa Frota
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Mercedes-Benz Sprinter Executiva
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-7 leading-relaxed">
              Viaje com o padrão de qualidade que só a Topvan oferece em
              Piedade-SP. Nossa van é configurada para entregar conforto no
              trajeto diário para a faculdade ou em viagens de turismo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex items-start gap-3.5 p-4 rounded-2xl border transition-colors ${
                      item.featured
                        ? "bg-gold-400/10 border-gold-400/30"
                        : "bg-[#0e0e11] border-white/10 hover:border-gold-400/35"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        item.featured
                          ? "bg-gold-400 text-black"
                          : "bg-gold-400/15 border border-gold-400/25 text-gold-400"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3
                        className={`font-bold text-sm sm:text-base ${
                          item.featured ? "text-gold-300" : "text-white"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
              <Link
                href="/#contato"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center border border-gold-400 text-gold-400 font-bold px-7 py-3 rounded-2xl sm:rounded-full hover:bg-gold-400 hover:text-black transition-all text-sm sm:text-base"
              >
                Quero viajar nessa Van
              </Link>
              <Link
                href="/frota-mercedes-sprinter-executiva"
                className="min-h-[48px] inline-flex items-center justify-center gap-2 text-gray-300 hover:text-gold-400 font-semibold px-4 py-3 transition-colors text-sm sm:text-base"
              >
                <span>Ver detalhes da frota</span>
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
