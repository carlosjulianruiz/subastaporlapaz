import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Navbar from "./components/navbar";

export default function InscripcionLotes() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
        <Navbar />
      <div className="mb-8">
       
      </div>
        <img
          src="https://sfo2.digitaloceanspaces.com/asecc/subastaporlapaz/sponsors/logos-04.svg"
          alt="Subasta por la Paz 2025"
          className="h-20 mx-auto"
        />
      <h1 className="text-3xl font-bold text-center mb-6">   
            Inscripción de Lotes
      </h1>

      <p className="mb-4">
        Los caficultores que deseen participar en el concurso
        <strong> "SUBASTA POR LA PAZ 2025" </strong>
        deben entregar un lote de café pergamino seco junto con el formulario
        de inscripción en uno de los Puntos de Entrega Autorizados. Los puntos
        de Acopio recibirán el café desde el <strong>25 de mayo</strong> al
        <strong> 20 de julio del 2025</strong>.
      </p>

      <p className="mb-4 font-semibold text-red-600">
        Nota: No se permiten entregas de muestras de café en pergamino, los
        puntos de acopio deben recibir los lotes físicos para ser muestreados y
        valorados.
      </p>

      <h2 className="text-xl font-semibold mb-2">Tamaños de Lote Permitidos</h2>
      <p className="mb-4">
        Los tamaños de los lotes deben estar dentro de los siguientes rangos de
        peso, equivalentes en pergamino a 20 kg de café excelso como mínimo y
        200 kg como máximo:
      </p>

      <table className="w-full table-auto border mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Proceso</th>
            <th className="border px-4 py-2">Peso Mínimo (kg) <br></br>Café Pergamino Seco</th>
            <th className="border px-4 py-2">Peso Máximo (kg)<br></br>Café Pergamino Seco</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border px-4 py-2">Anaeróbicos Lavados</td><td className="border px-4 py-2">27</td><td className="border px-4 py-2">260</td></tr>
          <tr><td className="border px-4 py-2">Anaeróbicos Naturales</td><td className="border px-4 py-2">43</td><td className="border px-4 py-2">410</td></tr>
          <tr><td className="border px-4 py-2">Naturales</td><td className="border px-4 py-2">43</td><td className="border px-4 py-2">425</td></tr>
          <tr><td className="border px-4 py-2">Honey</td><td className="border px-4 py-2">32</td><td className="border px-4 py-2">315</td></tr>
          <tr><td className="border px-4 py-2">Lavados</td><td className="border px-4 py-2">27</td><td className="border px-4 py-2">265</td></tr>
        </tbody>
      </table>

      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          Cada productor puede presentar hasta dos (2) lotes de diferente proceso
          por finca.
        </li>
        <li>
          El lote debe ser procesado de forma separada por el productor, sin mezclar
          cafés de otras fincas.
        </li>
        <li>
          Se aceptan lotes lavados, honey, naturales o anaeróbicos que cumplan
          con los requisitos de calidad.
        </li>
        <li>
          Lotes más grandes que superen los 85 puntos en taza no participarán en
          subasta pero sí en rueda de negocios.
        </li>
        <li className="text-red-600">
          No se permiten lotes mezclados entre procesos ni con aditivos como
          levaduras o acidulantes.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Parámetros de Calidad</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Puntaje de taza mínimo: <strong>85 puntos (taza limpia)</strong></li>
        <li>Humedad (en almendra): <strong>10.0% - 11.5%</strong></li>
        <li>Broca: <strong>máximo 2%</strong></li>
      </ul>
    </main>
  );
}
