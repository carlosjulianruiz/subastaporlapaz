import "flowbite";
import { Link } from "@remix-run/react"; // O de 'react-router-dom' si usas CRA/Vite


export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 mt-6">
            <div className="relative">
              <img
                src="https://asecc.sfo2.digitaloceanspaces.com/subastaporlapaz/logo-32x32.png"

                alt="subasta por la paz"
              />
            </div>
            <span className="text-xl font-bold text-gray-800 font-raleway">Subasta por la Paz</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-[#D91448] transition-colors duration-300 font-nunito">
              Home
            </a>
            <a
              href="#fechas"
              className="text-gray-700 hover:text-[#D91448] transition-colors duration-300 font-nunito"
            >
              Fechas
            </a>
            <a
              href="/inscripciones"
              className="text-gray-700 hover:text-[#D91448] transition-colors duration-300 font-nunito"
            >
              Inscripciones
            </a>
            <a
              href="#videos"
              className="text-gray-700 hover:text-[#D91448] transition-colors duration-300 font-nunito"
            >
              Videos
            </a>

            <Link to="/contactus" className="text-gray-700 hover:text-[#D91448] transition-colors duration-300 font-nunito">
              
            
              Contáctanos

            </Link>
          
          </div>

          {/* Auth Buttons */}
          {/* <div className="flex items-center space-x-3">
            <button className="border border-[#D91448] text-[#D91448] hover:bg-[#D91448] hover:text-white transition-all duration-300 rounded-lg font-nunito px-4 py-2">
              Sign Up
            </button>
            <button className="bg-[#D91448] text-white hover:opacity-90 transition-all duration-300 rounded-lg font-nunito px-4 py-2">
              Log In
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
