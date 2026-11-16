"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS, type FaqItem } from "@/data/bakery";

type FaqFilter = "Todas" | FaqItem["category"];

const FAQ_CATEGORIES: FaqFilter[] = [
  "Todas",
  "Encomendas de Bolos",
  "Alergénios & Ingredientes",
  "Levantamento & Entregas",
  "Eventos & Catering",
];

export function FaqAccordion() {
  const [selectedCategory, setSelectedCategory] = useState<FaqFilter>("Todas");
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const visibleItems =
    selectedCategory === "Todas"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div>
      {/* Filtros por categoria */}
      <div className="flex flex-wrap justify-center gap-2">
        {FAQ_CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`min-h-[44px] border px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                isActive
                  ? "border-[#1E1612] bg-[#1E1612] text-[#FAF6F0]"
                  : "border-[#E6DEC8] bg-white text-[#59453B] hover:border-[#C88A4B] hover:text-[#1E1612]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Lista de Perguntas em Acordeão */}
      <div className="mt-10 space-y-3">
        {visibleItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="border border-[#E6DEC8] bg-white transition-colors"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? "" : item.id)}
                className="flex min-h-[56px] w-full items-center justify-between gap-4 px-6 py-4 text-left"
              >
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C88A4B]">
                    {item.category}
                  </span>
                  <span className="mt-1 block font-heading text-lg font-medium text-[#1E1612]">
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#C88A4B] transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {isOpen && (
                <div className="border-t border-[#E6DEC8]/70 bg-[#FAF6F0]/60 px-6 py-5 text-[15px] leading-relaxed text-[#59453B]">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
