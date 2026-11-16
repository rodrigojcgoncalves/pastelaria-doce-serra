import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Flame, Wheat, Award, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LisbonMap } from "@/components/LisbonMap";

export const metadata: Metadata = {
  title: "Sobre Nós | Pastelaria Doce Serra — Lisboa desde 1988",
  description:
    "Conheça a história da família Serra desde 1988 em Campo de Ourique, o nosso forno de pedra, a massa folhada de manteiga e o doce de ovos caseiro.",
};

const TIMELINE = [
  {
    year: "1988",
    title: "Abertura na Rua Ferreira Borges",
    description:
      "António e Maria Helena Serra inauguram a primeira loja em Campo de Ourique com um forno de pedra e cinco receitas de família.",
  },
  {
    year: "1999",
    title: "O Segredo da Massa Folhada & Doce de Ovos",
    description:
      "Ampliamos o obrador para laminar diariamente massa folhada com manteiga dos Açores e apurar doce de ovos em tacho de cobre.",
  },
  {
    year: "2014",
    title: "Segunda Loja nas Avenidas Novas",
    description:
      "Abrimos o salão de chá na Av. Defensores de Chaves, abastecido três vezes por dia diretamente do nosso forno em Campo de Ourique.",
  },
  {
    year: "Hoje",
    title: "Segunda Geração ao Balcão",
    description:
      "Mantemos o mesmo fermento natural de 1988, a mesma exigência na matéria-prima e encomendas personalizadas prontas em 24 horas.",
  },
];

const COMMITMENTS = [
  {
    icon: Flame,
    title: "Forno Aceso às 06h30",
    description:
      "As primeiras fornadas de pastéis de nata e pão rústico saem do forno de pedra antes de a cidade acordar, garantindo crosta estaladiça todo o dia.",
  },
  {
    icon: Wheat,
    title: "Zero Pré-Misturas Industriais",
    description:
      "Usamos exclusivamente ovos frescos de casca, farinhas portuguesas moídas em pedra, requeijão de ovelha e amêndoa torrada do Algarve.",
  },
  {
    icon: Award,
    title: "Doçaria Conventual Autêntica",
    description:
      "O nosso doce de ovos é apurado lentamente em caldeiro até atingir o ponto de estrada exato, sem espessantes nem corantes.",
  },
];

export default function SobreNosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 pt-28 sm:pt-32">
        {/* Hero de Página Interna */}
        <section className="relative overflow-hidden bg-[#1E1612] py-20 text-[#FAF6F0]">
          <Image
            src="/images/oficina-massa.jpg"
            alt="Obrador da Pastelaria Doce Serra"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#DDB07D]">
              • Tradição Familiar em Lisboa •
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
              O Sabor do Fabrico Próprio Desde 1988
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-accent text-xl italic text-[#E6DEC8]">
              Entre a farinha peneirada de madrugada e o brilho do caramelo nos pastéis de nata,
              cada dia na Doce Serra começa antes do nascer do sol.
            </p>
          </div>
        </section>

        {/* Narrativa do Obrador */}
        <section id="obrador" className="bg-[#FAF6F0] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C88A4B]">
                  A Nossa Oficina
                </p>
                <h2 className="mt-2 font-heading text-3xl font-medium text-[#1E1612] sm:text-4xl">
                  Da Manteiga Pura ao Forno de Pedra
                </h2>
                <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#59453B]">
                  <p>
                    Na Pastelaria Doce Serra acreditamos que não existem atalhos na boa confeitaria
                    portuguesa. A nossa massa folhada repousa 24 horas entre dobras para criar
                    centenas de folhas estaladiças que não pesam nem deixam resíduo.
                  </p>
                  <p>
                    O pão rústico fermenta com a massa mãe iniciada pelo Mestre António Serra em
                    1988, alimentada diariamente com água filtrada e farinha de trigo nacional.
                    Cada bolo de aniversário é montado apenas no dia da entrega, com fruta fresca
                    cortada na manhã do levantamento.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4 border-l-2 border-[#C88A4B] pl-5">
                  <Clock className="h-5 w-5 shrink-0 text-[#C88A4B]" aria-hidden="true" />
                  <p className="text-sm text-[#1E1612]">
                    <strong>Horário do Obrador:</strong> Produção contínua entre as{" "}
                    <span className="text-[#965C24]">04h00 e as 17h00</span> em Campo de Ourique.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 lg:col-span-6">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#E6DEC8] shadow-lg">
                  <Image
                    src="/images/oficina-massa.jpg"
                    alt="Preparação artesanal de massa no obrador"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 280px"
                  />
                </div>
                <div className="relative mt-8 aspect-[3/4] overflow-hidden bg-[#E6DEC8] shadow-lg">
                  <Image
                    src="/images/pao-rustico.jpg"
                    alt="Pão rústico cozido em forno de pedra"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 280px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cronologia da Casa */}
        <section className="border-y border-[#E6DEC8] bg-[#F3ECE1] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C88A4B]">
                Quase Quatro Décadas
              </p>
              <h2 className="mt-2 font-heading text-3xl font-medium text-[#1E1612] sm:text-4xl">
                A História da Família Serra
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {TIMELINE.map((item) => (
                <div
                  key={item.year}
                  className="border border-[#E6DEC8] bg-[#FAF6F0] p-6 shadow-sm"
                >
                  <span className="font-heading text-3xl font-semibold text-[#C88A4B]">
                    {item.year}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-[#1E1612]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#59453B]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compromissos de Frescura */}
        <section className="bg-[#FAF6F0] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {COMMITMENTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="border border-[#E6DEC8] bg-white p-8 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center bg-[#FAF6F0] text-[#C88A4B]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-semibold text-[#1E1612]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#59453B]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-14 text-center">
              <Link
                href="/contactos#encomenda"
                className="inline-flex min-h-[48px] items-center justify-center bg-[#C88A4B] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#140E0B] transition-colors hover:bg-[#DDB07D]"
              >
                Encomendar Bolo de Festa
              </Link>
            </div>
          </div>
        </section>

        <LisbonMap />
      </main>

      <Footer />
    </div>
  );
}
