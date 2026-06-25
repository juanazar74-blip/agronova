const pasos = [
  {
    n: "1",
    titulo: "Ingresá el CUIT del emisor",
    texto: "Identificamos al librador del cheque para evaluar su perfil.",
  },
  {
    n: "2",
    titulo: "Ingresá el monto del cheque",
    texto: "El importe es clave para dimensionar la exposición de la operación.",
  },
  {
    n: "3",
    titulo: "Ingresá el plazo en días",
    texto: "El tiempo hasta el cobro impacta directamente en el riesgo.",
  },
  {
    n: "4",
    titulo: "Recibí el score y la recomendación",
    texto: "Score, probabilidad de cobro y una recomendación clara: Aprobar, Revisar o Rechazar.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Cómo funciona</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            De los datos al score en 4 pasos
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Sin planillas ni cruces manuales. Cargás tres datos y obtenés una
            evaluación lista para decidir.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p) => (
            <div key={p.n} className="relative rounded-2xl border border-slate-200 bg-navy-50/40 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-700 text-lg font-bold text-white">
                {p.n}
              </span>
              <h3 className="mt-4 text-base font-semibold text-navy-900">
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
