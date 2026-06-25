"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScoreForm } from "@/components/ScoreForm";
import { ScoreResult } from "@/components/ScoreResult";
import type { ScoreResultado } from "@/lib/score";

export default function DashboardPage() {
  const [resultado, setResultado] = useState<ScoreResultado | null>(null);

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-4rem)] bg-navy-50/50">
        <div className="container-page py-12">
          <div className="max-w-2xl">
            <Link
              href="/"
              className="text-sm font-medium text-navy-500 hover:text-navy-700"
            >
              ← Volver al inicio
            </Link>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Simulador de score
            </h1>
            <p className="mt-3 text-lg text-slate-600">
              Ingresá los datos del cheque de pago diferido y obtené el score
              predictivo, la probabilidad de cobro y una recomendación.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
            <ScoreForm onResultado={setResultado} />
            <ScoreResult resultado={resultado} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
