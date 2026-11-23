import Image from "next/image";
import Link from "next/link";
import { COMPANY, SERVICES_NAV, buildWhatsAppUrl } from "@/lib/site";
import { GUIDES } from "@/lib/guides";

const Footer = () => {
  return (
    <footer className="py-16 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/TopVan.svg"
                alt="Topvan Transporte Executivo Logo"
                width={180}
                height={72}
                className="h-20 w-auto object-contain"
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
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
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
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
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
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Empresa & Contato
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="text-gray-300 font-medium">{COMPANY.legalName}</p>
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
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  {COMPANY.email}
                </a>
              </div>
              <p className="text-xs text-gray-500 pt-1">
                Administração: {COMPANY.founder}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900 text-center text-gray-500 text-xs flex flex-col items-center gap-2">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. Todos os direitos
            reservados.
          </p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://mateuss.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-white transition-colors underline decoration-gold-400/30 underline-offset-4"
            >
              Mateus Sonnenberg
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
