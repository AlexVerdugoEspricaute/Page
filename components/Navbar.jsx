import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-neutral-200/70 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-widest uppercase text-neutral-900 hover:text-neutral-600 transition-colors duration-200"
        >
          Buzos Store
        </Link>

        <ul className="flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-neutral-500">
          <li>
            <Link
              href="/"
              className="hover:text-neutral-900 transition-colors duration-200"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="hover:text-neutral-900 transition-colors duration-200"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
