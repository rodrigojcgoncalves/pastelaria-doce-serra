import type { Metadata } from "next";
import { Suspense } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LisbonMap } from "@/components/LisbonMap";
import { CakeOrderForm } from "@/components/CakeOrderForm";
import { STORES } from "@/data/bakery";

export const metadata: Metadata = {
  title: "Visitar & Encomendar | Pastelaria Doce Serra — Lisboa",
  description:
    "Encomende o seu bolo de aniversário em 24h ou visite as nossas lojas em Campo de Ourique e Avenidas Novas, Lisboa.",
};

export default function ContactosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-28 sm:pt-32">
        {/* Cabeçalho da Página */}
        <section className="bg-[#1E1612] py-16 text-center text-[#FAF6F0]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#DDB07D]">
              • Balcão &amp; Encomendas 24h •
            </p>
            <h1 className="mt-3 font-heading text-4xl font-semibold sm:text-5xl">
              Visitar &amp; Encomendar
            </h1>
            <p className="mt-4 font-accent text-xl italic text-[#E6DEC8]">
              Passe pelo nosso balcão em Lisboa ou reserve o seu bolo de festa personalizado para
              amanhã.
            </p>
          </div>
        </section>

        {/* Formulário + Informações das Lojas (ref3.jpg) */}
        <section id="encomenda" className="bg-[#FAF6F0] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              {/* Coluna Esquerda: Informações das 2 Lojas em Lisboa */}
              <div className="space-y-6 lg:col-span-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C88A4B]">
                    Atendimento Direto
                  </p>
                  <h2 className="mt-1 font-heading text-2xl font-medium text-[#1E1612]">
                    As Nossas Moradas
                  </h2>
                </div>

                {STORES.map((store) => (
                  <div
                    key={store.id}
                    className="border border-[#E6DEC8] bg-white p-6 shadow-sm"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C88A4B]">
                      {store.badge}
                    </span>
                    <h3 className="mt-1.5 font-heading text-xl font-semibold text-[#1E1612]">
                      {store.name}
                    </h3>
                    <ul className="mt-4 space-y-2.5 text-sm text-[#59453B]">
                      <li className="flex items-start gap-2.5">
                        <MapPin
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#C88A4B]"
                          aria-hidden="true"
                        />
                        <span>
                          {store.address}
                          <br />
                          {store.postal}
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Clock
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#C88A4B]"
                          aria-hidden="true"
                        />
                        <span>{store.hours}</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Phone className="h-4 w-4 shrink-0 text-[#C88A4B]" aria-hidden="true" />
                        <a
                          href={`tel:${store.phone.replace(/\s+/g, "")}`}
                          className="font-medium text-[#1E1612] hover:text-[#965C24]"
                        >
                          {store.phone}
                        </a>
                      </li>
                    </ul>
                    <p className="mt-4 border-t border-[#E6DEC8] pt-3 text-xs leading-relaxed text-[#7A6357]">
                      {store.notes}
                    </p>
                  </div>
                ))}

                <div className="border border-[#E6DEC8] bg-[#F3ECE1] p-6">
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-[#1E1612]">
                    <Mail className="h-4 w-4 text-[#C88A4B]" aria-hidden="true" />
                    <span>encomendas@doceserra.pt</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#59453B]">
                    Para pedidos de empresas, batizados ou casamentos com mais de 40 convidados,
                    respondemos no próprio dia.
                  </p>
                </div>
              </div>

              {/* Coluna Direita: Simulador / Formulário de Encomenda */}
              <div className="lg:col-span-8">
                <Suspense
                  fallback={
                    <div className="border border-[#E6DEC8] bg-white p-10 text-sm text-[#59453B]">
                      A carregar simulador de encomenda...
                    </div>
                  }
                >
                  <CakeOrderForm />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        {/* Mapa Interativo de Lisboa */}
        <LisbonMap />
      </main>

      <Footer />
    </div>
  );
}
