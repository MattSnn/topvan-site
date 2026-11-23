"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Universitário", href: "/transporte-universitario-piedade-sorocaba" },
    { name: "Escolar", href: "/transporte-escolar-piedade-sorocaba" },
    { name: "Turismo & Vans", href: "/aluguel-de-van-turismo-piedade" },
    { name: "Frota", href: "/frota-mercedes-sprinter-executiva" },
    { name: "Guias", href: "/guias" },
    { name: "Contato", href: "/#contato" },
  ];

  return (
    <header className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-gold-400/20">
      <nav
        aria-label="Navegação principal"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center"
            aria-label="Topvan Transporte Executivo — Página Inicial"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/TopVan.svg"
              alt="Topvan Transporte Executivo em Piedade-SP"
              width={160}
              height={64}
              priority
              className="h-14 w-auto object-contain py-1"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-8 flex items-center space-x-6">
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
                className="bg-gold-400 hover:bg-gold-500 text-black font-bold px-5 py-2.5 rounded-full transition-all hover:scale-105 text-sm whitespace-nowrap"
              >
                Orçamento
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gold-400 hover:text-white hover:bg-zinc-800 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menu</span>
              {!isOpen ? (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden bg-zinc-950 border-b border-gold-400/20 absolute w-full transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible max-h-[85vh] overflow-y-auto"
            : "opacity-0 invisible h-0 overflow-hidden"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          <Link
            href="/"
            className="text-gray-300 hover:text-gold-400 block px-3 py-3 rounded-md text-base font-medium border-b border-zinc-800"
            onClick={() => setIsOpen(false)}
          >
            Início
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-gold-400 block px-3 py-3 rounded-md text-base font-medium border-b border-zinc-800"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/transfer-aeroportos-eventos-piedade"
            className="text-gray-300 hover:text-gold-400 block px-3 py-3 rounded-md text-base font-medium border-b border-zinc-800"
            onClick={() => setIsOpen(false)}
          >
            Aeroportos e Eventos
          </Link>
          <Link
            href="/sobre"
            className="text-gray-300 hover:text-gold-400 block px-3 py-3 rounded-md text-base font-medium border-b border-zinc-800"
            onClick={() => setIsOpen(false)}
          >
            Sobre a Topvan
          </Link>
          <div className="pt-4 pb-2">
            <Link
              href="/#contato"
              className="block w-full text-center bg-gold-400 text-black font-bold px-6 py-3 rounded-xl hover:bg-gold-500"
              onClick={() => setIsOpen(false)}
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
