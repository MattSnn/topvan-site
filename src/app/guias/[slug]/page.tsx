import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ServiceCrossLinks from "@/components/ServiceCrossLinks";
import { GUIDES, getGuideBySlug } from "@/lib/guides";
import { buildWhatsAppUrl, getArticleSchema } from "@/lib/site";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guia não encontrado",
    };
  }

  const pagePath = `/guias/${guide.slug}`;

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: pagePath,
    },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.description,
      url: pagePath,
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
    },
  };
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const pagePath = `/guias/${guide.slug}`;

  return (
    <main className="min-h-screen bg-black">
      <JsonLd
        data={getArticleSchema({
          title: guide.title,
          description: guide.description,
          path: pagePath,
          datePublished: guide.datePublished,
          dateModified: guide.dateModified,
          image: guide.image,
        })}
      />

      <article>
        <header className="pt-32 pb-12 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 border-b border-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Guias", href: "/guias" },
                { name: guide.shortTitle, href: pagePath },
              ]}
            />

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="inline-block bg-gold-400/15 border border-gold-400/30 rounded-full px-4 py-1 text-gold-400 font-bold text-xs uppercase tracking-wide">
                {guide.badge}
              </span>
              <span className="text-sm text-gray-400">{guide.readingTime}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {guide.title}
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {guide.description}
            </p>

            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-zinc-800">
              <Image
                src={guide.image}
                alt={guide.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </div>
        </header>

        <div className="py-16 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {guide.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-gray-300 text-base md:text-lg leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-3 pt-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 p-4 bg-black border border-zinc-800 rounded-2xl text-gray-200"
                      >
                        <svg
                          className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5"
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
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* CTA box */}
            <div className="p-8 bg-black border border-gold-400/30 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">
                  Atendimento Topvan Piedade-SP
                </p>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Precisa de vaga na van ou orçamento de viagem?
                </h2>
                <p className="text-gray-400 text-sm">
                  Fale diretamente pelo WhatsApp ou acesse a página do serviço
                  relacionado.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={buildWhatsAppUrl(
                    `Olá! Li o guia "${guide.shortTitle}" no site da Topvan e gostaria de mais informações.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-400 hover:bg-gold-500 text-black font-bold px-6 py-3 rounded-full transition-all text-sm"
                >
                  Chamar no WhatsApp
                </a>
                <Link
                  href={guide.relatedServiceHref}
                  className="border border-zinc-700 hover:border-gold-400 text-white font-semibold px-6 py-3 rounded-full transition-all text-sm"
                >
                  {guide.relatedServiceLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <ServiceCrossLinks currentPath="/guias" />
    </main>
  );
}
