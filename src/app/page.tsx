import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  CakeSlice,
  Sparkles,
  Wheat,
  Gift,
  ArrowRight,
  Download,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeShowcase } from "@/components/HomeShowcase";
import { LisbonMap } from "@/components/LisbonMap";
import { PARTY_CAKE_STEPS, PARTY_SPECIALTIES } from "@/data/bakery";

const SPECIALTY_ICONS = {
  CakeSlice,
  Sparkles,
  Wheat,
  Gift,
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header transparentOnTop />

      <main className="flex-1">
        {/* 1. HERO MINIMALISTA E ACOLHEDOR (ref.jpg + ref2.jpg) */}
        <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-[#140E0B] pt-28 text-center">
          <Image
            src="/images/hero-forno.jpg"
            alt="Pão rústico e pastelaria tradicional da Pastelaria Doce Serra acabados de sair do forno"
            fill
            priority
            className="object-cover object-center opacity-70"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#140E0B]/70 via-[#140E0B]/45 to-[#140E0B]/80"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 sm:px-6">
            <p className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#DDB07D]">
              <span className="h-1 w-1 rounded-full bg-[#C88A4B]" aria-hidden="true" />
              Fabrico Próprio em Lisboa desde 1988
              <span className="h-1 w-1 rounded-full bg-[#C88A4B]" aria-hidden="true" />
            </p>

            <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-[#FAF6F0] sm:text-5xl lg:text-[66px]">
              A Arte do Forno &amp; da{" "}
              <span className="italic font-normal text-[#DDB07D]">Doçaria Portuguesa</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl font-accent text-xl italic text-[#E6DEC8] sm:text-2xl">
              Pastéis de nata a estalar, doçaria conventual de gema fresca e bolos de festa feitos
              à mão todos os dias às 06h30.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#vitrina"
                className="inline-flex min-h-[48px] items-center justify-center bg-[#C88A4B] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#140E0B] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#DDB07D]"
              >
                Ver Montra &amp; Fornadas
              </a>
              <Link
                href="/contactos#encomenda"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-white/30 bg-[#140E0B]/40 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF6F0] backdrop-blur-sm transition-colors hover:border-[#C88A4B] hover:text-[#DDB07D]"
              >
                <span>Encomendar Bolo (24h)</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Indicador circular de scroll na base do Hero (ref.jpg) */}
          <a
            href="#nossa-casa"
            aria-label="Descer para conhecer a nossa pastelaria"
            className="absolute bottom-0 left-1/2 z-20 flex h-12 w-14 -translate-x-1/2 items-center justify-center rounded-t-full bg-[#FAF6F0] text-[#1E1612] shadow-md transition-transform hover:translate-y-0.5"
          >
            <ChevronDown className="h-5 w-5" aria-hidden="true" />
          </a>
        </section>

        {/* 2. APRESENTAÇÃO / MENSAGEM DA CASA (ref1.jpg) */}
        <section id="nossa-casa" className="bg-[#FAF6F0] py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Fotografia real do balcão à esquerda */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E6DEC8] shadow-xl">
                  <Image
                    src="/images/casa-balcao.jpg"
                    alt="Balcão e vitrina da Pastelaria Doce Serra em Campo de Ourique"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                  <div className="absolute bottom-4 left-4 border border-[#C88A4B]/50 bg-[#1E1612]/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FAF6F0]">
                    Campo de Ourique · Desde 1988
                  </div>
                </div>
              </div>

              {/* Texto editorial caloroso à direita com título ladeado por pontos (ref1.jpg) */}
              <div className="lg:col-span-6">
                <h2 className="font-heading text-2xl font-semibold uppercase tracking-[0.06em] text-[#1E1612] sm:text-3xl">
                  <span className="mr-3 text-[#C88A4B]" aria-hidden="true">
                    •
                  </span>
                  A Nossa Casa
                  <span className="ml-3 text-[#C88A4B]" aria-hidden="true">
                    •
                  </span>
                </h2>

                <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#59453B]">
                  <p>
                    Fundada pela família Serra em 1988, na Rua Ferreira Borges, a Pastelaria Doce
                    Serra nasceu com um propósito simples: manter vivo o receituário da pastelaria
                    tradicional portuguesa com fabrico próprio de porta aberta para o bairro.
                  </p>
                  <p>
                    O nosso obrador começa a trabalhar às quatro da manhã para que às 06h30 o
                    primeiro tabuleiro de pastéis de nata, pão de mistura e croissants folhados
                    esteja no balcão. Não usamos melhorantes químicos nem cremes instantâneos: só
                    ovos frescos, farinha moída em pedra, manteiga pura e tempo.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/sobre-nos"
                    className="inline-flex min-h-[44px] items-center justify-center bg-[#C88A4B] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#140E0B] transition-colors hover:bg-[#DDB07D]"
                  >
                    Conhecer a Nossa História
                  </Link>
                  <Link
                    href="/contactos"
                    className="inline-flex min-h-[44px] items-center gap-2 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1E1612] transition-colors hover:text-[#965C24]"
                  >
                    <span>Visitar a Loja</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 & 4. VITRINA ("All Products") + FORNADAS FRESCAS ("Fresh Products") */}
        <HomeShowcase />

        {/* 5. BOLOS POR ENCOMENDA PARA FESTAS — Passos 01, 02, 03 (ref2.jpg) */}
        <section className="bg-[#FAF6F0] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C88A4B]">
                Personalização Artesanal
              </p>
              <h2 className="mt-2 font-heading text-3xl font-medium tracking-tight text-[#1E1612] sm:text-4xl">
                Bolos por Encomenda para Festas
              </h2>
            </div>

            {/* Linha horizontal pontilhada com marcadores quadrados dourados + 01, 02, 03 */}
            <div className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              <div
                className="pointer-events-none absolute left-[16%] right-[16%] top-1.5 hidden border-t border-dashed border-[#D2C5AE] md:block"
                aria-hidden="true"
              />

              {PARTY_CAKE_STEPS.map((item) => (
                <div key={item.step} className="relative flex flex-col items-center text-center">
                  <span
                    className="relative z-10 h-3.5 w-3.5 border-2 border-[#C88A4B] bg-[#FAF6F0]"
                    aria-hidden="true"
                  />
                  <span className="mt-5 font-heading text-5xl font-normal tracking-tight text-[#1E1612]">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-[#1E1612]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#59453B]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Sub-bloco Inferior da ref2.jpg: Cartão Guia à esquerda + 4 Especialidades à direita */}
            <div className="mt-16 grid grid-cols-1 items-stretch gap-8 border-t border-[#E6DEC8] pt-14 lg:grid-cols-12">
              {/* Cartão Fotográfico de Catálogo */}
              <div className="relative flex min-h-[240px] flex-col justify-between overflow-hidden bg-[#1E1612] p-7 text-[#FAF6F0] lg:col-span-4">
                <Image
                  src="/images/bolo-aniversario.jpg"
                  alt="Bolo de aniversário artesanal da Pastelaria Doce Serra"
                  fill
                  className="object-cover opacity-35"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <div className="relative z-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#DDB07D]">
                    Guia de Pesos &amp; Doses
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-medium">
                    Simular Bolo de Festa
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#E6DEC8]">
                    Escolha o peso ideal (1 kg a 4 kg), a massa, o recheio e a mensagem na placa
                    de chocolate.
                  </p>
                </div>
                <Link
                  href="/contactos#encomenda"
                  className="relative z-10 mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 bg-[#C88A4B] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#140E0B] transition-colors hover:bg-[#DDB07D]"
                >
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Pedir Orçamento em 24h</span>
                </Link>
              </div>

              {/* 4 Especialidades com Ícones Lineares */}
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-8">
                {PARTY_SPECIALTIES.map((spec) => {
                  const Icon = SPECIALTY_ICONS[spec.icon];
                  return (
                    <div
                      key={spec.id}
                      className="flex items-start gap-4 border border-[#E6DEC8] bg-white p-6 shadow-sm"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#E6DEC8] bg-[#FAF6F0] text-[#C88A4B]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-[#1E1612]">
                          {spec.name}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#59453B]">
                          {spec.description}
                        </p>
                        <Link
                          href={`/contactos?produto=${encodeURIComponent(spec.name)}#encomenda`}
                          className="mt-3 inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#965C24] hover:text-[#1E1612]"
                        >
                          Encomendar →
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 6. BANNER DE ENCOMENDA RÁPIDA (ref1.jpg) */}
        <section className="relative overflow-hidden bg-[#1E1612] py-16 text-[#FAF6F0]">
          <Image
            src="/images/banner-fornada.jpg"
            alt="Pão quente e pastelaria tradicional"
            fill
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#140E0B]/95 via-[#140E0B]/80 to-[#140E0B]/60"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
            <div>
              <h2 className="font-heading text-2xl font-medium tracking-tight text-[#FAF6F0] sm:text-3xl">
                Encomende o Seu Bolo ou Pão Quente para Amanhã
              </h2>
              <p className="mt-2 text-sm text-[#E6DEC8]">
                Levantamento prioritário às 06h30 em Campo de Ourique ou entrega refrigerada em
                Lisboa.
              </p>
            </div>
            <Link
              href="/contactos#encomenda"
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center bg-[#C88A4B] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#140E0B] shadow-lg transition-colors hover:bg-[#DDB07D]"
            >
              Fazer Encomenda
            </Link>
          </div>
        </section>

        {/* 7. MAPA DE LISBOA (ref.jpg + ref3.jpg) */}
        <LisbonMap />
      </main>

      <Footer />
    </div>
  );
}
