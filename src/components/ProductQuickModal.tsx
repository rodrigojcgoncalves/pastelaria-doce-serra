"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Clock, AlertCircle, CakeSlice } from "lucide-react";
import type { BakeryProduct } from "@/data/bakery";

interface ProductQuickModalProps {
  product: BakeryProduct | null;
  onClose: () => void;
}

export function ProductQuickModal({ product, onClose }: ProductQuickModalProps) {
  useEffect(() => {
    if (!product) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#110C09]/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative grid w-full max-w-2xl overflow-hidden border border-[#C88A4B]/30 bg-[#FAF6F0] shadow-2xl md:grid-cols-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar detalhes do produto"
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center bg-[#1E1612]/85 text-[#FAF6F0] transition-colors hover:bg-[#C88A4B]"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-[4/3] md:col-span-5 md:aspect-auto">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 320px"
          />
          <span className="absolute left-3 top-3 bg-[#1E1612]/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#DDB07D]">
            {product.badge}
          </span>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-8 md:col-span-7">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C88A4B]">
              {product.category}
            </p>
            <h3
              id="modal-product-title"
              className="mt-1 font-heading text-2xl font-semibold text-[#1E1612]"
            >
              {product.name}
            </h3>
            <p className="mt-2 text-lg font-semibold text-[#965C24]">
              {product.price}{" "}
              <span className="text-xs font-normal text-[#7A6357]">/ {product.unit}</span>
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#59453B]">{product.description}</p>

            <div className="mt-5 space-y-2.5 border-t border-[#E6DEC8] pt-4 text-xs text-[#59453B]">
              <p>
                <strong className="font-semibold text-[#1E1612]">Ingredientes:</strong>{" "}
                {product.ingredients}
              </p>
              <p className="flex items-start gap-1.5">
                <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C88A4B]" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-[#1E1612]">Fornada:</strong>{" "}
                  {product.dailyBatchTime}
                </span>
              </p>
              <p className="flex items-start gap-1.5">
                <AlertCircle
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C88A4B]"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-[#1E1612]">Alergénios:</strong>{" "}
                  {product.allergens.join(", ")}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/contactos?produto=${encodeURIComponent(product.name)}#encomenda`}
              onClick={onClose}
              className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 bg-[#C88A4B] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#140E0B] transition-colors hover:bg-[#B37436]"
            >
              <CakeSlice className="h-4 w-4" aria-hidden="true" />
              Encomendar Agora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
