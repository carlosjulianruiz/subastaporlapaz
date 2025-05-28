// import {
//   FaCoffee,
//   FaHeart,
//   FaUsers,
//   FaCalendarAlt,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
// } from "react-icons/fa";


import Navbar from "./components/navbar";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">

      <Navbar />
      {/* Hero Section */}
      <section id="home" className="relative h-[85vh] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://asecc.sfo2.digitaloceanspaces.com/subastaporlapaz/logo2_subasta.jpeg"
            alt="Subasta por la Paz Event"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6">
          {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 font-raleway animate-fade-in">Subasta por la Paz</h1> */}
          <button className="bg-[#D91448] text-white hover:opacity-90 transition-all duration-300 rounded-lg px-8 py-4 text-lg font-nunito shadow-lg hover:shadow-xl transform hover:scale-105">
            Ver Inscripciones
          </button>
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
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
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
  )
}