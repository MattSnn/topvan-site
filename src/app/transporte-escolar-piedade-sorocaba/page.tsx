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
  MORNING_SCHOOLS,
  buildWhatsAppUrl,
  getServiceSchema,
} from "@/lib/site";

const PAGE_PATH = "/transporte-escolar-piedade-sorocaba";
const PAGE_TITLE = "Transporte Escolar Piedade ⇄ Sorocaba | Colégios e ETEC";
const PAGE_DESCRIPTION =
  "Transporte escolar matinal de Piedade-SP para Sorocaba: Colégio Ser, Objetivo, Anglo, ETEC Fernando Prestes, ETEC Rubens de Faria, FADI, FEFISO e IFSP. Segurança porta a porta.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "transporte escolar piedade sorocaba",
    "van escolar piedade sorocaba",
    "van objetivo sorocaba piedade",
    "van etec sorocaba piedade",
    "van colegio ser anglo piedade",
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

const SCHOOL_FAQS: FAQItem[] = [
  {
    question: "Quais escolas e cursos técnicos em Sorocaba são atendidos pela manhã?",
    answer:
      "Atendemos Colégio Ser, Objetivo, Anglo, ETEC Fernando Prestes, ETEC Rubens de Faria e Souza, FADI, FEFISO, IFSP Sorocaba e outras instituições da região central.",
  },
  {
    question: "Os pais têm segurança no embarque e desembarque em Piedade?",
    answer:
      "Sim. Realizamos embarque e desembarque porta a porta em Piedade-SP sempre que possível no itinerário, com motorista experiente e comunicação direta com a família.",
  },
  {
    question: "Qual veículo faz a rota escolar Piedade ⇄ Sorocaba?",
    answer:
      "A rota é feita em Mercedes-Benz Sprinter preta 100% executiva, com ar-condicionado, bancos de couro reclináveis e manutenção preventiva rigorosa.",
  },
];

export default function TransporteEscolarPage() {
  return (
    <main className="min-h-screen bg-black">
      <JsonLd
        data={getServiceSchema({
          name: "Transporte Escolar Piedade ⇄ Sorocaba",
          description: PAGE_DESCRIPTION,
          path: PAGE_PATH,
          serviceType: "Transporte Escolar Intermunicipal",
          areaServed: ["Piedade - SP", "Sorocaba - SP"],
        })}
      />

      <PageHero
        breadcrumbs={[
          { name: "Transporte Escolar Piedade ⇄ Sorocaba", href: PAGE_PATH },
        ]}
        badge="Período da Manhã • Piedade-SP"
        title="Transporte Escolar"
        highlight="Piedade ⇄ Sorocaba"
        description="Pontualidade rigorosa para estudantes de ensino médio, colégios particulares e escolas técnicas de Sorocaba, com embarque porta a porta em Piedade e frota própria revisada."
        whatsappMessage="Olá! Gostaria de consultar vaga para o transporte escolar matinal Piedade - Sorocaba."
        ctaLabel="Consultar Vaga Escolar no WhatsApp"
      />

      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-3">
              Instituições de Ensino Atendidas
            </p>
            <h2 className="text-3xl font-bold text-white mb-6">
              Chegada pontual para a primeira aula no centro e bairros de
              Sorocaba
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Sabemos que pais e responsáveis precisam de tranquilidade ao enviar
              seus filhos para estudar em outra cidade. Na Topvan, o trajeto
              matinal une experiência de mais de 10 anos na estrada, veículo
              revisado e atendimento próximo às famílias de Piedade.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {MORNING_SCHOOLS.map((school) => (
                <div
                  key={school}
                  className="flex items-center gap-3 p-3.5 bg-black border border-zinc-800 rounded-xl text-gray-200 text-sm font-medium"
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
                  {school}
                </div>
              ))}
            </div>

            <Link
              href="/guias/como-escolher-van-universitaria-piedade-sorocaba"
              className="text-gold-400 hover:text-white font-semibold text-sm inline-flex items-center gap-2"
            >
              Leia o checklist de segurança para pais e alunos →
            </Link>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-800">
              <Image
                src={IMAGES.fleet}
                alt="Van Mercedes-Benz Sprinter executiva da Topvan utilizada no transporte escolar Piedade Sorocaba"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 bg-black border border-zinc-800 rounded-2xl">
              <h3 className="text-white font-bold text-lg mb-2">
                Tradição e contato direto com o fundador
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                A Topvan é administrada por Juliano Arruda do Amaral em
                Piedade-SP desde 2016, oferecendo transparência no atendimento e
                mensalidades práticas via PIX ou dinheiro.
              </p>
              <a
                href={buildWhatsAppUrl(
                  "Olá! Gostaria de verificar disponibilidade de vaga no transporte escolar para Sorocaba."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gold-400 font-bold text-sm hover:text-white"
              >
                Falar diretamente pelo WhatsApp (15) 99628-4505 →
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        faqs={SCHOOL_FAQS}
        subtitle="Dúvidas sobre o Transporte Escolar"
        title="Informações importantes para pais e alunos"
      />

      <ServiceCrossLinks currentPath={PAGE_PATH} />
    </main>
  );
}
