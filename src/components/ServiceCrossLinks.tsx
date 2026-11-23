import Link from "next/link";
import { SERVICES_NAV } from "@/lib/site";

interface ServiceCrossLinksProps {
  currentPath: string;
}

const ServiceCrossLinks = ({ currentPath }: ServiceCrossLinksProps) => {
  const others = SERVICES_NAV.filter((item) => item.href !== currentPath);

  return (
    <section className="py-16 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-gold-400 font-bold uppercase tracking-widest text-sm mb-2">
              Soluções Topvan em Piedade e Região
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Conheça outros serviços de transporte
            </h2>
          </div>
          <Link
            href="/guias"
            className="text-gold-400 hover:text-white transition-colors font-semibold text-sm"
          >
            Ver guias para estudantes e viagens →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {others.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-6 bg-zinc-950 border border-zinc-800 rounded-2xl hover:border-gold-400/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
                  {item.badge}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors mb-2">
                  {item.shortTitle}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-gold-400">
                Saiba mais →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCrossLinks;
