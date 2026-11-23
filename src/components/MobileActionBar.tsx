import Link from "next/link";
import { IconArrowRight, IconWhatsApp } from "@/components/Icons";
import { buildWhatsAppUrl } from "@/lib/site";

const MobileActionBar = () => {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-black/92 backdrop-blur-xl border-t border-gold-400/20 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgba(0,0,0,0.75)]"
      role="region"
      aria-label="Ações rápidas de contato"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={buildWhatsAppUrl(
            "Olá! Vim pelo site da Topvan e gostaria de informações."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[46px] rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-black font-bold text-sm flex items-center justify-center gap-2 transition-all"
        >
          <IconWhatsApp className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
        <Link
          href="/#contato"
          className="min-h-[46px] rounded-xl bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 active:scale-[0.98] text-black font-bold text-sm flex items-center justify-center gap-1.5 transition-all shadow-[0_0_18px_rgba(212,175,55,0.25)]"
        >
          <span>Pedir Orçamento</span>
          <IconArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default MobileActionBar;
