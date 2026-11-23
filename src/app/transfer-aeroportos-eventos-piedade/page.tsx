import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import FAQ from "@/components/FAQ";
import ServiceCrossLinks from "@/components/ServiceCrossLinks";
import { FAQItem, IMAGES, buildWhatsAppUrl, getServiceSchema } from "@/lib/site";

const PAGE_PATH = "/transfer-aeroportos-eventos-piedade";
const PAGE_TITLE = "Transfer Aeroportos, Casamentos e Eventos | Topvan Piedade";
const PAGE_DESCRIPTION =
  "Transfer executivo de Piedade-SP e região para os aeroportos de Guarulhos (GRU), Congonhas (CGH) e Viracopos (VCP), além de vans para casamentos, shows e fretamento corporativo.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "transfer aeroporto piedade",
    "van para guarulhos piedade",
    "van para viracopos piedade",
    "van para casamento piedade sp",
    "transporte executivo eventos piedade",
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

const TRANSFER_FAQS: FAQItem[] = [
  {
    question: "Para quais aeroportos a Topvan realiza transfer saindo de Piedade?",
    answer:
      "Realizamos traslados de ida e volta para o Aeroporto Internacional de Guarulhos (GRU), Aeroporto de Congonhas (CGH) e Aeroporto de Viracopos em Campinas (VCP).",
  },
  {
    question: "A van tem espaço para malas de viagem em grupo?",
    answer:
      "Sim. Nossa Mercedes-Benz Sprinter conta com compartimento adequado para bagagens e acomodação confortável de famílias e equipes executivas.",
  },
  {
    question: "Vocês fazem logística de convidados para casamentos e shows?",
    answer:
      "Sim! Levamos e buscamos convidados de casamentos, festas, convenções e shows em estádios ou casas de espetáculo em São Paulo e região, garantindo retorno seguro sem preocupação com direção.",
  },
];

export default function TransferAeroportosEventosPage() {
  const solutions = [
    {
      title: "Aeroporto de Guarulhos (GRU), Congonhas (CGH) e Viracopos (VCP)",
      detail:
        "Pontualidade absoluta para embarques e recepção programada no desembarque com traslado direto para Piedade, Sorocaba e Votorantim.",
    },
    {
      title: "Casamentos, Festas e Eventos Sociais",
      detail:
        "Transporte exclusivo para padrinhos, familiares e convidados entre hotéis, chácaras e salões em Piedade e região.",
    },
    {
      title: "Shows, Festivais e Jogos em Estádios",
      detail:
        "Vá com sua turma para grandes eventos em São Paulo e região sem estresse com trânsito, estacionamento caro ou lei seca.",
    },
    {
      title: "Fretamento Corporativo e Visitas Técnicas",
      detail:
        "Atendimento padrão executivo em Mercedes Sprinter preta para diretores, colaboradores, feiras e convenções empresariais.",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <JsonLd
        data={getServiceSchema({
          name: "Transfer Aeroportos, Casamentos e Eventos — Topvan Piedade",
          description: PAGE_DESCRIPTION,
          path: PAGE_PATH,
          serviceType: "Transfer Executivo e Transporte para Eventos",
          areaServed: [
            "Piedade - SP",
            "Sorocaba - SP",
            "Guarulhos - SP",
            "São Paulo - SP",
            "Campinas - SP",
          ],
        })}
      />

      <PageHero
        breadcrumbs={[
          { name: "Transfer Aeroportos e Eventos", href: PAGE_PATH },
        ]}
        badge="Atendimento Sob Agendamento"
        title="Transfer Aeroportos, Casamentos e"
        highlight="Eventos em Piedade"
        description="Traslados executivos de Piedade-SP para Guarulhos, Congonhas e Viracopos, além de transporte seguro para convidados de casamentos, shows e compromissos corporativos."
        whatsappMessage="Olá! Gostaria de um orçamento de transfer para aeroporto ou evento saindo de Piedade."
        ctaLabel="Solicitar Orçamento de Transfer"
      />

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gold-400 font-bold uppercase tracking-widest text-sm">
              Executivo & Pontualidade
            </p>
            <h2 className="text-3xl font-bold text-white">
              Logística sob medida para sua viagem ou evento
            </h2>
            <div className="space-y-4">
              {solutions.map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-black border border-zinc-800 rounded-2xl"
                >
                  <h3 className="text-lg font-bold text-gold-400 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-zinc-800">
              <Image
                src={IMAGES.hero}
                alt="Mercedes-Benz Sprinter preta da Topvan para transfer executivo em Piedade-SP"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Precisa de traslado com horário marcado?
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Envie a data, horário do voo ou local do evento e quantidade de
                passageiros para cotação imediata.
              </p>
              <a
                href={buildWhatsAppUrl(
                  "Olá! Preciso cotar um transfer para aeroporto ou evento saindo de Piedade."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold-400 hover:bg-gold-500 text-black font-bold px-8 py-4 rounded-full transition-all"
              >
                Cotar Transfer pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        faqs={TRANSFER_FAQS}
        subtitle="Dúvidas sobre Traslados e Eventos"
        title="Perguntas frequentes sobre transfer e casamentos"
      />

      <ServiceCrossLinks currentPath={PAGE_PATH} />
    </main>
  );
}
