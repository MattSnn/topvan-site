import Image from "next/image";
import Link from "next/link";
import { COMPANY, IMAGES } from "@/lib/site";

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden border border-gold-400/20 grayscale hover:grayscale-0 transition-all duration-700">
                <Image
                  src={IMAGES.about}
                  alt="Juliano Arruda do Amaral, fundador da Topvan Transporte Executivo em Piedade-SP"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-gold-400 text-black font-bold px-6 py-3 rounded-xl shadow-lg">
                Desde {COMPANY.foundingYear} em Piedade
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-gold-400 font-bold uppercase tracking-widest mb-4">
              Nossa História
            </p>
            <h2 className="text-4xl font-bold text-white mb-6">
              Tradição e Confiança em Piedade-SP
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                A{" "}
                <strong className="text-white">{COMPANY.legalName}</strong>{" "}
                foi fundada em {COMPANY.foundingYear} por{" "}
                <strong className="text-white">{COMPANY.founder}</strong>, mas
                nossa experiência no transporte de passageiros começou muito
                antes, somando mais de uma década de dedicação nas estradas.
              </p>
              <p>
                Sediada em{" "}
                <strong className="text-white">Piedade-SP</strong>, nascemos com
                um propósito claro: oferecer um transporte que unisse a
                pontualidade necessária para estudantes universitários, alunos de
                escolas e trabalhadores com o conforto de uma viagem executiva.
              </p>
              <p>
                Hoje, somos referência na rota{" "}
                <strong className="text-white">Piedade ⇄ Sorocaba</strong> e no
                turismo regional, reconhecidos pela nossa frota impecável na cor
                preta e pelo atendimento próximo e familiar.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-900 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-3xl font-bold text-gold-400 mb-1">
                  +10
                </span>
                <span className="text-sm text-gray-400">
                  Anos de Experiência
                </span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-gold-400 mb-1">
                  100%
                </span>
                <span className="text-sm text-gray-400">
                  Frota Própria e Revisada
                </span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-gold-400 hover:text-white font-semibold transition-colors"
              >
                Conheça a história completa da Topvan →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
