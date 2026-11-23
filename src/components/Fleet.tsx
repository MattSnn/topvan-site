import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/site";

const Fleet = () => {
  return (
    <section id="frota" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-900 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold-400 font-bold uppercase tracking-widest mb-4">
              Nossa Frota
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mercedes-Benz Sprinter Executiva
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Viaje com o padrão de qualidade que só a Topvan oferece em
              Piedade-SP. Nossa van é configurada para entregar a máxima
              experiência de conforto, seja no trajeto diário para a faculdade ou
              em uma viagem longa de turismo.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-gold-400/30 transition-colors">
                <span aria-hidden="true" className="text-3xl">
                  💺
                </span>
                <div>
                  <h3 className="text-white font-bold">18 Lugares em Couro</h3>
                  <p className="text-sm text-gray-400">
                    Bancos executivos reclináveis para máximo descanso.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-gold-400/30 transition-colors">
                <span aria-hidden="true" className="text-3xl">
                  ❄️
                </span>
                <div>
                  <h3 className="text-white font-bold">Climatização Total</h3>
                  <p className="text-sm text-gray-400">
                    Ar-condicionado com dutos para todos os passageiros.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-gold-400/30 transition-colors">
                <span aria-hidden="true" className="text-3xl">
                  📺
                </span>
                <div>
                  <h3 className="text-white font-bold">Tecnologia a Bordo</h3>
                  <p className="text-sm text-gray-400">
                    TV Digital e sistema de som integrado.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gold-400/10 rounded-xl border border-gold-400/20">
                <span aria-hidden="true" className="text-3xl">
                  🗣️
                </span>
                <div>
                  <h3 className="text-gold-400 font-bold">Conectividade Alexa</h3>
                  <p className="text-sm text-gold-300/80">
                    Escolha sua música e interaja durante a viagem.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/#contato"
                className="inline-block border border-gold-400 text-gold-400 font-bold px-8 py-3 rounded-full hover:bg-gold-400 hover:text-black transition-all"
              >
                Quero viajar nessa Van
              </Link>
              <Link
                href="/frota-mercedes-sprinter-executiva"
                className="inline-flex items-center text-gray-300 hover:text-gold-400 font-semibold px-4 py-3 transition-colors"
              >
                Ver detalhes da frota →
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
              <Image
                src={IMAGES.fleet}
                alt="Mercedes-Benz Sprinter Executiva preta da Topvan para 18 passageiros em Piedade-SP"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Tag flutuante */}
            <div className="absolute -bottom-6 -right-6 bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-xl hidden md:block">
              <p className="text-gold-400 text-sm font-bold uppercase tracking-wider mb-1">
                Modelo
              </p>
              <p className="text-2xl font-bold text-white">100% Executiva</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
