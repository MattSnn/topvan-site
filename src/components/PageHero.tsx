import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BreadcrumbItem, buildWhatsAppUrl } from "@/lib/site";

interface PageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  whatsappMessage: string;
  ctaLabel?: string;
}

const PageHero = ({
  breadcrumbs,
  badge,
  title,
  highlight,
  description,
  whatsappMessage,
  ctaLabel = "Solicitar Orçamento pelo WhatsApp",
}: PageHeroProps) => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="max-w-4xl">
          <div className="inline-block bg-gold-400/15 border border-gold-400/30 rounded-full px-4 py-1 mb-5">
            <span className="text-gold-400 font-bold text-xs sm:text-sm tracking-wide uppercase">
              {badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {title}{" "}
            {highlight ? <span className="text-gold-400">{highlight}</span> : null}
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={buildWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-400 hover:bg-gold-500 text-black font-bold px-8 py-4 rounded-full text-center transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.25)]"
            >
              {ctaLabel}
            </a>
            <Link
              href="/#contato"
              className="border border-white/30 hover:border-gold-400 hover:text-gold-400 text-white font-bold px-8 py-4 rounded-full text-center transition-all"
            >
              Preencher Formulário de Cotação
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
