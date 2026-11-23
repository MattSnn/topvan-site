import Link from "next/link";
import {
  IconArrowRight,
  IconCheck,
  IconMoon,
  IconSun,
  IconWhatsApp,
} from "@/components/Icons";
import {
  MORNING_SCHOOLS,
  NIGHT_UNIVERSITIES,
  buildWhatsAppUrl,
} from "@/lib/site";

const DailyRoutes = () => {
  const whatsappUrl = buildWhatsAppUrl(
    "Olá! Gostaria de verificar disponibilidade de vagas para estudantes na rota Piedade - Sorocaba."
  );

  return (
    <section
      id="rotas"
      className="py-14 sm:py-20 lg:py-24 bg-[#0b0b0e] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-gold-400 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">
            Rotas Diárias
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Transporte Diário de Piedade para Sorocaba
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Pontualidade rigorosa e embarque porta a porta em Piedade-SP para
            você nunca perder a aula. Atendemos os períodos da manhã e da noite.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Manhã */}
          <div className="bg-gradient-to-br from-[#131318] to-[#08080a] p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-gold-400/35 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold-400 mb-1">
                    01 • Turno Diurno
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Período da Manhã
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Transporte Escolar (Centro e Escolas de Sorocaba)
                  </p>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-gold-400/15 border border-gold-400/30 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <IconSun className="w-5 h-5" />
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {MORNING_SCHOOLS.map((school) => (
                  <li
                    key={school}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-black/50 border border-white/8 text-gray-200 text-sm"
                  >
                    <IconCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>{school}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 italic text-xs sm:text-sm mt-3">
                + Outras escolas da região central de Sorocaba
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <Link
                href="/transporte-escolar-piedade-sorocaba"
                className="text-gold-400 hover:text-white font-semibold text-sm transition-colors inline-flex items-center gap-2"
              >
                <span>Detalhes do Transporte Escolar Piedade ⇄ Sorocaba</span>
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Noite */}
          <div className="bg-gradient-to-br from-[#131318] to-[#08080a] p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-gold-400/35 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold-400 mb-1">
                    02 • Turno Noturno
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Período da Noite
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Transporte Universitário (Faculdades de Sorocaba)
                  </p>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-gold-400/15 border border-gold-400/30 text-gold-400 flex items-center justify-center flex-shrink-0">
                  <IconMoon className="w-5 h-5" />
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {NIGHT_UNIVERSITIES.map((uni) => (
                  <li
                    key={uni}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-black/50 border border-white/8 text-gray-200 text-sm"
                  >
                    <IconCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>{uni}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 p-3.5 bg-gold-400/10 rounded-xl border border-gold-400/25">
                <p className="text-gold-300 text-xs sm:text-sm text-center font-semibold">
                  Retorno seguro garantido após o término das aulas.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <Link
                href="/transporte-universitario-piedade-sorocaba"
                className="text-gold-400 hover:text-white font-semibold text-sm transition-colors inline-flex items-center gap-2"
              >
                <span>
                  Detalhes do Transporte Universitário Piedade ⇄ Sorocaba
                </span>
                <IconArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/35 text-gold-300 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
              Vagas Abertas — Reservas 2026/2027
            </span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-black font-bold px-8 py-3.5 rounded-2xl sm:rounded-full hover:brightness-110 transition-all shadow-[0_0_24px_rgba(212,175,55,0.22)]"
          >
            <IconWhatsApp className="w-5 h-5" />
            <span>Consultar Disponibilidade de Vagas</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DailyRoutes;
