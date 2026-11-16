"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, CakeSlice, Calendar, Clock, MapPin } from "lucide-react";

const CAKE_BASES = [
  { id: "folhado-imperial", label: "Bolo Folhado Imperial (Massa Folhada & Doce de Ovos)", pricePerKg: 24 },
  { id: "frutos-vermelhos", label: "Bolo Folhado de Frutos Vermelhos", pricePerKg: 24 },
  { id: "chocolate-70", label: "Bolo Húmido de Cacau 70% & Avelã", pricePerKg: 23 },
  { id: "pao-de-lo-ovar", label: "Pão-de-Ló Tradicional com Ovos Moles", pricePerKg: 22 },
  { id: "amendoa-algarvia", label: "Bolo de Amêndoa Algarvia (Sem Farinha de Trigo)", pricePerKg: 25 },
];

const FILLINGS = [
  "Doce de Ovos Caseiro",
  "Chantilly Fresco & Frutos Vermelhos",
  "Ganache de Chocolate Negro 70%",
  "Creme de Amêndoa Torrada",
];

const WEIGHTS = [
  { value: 1, label: "1,0 kg · 8 a 10 fatias" },
  { value: 1.5, label: "1,5 kg · 12 a 15 fatias" },
  { value: 2, label: "2,0 kg · 16 a 20 fatias" },
  { value: 3, label: "3,0 kg · 25 a 30 fatias" },
];

