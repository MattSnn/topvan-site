import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/site";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30 z-10" />
        <Image
          src={IMAGES.hero}
          alt="Van executiva Mercedes-Benz Sprinter preta da Topvan para transporte universitário, escolar e turismo em Piedade-SP"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_center]"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="max-w-3xl">
          <div className="inline-block bg-gold-400/20 border border-gold-400/30 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
            <span className="text-gold-400 font-bold text-sm tracking-wide uppercase">
              Desde 2016 em Piedade-SP
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transporte Universitário, Escolar e Turismo em{" "}
            <span className="text-gold-400">Piedade ⇄ Sorocaba</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
            Van executiva Mercedes-Benz Sprinter de 18 lugares saindo de Piedade-SP
            para as principais faculdades e escolas de Sorocaba, além de
            fretamento para viagens, turismo, eventos e aeroportos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contato"
              className="bg-gold-400 hover:bg-gold-500 text-black font-bold px-8 py-4 rounded-full text-center text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              Reservar Meu Lugar
            </Link>
            <Link
              href="/transporte-universitario-piedade-sorocaba"
              className="border border-white/30 hover:border-gold-400 hover:text-gold-400 text-white font-bold px-8 py-4 rounded-full text-center text-lg transition-all backdrop-blur-sm"
            >
              Ver Rotas e Faculdades
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block"
      >
        <svg
          className="w-6 h-6 text-gold-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
