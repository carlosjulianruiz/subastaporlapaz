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
            El documento establece los términos de participación en el concurso "SUBASTA POR LA PAZ 2025" organizado por la <strong>GOBERNACIÓN DEL CAUCA</strong> en alianza con la <strong>Asociación Colombiana para la Excelencia del Café - ASECC</strong>. Esta iniciativa tiene como propósito visibilizar y premiar los mejores cafés especiales del departamento, ofreciendo a los caficultores una plataforma para acceder al mercado internacional con precios diferenciados. Así mismo, busca impulsar alternativas de desarrollo sostenible para las familias productoras de regiones históricamente afectadas por el conflicto.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">INSCRIPCIÓN DE LOTES</h2>
          <p className="mb-4">
            Los caficultores que deseen participar en el concurso "SUBASTA POR LA PAZ 2025" deben entregar un lote de café pergamino seco junto con el formulario de inscripción en uno de los Puntos de Entrega Autorizados.
          </p>
          <p className="mb-6 font-semibold text-[#D91448]">
            Los puntos de Acopio recibirán el café desde el <strong>25 de mayo al 20 de julio del 2025</strong>.
          </p>
          <p className="mb-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <strong>Nota importante:</strong> No se permite entregas de muestras de café en pergamino, los puntos de acopio deben recibir los lotes físicos para muestreados y valorados.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Tamaños de Lotes</h3>
          <p className="mb-4">
            Los tamaños de los lotes deben estar dentro de los siguientes rangos de peso de acuerdo con su proceso. Estos pesos según la calidad son equivalentes en pergamino a 20 kg de café excelso como cantidad mínima y 200 kg de excelso como cantidad máxima:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">PROCESO</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">PESO MÍNIMO (KG)</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">PESO MÁXIMO (KG)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Anaeróbicos Lavados</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">27</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">260</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Anaeróbicos Naturales</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">43</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">410</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Naturales</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">43</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">425</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Honey</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">32</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">315</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Lavados</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">27</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">265</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <p>• Cada productor puede presentar hasta <strong>dos (2) lotes de diferente proceso cada uno por finca</strong>.</p>
            <p>• El lote de café debe ser procesado por el Productor de forma separada y <strong>NO puede mezclarse</strong> con cafés procedentes de otras fincas.</p>
            <p>• Se podrán presentar lotes procesados por beneficio húmedo (cafés lavados), honey (semi-lavados), naturales o procesos anaeróbicos siempre y cuando cumplan los requisitos de calidad establecidos.</p>
            <p>• Lotes de mayor tamaño pero con puntaje por encima de 85 puntos, no entrarán en la subasta pero pasarán automáticamente a la rueda de negocios.</p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 my-6">
            <p className="font-semibold text-red-800">
              NO SE PERMITEN LOTES QUE SEAN MEZCLAS DE DIFERENTES TIPOS DE PROCESOS (Por ejemplo: HONEY MEZCLADO CON LAVADO) NI CAFÉS PROCESADOS CON LEVADURAS, ACIDULANTES U OTRO ELEMENTO AGREGADO AL CAFÉ.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Parámetros de Calidad</h3>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="mb-4 font-semibold">El lote presentado debe cumplir con los siguientes parámetros de calidad:</p>
            <ul className="space-y-2">
              <li>• <strong>Puntaje de taza:</strong> mínimo 85 puntos (con taza limpia)</li>
              <li>• <strong>Humedad (en almendra):</strong> 10.0% al 11.5%</li>
              <li>• <strong>Broca:</strong> máximo 2%</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              El Asociado de ASECC se encargará de verificar que el lote cumpla con las características mínimas de calidad establecidas. El Comité Organizador podrá retirar un lote de la competencia en cualquiera de sus etapas en caso de detectar deterioro de las condiciones de humedad, actividad de agua y/o puntaje de taza.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">ETAPAS DE SELECCIÓN</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#D91448] mb-4">PRESELECCIÓN</h3>
              <p className="mb-4">
                Un panel colombiano de jurados catadores expertos previamente seleccionado por ASECC realizará el análisis sensorial de los cafés codificados. Para seguir a la siguiente ronda del concurso los cafés deberán obtener un puntaje de cata de <strong>mínimo 86 puntos</strong>.
              </p>
              <p className="mb-4">
                A la ronda de Jurado Nacional sólo podrán pasar un <strong>máximo de 90 lotes</strong>, salvo decisión en contrario del comité organizador.
              </p>
              <p className="mb-4 bg-yellow-50 p-4 rounded-lg">
                <strong>NOTA:</strong> Los puntajes alcanzados por cada café en cualquiera de las etapas del concurso no serán tenidos en cuenta durante la siguiente etapa, por lo que el café podrá obtener un puntaje mayor o menor.
              </p>
              <p>
                Los lotes que durante la etapa de preselección pasen a la ronda de jurado nacional deberán ser entregados físicamente en las bodegas designadas por ASECC.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#D91448] mb-4">JURADO NACIONAL</h3>
              <p className="mb-4">
                Los lotes seleccionados en la etapa de preselección serán evaluados sensorialmente a ciegas por un equipo de catadores nacionales durante cinco días. Este equipo de catadores seleccionará los lotes que obtengan un puntaje igual o superior a <strong>86.0 puntos</strong> (hasta un máximo de 40 lotes), los cuales pasarán a la siguiente etapa del Concurso.
              </p>
              <p className="bg-gray-50 p-4 rounded-lg">
                <strong>NOTA:</strong> Una vez recibidos los lotes, auditores externos los codificarán y tomarán una muestra representativa para garantizar la transparencia del Concurso.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#D91448] mb-4">JURADO INTERNACIONAL</h3>
              <p className="mb-4">
                El comité organizador del evento preparará muestras de cada lote clasificado a Jurado Internacional, las cuales serán codificadas y presentadas al panel internacional invitado por ASECC y designados para ser presencia en dicho evento.
              </p>
              <p className="mb-4">
                ASECC gestionará la invitación de los jueces internacionales. Estos jueces cuentan con experiencia en Subastas internacionales. Catarán y calificarán los cafés preseleccionados por el JURADO NACIONAL.
              </p>
              <p className="mb-4">
                Los mejores <strong>20 lotes</strong> que en esta etapa obtengan puntajes superiores a <strong>87.0 puntos</strong> serán considerados lotes ganadores del evento y participarán de la subasta. Aquellos lotes con puntaje igual o superior a <strong>90 puntos</strong> adicionalmente recibirán la distinción de <strong>Café Presidencial</strong>. Los demás lotes pasarán a la rueda de negocios.
              </p>
              <p>Los resultados serán anunciados en la ceremonia de premiación.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">SUBASTA</h2>
          <p className="mb-4">
            ASECC enviará muestras de los cafés ganadores a potenciales compradores alrededor del mundo previamente inscritos. La subasta se realizará <strong>en vivo en Bolívar, Cauca en plaza pública</strong> según la fecha propuesta por la Gobernación del Cauca durante el mes de septiembre.
          </p>
          <p className="mb-4">
            Salvo disposición en contrario, la subasta de cafés ganadores de la mejor taza abrirá en <strong>US$ 5.00/lbs</strong> para cafés con puntajes entre 87 y 87.9 puntos. Los <strong>5 primeros puestos abrirán la subasta en un precio de USD 7.00/LB</strong>.
          </p>
          <p className="bg-green-50 p-4 rounded-lg">
            En caso que los 2 primeros lugares tengan un tamaño mayor a 100 kg en excelso, serán divididos en dos lotes, de manera que el día de la subasta podrán ser comprados por dos compradores distintos. Esto permitirá que tostadores pequeños también puedan tener acceso a dichos cafés extraordinarios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">LIQUIDACIÓN</h2>
          <p>
            Los costos de exportación y otros gastos relacionados con el evento serán estimados antes de la subasta, de tal forma que la información en la pantalla el día del evento se pueda ver precio en dólares que es de entendimiento de los clientes y el precio en pesos por arroba, carga o kilo de café pergamino seco <strong>factor 92.8</strong> para que el productor pueda conocer el mismo día el precio de venta.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">CRONOGRAMA</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Actividades</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Mayo</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Julio</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Agosto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Lanzamiento del Concurso</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">20 mayo</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Inscripción de lotes de café al concurso</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">25 mayo</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">20 julio</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Ronda de cataciones - panel nacional</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">4 - 8 agosto</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Ronda de cataciones - clientes internacionales</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">16 - 21 agosto</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Subasta presencial - Municipio de Bolívar</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">29 agosto</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Rueda de negocios - Municipio de Bolívar</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">30 agosto</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Concursos de catación y aeropress</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">29 y 30 agosto</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">PUNTOS DE ACOPIO</h2>
          <p className="bg-blue-50 p-4 rounded-lg">
            Los puntos de acopio se publicarán en la página de{" "}
            <a 
              href="https://www.asecc.org" 
              className="text-[#D91448] hover:underline font-semibold"
              target="_blank"
              rel="noreferrer"
            >
              www.asecc.org
            </a>{" "}
            el día <strong>24 de mayo del 2025</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">CONTACTO</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-lg font-semibold text-gray-900 mb-2">CARLOS JULIÁN RUIZ HURTADO</p>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:direccion@asecc.org"
                  className="text-[#D91448] hover:underline"
                >
                  direccion@asecc.org
                </a>
              </p>
              <p>
                <strong>Sitio web:</strong>{" "}
                <a
                  href="https://www.asecc.org"
                  className="text-[#D91448] hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.asecc.org
                </a>
              </p>
              <p>
                <strong>Teléfono:</strong> 321 202 6991
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}