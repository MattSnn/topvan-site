import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconClock,
  IconMapPin,
  IconShield,
  IconUsers,
} from "@/components/Icons";
import { IMAGES } from "@/lib/site";

const Hero = () => {
  const trustItems = [
    {
      icon: IconShield,
      value: "Desde 2016",
      label: "Tradição em Piedade-SP",
    },
    {
      icon: IconUsers,
      value: "18 Lugares",
      label: "Sprinter Executiva",
    },
    {
      icon: IconMapPin,
      value: "Porta a Porta",
      label: "Embarque em Piedade",
    },
    {
      icon: IconClock,
      value: "Manhã & Noite",
      label: "Rota Diária Sorocaba",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[90svh] lg:min-h-[92vh] flex items-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16"
    >
      {/* Background with mobile + desktop optimized scrim */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/75 to-[#070708]/45 md:bg-gradient-to-r md:from-[#070708] md:via-[#070708]/80 md:to-[#070708]/20 z-10" />
        <Image
          src={IMAGES.hero}
          alt="Van executiva Mercedes-Benz Sprinter preta da Topvan para transporte universitário, escolar e turismo em Piedade-SP"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] sm:object-[80%_center]"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-black/60 border border-gold-400/35 rounded-full px-3.5 py-1.5 mb-5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 font-semibold text-xs sm:text-sm tracking-wide uppercase">
              Desde 2016 em Piedade-SP
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-[1.1] tracking-tight">
            Transporte Universitário, Escolar e Turismo em{" "}
            <span className="gold-gradient-text">Piedade ⇄ Sorocaba</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
            Van executiva Mercedes-Benz Sprinter de 18 lugares saindo de
            Piedade-SP para as principais faculdades e escolas de Sorocaba, além
            de fretamento para viagens, turismo, eventos e aeroportos.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 mb-10">
            <Link
              href="/#contato"
              className="w-full sm:w-auto min-h-[52px] px-7 py-3.5 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:brightness-110 text-black font-bold rounded-2xl sm:rounded-full text-center text-base sm:text-lg flex items-center justify-center gap-2 transition-all sm:hover:scale-[1.03] shadow-[0_0_28px_rgba(212,175,55,0.28)]"
            >
              <span>Reservar Meu Lugar</span>
              <IconArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/transporte-universitario-piedade-sorocaba"
              className="w-full sm:w-auto min-h-[52px] px-7 py-3.5 border border-white/25 bg-black/45 hover:border-gold-400 hover:text-gold-300 text-white font-semibold rounded-2xl sm:rounded-full text-center text-base sm:text-lg flex items-center justify-center transition-all backdrop-blur-md"
            >
              Ver Rotas e Faculdades
            </Link>
          </div>

          {/* Mobile-First Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.value}
                  className="bg-black/55 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-3.5"
                >
                  <div className="flex items-center gap-2 text-gold-400 mb-1">
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="font-display font-bold text-xs sm:text-sm text-white">
                      {item.value}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-gray-400 leading-snug">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
