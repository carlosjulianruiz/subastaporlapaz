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
              {/* Item 1 - Concurso Info (Principal) */}
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <div className="text-center px-4 py-8 animate-fade-in-up">
                    <div className="mb-6 animate-bounce-slow">
                      <span className="text-6xl md:text-8xl animate-pulse">🏆</span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up animation-delay-300">
                      <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
                        Concurso de Catación y Aeropress
                      </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up animation-delay-500">
                      ¡Únete al evento más esperado del café caucano!
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 animate-fade-in-up animation-delay-700">
                      <div className="group bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/40 shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                        <div className="flex items-center justify-center mb-1">
                          <span className="text-2xl animate-bounce animation-delay-1000">📍</span>
                        </div>
                        <p className="text-xs font-medium text-gray-200 mb-1">Lugar</p>
                        <p className="text-lg font-bold text-white">Bolívar, Cauca</p>
                        <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 group-hover:animate-pulse"></div>
                      </div>
                      <div className="group bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/40 shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                        <div className="flex items-center justify-center mb-1">
                          <span className="text-2xl animate-bounce animation-delay-1200">📅</span>
                        </div>
                        <p className="text-xs font-medium text-gray-200 mb-1">Fecha del evento</p>
                        <p className="text-lg font-bold text-white">29 y 30 de Agosto</p>
                        <div className="w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mt-2 group-hover:animate-pulse"></div>
                      </div>
                      <div className="group bg-gradient-to-br from-red-500/40 to-orange-500/40 backdrop-blur-lg p-4 rounded-2xl border border-red-400/50 shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                        <div className="flex items-center justify-center mb-1">
                          <span className="text-2xl animate-shake">⏰</span>
                        </div>
                        <p className="text-xs font-medium text-red-200 mb-1">Inscripciones hasta</p>
                        <p className="text-lg font-bold text-white">26 de Agosto</p>
                        <div className="w-full h-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mt-2 group-hover:animate-pulse"></div>
                      </div>
                    </div>
                    <div className="animate-fade-in-up animation-delay-900">
                      <a 
                        href="https://forms.gle/GAFVtd3yoQxbYSo28" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-full hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm animate-pulse-slow"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative">¡Participa ahora!</span>
                        <svg className="relative w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 2 - Main Hero */}
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <div className="text-center px-6 md:px-12 lg:px-16 py-8 animate-fade-in-up max-w-7xl mx-auto">
                    <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white animate-fade-in-up animation-delay-200">
                      <img
                        src="https://sfo2.digitaloceanspaces.com/asecc/subastaporlapaz/sponsors/logos-04.svg"
                        alt="Subasta por la Paz Event"
                        className="h-auto w-48 md:w-64 lg:w-80 mx-auto mb-6 filter invert hue-rotate-90 animate-float"
                      />
                      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x block">
                        Transformando el futuro del Cauca, una taza a la vez...
                      </span>
                    </h1>
                    <p className="mb-10 text-lg md:text-xl lg:text-2xl font-normal text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
                      La Subasta por la Paz es un evento único que conecta cafés excepcionales con compradores internacionales comprometidos con el desarrollo social y la excelencia.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up animation-delay-600">
                      <Link to="/inscripciones"
                        className="group inline-flex justify-center items-center py-4 px-10 text-xl font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-xl"
                      >
                        <span>Inicio</span>
                        <svg
                          className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-300"
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
                      <Link to="#" className="group inline-flex justify-center items-center py-4 px-10 text-xl font-semibold text-white rounded-full border-2 border-white hover:bg-white hover:text-gray-900 focus:ring-4 focus:ring-white transition-all duration-300 transform hover:scale-110 backdrop-blur-sm shadow-xl hover:shadow-2xl">
                        Más Información
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
