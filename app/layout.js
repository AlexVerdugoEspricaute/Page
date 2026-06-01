import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Buzos Store — Nueva Colección",
  description: "Catálogo de buzos premium. Calidad, comodidad y estilo en cada prenda.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
