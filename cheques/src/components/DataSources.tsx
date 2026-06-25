const fuentes = [
  {
    nombre: "BCRA",
    detalle: "Central de cheques rechazados y deudores del sistema financiero.",
  },
  {
    nombre: "ARCA / AFIP",
    detalle: "Situación fiscal y estado del CUIT del emisor.",
  },
  {
    nombre: "Nosis",
    detalle: "Comportamiento crediticio e historial comercial.",
  },
  {
    nombre: "Datos propios",
    detalle: "Modelo y señales propias de Avalio (en desarrollo).",
  },
];

export function DataSources() {
  return (
    <section className="bg-navy-900 py-20 text-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-navy-200">
            Fuentes de datos
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Una sola consulta, múltiples fuentes
          </h2>
          <p className="mt-4 text-lg text-navy-100">
            Avalio integra fuentes públicas y privadas para construir el score.
            Vos hacés una consulta; nosotros cruzamos los datos.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fuentes.map((f) => (
            <div
              key={f.nombre}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{f.nombre}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-200">
                {f.detalle}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-navy-300">
          * Integraciones en distintos estados de desarrollo. El MVP actual
          opera con un motor de score simulado.
        </p>
      </div>
    </section>
  );
}
