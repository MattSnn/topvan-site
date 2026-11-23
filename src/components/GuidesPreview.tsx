import Image from "next/image";
import Link from "next/link";
import { GUIDES } from "@/lib/guides";

const GuidesPreview = () => {
  return (
    <section
      id="guias"
      className="py-24 bg-zinc-900/60 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-gold-400 font-bold uppercase tracking-widest mb-4">
              Guias Locais & Utilidade Pública
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Guias e Dicas para Piedade e Sorocaba
            </h2>
            <p className="text-gray-400 text-lg">
              Conteúdo prático para estudantes universitários, pais de alunos e
              grupos que planejam excursões e viagens saindo de Piedade-SP.
            </p>
          </div>
          <Link
            href="/guias"
            className="inline-flex items-center gap-2 text-gold-400 border-b border-gold-400 pb-1 hover:text-white transition-colors font-semibold"
          >
            Ver todos os guias →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {GUIDES.map((guide) => (
            <article
              key={guide.slug}
              className="bg-black border border-zinc-800 rounded-2xl overflow-hidden hover:border-gold-400/50 transition-all flex flex-col justify-between group"
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
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-gold-400 font-semibold mb-3">
                    <span>{guide.badge}</span>
                    <span className="text-gray-500">{guide.readingTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    <Link href={`/guias/${guide.slug}`}>
                      {guide.shortTitle}
                    </Link>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {guide.excerpt}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link
                  href={`/guias/${guide.slug}`}
                  className="inline-flex items-center gap-2 text-gold-400 hover:text-white text-sm font-semibold transition-colors"
                >
                  Ler guia completo →
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
