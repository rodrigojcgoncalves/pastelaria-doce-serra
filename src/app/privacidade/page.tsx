import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidade (RGPD) | Pastelaria Doce Serra",
  description:
    "Informação sobre tratamento de dados pessoais, finalidade de recolha de encomendas e direitos dos titulares ao abrigo do RGPD.",
};

export default function PrivacidadePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-28 sm:pt-32">
        <section className="bg-[#1E1612] py-14 text-center text-[#FAF6F0]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#DDB07D]">
              • Conformidade RGPD •
            </p>
            <h1 className="mt-3 font-heading text-3xl font-semibold sm:text-5xl">
              Política de Privacidade
            </h1>
          </div>
        </section>

        <section className="bg-[#FAF6F0] py-16">
          <div className="mx-auto max-w-3xl space-y-8 px-4 text-[15px] leading-relaxed text-[#59453B] sm:px-6">
            <div className="border border-[#E6DEC8] bg-white p-6">
              <h2 className="font-heading text-xl font-semibold text-[#1E1612]">
                1. Responsável pelo Tratamento
              </h2>
              <p className="mt-2">
                <strong>Pastelaria Doce Serra, Lda.</strong> (projeto de demonstração), com sede na
                Rua Ferreira Borges, 118, 1350-134 Lisboa, NIF de demonstração{" "}
                <strong>509 000 000</strong> e email de contacto{" "}
                <a
                  href="mailto:encomendas@doceserra.pt"
                  className="font-medium text-[#965C24] underline underline-offset-4"
                >
                  encomendas@doceserra.pt
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-[#1E1612]">
                2. Dados Recolhidos e Finalidade (Minimização de Dados)
              </h2>
              <p className="mt-2">
                No formulário de encomenda de bolos e contacto recolhemos apenas os dados
                estritamente necessários: nome, contacto telefónico, endereço de email, detalhes do
                bolo escolhido e data/hora de levantamento ou entrega em Lisboa. Estes dados são
                utilizados exclusivamente para confirmar e preparar a sua encomenda.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-[#1E1612]">
                3. Prazo de Conservação e Partilha
              </h2>
              <p className="mt-2">
                Os dados de encomenda são conservados apenas pelo período necessário à conclusão do
                serviço e cumprimento das obrigações fiscais legais aplicáveis. Não vendemos nem
                cedemos dados pessoais a terceiros para fins comerciais.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-[#1E1612]">
                4. Direitos dos Titulares
              </h2>
              <p className="mt-2">
                Nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD), pode solicitar o
                acesso, retificação, limitação ou apagamento dos seus dados através do email{" "}
                <a
                  href="mailto:encomendas@doceserra.pt"
                  className="font-medium text-[#965C24] underline underline-offset-4"
                >
                  encomendas@doceserra.pt
                </a>
                .
              </p>
            </div>

            <div className="border-t border-[#E6DEC8] pt-6">
              <Link
                href="/contactos#encomenda"
                className="text-xs font-semibold uppercase tracking-[0.16em] text-[#965C24] hover:text-[#1E1612]"
              >
                ← Voltar ao Formulário de Encomenda
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
