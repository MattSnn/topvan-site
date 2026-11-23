import { IconWhatsApp } from "@/components/Icons";
import { buildWhatsAppUrl } from "@/lib/site";

const FloatingWhatsApp = () => {
  const whatsappUrl = buildWhatsAppUrl(
    "Olá! Vim pelo site da Topvan e gostaria de um orçamento."
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold pl-4 pr-5 py-3.5 rounded-full shadow-[0_12px_32px_rgba(16,185,129,0.35)] transition-all hover:scale-105 duration-300"
      aria-label="Orçamento via WhatsApp com a Topvan"
    >
      <IconWhatsApp className="w-5 h-5" />
      <span className="text-sm tracking-tight">Orçamento WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsApp;
