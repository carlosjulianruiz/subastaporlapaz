import { Link } from "@remix-run/react";
import { GiCoffeeBeans as Coffee } from "react-icons/gi";
import { 
  MdArrowForward, 
  MdCalendarToday, 
  MdAccessTime, 
  MdPhone 
} from "react-icons/md";
import Navbar from "./components/navbar";

const puntosAcopio = [
  {
    nombre: "Centro de Acopio Cauca",
    direccion: "Cra 9 77N-45, Trilladora Cafenorte Popayán",
    dias: "Lunes a Sábado",
    horario: "L-V: 8:00 AM - 5:00 PM | S: 8:00 AM - 12:00 PM",
    contacto: "Jennifer Arias, Tel: 322 2672289",
  }
];

const proceso = [
  {
    titulo: "Convocatoria y Recolección",
    descripcion:
      "Los caficultores envían sus mejores lotes de café a cooperativas o puntos de recolección, donde se inicia el proceso de evaluación.",
    imagen: "https://sfo2.digitaloceanspaces.com/asecc/subastaporlapaz/fotos/step-1.jpg",
  },
  {
    titulo: "Primera Selección",
    descripcion:
      "Se evalúan los lotes recibidos para identificar las producciones con mayor potencial, analizando su calidad física y características iniciales.",
    imagen: "https://sfo2.digitaloceanspaces.com/asecc/subastaporlapaz/fotos/step-2.png",
  },
  {
    titulo: "Cata a Ciegas",
    descripcion:
      "Un panel de expertos internacionales realiza catas a ciegas para seleccionar los lotes finalistas basándose en su perfil sensorial.",
    imagen: "https://sfo2.digitaloceanspaces.com/asecc/subastaporlapaz/fotos/step-3.jpg",
  },
  {
    titulo: "Subasta Internacional",
    descripcion:
      "Los lotes finalistas son subastados a compradores de diferentes países, garantizando un precio justo y visibilidad global para los productores.",
    imagen: "https://sfo2.digitaloceanspaces.com/asecc/subastaporlapaz/fotos/step-4.jpg",
  },
];


export default function PuntosAcopio() {
  return (
   <>
    <Navbar />
    <div className="min-h-screen bg-[#f8f5f0]">
     
      <header className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 dark:bg-gray-900 from-black/60 to-black/30 z-10" />
       
        <div className="absolute  inset-0 z-20 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
              Puntos de <span className="text-[#d4a762]">Acopio</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light">
              Donde el café de paz inicia su viaje hacia la excelencia
            </p>
            <div className="mt-8 flex space-x-4">
              <a
                href="#puntos"
                className="bg-[#d4a762] hover:bg-[#c39652] text-white py-3 px-6 rounded-full transition-all"
              >
                Ver puntos
              </a>
              <a
                href="#proceso"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white py-3 px-6 rounded-full transition-all"
              >
                Conoce el proceso
              </a>
            </div>
          </div>
        </div>
    
        <div className="absolute bottom-0 left-0 right-0 h-24 z-10">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-full"
            fill="#f8f5f0"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"></path>
          </svg>
        </div>
      </header>

      {/* Navegación */}
      <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-[#2c1810]">
              Subasta por la Paz
            </Link>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-[#d4a762] transition-colors">
                Inicio
              </Link>
              <Link to="/puntos-acopio" className="text-[#d4a762]">
                Puntos de Acopio
              </Link>
              <Link to="/contactus" className="text-gray-700 hover:text-[#d4a762] transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main>
       

        <section id="puntos" className="py-20 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-16 text-center text-[#2c1810]">Encuentra tu Punto de Acopio</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {puntosAcopio.map((punto, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4a762]/10 rounded-bl-full transform translate-x-8 -translate-y-8"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#2c1810]/5 rounded-tr-full transform -translate-x-6 translate-y-6"></div>

                  <div className="p-8 relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="h-14 w-14 rounded-full bg-[#f8f5f0] flex items-center justify-center mr-4">
                        <Coffee className="h-7 w-7 text-[#d4a762]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#2c1810]">{punto.nombre}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{punto.direccion}</p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center text-sm text-gray-500">
                        <MdCalendarToday className="h-4 w-4 mr-2 text-[#d4a762]" />
                        <span>{punto.dias}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MdAccessTime className="h-4 w-4 mr-2 text-[#d4a762]" />
                        <span>{punto.horario}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <MdPhone className="h-4 w-4 mr-2 text-[#d4a762]" />
                        <span>{punto.contacto}</span>
                      </div>
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Elementos decorativos de fondo */}
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#d4a762]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-[#2c1810]/5 rounded-full blur-3xl"></div>
        </section>
        {/* Sección de proceso con diseño orgánico */}
        <section id="proceso" className="py-20 relative dark:bg-gray-900 text-white overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-24">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="absolute top-0 left-0 w-full h-full transform rotate-180"
              fill="#f8f5f0"
            >
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"></path>
            </svg>
          </div>
           <div className="container mx-auto px-4 pt-12">
            <h2 className="text-3xl font-bold mb-16 text-center">El Proceso de Acopio</h2>
            <div className="relative">
              {/* Línea de conexión */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#d4a762]/30 hidden md:block"></div>

              {proceso.map((paso, index) => (
                <div key={index} className="mb-24 relative">
                  <div
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
                  >
                    <div className="md:w-1/2 mb-8 md:mb-0 relative">
                      <div
                        className={`p-6 bg-[#d4a762]/10 backdrop-blur-sm rounded-2xl ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                      >
                        <div className="h-16 w-16 rounded-full bg-[#d4a762] flex items-center justify-center mb-4">
                          <span className="text-2xl font-bold">{index + 1}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{paso.titulo}</h3>
                        <p className="text-gray-300 text-lg">{paso.descripcion}</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 relative">
                      <div
                        className={`relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl ${index % 2 === 0 ? "transform -rotate-2" : "transform rotate-2"}`}
                      >
                        <img
                          src={paso.imagen || "/placeholder.svg"}
                          alt={paso.titulo}
                        
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Punto de conexión */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#d4a762] rounded-full hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="absolute bottom-0 left-0 w-full h-full"
              fill="#f8f5f0"
            >
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"></path>
            </svg>
          </div>
        </section>

     

      </main>

      <footer className="dark:bg-gray-900 text-white pt-24 pb-12 relative">
        <div className="absolute top-0 left-0 right-0 h-24">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute top-0 left-0 w-full h-full transform rotate-180"
            fill="#f8f5f0"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0Z"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Subasta por la Paz</h3>
              <p className="text-gray-300">Transformando el futuro del Cauca, una taza a la vez...</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Enlaces</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-[#d4a762] transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/puntos-acopio" className="text-gray-300 hover:text-[#d4a762] transition-colors">
                    Puntos de Acopio
                  </Link>
                </li>
                
                <li>
                  <Link to="/contactus" className="text-gray-300 hover:text-[#d4a762] transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Contacto</h3>
              <p className="text-gray-300 mb-4">
                direccion@asecc.org
                <br />
                +57 3212026991
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/GobCauca/"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4a762] transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://www.asecc.org/"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4a762] transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700/50 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Subasta por la Paz. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
   </>
  );
}