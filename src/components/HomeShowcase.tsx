"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import {
  VITRINA_FEATURED,
  FRESH_PRODUCTS,
  type BakeryProduct,
  type ProductCategory,
} from "@/data/bakery";
import { ProductQuickModal } from "./ProductQuickModal";

const FILTER_CATEGORIES: ProductCategory[] = [
  "Todos",
  "Pastelaria Conventual",
  "Bolos de Festa",
  "Padaria",
  "Salgados",
];

export function HomeShowcase() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("Todos");
  const [selectedProduct, setSelectedProduct] = useState<BakeryProduct | null>(null);

  const filteredFresh =
    activeCategory === "Todos"
      ? FRESH_PRODUCTS
      : FRESH_PRODUCTS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* BLOCO 1: "Da Nossa Vitrina" — Estilo All Products (ref2.jpg) */}
      <section id="vitrina" className="bg-[#FAF6F0] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Esquerda: Texto em 2 colunas + Botão + 4 Cartões Quadrados */}
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C88A4B]">
                Montra Diária
              </p>
              <h2 className="mt-2 font-heading text-3xl font-medium tracking-tight text-[#1E1612] sm:text-4xl lg:text-[44px]">
                Da Nossa Vitrina
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-6 text-[15px] leading-relaxed text-[#59453B] sm:grid-cols-2">
                <p>
                  Todos os dias, antes de o bairro acordar, acendemos o forno de pedra para
                  cozer o pão de massa mãe e os tabuleiros de pastéis de nata em pequenas fornadas
                  contínuas.
                </p>
                <p>
                  Trabalhamos exclusivamente com gemas frescas de casca, manteiga dos Açores na
                  laminação e amêndoa torrada do Algarve, sem corantes nem pré-misturas.
                </p>
              </div>

              <div className="mt-7">
                <Link
                  href="/contactos#encomenda"
                  className="inline-flex min-h-[44px] items-center justify-center bg-[#C88A4B] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#140E0B] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#DDB07D]"
                >
                  Encomendar da Vitrina
                </Link>
              </div>

              {/* Fila de 4 Mini-Cartões Quadrados com Badge de Preço no Topo Direito (ref2.jpg) */}
              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {VITRINA_FEATURED.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="group relative aspect-square overflow-hidden bg-[#1E1612] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C88A4B]"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 200px"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#140E0B]/90 via-[#140E0B]/20 to-transparent"
                      aria-hidden="true"
                    />
                    {/* Etiqueta de Preço no Canto Superior Direito */}
                    <span className="absolute right-2.5 top-2.5 bg-[#C88A4B] px-2.5 py-1 text-[11px] font-bold tracking-wider text-[#140E0B] shadow">
                      {product.price}
                    </span>
                    <span className="absolute inset-x-3 bottom-3 font-heading text-sm font-medium leading-snug text-[#FAF6F0]">
                      {product.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Direita: Fotografia Vertical Grande de Destaque (ref2.jpg) */}
            <div className="lg:col-span-5">
              <div className="group relative aspect-[4/5] w-full overflow-hidden bg-[#1E1612] shadow-xl">
                <Image
                  src="/images/vitrina-destaque.jpg"
                  alt="Montra de pastelaria e bolos artesanais da Pastelaria Doce Serra"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#140E0B]/60 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-6 left-6 right-6 border border-white/20 bg-[#140E0B]/75 p-4 backdrop-blur-sm">
                  <p className="font-accent text-lg italic text-[#DDB07D]">
                    &ldquo;O segredo está na calma da fermentação e no ponto exato do açúcar.&rdquo;
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FAF6F0]/80">
                    Mestre António Serra · Desde 1988
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 2: "Fornadas & Especialidades Frescas" — Secção Escura (ref2.jpg) */}
      <section className="relative overflow-hidden bg-[#1E1612] py-20 text-[#FAF6F0] lg:py-28">
        {/* Textura fotográfica subtil no topo */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-20">
          <Image
            src="/images/banner-fornada.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E1612]/40 to-[#1E1612]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C88A4B]">
                Acabados de Sair do Forno
              </p>
              <h2 className="mt-2 font-heading text-3xl font-medium tracking-tight text-[#FAF6F0] sm:text-4xl">
                Fornadas &amp; Especialidades Frescas
              </h2>
            </div>

            {/* Filtro Rápido Interativo no Topo Direito */}
            <div
              role="tablist"
              aria-label="Filtrar especialidades por categoria"
              className="flex flex-wrap gap-x-5 gap-y-2"
            >
              {FILTER_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={isActive}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`min-h-[44px] border-b-2 pb-1 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                      isActive
                        ? "border-[#C88A4B] text-[#DDB07D]"
                        : "border-transparent text-[#A38E82] hover:text-[#FAF6F0]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grelha de 5 Cartões Verticais Fotográficos com botão + (ref2.jpg) */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {filteredFresh.map((product) => (
              <article
                key={product.id}
                className="group relative aspect-[3/4] overflow-hidden bg-[#2A1F1A] shadow-xl"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 240px"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#110C09]/95 via-[#110C09]/20 to-black/20"
                  aria-hidden="true"
                />

                {/* Etiqueta escura no topo direito */}
                <span className="absolute right-3 top-3 bg-[#110C09]/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E6DEC8]">
                  {product.badge}
                </span>

                {/* Nome + Preço em baixo à esquerda e botão + em baixo à direita */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
                  <div>
                    <h3 className="font-heading text-base font-medium leading-snug text-[#FAF6F0]">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-[#DDB07D]">
                      {product.price}{" "}
                      <span className="font-normal text-[#A38E82]">/ {product.unit}</span>
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    aria-label={`Ver detalhes de ${product.name}`}
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center bg-[#C88A4B] text-[#140E0B] transition-colors hover:bg-[#DDB07D] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Plus className="h-5 w-5 stroke-[2.25]" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProductQuickModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}
