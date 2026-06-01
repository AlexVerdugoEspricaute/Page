import Image from "next/image";

const WHATSAPP_NUMBER = "56912345678";

export default function ProductCard({ nombre, precio, imagen, descripcion }) {
  const precioFormateado = precio.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  });

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola, quiero consultar por el producto ${nombre}`
  )}`;

  return (
    <div className="group bg-white shadow-sm hover:shadow-lg transition-all duration-300 ease-out overflow-hidden flex flex-col cursor-pointer">
      {/* Imagen */}
      <div className="relative w-full h-64 overflow-hidden bg-neutral-100">
        <Image
          src={imagen}
          alt={nombre}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Contenido */}
      <div className="px-4 py-4 flex flex-col flex-1 gap-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-sm font-semibold tracking-tight text-neutral-900 leading-snug">
            {nombre}
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
            {descripcion}
          </p>
        </div>

        <p className="text-base font-semibold text-neutral-800 tracking-tight">
          {precioFormateado}
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full flex items-center justify-center bg-green-600 hover:bg-green-700 active:bg-green-800 text-white text-xs font-semibold tracking-widest uppercase py-3 px-4 transition-all duration-300 ease-out"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  );
}
