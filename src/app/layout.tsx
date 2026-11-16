import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["500", "600"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Pastelaria Doce Serra | Pastelaria Tradicional, Confeitaria & Forno Próprio em Lisboa",
  description:
    "Desde 1988 em Lisboa com fabrico próprio diário. Forno aceso às 06h30, pastelaria conventual portuguesa, massa folhada de manteiga e bolos de aniversário por encomenda em 24h.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      className={`${fraunces.variable} ${plusJakarta.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-hidden bg-[#FAF6F0] text-[#1E1612] antialiased selection:bg-[#C88A4B] selection:text-[#140E0B]">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
