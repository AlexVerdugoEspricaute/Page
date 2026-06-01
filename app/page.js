import productos from "@/data/productos.json";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-2">
          Catálogo de Buzos
        </h1>

        <p className="text-gray-500 text-sm md:text-base mb-8">
          {productos.length} productos disponibles
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
    </main>
  );
}