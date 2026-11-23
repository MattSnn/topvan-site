import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";
import { GUIDES } from "@/lib/guides";

const GuidesPreview = () => {
  return (
    <section
      id="guias"
      className="py-14 sm:py-20 lg:py-24 bg-[#070708] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4">
          <div className="max-w-2xl">
            <p className="text-gold-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
              Guias Locais & Utilidade Pública
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Guias e Dicas para Piedade e Sorocaba
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Conteúdo prático para estudantes universitários, pais de alunos e
              grupos que planejam excursões e viagens saindo de Piedade-SP.
            </p>
          </div>
          <Link
            href="/guias"
            className="inline-flex items-center gap-2 text-gold-400 border-b border-gold-400 pb-1 hover:text-white transition-colors font-semibold text-sm sm:text-base"
          >
            <span>Ver todos os guias</span>
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-xs text-gray-400 mb-3 flex items-center gap-1.5 md:hidden">
          <span>Deslize para ler os guias</span>
          <IconArrowRight className="w-3.5 h-3.5 text-gold-400" />
        </p>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-4 px-4 pb-2 no-scrollbar md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:mx-0 md:px-0 md:pb-0">
          {GUIDES.map((guide) => (
            <article
              key={guide.slug}
              className="w-[84vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none bg-[#0e0e11] border border-white/10 rounded-2xl overflow-hidden hover:border-gold-400/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <Link
                  href={`/guias/${guide.slug}`}
                  className="block relative aspect-[16/10] overflow-hidden"
                >
                  <Image
                    src={guide.image}
                    alt={guide.imageAlt}
                    fill
                    sizes="(max-width: 768px) 84vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between text-xs text-gold-400 font-semibold mb-2.5 gap-2">
                    <span className="truncate">{guide.badge}</span>
                    <span className="text-gray-500 flex-shrink-0">
                      {guide.readingTime}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-gold-400 transition-colors">
                    <Link href={`/guias/${guide.slug}`}>
                      {guide.shortTitle}
                    </Link>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {guide.excerpt}
                  </p>
                </div>
              </div>
              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                <Link
                  href={`/guias/${guide.slug}`}
                  className="inline-flex items-center gap-1.5 text-gold-400 hover:text-white text-sm font-semibold transition-colors"
                >
                  <span>Ler guia completo</span>
                  <IconArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidesPreview;
