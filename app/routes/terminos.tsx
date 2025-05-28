import { MetaFunction } from "@remix-run/node";

import Navbar from "./components/navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Términos de Referencia - Subasta por la Paz 2025" },
    {
      name: "description",
      content:
        "Términos de referencia para participar en la Subasta por la Paz 2025 organizada por la Gobernación del Cauca y ASECC.",
    },
  ];
};

export default function Terminos() {
  return (
    <main className="bg-white text-gray-800 px-6 py-20 max-w-4xl mx-auto font-nunito">
      <Navbar />
      <h1 className="text-center text-4xl font-semibold text-[#D91448] font-raleway mb-12 py-10">
        LA SUBASTA POR LA PAZ 2025 <br />
        <span className="block text-gray-900 text-2xl mt-2">Términos y condiciones</span>
      </h1>

      <div className="space-y-6 text-base leading-relaxed">
        <section>
          <p className="text-lg mb-8 text-gray-700">
            El documento establece los términos de participación en el concurso &quot;SUBASTA POR LA PAZ 2025&quot; organizado por la <strong>GOBERNACIÓN DEL CAUCA</strong> en alianza con la <strong>Asociación Colombiana para la Excelencia del Café - ASECC</strong>. Esta iniciativa tiene como propósito visibilizar y premiar los mejores cafés especiales del departamento, ofreciendo a los caficultores una plataforma para acceder al mercado internacional con precios diferenciados. Así mismo, busca impulsar alternativas de desarrollo sostenible para las familias productoras de regiones históricamente afectadas por el conflicto.
          </p>
        </section>

        {/* El resto del contenido del componente permanece igual */}
        {/* Asegúrate de aplicar el mismo cambio de comillas escapadas en otras apariciones de comillas dobles dentro de texto JSX */}
      </div>
    </main>
  );
}
