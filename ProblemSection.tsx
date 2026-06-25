"use client";

import { useState } from "react";
import {
  calcularScore,
  cuitEsValido,
  formatearARS,
  normalizarCuit,
  type ScoreResultado,
} from "@/lib/score";

interface Props {
  onResultado: (r: ScoreResultado | null) => void;
}

export function ScoreForm({ onResultado }: Props) {
  const [cuit, setCuit] = useState("");
  const [monto, setMonto] = useState("");
  const [plazo, setPlazo] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [calculando, setCalculando] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!cuitEsValido(cuit)) {
      setError("Ingresá un CUIT válido (11 dígitos).");
      return;
    }
    const montoNum = Number(monto);
    if (!montoNum || montoNum <= 0) {
      setError("Ingresá un monto válido mayor a 0.");
      return;
    }
    const plazoNum = Number(plazo);
    if (!plazoNum || plazoNum <= 0) {
      setError("Ingresá un plazo válido en días.");
      return;
    }

    // Simulamos los ~10 segundos de "procesamiento" (acá iría la llamada a la API).
    setCalculando(true);
    onResultado(null);
    setTimeout(() => {
      const resultado = calcularScore({
        cuit,
        monto: montoNum,
        plazoDias: plazoNum,
      });
      onResultado(resultado);
      setCalculando(false);
    }, 900);
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <h2 className="text-xl font-bold text-navy-900">Evaluar un cheque</h2>
      <p className="mt-1 text-sm text-slate-500">
        Cargá los datos del cheque y obtené el score en segundos.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="cuit" className="block text-sm font-medium text-navy-800">
            CUIT del emisor
          </label>
          <input
            id="cuit"
            type="text"
            inputMode="numeric"
            placeholder="30-12345678-9"
            value={cuit}
            onChange={(e) => setCuit(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-navy-900 outline-none transition focus:border-navy-500 focus:ring-2 focus:ring-navy-200"
          />
          {cuit.length > 0 && (
            <p className="mt-1 text-xs text-slate-400">
              {normalizarCuit(cuit).length}/11 dígitos
            </p>
          )}
        </div>

        <div>
          <label htmlFor="monto" className="block text-sm font-medium text-navy-800">
            Monto del cheque (ARS)
          </label>
          <input
            id="monto"
            type="number"
            min="0"
            placeholder="5000000"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-navy-900 outline-none transition focus:border-navy-500 focus:ring-2 focus:ring-navy-200"
          />
          {Number(monto) > 0 && (
            <p className="mt-1 text-xs text-slate-400">
              {formatearARS(Number(monto))}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="plazo" className="block text-sm font-medium text-navy-800">
            Plazo en días
          </label>
          <input
            id="plazo"
            type="number"
            min="0"
            placeholder="60"
            value={plazo}
            onChange={(e) => setPlazo(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-navy-900 outline-none transition focus:border-navy-500 focus:ring-2 focus:ring-navy-200"
          />
        </div>
      </div>

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-risk-high">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={calculando}
        className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {calculando ? "Calculando score…" : "Calcular score"}
      </button>

      <p className="mt-3 text-center text-xs text-slate-400">
        MVP de demostración · motor de score simulado
      </p>
    </form>
  );
}
