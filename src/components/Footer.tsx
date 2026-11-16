import Link from "next/link";
import { MapPin, Phone, Clock, Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#110C09] text-[#E6DEC8]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Coluna Marca */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex flex-col">
              <span className="font-heading text-2xl font-semibold tracking-[0.06em] text-[#FAF6F0]">
                DOCE SERRA
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#C88A4B]">
                Pastelaria · Confeitaria · Forno Próprio
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#A38E82]">
              Desde 1988 a manter vivo o forno tradicional em Lisboa. Massa folhada de manteiga,
              doçaria conventual de gema fresca e pão de fermentação lenta todos os dias às 06h30.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Pastelaria Doce Serra"
                className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-[#E6DEC8] transition-colors hover:border-[#C88A4B] hover:text-[#C88A4B]"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="mailto:encomendas@doceserra.pt"
                aria-label="Enviar email para Pastelaria Doce Serra"
                className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-[#E6DEC8] transition-colors hover:border-[#C88A4B] hover:text-[#C88A4B]"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Coluna Navegação */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C88A4B]">
              Páginas
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-[#E6DEC8]/85 transition-colors hover:text-[#DDB07D]">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nos"
                  className="text-[#E6DEC8]/85 transition-colors hover:text-[#DDB07D]"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/#vitrina"
                  className="text-[#E6DEC8]/85 transition-colors hover:text-[#DDB07D]"
                >
                  Montra &amp; Bolos
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-[#E6DEC8]/85 transition-colors hover:text-[#DDB07D]"
                >
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link
                  href="/contactos"
                  className="text-[#E6DEC8]/85 transition-colors hover:text-[#DDB07D]"
                >
                  Visitar &amp; Encomendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna Horários & Fornadas */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C88A4B]">
              Fornadas &amp; Horários
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#A38E82]">
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#C88A4B]" aria-hidden="true" />
                <span>
                  <strong className="block font-medium text-[#FAF6F0]">Campo de Ourique</strong>
                  Todos os dias: 06h30 – 20h00
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#C88A4B]" aria-hidden="true" />
                <span>
                  <strong className="block font-medium text-[#FAF6F0]">Avenidas Novas</strong>
                  Seg–Sáb: 07h30 – 19h30 · Dom: 08h00 – 14h00
                </span>
              </li>
            </ul>
          </div>

          {/* Coluna Contactos */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C88A4B]">
              Lojas em Lisboa
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[#A38E82]">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C88A4B]" aria-hidden="true" />
                <span>Rua Ferreira Borges, 118 · 1350-134 Lisboa</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C88A4B]" aria-hidden="true" />
                <span>Av. Defensores de Chaves, 42B · 1000-118 Lisboa</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#C88A4B]" aria-hidden="true" />
                <a
                  href="tel:+351213884920"
                  className="text-[#FAF6F0] transition-colors hover:text-[#DDB07D]"
                >
                  +351 213 884 920
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[#7A6357] sm:flex-row">
          <p>© {new Date().getFullYear()} Pastelaria Doce Serra, Lda. · Fabrico Próprio em Lisboa.</p>
          <p className="font-accent text-sm italic text-[#A38E82]">
            Forno aceso desde 1988
          </p>
        </div>
      </div>
    </footer>
  );
}
