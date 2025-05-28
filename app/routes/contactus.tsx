import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import Navbar from "./components/navbar";

export const meta: MetaFunction = () => {
  return [{ title: "Contacto - Subasta por la Paz" }];
};

export default function ContactPage() {
  return (
   <main className="min-h-screen bg-white px-4 py-12 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Contáctanos
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Puedes comunicarte con nosotros a través de los siguientes canales:
        </p>

        <div className="mt-8 space-y-6 text-lg">
          <div>
            📷 Instagram:{"*"}
            <a
              href="https://instagram.com/asecc_coffee"
              target="/"
              rel="Asociacion Colombiana para la excelencia del cafe"
              className="text-blue-600 hover:underline"
            >
              @asecc_coffee
            </a>
          </div>

          <div>
            📧 Correo electrónico:{" "}
            <a
              href="mailto:direccion@asecc.org"
              className="text-blue-600 hover:underline"
            >
              direccion@asecc.org
            </a>
          </div>

          <div>
            💬 WhatsApp:{" "}
            <a
              href="https://wa.me/3212026991"
              target="/"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              +57 3212026991
            </a>
          </div>
        </div>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
