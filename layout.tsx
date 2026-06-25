import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-navy-400 blur-3xl" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-emerald-500/40 blur-3xl" />
      </div>

      <div className="container-page relative grid gap-12 py-20 md:grid-cols-2 md:py-28">
        <div className="flex flex-col justify-center">
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-navy-100">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Riesgo de cheques · Argentina
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Score predictivo de cheques para Argentina
          </h1>

          <p className="mt-5 max-w-xl text-lg text-navy-100">
            Avalio predice en 10 segundos si un cheque de pago diferido tiene
            alta probabilidad de ser cobrado o rechazado.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/dashboard" className="btn-primary !bg-white !text-navy-900 hover:!bg-navy-50">
              Probar gratis
            </Link>
            <a href="#como-funciona" className="btn-secondary !border-white/30 !bg-transparent !text-white hover:!bg-white/10">
              Ver cómo funciona
            </a>
          </div>

          <p className="mt-6 text-sm text-navy-200">
            Pensado para SGRs, ALyCs, fondos pyme, empresas y estudios contables.
          </p>
        </div>

        {/* Mockup de resultado */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/95 p-6 text-navy-900 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy-500">
                Score Avalio
              </span>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                Riesgo bajo
              </span>
            </div>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-5xl font-bold text-navy-900">86</span>
              <span className="pb-1.5 text-sm text-slate-500">/ 100</span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[86%] rounded-full bg-emerald-500" />
            </div>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-slate-500">Probabilidad de cobro</dt>
                <dd className="font-semibold">83%</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-500">Recomendación</dt>
                <dd className="font-semibold text-emerald-600">Aprobar</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
