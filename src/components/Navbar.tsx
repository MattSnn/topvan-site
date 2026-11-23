"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IconArrowRight,
  IconClose,
  IconMenu,
  IconPhone,
  IconWhatsApp,
} from "@/components/Icons";
import { COMPANY, buildWhatsAppUrl } from "@/lib/site";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Universitário", href: "/transporte-universitario-piedade-sorocaba" },
    { name: "Escolar", href: "/transporte-escolar-piedade-sorocaba" },
    { name: "Turismo & Vans", href: "/aluguel-de-van-turismo-piedade" },
    { name: "Frota", href: "/frota-mercedes-sprinter-executiva" },
    { name: "Guias", href: "/guias" },
    { name: "Contato", href: "/#contato" },
  ];

  const mobileExtras = [
    { name: "Início", href: "/" },
    ...navLinks,
    { name: "Aeroportos e Eventos", href: "/transfer-aeroportos-eventos-piedade" },
    { name: "Sobre a Topvan", href: "/sobre" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#070708]/88 backdrop-blur-xl border-b border-white/10">
      <nav
        aria-label="Navegação principal"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center"
            aria-label="Topvan Transporte Executivo — Página Inicial"
            onClick={closeMenu}
          >
            <Image
              src="/TopVan.svg"
              alt="Topvan Transporte Executivo em Piedade-SP"
              width={150}
              height={56}
              priority
              className="h-11 lg:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gold-400 px-2 py-2 transition-colors text-xs xl:text-sm font-medium uppercase tracking-wide whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contato"
              className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:brightness-110 text-black font-bold px-5 py-2.5 rounded-full transition-all hover:scale-105 text-sm whitespace-nowrap shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              Orçamento
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${COMPANY.phoneE164}`}
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gold-400 hover:bg-white/10 transition-colors"
              aria-label={`Ligar para ${COMPANY.phoneDisplay}`}
            >
              <IconPhone className="w-4 h-4" />
            </a>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gold-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">
                {isOpen ? "Fechar menu" : "Abrir menu"}
              </span>
              {isOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-[#0b0b0e]/98 backdrop-blur-2xl border-b border-gold-400/20 absolute inset-x-0 transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 visible max-h-[82vh] overflow-y-auto"
            : "opacity-0 invisible max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-4 space-y-1.5">
          {mobileExtras.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="min-h-[48px] flex items-center justify-between px-3.5 rounded-xl text-gray-200 hover:text-gold-400 hover:bg-white/5 text-sm font-medium transition-colors"
            >
              <span>{link.name}</span>
              <IconArrowRight className="w-4 h-4 text-zinc-500" />
            </Link>
          ))}

          <div className="pt-3 mt-3 border-t border-white/10 grid grid-cols-1 gap-2.5">
            <a
              href={buildWhatsAppUrl(
                "Olá! Vim pelo menu do site da Topvan e gostaria de um orçamento."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="min-h-[48px] w-full flex items-center justify-center gap-2 bg-emerald-500 text-black font-bold rounded-xl text-sm"
            >
              <IconWhatsApp className="w-4 h-4" />
              <span>Falar no WhatsApp — {COMPANY.phoneDisplay}</span>
            </a>
            <Link
              href="/#contato"
              onClick={closeMenu}
              className="min-h-[48px] w-full flex items-center justify-center bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 text-black font-bold rounded-xl text-sm"
            >
              Solicitar Orçamento Grátis
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
