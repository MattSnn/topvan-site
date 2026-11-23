import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";
import { COMPANY, IMAGES } from "@/lib/site";

const About = () => {
  return (
    <section id="sobre" className="py-14 sm:py-20 lg:py-24 bg-[#0b0b0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="relative">
              <div className="aspect-[4/3] md:aspect-square relative rounded-3xl overflow-hidden border border-gold-400/25 shadow-2xl">
                <Image
                  src={IMAGES.about}
                  alt="Juliano Arruda do Amaral, fundador da Topvan Transporte Executivo em Piedade-SP"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 bg-gold-400 text-black font-bold px-4 py-2 rounded-xl shadow-lg text-xs sm:text-sm">
                Desde {COMPANY.foundingYear} em Piedade
              </div>
            </div>
          </div>

          <div>
            <p className="text-gold-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
              Nossa História
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              Tradição e Confiança em Piedade-SP
            </h2>

            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                A{" "}
                <strong className="text-white">{COMPANY.legalName}</strong>{" "}
                foi fundada em {COMPANY.foundingYear} por{" "}
                <strong className="text-white">{COMPANY.founder}</strong>,
                somando mais de uma década de dedicação nas estradas da região.
              </p>
              <p>
                Sediada em{" "}
                <strong className="text-white">Piedade-SP</strong>, nascemos com
                um propósito claro: unir a pontualidade exigida por estudantes
                universitários e escolares com o conforto de uma viagem
                executiva.
              </p>
              <p>
                Hoje, somos referência na rota{" "}
                <strong className="text-white">Piedade ⇄ Sorocaba</strong> e no
                turismo regional, reconhecidos pela nossa frota impecável na cor
                preta e pelo atendimento próximo e familiar.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#131318] border border-white/10">
                <span className="block text-2xl sm:text-3xl font-display font-bold text-gold-400 mb-1">
                  +10
                </span>
                <span className="text-xs sm:text-sm text-gray-400">
                  Anos de Experiência
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#131318] border border-white/10">
                <span className="block text-2xl sm:text-3xl font-display font-bold text-gold-400 mb-1">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-gray-400">
                  Frota Própria e Revisada
                </span>
              </div>
            </div>

            <div className="mt-7">
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-gold-400 hover:text-white font-semibold transition-colors text-sm sm:text-base"
              >
                <span>Conheça a história completa da Topvan</span>
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
