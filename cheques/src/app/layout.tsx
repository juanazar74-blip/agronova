import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Avalio — Score predictivo de cheques para Argentina",
  description:
    "Avalio predice en 10 segundos si un cheque de pago diferido tiene alta probabilidad de ser cobrado o rechazado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased text-navy-900">{children}</body>
    </html>
  );
}
