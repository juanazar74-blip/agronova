const features = [
  "Score de riesgo objetivo del 1 al 100 por operación.",
  "Probabilidad de cobro y recomendación accionable.",
  "Señales explicadas: entendés por qué sube o baja el score.",
  "Consolida datos públicos y privados en una sola consulta.",
];

export function SolutionSection() {
  return (
    <section className="bg-navy-50 py-20">
      <div className="container-page grid items-center gap-12 md:grid-cols-2">
        <div>
          <span className="eyebrow">La solución</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Un score de riesgo por cheque, en segundos
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Avalio consolida datos públicos y privados para generar un score de
            riesgo por operación. Reemplazá horas de análisis manual por una
            consulta clara y trazable.
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10.5L8 14.5L16 6"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-base text-navy-800">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card border-navy-100 bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-navy-500">
            Antes vs. con Avalio
          </p>
          <div className="mt-6 space-y-5">
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Tiempo por evaluación</span>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-2xl font-bold text-risk-high line-through decoration-2">
                  ~2 hs
                </span>
                <span className="text-slate-400">→</span>
                <span className="text-2xl font-bold text-emerald-600">10 s</span>
              </div>
            </div>
            <div className="h-px bg-slate-100" />
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Criterio de decisión</span>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-lg font-semibold text-risk-high">
                  Intuición
                </span>
                <span className="text-slate-400">→</span>
                <span className="text-lg font-semibold text-emerald-600">
                  Datos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
