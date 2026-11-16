import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Perguntas Frequentes | Pastelaria Doce Serra",
  description:
    "Esclareça dúvidas sobre prazos de encomenda de bolos em 24h, pesos por número de convidados, alergénios, conservação e entregas em Lisboa.",
};

const WEIGHT_GUIDE = [
  { weight: "1,0 kg", people: "8 a 10 pessoas", price: "Desde 23,00 €" },
  { weight: "1,5 kg", people: "12 a 15 pessoas", price: "Desde 34,50 €" },
  { weight: "2,0 kg", people: "16 a 20 pessoas", price: "Desde 46,00 €" },
  { weight: "3,0 kg", people: "25 a 30 pessoas", price: "Desde 68,00 €" },
];

export default function FaqsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-28 sm:pt-32">
        {/* Cabeçalho da Página */}
        <section className="bg-[#1E1612] py-16 text-center text-[#FAF6F0]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#DDB07D]">
              • Esclarecimentos &amp; Prazos •
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold sm:text-5xl">
              Perguntas Frequentes
            </h1>
            <p className="mt-4 font-accent text-xl italic text-[#E6DEC8]">
              Tudo o que precisa de saber sobre encomendas de bolos, alergénios, conservação e
              entregas em Lisboa.
            </p>
          </div>
        </section>

        {/* Acordeão Interativo */}
        <section className="bg-[#FAF6F0] py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FaqAccordion />

            {/* Guia Rápido de Peso por Convidado */}
            <div className="mt-16 border border-[#E6DEC8] bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-heading text-2xl font-medium text-[#1E1612]">
                Guia Rápido de Pesos para Bolos de Aniversário
              </h2>
              <p className="mt-1 text-sm text-[#59453B]">
                Calculamos em média 120 g a 150 g por fatia generosa.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {WEIGHT_GUIDE.map((row) => (
                  <div
                    key={row.weight}
                    className="border border-[#E6DEC8] bg-[#FAF6F0] p-4"
                  >
                    <p className="font-heading text-2xl font-semibold text-[#C88A4B]">
                      {row.weight}
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#1E1612]">{row.people}</p>
                    <p className="mt-1 text-xs text-[#7A6357]">{row.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Caixa de Ajuda Direta */}
            <div className="mt-12 flex flex-col items-start justify-between gap-6 border border-[#C88A4B]/40 bg-[#1E1612] p-8 text-[#FAF6F0] sm:flex-row sm:items-center">
              <div>
                <h2 className="font-heading text-2xl font-medium">
                  Ainda tem alguma dúvida sobre a sua encomenda?
                </h2>
                <p className="mt-1.5 text-sm text-[#E6DEC8]">
                  Fale diretamente com o balcão de Campo de Ourique ou preencha o simulador de
                  encomenda.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+351213884920"
                  className="inline-flex min-h-[44px] items-center gap-2 border border-white/25 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#FAF6F0] transition-colors hover:border-[#C88A4B]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#C88A4B]" aria-hidden="true" />
                  Ligar Agora
                </a>
                <Link
                  href="/contactos#encomenda"
                  className="inline-flex min-h-[44px] items-center gap-2 bg-[#C88A4B] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#140E0B] transition-colors hover:bg-[#DDB07D]"
                >
                  <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
                  Encomendar Online
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
