import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import ServiceCrossLinks from "@/components/ServiceCrossLinks";
import { IMAGES, buildWhatsAppUrl, getServiceSchema } from "@/lib/site";

const PAGE_PATH = "/frota-mercedes-sprinter-executiva";
const PAGE_TITLE = "Frota Mercedes-Benz Sprinter Executiva 18 Lugares | Topvan Piedade";
const PAGE_DESCRIPTION =
  "Conheça a frota da Topvan em Piedade-SP: Mercedes-Benz Sprinter preta 100% executiva para 18 passageiros, bancos em couro reclináveis, cortinas, porta automática, tomadas para celular, iluminação interna, ar-condicionado, TV digital e Alexa.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "mercedes sprinter executiva piedade",
    "van 18 lugares piedade",
    "frota topvan piedade",
    "van com bancos em couro piedade",
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

export default function FrotaPage() {
  const specs = [
    {
      title: "18 Lugares em Couro e Cortinas",
      description:
        "Bancos individuais em couro com encosto reclinável e cortinas para mais privacidade e descanso.",
    },
    {
      title: "Climatização & Iluminação Interna",
      description:
        "Sistema de ar-condicionado completo com dutos individuais e iluminação interna aconchegante.",
    },
    {
      title: "Tomadas & Porta Automática",
      description:
        "Tomadas para carregar seu celular durante o trajeto e embarque prático com porta automática.",
    },
    {
      title: "TV Digital e Sistema de Som",
      description:
        "Tela a bordo e som de alta qualidade para tornar viagens diárias e excursões mais agradáveis.",
    },
    {
      title: "Conectividade Alexa",
      description:
        "Escolha suas músicas e interaja durante passeios, excursões ou viagens universitárias.",
    },
    {
      title: "Frota Própria, Revisada e Bagageiro",
      description:
        "Manutenção preventiva em dia, higienização constante e espaço organizado para mochilas e malas.",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <JsonLd
        data={getServiceSchema({
          name: "Frota Mercedes-Benz Sprinter Executiva — Topvan Piedade",
          description: PAGE_DESCRIPTION,
          path: PAGE_PATH,
          serviceType: "Locação e Transporte em Van Executiva",
          areaServed: ["Piedade - SP", "Sorocaba - SP", "Estado de São Paulo"],
        })}
      />

      <PageHero
        breadcrumbs={[
          { name: "Frota Mercedes-Benz Sprinter Executiva", href: PAGE_PATH },
        ]}
        badge="Padrão Executivo • 18 Lugares"
        title="Frota Mercedes-Benz"
        highlight="Sprinter Executiva"
        description="Conforto, segurança e visual sofisticado na cor preta para rotas universitárias diárias Piedade ⇄ Sorocaba, excursões de turismo, casamentos e traslados corporativos."
        whatsappMessage="Olá! Gostaria de solicitar um orçamento para viajar na Mercedes Sprinter executiva da Topvan."
        ctaLabel="Solicitar Orçamento para Esta Van"
      />

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-800">
              <Image
                src={IMAGES.fleet}
                alt="Interior e configuração executiva da Mercedes-Benz Sprinter da Topvan em Piedade-SP"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-zinc-800">
              <Image
                src={IMAGES.hero}
                alt="Exterior da Mercedes-Benz Sprinter preta da Topvan em Piedade-SP"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-3">
              Especificações & Diferenciais
            </p>
            <h2 className="text-3xl font-bold text-white">
              Pensada para o bem-estar de cada passageiro
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec) => (
              <div
                key={spec.title}
                className="p-6 bg-black border border-zinc-800 rounded-2xl hover:border-gold-400/40 transition-colors"
              >
                <h3 className="text-lg font-bold text-gold-400 mb-2">
                  {spec.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href={buildWhatsAppUrl(
                "Olá! Gostaria de verificar disponibilidade da Mercedes Sprinter da Topvan."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold-400 hover:bg-gold-500 text-black font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              Consultar Disponibilidade pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentPath={PAGE_PATH} />
    </main>
  );
}
