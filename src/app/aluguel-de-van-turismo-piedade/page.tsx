import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import FAQ from "@/components/FAQ";
import ServiceCrossLinks from "@/components/ServiceCrossLinks";
import {
  FAQItem,
  IMAGES,
  buildWhatsAppUrl,
  getServiceSchema,
} from "@/lib/site";

const PAGE_PATH = "/aluguel-de-van-turismo-piedade";
const PAGE_TITLE = "Aluguel de Van e Turismo em Piedade-SP | Excursões e Fretamento";
const PAGE_DESCRIPTION =
  "Aluguel de van executiva com motorista em Piedade-SP (18 lugares). Fretamento para turismo, romarias a Aparecida do Norte, parques aquáticos, litoral, eventos esportivos e viagens.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "aluguel de van piedade sp",
    "fretamento de van piedade",
    "turismo piedade sp",
    "excursão aparecida do norte piedade",
    "van com motorista piedade",
    "locadora de van piedade",
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

const TOURISM_FAQS: FAQItem[] = [
  {
    question: "Quantos passageiros cabem na van para turismo e excursões?",
    answer:
      "Nossa Mercedes-Benz Sprinter executiva acomoda até 18 passageiros em bancos de couro reclináveis, com ar-condicionado, TV digital, som e espaço para bagagens.",
  },
  {
    question: "O aluguel de van em Piedade inclui motorista?",
    answer:
      "Sim. Todo fretamento de turismo, romaria ou viagem da Topvan inclui motorista profissional experiente e conhecedor das rodovias do estado de São Paulo.",
  },
  {
    question: "Quais destinos vocês atendem saindo de Piedade?",
    answer:
      "Atendemos Aparecida do Norte, parques aquáticos (como Castelo Park Aquático em Cesário Lange), litoral paulista, Holambra, capital paulista, campeonatos esportivos e roteiros personalizados sob demanda.",
  },
];

export default function AluguelVanTurismoPage() {
  const highlights = [
    {
      title: "Romarias e Turismo Religioso",
      description:
        "Viagens organizadas saindo de Piedade para Aparecida do Norte, Canção Nova e eventos de igrejas com total comodidade.",
      image: IMAGES.tourismAparecida,
      alt: "Excursão com van da Topvan saindo de Piedade-SP para Aparecida do Norte",
    },
    {
      title: "Parques Aquáticos e Lazer",
      description:
        "Excursões em família e grupos de amigos para o Castelo Park Aquático em Cesário Lange, parques temáticos e praias.",
      image: IMAGES.tourismWaterPark,
      alt: "Van da Topvan em viagem de turismo para o Castelo Park Aquático",
    },
    {
      title: "Equipes Esportivas e Grupos",
      description:
        "Transporte de delegações, academias, associações (como o Kaikan de Piedade) e excursões culturais.",
      image: IMAGES.tourismSports,
      alt: "Transporte de delegação esportiva de Piedade pela Topvan",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <JsonLd
        data={getServiceSchema({
          name: "Aluguel de Van e Turismo em Piedade-SP",
          description: PAGE_DESCRIPTION,
          path: PAGE_PATH,
          serviceType: "Aluguel de Van com Motorista e Turismo",
          areaServed: [
            "Piedade - SP",
            "Sorocaba - SP",
            "Estado de São Paulo",
          ],
        })}
      />

      <PageHero
        breadcrumbs={[
          { name: "Aluguel de Van e Turismo em Piedade", href: PAGE_PATH },
        ]}
        badge="Turismo & Fretamento • 18 Lugares"
        title="Aluguel de Van com Motorista e"
        highlight="Turismo em Piedade-SP"
        description="Fretamento executivo em Mercedes-Benz Sprinter preta para romarias, excursões em família, praias, parques aquáticos, viagens corporativas e eventos esportivos."
        whatsappMessage="Olá! Gostaria de um orçamento para aluguel de van / viagem de turismo saindo de Piedade."
        ctaLabel="Cotar Viagem pelo WhatsApp"
      />

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-3">
              Roteiros e Excursões
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Viaje com seu grupo junto, sem cansaço na estrada
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Reuniu até 18 pessoas em Piedade ou região? Em vez de dividir o
              grupo em vários carros, viaje em nossa Sprinter executiva com
              ar-condicionado, TV digital e som integrado com Alexa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-black border border-zinc-800 rounded-3xl overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-zinc-900 border border-gold-400/20 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Planejando uma excursão saindo de Piedade?
              </h3>
              <p className="text-gray-400">
                Confira também nosso guia com ideias de roteiros para grupos ou
                peça seu orçamento personalizado agora mesmo.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/guias/destinos-excursao-aluguel-van-piedade"
                className="border border-gold-400 text-gold-400 font-bold px-6 py-3 rounded-full hover:bg-gold-400 hover:text-black transition-all text-sm"
              >
                Ver Guia de Destinos
              </Link>
              <a
                href={buildWhatsAppUrl(
                  "Olá! Quero cotar o aluguel da van executiva para uma viagem saindo de Piedade."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-400 hover:bg-gold-500 text-black font-bold px-6 py-3 rounded-full transition-all text-sm"
              >
                Orçamento no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        faqs={TOURISM_FAQS}
        subtitle="Dúvidas sobre Fretamento e Turismo"
        title="Perguntas frequentes sobre aluguel de van em Piedade"
      />

      <ServiceCrossLinks currentPath={PAGE_PATH} />
    </main>
  );
}
