import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { IconArrowRight, IconWhatsApp } from "@/components/Icons";
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
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-b from-[#0b0b0e] via-[#070708] to-[#0b0b0e] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-gold-400/12 border border-gold-400/30 rounded-full px-3.5 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span className="text-gold-300 font-bold text-xs sm:text-sm tracking-wide uppercase">
              {badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-[1.12] tracking-tight">
            {title}{" "}
            {highlight ? (
              <span className="gold-gradient-text">{highlight}</span>
            ) : null}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5">
            <a
              href={buildWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:brightness-110 text-black font-bold px-7 py-3.5 rounded-2xl sm:rounded-full text-center flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(212,175,55,0.22)]"
            >
              <IconWhatsApp className="w-5 h-5" />
              <span>{ctaLabel}</span>
            </a>
            <Link
              href="/#contato"
              className="w-full sm:w-auto min-h-[48px] border border-white/25 hover:border-gold-400 hover:text-gold-300 text-white font-semibold px-7 py-3.5 rounded-2xl sm:rounded-full text-center flex items-center justify-center gap-2 transition-all"
            >
              <span>Preencher Formulário de Cotação</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
