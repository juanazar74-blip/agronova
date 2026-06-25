import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-12 text-navy-200">
      <div className="container-page flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <Logo light />
          <p className="mt-3 max-w-xs text-sm text-navy-300">
            Score predictivo de cheques de pago diferido para Argentina.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <a href="/#problema" className="hover:text-white">Problema</a>
          <a href="/#como-funciona" className="hover:text-white">Cómo funciona</a>
          <a href="/#planes" className="hover:text-white">Planes</a>
          <a href="/dashboard" className="hover:text-white">Probar gratis</a>
        </nav>
      </div>

      <div className="container-page mt-8 border-t border-white/10 pt-6 text-xs text-navy-400">
        © {new Date().getFullYear()} Avalio. MVP de demostración — el motor de
        score es simulado y no constituye asesoramiento financiero.
      </div>
    </footer>
  );
}
