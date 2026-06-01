import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-indigo-600 tracking-tight hover:text-indigo-700 transition-colors"
        >
          Buzos Store
        </Link>

        <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <li>
            <Link
              href="/"
              className="hover:text-indigo-600 transition-colors"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="hover:text-indigo-600 transition-colors"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
