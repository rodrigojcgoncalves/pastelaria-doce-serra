import Link from "next/link";
import { MapPin, Phone, Clock, Mail, Instagram, ExternalLink } from "lucide-react";

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
                rel="noopener noreferrer"
                aria-label="Instagram da Pastelaria Doce Serra"
                className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-[#E6DEC8] transition-colors hover:border-[#C88A4B] hover:text-[#C88A4B]"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:encomendas@doceserra.pt"
                aria-label="Enviar email para Pastelaria Doce Serra"
                className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-[#E6DEC8] transition-colors hover:border-[#C88A4B] hover:text-[#C88A4B]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
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
                <Link href="/" className="text-[#E6DEC8]/90 transition-colors hover:text-[#DDB07D]">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-nos"
                  className="text-[#E6DEC8]/90 transition-colors hover:text-[#DDB07D]"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/#vitrina"
                  className="text-[#E6DEC8]/90 transition-colors hover:text-[#DDB07D]"
                >
                  Montra &amp; Bolos
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-[#E6DEC8]/90 transition-colors hover:text-[#DDB07D]"
                >
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link
                  href="/contactos"
                  className="text-[#E6DEC8]/90 transition-colors hover:text-[#DDB07D]"
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

          {/* Coluna Contactos & Informação Legal */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C88A4B]">
              Lojas &amp; Informação Legal
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
              <li className="pt-1 text-xs text-[#A38E82]">
                Pastelaria Doce Serra, Lda. · NIF 509 000 000 (demonstração)
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior Legal (RGPD + Livro de Reclamações) */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[#A38E82] lg:flex-row lg:items-center">
          <p>© {new Date().getFullYear()} Pastelaria Doce Serra, Lda. · Fabrico Próprio em Lisboa.</p>

          <nav aria-label="Links legais" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacidade" className="transition-colors hover:text-[#DDB07D]">
              Política de Privacidade (RGPD)
            </Link>
            <Link href="/termos" className="transition-colors hover:text-[#DDB07D]">
              Termos &amp; Reembolsos
            </Link>
            <Link href="/cookies" className="transition-colors hover:text-[#DDB07D]">
              Política de Cookies
            </Link>
            <a
              href="https://www.livroreclamacoes.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#DDB07D] transition-colors hover:text-white"
            >
              <span>Livro de Reclamações Eletrónico</span>
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
