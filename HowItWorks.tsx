import Link from "next/link";

interface Plan {
  nombre: string;
  precio: string;
  periodo?: string;
  consultas: string;
  destacado?: boolean;
  cta: string;
}

const planes: Plan[] = [
  {
    nombre: "Free",
    precio: "USD 0",
    consultas: "3 consultas gratis",
    cta: "Empezar gratis",
  },
  {
    nombre: "Basic",
    precio: "USD 20",
    periodo: "/mes",
    consultas: "50 consultas",
    cta: "Elegir Basic",
  },
  {
    nombre: "Pro",
    precio: "USD 60",
    periodo: "/mes",
    consultas: "200 consultas",
    destacado: true,
    cta: "Elegir Pro",
  },
  {
    nombre: "Enterprise SGR",
    precio: "USD 600",
    periodo: "/mes",
    consultas: "1.000 consultas",
    cta: "Contactar ventas",
  },
  {
    nombre: "Enterprise Full",
    precio: "USD 1.500",
    periodo: "/mes",
    consultas: "Consultas ilimitadas",
    cta: "Contactar ventas",
  },
];

export function Pricing() {
  return (
    <section id="planes" className="bg-navy-50 py-20">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Planes</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Precios simples, por volumen de consultas
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Probá gratis y escalá según el volumen de cheques que evalúes.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 xl:grid-cols-5">
          {planes.map((plan) => (
            <div
              key={plan.nombre}
              className={`flex flex-col rounded-2xl border p-6 ${
                plan.destacado
                  ? "border-navy-700 bg-white shadow-lg ring-1 ring-navy-700"
                  : "border-slate-200 bg-white shadow-sm"
              }`}
            >
              {plan.destacado && (
                <span className="mb-3 inline-flex w-fit rounded-full bg-navy-700 px-2.5 py-0.5 text-xs font-semibold text-white">
                  Más elegido
                </span>
              )}
              <h3 className="text-lg font-semibold text-navy-900">
                {plan.nombre}
              </h3>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-3xl font-bold text-navy-900">
                  {plan.precio}
                </span>
                {plan.periodo && (
                  <span className="pb-1 text-sm text-slate-500">
                    {plan.periodo}
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm font-medium text-slate-600">
                {plan.consultas}
              </p>
              <div className="flex-1" />
              <Link
                href="/dashboard"
                className={`mt-6 ${
                  plan.destacado ? "btn-primary" : "btn-secondary"
                } w-full`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
