import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="/#problema" className="text-sm font-medium text-navy-700 hover:text-navy-900">
            Problema
          </a>
          <a href="/#como-funciona" className="text-sm font-medium text-navy-700 hover:text-navy-900">
            Cómo funciona
          </a>
          <a href="/#planes" className="text-sm font-medium text-navy-700 hover:text-navy-900">
            Planes
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="btn-primary !py-2 !px-4">
            Probar gratis
          </Link>
        </div>
      </div>
    </header>
  );
}
