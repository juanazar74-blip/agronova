import type {
  NivelRiesgo,
  Recomendacion,
  ScoreResultado,
  Senal,
} from "@/lib/score";

const riesgoStyles: Record<NivelRiesgo, { text: string; bg: string; bar: string; ring: string }> = {
  Bajo: {
    text: "text-emerald-700",
    bg: "bg-emerald-100",
    bar: "bg-emerald-500",
    ring: "ring-emerald-500",
  },
  Medio: {
    text: "text-amber-700",
    bg: "bg-amber-100",
    bar: "bg-amber-500",
    ring: "ring-amber-500",
  },
  Alto: {
    text: "text-red-700",
    bg: "bg-red-100",
    bar: "bg-red-500",
    ring: "ring-red-500",
  },
};

const recomendacionStyles: Record<Recomendacion, string> = {
  Aprobar: "text-emerald-700 bg-emerald-50 border-emerald-200",
  Revisar: "text-amber-700 bg-amber-50 border-amber-200",
  Rechazar: "text-red-700 bg-red-50 border-red-200",
};

const senalDot: Record<Senal["tipo"], string> = {
  positiva: "bg-emerald-500",
  neutral: "bg-slate-400",
  negativa: "bg-red-500",
};

export function ScoreResult({ resultado }: { resultado: ScoreResultado | null }) {
  if (!resultado) {
    return (
      <div className="card flex h-full min-h-[420px] flex-col items-center justify-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-navy-400">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 13.5L9 7.5L13 11.5L21 3.5M21 3.5H15M21 3.5V9.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-navy-900">
          Tu resultado aparece acá
        </h3>
        <p className="mt-1 max-w-xs text-sm text-slate-500">
          Completá los datos del cheque y presioná “Calcular score” para ver el
          análisis.
        </p>
      </div>
    );
  }

  const s = riesgoStyles[resultado.nivelRiesgo];

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold uppercase tracking-wider text-navy-500">
          Score Avalio
        </span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${s.bg} ${s.text}`}
        >
          Riesgo {resultado.nivelRiesgo.toLowerCase()}
        </span>
      </div>

      <div className="mt-4 flex items-end gap-2">
        <span className="text-6xl font-bold text-navy-900">
          {resultado.score}
        </span>
        <span className="pb-2 text-sm text-slate-500">/ 100</span>
      </div>

      <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full transition-all ${s.bar}`}
          style={{ width: `${resultado.score}%` }}
        />
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-navy-50 p-4">
          <dt className="text-xs font-medium uppercase tracking-wide text-navy-500">
            Probabilidad de cobro
          </dt>
          <dd className="mt-1 text-2xl font-bold text-navy-900">
            {resultado.probabilidadCobro}%
          </dd>
        </div>
        <div className="rounded-xl bg-navy-50 p-4">
          <dt className="text-xs font-medium uppercase tracking-wide text-navy-500">
            Nivel de riesgo
          </dt>
          <dd className={`mt-1 text-2xl font-bold ${s.text}`}>
            {resultado.nivelRiesgo}
          </dd>
        </div>
      </dl>

      <div className="mt-4">
        <span className="text-xs font-medium uppercase tracking-wide text-navy-500">
          Recomendación
        </span>
        <div
          className={`mt-2 flex items-center justify-center rounded-xl border py-3 text-lg font-bold ${
            recomendacionStyles[resultado.recomendacion]
          }`}
        >
          {resultado.recomendacion}
        </div>
      </div>

      <div className="mt-6">
        <span className="text-xs font-medium uppercase tracking-wide text-navy-500">
          Señales detectadas
        </span>
        <ul className="mt-3 space-y-2.5">
          {resultado.senales.map((senal, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-navy-800">
              <span
                className={`mt-1.5 h-2 w-2 flex-none rounded-full ${senalDot[senal.tipo]}`}
              />
              <span>{senal.texto}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-xs text-slate-400">
        Resultado generado por un motor simulado para fines de demostración. No
        constituye asesoramiento financiero.
      </p>
    </div>
  );
}
