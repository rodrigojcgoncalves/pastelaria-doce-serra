"use client";

import { useState } from "react";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { STORES } from "@/data/bakery";

export function LisbonMap() {
  const [selectedStoreId, setSelectedStoreId] = useState(STORES[0].id);
  const activeStore = STORES.find((s) => s.id === selectedStoreId) ?? STORES[0];

  return (
    <section
      aria-labelledby="mapa-lisboa-titulo"
      className="relative overflow-hidden border-t border-[#E6DEC8] bg-[#EFE8DA]"
    >
      {/* Mapa vetorial estilizado de Lisboa (Campo de Ourique & Avenidas Novas - ref.jpg + ref3.jpg) */}
      <div className="relative h-[430px] w-full sm:h-[460px]">
        <svg
          viewBox="0 0 1440 460"
          className="h-full w-full object-cover"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <rect width="1440" height="460" fill="#EAE2D3" />
          {/* Quarteirões urbanos */}
          <g fill="#E2D8C6" stroke="#D5C9B4" strokeWidth="1">
            <rect x="60" y="40" width="170" height="110" rx="2" />
            <rect x="255" y="40" width="210" height="110" rx="2" />
            <rect x="490" y="40" width="180" height="110" rx="2" />
            <rect x="700" y="40" width="220" height="110" rx="2" />
            <rect x="950" y="40" width="190" height="110" rx="2" />
            <rect x="1170" y="40" width="210" height="110" rx="2" />

            <rect x="60" y="180" width="170" height="120" rx="2" />
            <rect x="255" y="180" width="210" height="120" rx="2" />
            <rect x="490" y="180" width="180" height="120" rx="2" />
            <rect x="700" y="180" width="220" height="120" rx="2" />
            <rect x="950" y="180" width="190" height="120" rx="2" />
            <rect x="1170" y="180" width="210" height="120" rx="2" />

            <rect x="60" y="330" width="240" height="95" rx="2" />
            <rect x="330" y="330" width="280" height="95" rx="2" />
            <rect x="640" y="330" width="260" height="95" rx="2" />
            <rect x="930" y="330" width="210" height="95" rx="2" />
            <rect x="1170" y="330" width="210" height="95" rx="2" />
          </g>

          {/* Jardim da Parada & Jardim Amália */}
          <rect x="320" y="205" width="95" height="68" rx="4" fill="#D4DFC7" stroke="#BAC9AA" />
          <rect x="1000" y="85" width="110" height="50" rx="4" fill="#D4DFC7" stroke="#BAC9AA" />

          {/* Principais Avenidas e Ruas */}
          <g stroke="#FAF6F0" strokeLinecap="round" fill="none">
            <path d="M0 165 L1440 165" strokeWidth="10" />
            <path d="M0 315 L1440 315" strokeWidth="12" />
            <path d="M242 0 L242 460" strokeWidth="8" />
            <path d="M478 0 L478 460" strokeWidth="10" />
            <path d="M685 0 L685 460" strokeWidth="12" />
            <path d="M935 0 L935 460" strokeWidth="9" />
            <path d="M1155 0 L1155 460" strokeWidth="8" />
          </g>

          {/* Nomes de Ruas de Lisboa */}
          <g fill="#8C7B6B" fontSize="11" fontFamily="sans-serif" letterSpacing="2">
            <text x="110" y="160">RUA FERREIRA BORGES</text>
            <text x="275" y="244" fontSize="10" fill="#5D7052">JARDIM DA PARADA</text>
            <text x="495" y="310">AV. ÁLVARES CABRAL · ESTRELA</text>
            <text x="815" y="160">AV. DEFENSORES DE CHAVES</text>
            <text x="698" y="85">AVENIDAS NOVAS</text>
            <text x="90" y="85">CAMPO DE OURIQUE</text>
          </g>
        </svg>

        {/* Etiqueta Central Superior (ref.jpg "НАШИ МАГАЗИНЫ") */}
        <div className="pointer-events-none absolute inset-x-0 top-6 flex justify-center px-4">
          <div className="border border-[#C88A4B] bg-[#FAF6F0]/95 px-6 py-2.5 shadow-md backdrop-blur-sm">
            <h2
              id="mapa-lisboa-titulo"
              className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-[#1E1612] sm:text-base"
            >
              • As Nossas Lojas em Lisboa •
            </h2>
          </div>
        </div>

        {/* Pin 1: Campo de Ourique */}
        <button
          type="button"
          onClick={() => setSelectedStoreId("campo-ourique")}
          aria-label="Selecionar loja Campo de Ourique"
          className={`group absolute left-[24%] top-[44%] -translate-x-1/2 -translate-y-1/2 transition-transform sm:left-[28%] ${
            selectedStoreId === "campo-ourique" ? "scale-110 z-20" : "hover:scale-105 z-10"
          }`}
        >
          <span className="flex items-center gap-2 rounded-sm border-2 border-[#FAF6F0] bg-[#1E1612] px-3 py-1.5 text-xs font-semibold text-[#FAF6F0] shadow-xl">
            <MapPin className="h-4 w-4 text-[#C88A4B]" />
            <span>Campo de Ourique</span>
          </span>
        </button>

        {/* Pin 2: Avenidas Novas */}
        <button
          type="button"
          onClick={() => setSelectedStoreId("avenidas-novas")}
          aria-label="Selecionar loja Avenidas Novas"
          className={`group absolute left-[68%] top-[36%] -translate-x-1/2 -translate-y-1/2 transition-transform ${
            selectedStoreId === "avenidas-novas" ? "scale-110 z-20" : "hover:scale-105 z-10"
          }`}
        >
          <span className="flex items-center gap-2 rounded-sm border-2 border-[#FAF6F0] bg-[#C88A4B] px-3 py-1.5 text-xs font-semibold text-white shadow-xl">
            <MapPin className="h-4 w-4 text-white" />
            <span>Avenidas Novas</span>
          </span>
        </button>

        {/* Cartão flutuante da loja selecionada */}
        <div className="absolute bottom-5 left-4 right-4 mx-auto max-w-md border border-[#E6DEC8] bg-[#FAF6F0]/95 p-5 shadow-xl backdrop-blur-sm sm:left-8 sm:right-auto">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C88A4B]">
              {activeStore.badge}
            </span>
            <div className="flex gap-1.5">
              {STORES.map((store) => (
                <button
                  key={store.id}
                  type="button"
                  onClick={() => setSelectedStoreId(store.id)}
                  className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                    store.id === activeStore.id
                      ? "bg-[#1E1612] text-[#FAF6F0]"
                      : "bg-[#E6DEC8]/60 text-[#59453B] hover:bg-[#E6DEC8]"
                  }`}
                >
                  {store.id === "campo-ourique" ? "C. Ourique" : "Av. Novas"}
                </button>
              ))}
            </div>
          </div>

          <h3 className="mt-2 font-heading text-lg font-semibold text-[#1E1612]">
            {activeStore.name}
          </h3>
          <p className="mt-1 text-sm text-[#59453B]">
            {activeStore.address}, {activeStore.postal}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#59453B]">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#C88A4B]" aria-hidden="true" />
              {activeStore.hours}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-[#C88A4B]" aria-hidden="true" />
              {activeStore.phone}
            </span>
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${activeStore.address}, ${activeStore.postal}`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#965C24] hover:text-[#1E1612]"
          >
            <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Abrir Direções no Mapa</span>
          </a>
        </div>
      </div>
    </section>
  );
}
