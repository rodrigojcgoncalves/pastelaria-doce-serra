"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Flame, Phone, Clock, Menu, X, CakeSlice } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre-nos", label: "Sobre Nós" },
  { href: "/#vitrina", label: "Montra & Bolos" },
  { href: "/faqs", label: "Perguntas Frequentes" },
  { href: "/contactos", label: "Visitar & Encomendar" },
];

export function Header({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const useSolidBg = !transparentOnTop || scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Topbar fina superior (ref2.jpg) */}
      <div className="border-b border-white/10 bg-[#140E0B]/95 text-[#E6DEC8] backdrop-blur-sm">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-[11px] font-medium uppercase tracking-[0.14em] sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[#DDB07D]">
              <Flame className="h-3.5 w-3.5 text-[#C88A4B]" aria-hidden="true" />
              Forno aceso às 06h30
            </span>
            <span className="hidden text-white/30 md:inline" aria-hidden="true">
              |
            </span>
            <span className="hidden text-[#E6DEC8]/85 md:inline">
              Campo de Ourique &amp; Avenidas Novas · Lisboa
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-1.5 text-[#E6DEC8]/90 sm:inline-flex">
              <Clock className="h-3.5 w-3.5 text-[#C88A4B]" aria-hidden="true" />
              Bolos por encomenda em 24h
            </span>
            <a
              href="tel:+351213884920"
              className="inline-flex items-center gap-1.5 text-[#FAF6F0] transition-colors hover:text-[#DDB07D]"
            >
              <Phone className="h-3.5 w-3.5 text-[#C88A4B]" aria-hidden="true" />
              <span>+351 213 884 920</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar principal integrada */}
      <div
        className={`transition-colors duration-300 ${
          useSolidBg
            ? "border-b border-white/10 bg-[#1E1612]/95 shadow-lg backdrop-blur-md"
            : "bg-gradient-to-b from-[#140E0B]/75 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logótipo Artesanal (Fraunces + fita clássica sem cursivas baratas) */}
          <Link
            href="/"
            className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C88A4B]"
          >
            <span className="font-heading text-xl font-semibold tracking-[0.06em] text-[#FAF6F0] transition-colors group-hover:text-[#DDB07D] sm:text-2xl">
              DOCE SERRA
            </span>
            <span className="mt-0.5 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#C88A4B]">
              <span className="h-px w-3 bg-[#C88A4B]" aria-hidden="true" />
              Confeitaria · 1988
              <span className="h-px w-3 bg-[#C88A4B]" aria-hidden="true" />
            </span>
          </Link>

          {/* Navegação Desktop */}
          <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : !link.href.includes("#") && pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                    isActive
                      ? "text-[#DDB07D]"
                      : "text-[#FAF6F0]/90 hover:text-[#DDB07D]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-[#C88A4B]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Contornado Direita + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contactos#encomenda"
              className="hidden items-center gap-2 border border-[#C88A4B] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#FAF6F0] transition-all duration-200 hover:bg-[#C88A4B] hover:text-white active:scale-[0.98] sm:inline-flex"
            >
              <CakeSlice className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Encomendar Bolo</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-[#FAF6F0] transition-colors hover:border-[#C88A4B] hover:text-[#DDB07D] lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileOpen && (
        <div className="border-b border-white/10 bg-[#1E1612] px-4 pb-6 pt-4 shadow-2xl lg:hidden">
          <nav aria-label="Navegação móvel" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : !link.href.includes("#") && pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex min-h-[44px] items-center border-b border-white/5 px-2 text-sm font-medium uppercase tracking-[0.14em] ${
                    isActive ? "text-[#C88A4B]" : "text-[#FAF6F0]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contactos#encomenda"
              className="mt-4 flex min-h-[44px] items-center justify-center gap-2 bg-[#C88A4B] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#140E0B]"
            >
              <CakeSlice className="h-4 w-4" aria-hidden="true" />
              Encomendar Bolo (24h)
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
