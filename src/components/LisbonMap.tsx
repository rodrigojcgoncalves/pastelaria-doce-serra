"use client";

import { useState } from "react";
import { Navigation, Clock, Phone, MapPin } from "lucide-react";
import { STORES } from "@/data/bakery";

export function LisbonMap() {
  const [selectedStoreId, setSelectedStoreId] = useState(STORES[0].id);
  const activeStore = STORES.find((s) => s.id === selectedStoreId) ?? STORES[0];

  const query = encodeURIComponent(`${activeStore.address}, ${activeStore.postal}`);
  const embedUrl = `https://maps.google.com/maps?q=${query}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <section
      aria-labelledby="mapa-lisboa-titulo"
      className="relative overflow-hidden border-t border-[#E6DEC8] bg-[#EFE8DA]"
    >
      <div className="relative h-[500px] w-full sm:h-[480px]">
        {/* Google Maps Iframe real e dinâmico */}
        <iframe
          key={activeStore.id}
          title={`Mapa de localização da ${activeStore.name}`}
          src={embedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0 grayscale-[20%] contrast-[1.02]"
          allowFullScreen
        />

        {/* Etiqueta Central Superior */}
        <div className="pointer-events-none absolute inset-x-0 top-5 z-10 flex justify-center px-4">
          <div className="border border-[#C88A4B] bg-[#FAF6F0]/95 px-6 py-2.5 shadow-md backdrop-blur-sm">
            <h2
              id="mapa-lisboa-titulo"
              className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-[#1E1612] sm:text-base"
            >
              • As Nossas Lojas em Lisboa •
            </h2>
          </div>
        </div>

        {/* Cartão flutuante da loja selecionada */}
        <div className="absolute bottom-4 left-4 right-4 z-10 mx-auto max-w-md border border-[#E6DEC8] bg-[#FAF6F0]/95 p-5 shadow-xl backdrop-blur-sm sm:bottom-6 sm:left-8 sm:right-auto">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#965C24]">
              {activeStore.badge}
            </span>
            <div className="flex gap-1.5" role="group" aria-label="Selecionar loja em Lisboa">
              {STORES.map((store) => {
                const isSelected = store.id === activeStore.id;
                return (
                  <button
                    key={store.id}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedStoreId(store.id)}
                    className={`min-h-[36px] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider transition-colors ${
                      isSelected
                        ? "bg-[#1E1612] text-[#FAF6F0]"
                        : "bg-[#E6DEC8]/80 text-[#1E1612] hover:bg-[#E6DEC8]"
                    }`}
                  >
                    {store.id === "campo-ourique" ? "C. Ourique" : "Av. Novas"}
                  </button>
                );
              })}
            </div>
          </div>

          <h3 className="mt-2.5 flex items-center gap-2 font-heading text-lg font-semibold text-[#1E1612]">
            <MapPin className="h-4 w-4 shrink-0 text-[#965C24]" aria-hidden="true" />
            <span>{activeStore.name}</span>
          </h3>
          <p className="mt-1 text-sm text-[#59453B]">
            {activeStore.address}, {activeStore.postal}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#59453B]">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#965C24]" aria-hidden="true" />
              {activeStore.hours}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-[#965C24]" aria-hidden="true" />
              <a
                href={`tel:${activeStore.phone.replace(/\s+/g, "")}`}
                className="font-medium text-[#1E1612] hover:text-[#965C24]"
              >
                {activeStore.phone}
              </a>
            </span>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-[40px] items-center gap-2 bg-[#C88A4B] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#140E0B] transition-colors hover:bg-[#DDB07D]"
          >
            <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Abrir Direções no Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
}
