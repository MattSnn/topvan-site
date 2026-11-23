import Image from "next/image";
import Link from "next/link";
import { COMPANY, CREDITS, SERVICES_NAV, buildWhatsAppUrl } from "@/lib/site";
import { GUIDES } from "@/lib/guides";

const Footer = () => {
  return (
    <footer className="pt-14 pb-28 md:pb-12 bg-[#050507] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/TopVan.svg"
                alt="Topvan Transporte Executivo Logo"
                width={170}
                height={68}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialista em transporte universitário, escolar, turismo e
              fretamento executivo na rota Piedade ⇄ Sorocaba desde{" "}
              {COMPANY.foundingYear}.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">
              Serviços
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors"
                  >
                    {item.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/sobre"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Sobre a Topvan
                </Link>
              </li>
            </ul>
          </div>

          {/* Guias Úteis */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">
              Guias Úteis
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/guias"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Todos os Guias de Piedade
                </Link>
              </li>
              {GUIDES.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/guias/${guide.slug}`}
                    className="text-gray-400 hover:text-gold-400 transition-colors"
                  >
                    {guide.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dados da Empresa & Contato */}
          <div>
            <h3 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">
              Empresa & Contato
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="text-gray-200 font-medium">{COMPANY.legalName}</p>
              <p>CNPJ: {COMPANY.cnpj}</p>
              <p>
                {COMPANY.streetAddress} — {COMPANY.city}/{COMPANY.state}
              </p>
              <p>Atendimento: Piedade, Sorocaba e Votorantim</p>
              <div className="pt-2 flex flex-col gap-1.5">
                <a
                  href={`tel:${COMPANY.phoneE164}`}
                  className="text-gold-400 hover:text-white transition-colors font-bold text-base"
                >
                  {COMPANY.phoneDisplay}
                </a>
                <a
                  href={buildWhatsAppUrl(
                    "Olá! Vim pelo rodapé do site da Topvan e gostaria de um orçamento."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gold-400 transition-colors"
                >
                  Atendimento via WhatsApp →
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-gray-400 hover:text-gold-400 transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </div>
              <p className="text-xs text-gray-500 pt-1">
                Fundador e Operação Topvan: {COMPANY.founder}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center text-gray-500 text-xs flex flex-col items-center gap-2">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. Todos os direitos
            reservados.
          </p>
          <p className="leading-relaxed">
            Desenvolvido por{" "}
            <a
              href={CREDITS.agencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-white transition-colors font-semibold underline decoration-gold-400/40 underline-offset-4"
            >
              {CREDITS.agencyName}
            </a>{" "}
            ({CREDITS.agencyUrl.replace("https://", "")}) • Administrado por{" "}
            <span className="text-gray-300 font-medium">
              {CREDITS.adminName}
            </span>{" "}
            —{" "}
            <a
              href={`mailto:${CREDITS.adminEmail}`}
              className="text-gray-300 hover:text-gold-400 transition-colors underline decoration-white/20 underline-offset-4 break-all"
            >
              {CREDITS.adminEmail}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
