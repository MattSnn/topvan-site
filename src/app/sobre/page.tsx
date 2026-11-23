import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceCrossLinks from "@/components/ServiceCrossLinks";
import { COMPANY, IMAGES, buildWhatsAppUrl } from "@/lib/site";

const PAGE_PATH = "/sobre";
const PAGE_TITLE = "Sobre a Topvan | Empresa de Transporte Executivo em Piedade-SP";
const PAGE_DESCRIPTION =
  "Conheça a história da TOPVAN LOCADORA DE VEICULOS LTDA (CNPJ 23.928.576/0001-19), fundada em 2016 em Piedade-SP por Juliano Arruda do Amaral.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "topvan piedade",
    "topvan locadora de veiculos",
    "juliano arruda do amaral topvan",
    "empresa transporte piedade sp",
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

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-black">
      <PageHero
        breadcrumbs={[{ name: "Sobre a Topvan", href: PAGE_PATH }]}
        badge={`Sediada em Piedade-SP • Desde ${COMPANY.foundingYear}`}
        title="Conheça a"
        highlight="Topvan Locadora de Veículos"
        description="Mais de uma década de experiência nas rodovias da região de Sorocaba, unindo atendimento familiar, pontualidade rigorosa e frota própria na cor preta."
        whatsappMessage="Olá! Gostaria de falar com a equipe da Topvan."
        ctaLabel="Falar com a Topvan no WhatsApp"
      />

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-gold-400/20">
            <Image
              src={IMAGES.about}
              alt="Juliano Arruda do Amaral, fundador da Topvan em Piedade-SP"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-gold-400 font-bold uppercase tracking-widest text-sm">
              Nossa História e Valores
            </p>
            <h2 className="text-3xl font-bold text-white">
              Compromisso com quem estuda, trabalha e viaja em Piedade
            </h2>
            <p className="text-gray-300 leading-relaxed">
              A <strong className="text-white">{COMPANY.legalName}</strong>{" "}
              nasceu oficialmente em {COMPANY.foundingYear}, idealizada por{" "}
              <strong className="text-white">{COMPANY.founder}</strong> após
              anos de vivência prática no transporte de passageiros em Piedade e
              região.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Desde o primeiro dia, nosso foco sempre foi entregar muito mais do
              que um simples deslocamento: garantir que estudantes universitários
              e escolares cheguem no horário às suas instituições em Sorocaba e
              retornem com segurança para casa, além de oferecer vans executivas
              impecáveis para turismo, romarias e eventos.
            </p>

            <div className="p-6 bg-black border border-zinc-800 rounded-2xl space-y-2 text-sm text-gray-300">
              <h3 className="text-gold-400 font-bold uppercase tracking-wider text-xs mb-3">
                Dados Oficiais da Empresa
              </h3>
              <p>
                <strong className="text-white">Razão Social:</strong>{" "}
                {COMPANY.legalName}
              </p>
              <p>
                <strong className="text-white">CNPJ:</strong> {COMPANY.cnpj}
              </p>
              <p>
                <strong className="text-white">Administração:</strong>{" "}
                {COMPANY.founder}
              </p>
              <p>
                <strong className="text-white">Endereço:</strong>{" "}
                {COMPANY.streetAddress} — {COMPANY.city}/{COMPANY.state}, CEP{" "}
                {COMPANY.postalCode}
              </p>
              <p>
                <strong className="text-white">Telefone / WhatsApp:</strong>{" "}
                <a
                  href={`tel:${COMPANY.phoneE164}`}
                  className="text-gold-400 hover:underline"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </p>
              <p>
                <strong className="text-white">E-mail:</strong>{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-gold-400 hover:underline"
                >
                  {COMPANY.email}
                </a>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={buildWhatsAppUrl("Olá! Vim pela página Sobre da Topvan.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-400 hover:bg-gold-500 text-black font-bold px-6 py-3 rounded-full transition-all text-sm"
              >
                Conversar no WhatsApp
              </a>
              <Link
                href="/guias"
                className="border border-zinc-700 hover:border-gold-400 text-white font-semibold px-6 py-3 rounded-full transition-all text-sm"
              >
                Ler Guias da Topvan
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentPath={PAGE_PATH} />
    </main>
  );
}
