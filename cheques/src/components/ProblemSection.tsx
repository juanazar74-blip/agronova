const problemas = [
  {
    titulo: "Análisis manual y lento",
    texto:
      "SGRs, ALyCs, fondos pyme, empresas y contadores revisan cada cheque a mano, cruzando datos dispersos y tardando horas por operación.",
  },
  {
    titulo: "Riesgo de rechazos",
    texto:
      "Sin una señal clara de riesgo, se aceptan cheques que terminan rechazados, generando pérdidas directas y problemas de liquidez.",
  },
  {
    titulo: "Decisiones por intuición",
    texto:
      "La falta de un score objetivo lleva a decidir por olfato, sin un criterio consistente ni trazabilidad entre analistas.",
  },
];

export function ProblemSection() {
  return (
    <section id="problema" className="bg-white py-20">
      <div className="container-page">
        <span className="eyebrow">El problema</span>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          Evaluar cheques hoy es manual, lento y caro
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          El mercado de cheques de pago diferido mueve miles de millones, pero
          la evaluación de riesgo sigue siendo artesanal.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problemas.map((p) => (
            <div key={p.titulo} className="card">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-risk-high">
                <span className="text-lg font-bold">!</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">
                {p.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {p.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
