"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const STORAGE_KEY = "doce_serra_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setVisible(true);
      }
    } catch {
      // Ignora em ambientes sem acesso a localStorage
    }
  }, []);

  function saveConsent(choice: "essential" | "all") {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, date: new Date().toISOString() })
      );
    } catch {
      // Ignora erro de escrita
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside
      role="dialog"
      aria-label="Consentimento de cookies"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl border border-[#C88A4B]/50 bg-[#1E1612] p-5 text-[#FAF6F0] shadow-2xl sm:p-6"
    >
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="pr-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DDB07D]">
            Privacidade &amp; Cookies
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-[#E6DEC8]">
            Utilizamos apenas cookies técnicos estritamente necessários ao funcionamento do site.
            Não usamos rastreamento publicitário de terceiros. Consulte a nossa{" "}
            <Link
              href="/cookies"
              className="font-semibold text-[#DDB07D] underline underline-offset-4 hover:text-white"
            >
              Política de Cookies
            </Link>{" "}
            e a{" "}
            <Link
              href="/privacidade"
              className="font-semibold text-[#DDB07D] underline underline-offset-4 hover:text-white"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => saveConsent("essential")}
            className="min-h-[44px] border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#FAF6F0] transition-colors hover:border-[#C88A4B] hover:text-[#DDB07D]"
          >
            Apenas Essenciais
          </button>
          <button
            type="button"
            onClick={() => saveConsent("all")}
            className="min-h-[44px] bg-[#C88A4B] px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#140E0B] transition-colors hover:bg-[#DDB07D]"
          >
            Aceitar
          </button>
          <button
            type="button"
            onClick={() => saveConsent("essential")}
            aria-label="Fechar aviso de cookies"
            className="inline-flex h-11 w-11 items-center justify-center text-[#E6DEC8] transition-colors hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </aside>
  );
}
