import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCrossLinks from "@/components/ServiceCrossLinks";
import { GUIDES } from "@/lib/guides";

const PAGE_PATH = "/guias";
const PAGE_TITLE = "Guias de Transporte Universitário, Auxílio e Turismo | Topvan Piedade";
const PAGE_DESCRIPTION =
  "Guias práticos para estudantes e moradores de Piedade-SP: como funciona o Auxílio-Transporte Universitário, dicas para escolher van para Sorocaba e melhores destinos para excursões.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "auxilio transporte universitario piedade",
    "guias transporte piedade sorocaba",
    "dicas aluguel de van piedade",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_PATH,
  },
};

export default function GuiasIndexPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="pt-32 pb-16 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Guias", href: PAGE_PATH }]} />
          <div className="max-w-3xl">
            <p className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-3">
              Central de Conteúdo • Piedade-SP
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Guias Práticos sobre Transporte e{" "}
              <span className="text-gold-400">Viagens em Piedade</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Informações úteis para estudantes que vão diariamente para
              Sorocaba, pais em busca de segurança no transporte escolar e grupos
              planejando excursões em van executiva.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {GUIDES.map((guide) => (
            <article
              key={guide.slug}
              className="bg-black border border-zinc-800 rounded-3xl overflow-hidden hover:border-gold-400/50 transition-all flex flex-col justify-between group"
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
                <div className="p-7">
                  <div className="flex items-center justify-between text-xs font-semibold text-gold-400 mb-3">
                    <span>{guide.badge}</span>
                    <span className="text-gray-500">{guide.readingTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                    <Link href={`/guias/${guide.slug}`}>{guide.title}</Link>
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {guide.excerpt}
                  </p>
                </div>
              </div>
              <div className="px-7 pb-7">
                <Link
                  href={`/guias/${guide.slug}`}
                  className="inline-flex items-center gap-2 text-gold-400 hover:text-white font-semibold text-sm transition-colors"
                >
                  Ler guia completo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ServiceCrossLinks currentPath={PAGE_PATH} />
    </main>
  );
}
