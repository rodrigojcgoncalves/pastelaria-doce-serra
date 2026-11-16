import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termos, Condições & Cancelamentos | Pastelaria Doce Serra",
  description:
    "Condições de encomenda de bolos em 24h, cancelamentos, reembolsos, levantamento em loja e Livro de Reclamações Eletrónico.",
};

export default function TermosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-28 sm:pt-32">
        <section className="bg-[#1E1612] py-14 text-center text-[#FAF6F0]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#DDB07D]">
              • Condições Gerais de Encomenda •
            </p>
            <h1 className="mt-3 font-heading text-3xl font-semibold sm:text-5xl">
              Termos, Condições &amp; Reembolsos
            </h1>
          </div>
        </section>

        <section className="bg-[#FAF6F0] py-16">
          <div className="mx-auto max-w-3xl space-y-8 px-4 text-[15px] leading-relaxed text-[#59453B] sm:px-6">
            <div>
              <h2 className="font-heading text-xl font-semibold text-[#1E1612]">
                1. Prazos de Encomenda
              </h2>
              <p className="mt-2">
                As encomendas de bolos clássicos efetuadas até às 18h00 ficam disponíveis para
                levantamento no dia seguinte (24 horas). Bolos de casamento ou personalizados com
                vários andares requerem confirmação com 5 dias úteis de antecedência.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-[#1E1612]">
                2. Política de Cancelamento e Reembolso
              </h2>
              <p className="mt-2">
                Como todos os produtos são confecionados de raiz e por encomenda com ingredientes
                frescos, os pedidos podem ser alterados ou cancelados sem custos até{" "}
                <strong>24 horas antes</strong> da hora agendada de levantamento ou entrega.
                Cancelamentos com menos de 24 horas estão sujeitos à retenção do sinal de 50% quando
                a produção já tiver sido iniciada. Em caso de defeito ou inconformidade no produto
                entregue, garantimos substituição imediata ou reembolso integral.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-[#1E1612]">
                3. Alergénios e Conservação
              </h2>
              <p className="mt-2">
                Todos os produtos são produzidos em obrador onde se manipula glúten, ovos,
                laticínios e frutos de casca rija. O cliente é responsável por informar eventuais
                alergias no ato da encomenda.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-[#1E1612]">
                4. Resolução de Litígios &amp; Livro de Reclamações
              </h2>
              <p className="mt-2">
                Em caso de litígio de consumo, o cliente pode recorrer ao Centro de Arbitragem de
                Conflitos de Consumo de Lisboa ou apresentar reclamação através do{" "}
                <a
                  href="https://www.livroreclamacoes.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#965C24] underline underline-offset-4"
                >
                  Livro de Reclamações Eletrónico
                </a>
                .
              </p>
            </div>

            <div className="border-t border-[#E6DEC8] pt-6">
              <Link
                href="/faqs"
                className="text-xs font-semibold uppercase tracking-[0.16em] text-[#965C24] hover:text-[#1E1612]"
              >
                ← Ver Perguntas Frequentes
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