export function CakeOrderForm() {
  const searchParams = useSearchParams();
  const [selectedBase, setSelectedBase] = useState(CAKE_BASES[0].id);
  const [filling, setFilling] = useState(FILLINGS[0]);
  const [weight, setWeight] = useState(1.5);
  const [plaqueText, setPlaqueText] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState<"campo-ourique" | "avenidas-novas" | "entrega">(
    "campo-ourique"
  );
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("10:00");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    const produtoParam = searchParams.get("produto");
    if (produtoParam) {
      setNotes(`Interesse em: ${produtoParam}`);
    }
  }, [searchParams]);

  const baseObj = CAKE_BASES.find((b) => b.id === selectedBase) ?? CAKE_BASES[0];
  const deliveryFee = deliveryMethod === "entrega" ? 6.5 : 0;
  const estimatedTotal = baseObj.pricePerKg * weight + deliveryFee;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const randomRef = `DS-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef(randomRef);
  }

  if (submittedRef) {
    return (
      <div className="border border-[#C88A4B] bg-white p-8 shadow-sm sm:p-10">
        <div className="flex items-center gap-3 text-[#2D6A4F]">
          <CheckCircle2 className="h-7 w-7 shrink-0" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">
            Pedido Registado · Referência {submittedRef}
          </span>
        </div>

        <h3 className="mt-4 font-heading text-3xl font-medium text-[#1E1612]">
          Obrigado, {customerName || "estimado cliente"}.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[#59453B]">
          Recebemos o seu pedido de encomenda para{" "}
          <strong className="text-[#1E1612]">{baseObj.label}</strong> ({weight.toString().replace(".", ",")} kg,
          recheio de {filling}). A nossa equipa em Campo de Ourique confirmará a disponibilidade
          por telefone ou email nos próximos 30 minutos.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 border-y border-[#E6DEC8] py-4 text-sm sm:grid-cols-2">
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#7A6357]">
              Levantamento / Entrega
            </span>
            <span className="font-medium text-[#1E1612]">
              {deliveryMethod === "campo-ourique"
                ? "Loja Campo de Ourique"
                : deliveryMethod === "avenidas-novas"
                ? "Loja Avenidas Novas"
                : "Entrega Refrigerada em Lisboa"}{" "}
              · {pickupDate || "Data a confirmar"} às {pickupTime}
            </span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#7A6357]">
              Valor Estimado
            </span>
            <span className="font-heading text-xl font-semibold text-[#965C24]">
              {estimatedTotal.toFixed(2).replace(".", ",")} €
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setSubmittedRef(null)}
          className="mt-6 inline-flex min-h-[44px] items-center justify-center bg-[#1E1612] px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#FAF6F0] transition-colors hover:bg-[#C88A4B]"
        >
          Fazer Nova Encomenda
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[#E6DEC8] bg-white p-6 shadow-sm sm:p-10"
    >
      <div className="flex items-center justify-between gap-4 border-b border-[#E6DEC8] pb-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C88A4B]">
            Encomenda em 24 Horas
          </p>
          <h2 className="mt-1 font-heading text-2xl font-medium text-[#1E1612] sm:text-3xl">
            Simulador &amp; Encomenda de Bolo
          </h2>
        </div>
        <div className="hidden text-right sm:block">
          <span className="block text-[11px] uppercase tracking-wider text-[#7A6357]">
            Estimativa
          </span>
          <span className="font-heading text-2xl font-semibold text-[#965C24]">
            {estimatedTotal.toFixed(2).replace(".", ",")} €
          </span>
        </div>
      </div>

      <div className="mt-7 space-y-6">
        {/* Massa / Bolo */}
        <div>
          <label
            htmlFor="cake-base"
            className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1E1612]"
          >
            1. Escolha o Bolo ou Massa
          </label>
          <select
            id="cake-base"
            value={selectedBase}
            onChange={(e) => setSelectedBase(e.target.value)}
            className="mt-2 min-h-[46px] w-full border border-[#D2C5AE] bg-[#FAF6F0] px-4 py-2.5 text-sm text-[#1E1612] focus:border-[#C88A4B] focus:outline-none"
          >
            {CAKE_BASES.map((base) => (
              <option key={base.id} value={base.id}>
                {base.label} — {base.pricePerKg} €/kg
              </option>
            ))}
          </select>
        </div>

        {/* Recheio & Peso */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="cake-filling"
              className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1E1612]"
            >
              2. Recheio Principal
            </label>
            <select
              id="cake-filling"
              value={filling}
              onChange={(e) => setFilling(e.target.value)}
              className="mt-2 min-h-[46px] w-full border border-[#D2C5AE] bg-[#FAF6F0] px-4 py-2.5 text-sm text-[#1E1612] focus:border-[#C88A4B] focus:outline-none"
            >
              {FILLINGS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="cake-weight"
              className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1E1612]"
            >
              3. Peso &amp; N.º de Pessoas
            </label>
            <select
              id="cake-weight"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="mt-2 min-h-[46px] w-full border border-[#D2C5AE] bg-[#FAF6F0] px-4 py-2.5 text-sm text-[#1E1612] focus:border-[#C88A4B] focus:outline-none"
            >
              {WEIGHTS.map((w) => (
                <option key={w.value} value={w.value}>
                  {w.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Texto da Placa */}
        <div>
          <label
            htmlFor="plaque-text"
            className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1E1612]"
          >
            4. Mensagem na Placa de Chocolate (Grátis)
          </label>
          <input
            id="plaque-text"
            type="text"
            value={plaqueText}
            onChange={(e) => setPlaqueText(e.target.value)}
            placeholder="Ex.: Parabéns Maria · 30 Anos"
            className="mt-2 min-h-[46px] w-full border border-[#D2C5AE] bg-[#FAF6F0] px-4 py-2.5 text-sm text-[#1E1612] placeholder:text-[#A38E82] focus:border-[#C88A4B] focus:outline-none"
          />
        </div>

        {/* Local de Levantamento ou Entrega */}
        <div>
          <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1E1612]">
            5. Levantamento na Loja ou Entrega em Lisboa
          </span>
          <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { id: "campo-ourique", label: "Campo de Ourique", sub: "Sem custo · 06h30+" },
              { id: "avenidas-novas", label: "Avenidas Novas", sub: "Sem custo · 08h30+" },
              { id: "entrega", label: "Entrega em Lisboa", sub: "+ 6,50 € refrigerada" },
            ].map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() =>
                  setDeliveryMethod(opt.id as "campo-ourique" | "avenidas-novas" | "entrega")
                }
                className={`flex flex-col items-start border p-3.5 text-left transition-colors ${
                  deliveryMethod === opt.id
                    ? "border-[#C88A4B] bg-[#F7EBDD]/60"
                    : "border-[#E6DEC8] bg-[#FAF6F0] hover:border-[#C88A4B]/60"
                }`}
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E1612]">
                  <MapPin className="h-3.5 w-3.5 text-[#C88A4B]" aria-hidden="true" />
                  {opt.label}
                </span>
                <span className="mt-1 text-[11px] text-[#59453B]">{opt.sub}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Data & Hora */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="pickup-date"
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#1E1612]"
            >
              <Calendar className="h-3.5 w-3.5 text-[#C88A4B]" aria-hidden="true" />
              Data Pretendida *
            </label>
            <input
              id="pickup-date"
              type="date"
              required
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="mt-2 min-h-[46px] w-full border border-[#D2C5AE] bg-[#FAF6F0] px-4 py-2.5 text-sm text-[#1E1612] focus:border-[#C88A4B] focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="pickup-time"
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#1E1612]"
            >
              <Clock className="h-3.5 w-3.5 text-[#C88A4B]" aria-hidden="true" />
              Hora Preferencial *
            </label>
            <input
              id="pickup-time"
              type="time"
              required
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="mt-2 min-h-[46px] w-full border border-[#D2C5AE] bg-[#FAF6F0] px-4 py-2.5 text-sm text-[#1E1612] focus:border-[#C88A4B] focus:outline-none"
            />
          </div>
        </div>

        {/* Dados do Cliente */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div>
            <label
              htmlFor="customer-name"
              className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1E1612]"
            >
              Nome Completo *
            </label>
            <input
              id="customer-name"
              type="text"
              required
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Maria João"
              className="mt-2 min-h-[46px] w-full border border-[#D2C5AE] bg-[#FAF6F0] px-4 py-2.5 text-sm text-[#1E1612] focus:border-[#C88A4B] focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="customer-phone"
              className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1E1612]"
            >
              Telemóvel *
            </label>
            <input
              id="customer-phone"
              type="tel"
              required
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              placeholder="912 345 678"
              className="mt-2 min-h-[46px] w-full border border-[#D2C5AE] bg-[#FAF6F0] px-4 py-2.5 text-sm text-[#1E1612] focus:border-[#C88A4B] focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="customer-email"
              className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1E1612]"
            >
              Email *
            </label>
            <input
              id="customer-email"
              type="email"
              required
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              placeholder="maria@exemplo.pt"
              className="mt-2 min-h-[46px] w-full border border-[#D2C5AE] bg-[#FAF6F0] px-4 py-2.5 text-sm text-[#1E1612] focus:border-[#C88A4B] focus:outline-none"
            />
          </div>
        </div>

        {/* Notas Adicionais */}
        <div>
          <label
            htmlFor="order-notes"
            className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#1E1612]"
          >
            Observações, Alergias ou Morada de Entrega
          </label>
          <textarea
            id="order-notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Indique se pretende velas, tabuleiros de miniaturas ou morada para entrega em Lisboa..."
            className="mt-2 w-full border border-[#D2C5AE] bg-[#FAF6F0] px-4 py-2.5 text-sm text-[#1E1612] focus:border-[#C88A4B] focus:outline-none"
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#E6DEC8] pt-6 sm:flex-row">
          <div className="text-sm text-[#59453B]">
            Valor estimado:{" "}
            <strong className="font-heading text-xl text-[#965C24]">
              {estimatedTotal.toFixed(2).replace(".", ",")} €
            </strong>{" "}
            <span className="text-xs">(pagamento no levantamento ou MB Way)</span>
          </div>

          <button
            type="submit"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 bg-[#C88A4B] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#140E0B] shadow-md transition-colors hover:bg-[#DDB07D] sm:w-auto"
          >
            <CakeSlice className="h-4 w-4" aria-hidden="true" />
            <span>Confirmar Encomenda</span>
          </button>
        </div>
      </div>
    </form>
  );
}
