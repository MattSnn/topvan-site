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
  NIGHT_UNIVERSITIES,
  buildWhatsAppUrl,
  getServiceSchema,
} from "@/lib/site";

const PAGE_PATH = "/transporte-universitario-piedade-sorocaba";
const PAGE_TITLE = "Transporte Universitário Piedade ⇄ Sorocaba | Van Executiva";
const PAGE_DESCRIPTION =
  "Van universitária diária saindo de Piedade-SP para UNISO, FACENS, UNIP, Anhanguera e FATEC Sorocaba. Embarque porta a porta, conforto executivo em Mercedes Sprinter e retorno seguro.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "transporte universitário piedade",
    "van universitária piedade sorocaba",
    "van para uniso piedade",
    "van para facens piedade",
    "van para unip sorocaba piedade",
    "transporte faculdade piedade sp",
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

const UNI_FAQS: FAQItem[] = [
  {
    question: "Quais faculdades de Sorocaba a Topvan atende à noite?",
    answer:
      "Nossa rota universitária noturna atende UNISO (Universidade de Sorocaba), FACENS, UNIP Campus Sorocaba, Anhanguera Sorocaba e FATEC Sorocaba, com saída organizada de Piedade-SP.",
  },
  {
    question: "A van busca o estudante em casa em Piedade?",
    answer:
      "Sim. Realizamos embarque e desembarque porta a porta dentro do perímetro atendido em Piedade-SP sempre que viável na rota, evitando que o estudante caminhe sozinho tarde da noite.",
  },
  {
    question: "Como funciona a reserva de vaga para o semestre 2026/2027?",
    answer:
      "Como trabalhamos com van Mercedes Sprinter executiva de 18 lugares, as vagas por turno são limitadas. Basta chamar no WhatsApp (15) 99628-4505 informando sua faculdade, curso e bairro em Piedade.",
  },
  {
    question: "Posso usar o Auxílio-Transporte Universitário da Prefeitura junto com a van?",
    answer:
      "O benefício financeiro da Prefeitura de Piedade segue regras próprias de edital semestral na Secretaria de Educação. Confira nosso guia completo no site para saber como solicitar o auxílio e planejar sua mensalidade na van.",
  },
];

export default function TransporteUniversitarioPage() {
  return (
    <main className="min-h-screen bg-black">
      <JsonLd
        data={getServiceSchema({
          name: "Transporte Universitário Piedade ⇄ Sorocaba",
          description: PAGE_DESCRIPTION,
          path: PAGE_PATH,
          serviceType: "Transporte Universitário Intermunicipal",
          areaServed: ["Piedade - SP", "Sorocaba - SP", "Votorantim - SP"],
        })}
      />

      <PageHero
        breadcrumbs={[
          { name: "Transporte Universitário Piedade ⇄ Sorocaba", href: PAGE_PATH },
        ]}
        badge="Rota Noturna Diária • Piedade-SP"
        title="Transporte Universitário"
        highlight="Piedade ⇄ Sorocaba"
        description="Vá e volte da faculdade em Sorocaba com pontualidade, conforto executivo e embarque porta a porta em Piedade-SP na Mercedes-Benz Sprinter da Topvan."
        whatsappMessage="Olá! Gostaria de consultar vaga para o transporte universitário Piedade - Sorocaba."
        ctaLabel="Consultar Vaga no WhatsApp"
      />

      {/* Faculdades e Benefícios */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-3">
              Faculdades Atendidas
            </p>
            <h2 className="text-3xl font-bold text-white mb-6">
              Rota diária para os principais campi de Sorocaba
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Desde 2016, a Topvan conecta estudantes de Piedade às
              universidades de Sorocaba sem depender de baldeações na rodoviária
              ou esperas arriscadas após o último horário de aula.
            </p>

            <ul className="space-y-3 mb-8">
              {NIGHT_UNIVERSITIES.map((uni) => (
                <li
                  key={uni}
                  className="flex items-center gap-3 p-3.5 bg-black border border-zinc-800 rounded-xl text-gray-200 font-medium"
                >
                  <svg
                    className="w-5 h-5 text-gold-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {uni}
                </li>
              ))}
            </ul>

            <div className="p-5 bg-gold-400/10 border border-gold-400/25 rounded-2xl">
              <p className="text-sm text-gray-200 leading-relaxed">
                <strong className="text-gold-400">Dica para calouros:</strong>{" "}
                veja também nosso{" "}
                <Link
                  href="/guias/auxilio-transporte-universitario-piedade"
                  className="text-gold-400 underline hover:text-white"
                >
                  guia sobre o Auxílio-Transporte Universitário de Piedade
                </Link>{" "}
                e descubra como se organizar para o semestre.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-zinc-800">
              <Image
                src={IMAGES.hero}
                alt="Mercedes-Benz Sprinter executiva preta usada no transporte universitário entre Piedade e Sorocaba"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-black border border-zinc-800 rounded-2xl">
                <h3 className="text-white font-bold mb-2">
                  Embarque Porta a Porta
                </h3>
                <p className="text-gray-400 text-sm">
                  Mais segurança para você e tranquilidade para sua família na
                  chegada à noite em Piedade.
                </p>
              </div>
              <div className="p-6 bg-black border border-zinc-800 rounded-2xl">
                <h3 className="text-white font-bold mb-2">
                  Conforto Pós-Aula
                </h3>
                <p className="text-gray-400 text-sm">
                  18 bancos em couro reclináveis, ar-condicionado e som com
                  Alexa para descansar no trajeto.
                </p>
              </div>
            </div>

            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-white font-bold">
                  Estuda de manhã em escola técnica ou colégio?
                </p>
                <p className="text-gray-400 text-sm">
                  Confira nossa rota matinal escolar para o centro de Sorocaba.
                </p>
              </div>
              <Link
                href="/transporte-escolar-piedade-sorocaba"
                className="text-gold-400 font-bold text-sm hover:text-white whitespace-nowrap"
              >
                Ver Rota Escolar →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        faqs={UNI_FAQS}
        subtitle="Dúvidas sobre a Van Universitária"
        title="Perguntas frequentes de universitários de Piedade"
      />

      <section className="py-16 bg-zinc-950 border-t border-zinc-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Garanta sua vaga na van universitária
          </h2>
          <p className="text-gray-400 mb-8">
            Fale diretamente com Juliano Amaral pelo WhatsApp e informe sua
            faculdade em Sorocaba e seu bairro em Piedade.
          </p>
          <a
            href={buildWhatsAppUrl(
              "Olá! Quero consultar valor e vaga para o transporte universitário Piedade - Sorocaba."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold-400 hover:bg-gold-500 text-black font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            Consultar Vaga Agora no WhatsApp
          </a>
        </div>
      </section>

      <ServiceCrossLinks currentPath={PAGE_PATH} />
    </main>
  );
}
