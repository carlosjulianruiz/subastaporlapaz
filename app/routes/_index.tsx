import { Link } from "@remix-run/react";

import Navbar from "./components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />

      {/* Carousel - Hero Section */}
      <section className="bg-center bg-no-repeat bg-[url('https://asecc.sfo2.digitaloceanspaces.com/subastaporlapaz/fotos/DSC00077.JPG')] bg-gray-700 bg-blend-multiply -mt-[10px]">
        <div className="px-4 mx-auto max-w-screen-xl text-center">
          <div id="default-carousel" className="relative w-full" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-screen overflow-hidden py-24 lg:py-56">
              {/* Slide 1 - Resultados 2025 */}
              <div className="hidden duration-1000 ease-in-out" data-carousel-item data-carousel-interval="8000">
                <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <div className="text-center px-6 md:px-12 lg:px-16 py-8 max-w-7xl mx-auto">
                    <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                      <img
                        src="https://sfo2.digitaloceanspaces.com/asecc/subastaporlapaz/sponsors/logos-04.svg"
                        alt="Subasta por la Paz Event"
                        className="h-auto w-48 md:w-64 lg:w-80 mx-auto mb-6 filter invert"
                      />
                      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent block">
                        Resultados del Evento 2025
                      </span>
                    </h1>
                    
                    <div className="mb-8">
                      <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/30 shadow-2xl max-w-4xl mx-auto">
                        <div className="space-y-6 text-gray-200">
                          <p className="text-lg md:text-xl leading-relaxed">
                            Agradecemos la participación de todos los productores, catadores y compradores internacionales que hicieron posible la exitosa realización de nuestro evento el pasado 29 de agosto de 2025.
                          </p>
                          <p className="text-base md:text-lg">
                            Los resultados oficiales del concurso de catación y la información detallada de la subasta serán publicados próximamente en esta plataforma.
                          </p>
                        </div>
                        
                        <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-xl border border-blue-400/30">
                          <h3 className="text-xl font-semibold text-white mb-3">Próxima Edición 2026</h3>
                          <p className="text-lg text-gray-200">
                            Nos vemos el próximo año en el municipio de Jambaló para continuar fortaleciendo el sector cafetero caucano.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link 
                        to="/contactus" 
                        className="inline-flex justify-center items-center py-4 px-8 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105 shadow-xl"
                      >
                        Contáctanos
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 - Información General */}
              <div className="hidden duration-1000 ease-in-out" data-carousel-item data-carousel-interval="8000">
                <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <div className="text-center px-6 md:px-12 lg:px-16 py-8 max-w-7xl mx-auto">
                    <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                      <img
                        src="https://sfo2.digitaloceanspaces.com/asecc/subastaporlapaz/sponsors/logos-04.svg"
                        alt="Subasta por la Paz Event"
                        className="h-auto w-48 md:w-64 lg:w-80 mx-auto mb-6 filter invert"
                      />
                      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent block">
                        Transformando el futuro del Cauca, una taza a la vez
                      </span>
                    </h1>
                    
                    <p className="mb-8 text-lg md:text-xl lg:text-2xl font-normal text-gray-200 max-w-4xl mx-auto leading-relaxed">
                      La Subasta por la Paz es un evento único que conecta cafés excepcionales con compradores internacionales comprometidos con el desarrollo social y la excelencia.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link 
                        to="/contactus" 
                        className="inline-flex justify-center items-center py-4 px-8 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105 shadow-xl"
                      >
                        Contáctanos
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" className="w-3 h-3 rounded-full bg-white/50 hover:bg-white/80" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/80" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            </div>

            {/* Slider controls */}
            <button type="button" className="absolute top-1/2 left-4 md:left-8 z-30 -translate-y-1/2 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 group-focus:ring-4 group-focus:ring-white/50">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" className="absolute top-1/2 right-4 md:right-8 z-30 -translate-y-1/2 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 group-focus:ring-4 group-focus:ring-white/50">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
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
