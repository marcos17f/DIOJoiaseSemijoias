import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DIO Joias & Semijoias — Prata 925 com Moissanite",
  description:
    "Semijoias em prata 925 com moissanite, contraste registrado. Naturalmente marcante, de Bom Jesus (PI) para todo o Brasil.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${workSans.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
