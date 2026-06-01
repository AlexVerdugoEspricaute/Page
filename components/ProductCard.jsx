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
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="relative w-full h-56">
        <Image
          src={imagen}
          alt={nombre}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-4 flex flex-col flex-1 gap-2">
        <h2 className="text-lg font-semibold text-gray-800 leading-tight">
          {nombre}
        </h2>

        <p className="text-sm text-gray-500 flex-1">{descripcion}</p>

        <p className="text-xl font-bold text-indigo-600">{precioFormateado}</p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 w-full text-center bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-medium py-2 px-4 rounded-xl transition-colors duration-200"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
}
