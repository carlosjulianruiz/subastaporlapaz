import { Link } from "@remix-run/react";

import Navbar from "./components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />

      {/* Jumbotron / Portada */}
      <section className="bg-center bg-no-repeat bg-[url('https://asecc.sfo2.digitaloceanspaces.com/subastaporlapaz/fotos/DSC00077.JPG')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 -mt-[10px]">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-6xl">
            <img
              src="https://sfo2.digitaloceanspaces.com/asecc/subastaporlapaz/sponsors/logos-04.svg"
              alt="Subasta por la Paz Event"
              className="h-auto max-w-lg mx-auto mb-6 filter invert hue-rotate-90"
            />
            Transformando el futuro del Cauca, una taza a la vez... 
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            La Subasta por la Paz es un evento único que conecta cafés excepcionales con compradores internacionales comprometidos con el desarrollo social y la excelencia.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link to="/inscripciones"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Inicio
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            <Link to="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              Más Información
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-6 bg-[#fefaf1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Logo principal destacado */}
          <div className="flex justify-center">
            <a
              href="https://www.cauca.gov.co/paginas/default.aspx"
              className="flex h-[170px] w-[350px] justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
            >
              <img
                alt="Gobernación del Cauca"
                src="https://sfo2.digitaloceanspaces.com/asecc/subastaporlapaz/sponsors/logos_Mesa%20de%20trabajo%201.svg"
                className="object-contain"
              />
            </a>
          </div>

          {/* Logos secundarios */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-4">
            {[
              {
                src: "https://sfo2.digitaloceanspaces.com/asecc/subastaporlapaz/sponsors/logos-04.svg",
                alt: "Subasta por la Paz",
                href: "https://subastaporlapaz.org/",
              },
              {
                src: "https://sfo2.digitaloceanspaces.com/asecc/subastaporlapaz/sponsors/logos-02.svg",
                alt: "ASECC",
                href: "https://www.asecc.org/",
              },
              {
                src: "https://sfo2.digitaloceanspaces.com/asecc/subastaporlapaz/sponsors/logos-03.svg",
                alt: "La Mejor Taza",
                href: "https://auction.lamejortaza.com/",
              },
            ].map((img) => (
              <a
                key={img.alt}
                href={img.href}
                className="flex h-28 w-48 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
              >
                <img alt={img.alt} src={img.src} className="object-contain" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
