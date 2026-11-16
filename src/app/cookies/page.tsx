import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Cookies | Pastelaria Doce Serra",
  description:
    "Informação transparente sobre o uso exclusivo de cookies técnicos essenciais e ausência de rastreamento publicitário.",
};

export default function CookiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-28 sm:pt-32">
        <section className="bg-[#1E1612] py-14 text-center text-[#FAF6F0]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#DDB07D]">
              • Transparência Digital •
            </p>
            <h1 className="mt-3 font-heading text-3xl font-semibold sm:text-5xl">
              Política de Cookies
            </h1>
          </div>
        </section>

        <section className="bg-[#FAF6F0] py-16">
          <div className="mx-auto max-w-3xl space-y-8 px-4 text-[15px] leading-relaxed text-[#59453B] sm:px-6">
            <div>
              <h2 className="font-heading text-xl font-semibold text-[#1E1612]">
                1. O que são Cookies e Armazenamento Local?
              </h2>
              <p className="mt-2">
                Cookies e chaves de armazenamento local (<code>localStorage</code>) são pequenos
                registos guardados no seu navegador para assegurar o funcionamento técnico básico do
                website.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-[#1E1612]">
                2. Que Cookies Utilizamos
              </h2>
              <p className="mt-2">
                Este website utiliza apenas um registo técnico essencial (
                <code>doce_serra_cookie_consent</code>) para memorizar a sua escolha no aviso de
                cookies. Não utilizamos cookies publicitários, píxeis de redes sociais nem
                ferramentas invasivas de rastreamento de terceiros.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-[#1E1612]">
                3. Mapas Incorporados (Google Maps)
              </h2>
              <p className="mt-2">
                Na secção de localização das nossas lojas em Lisboa incorporamos o Google Maps para
                facilitar a visualização de moradas e direções. Ao interagir com o mapa, o serviço
                Google Maps pode aplicar os seus próprios parâmetros técnicos de funcionamento.
              </p>
            </div>

            <div className="border-t border-[#E6DEC8] pt-6">
              <Link
                href="/"
                className="text-xs font-semibold uppercase tracking-[0.16em] text-[#965C24] hover:text-[#1E1612]"
              >
                ← Voltar à Página Inicial
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
