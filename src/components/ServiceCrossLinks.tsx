import Link from "next/link";
import { IconArrowRight } from "@/components/Icons";
import { SERVICES_NAV } from "@/lib/site";

interface ServiceCrossLinksProps {
  currentPath: string;
}

const ServiceCrossLinks = ({ currentPath }: ServiceCrossLinksProps) => {
  const others = SERVICES_NAV.filter((item) => item.href !== currentPath);

  return (
    <section className="py-14 sm:py-16 bg-[#070708] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <p className="text-gold-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">
              Soluções Topvan em Piedade e Região
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Conheça outros serviços de transporte
            </h2>
          </div>
          <Link
            href="/guias"
            className="text-gold-400 hover:text-white transition-colors font-semibold text-sm inline-flex items-center gap-1.5"
          >
            <span>Ver guias para estudantes e viagens</span>
            <IconArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {others.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-5 sm:p-6 bg-[#0e0e11] border border-white/10 rounded-2xl hover:border-gold-400/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold-400 mb-2.5">
                  {item.badge}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-gold-400 transition-colors mb-2">
                  {item.shortTitle}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400">
                <span>Saiba mais</span>
                <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCrossLinks;
