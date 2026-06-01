import productos from "@/data/productos.json";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />

      {/* ── Hero Section ── */}
      <section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Contenido */}
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-4">
            Nueva colección
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight mb-4">
            Buzos para cada
            <br />
            momento del día
          </h1>
          <p className="text-base text-white/70 mb-8">
            Calidad, comodidad y estilo en cada prenda.
          </p>
          <a
            href="#catalogo"
            className="inline-block border border-white text-white text-xs font-semibold tracking-widest uppercase px-8 py-3 hover:bg-white hover:text-neutral-900 transition-all duration-300"
          >
            Ver catálogo
          </a>
        </div>
      </section>

      {/* ── Catálogo ── */}
      <section id="catalogo" className="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
        <div className="mb-8 border-b border-neutral-300 pb-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
              Catálogo
            </h2>
            <p className="text-xs text-neutral-400 tracking-widest uppercase mt-1">
              {productos.length} productos
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-neutral-200">
          {productos.map((producto) => (
            <ProductCard
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              descripcion={producto.descripcion}
            />
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-neutral-200 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs tracking-widest uppercase text-neutral-400">
            © {new Date().getFullYear()} Buzos Store
          </p>
          <p className="text-xs text-neutral-400">
            Todos los derechos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}