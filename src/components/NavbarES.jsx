import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useScrollPosition } from "../hooks/use-mobile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-shadow duration-300 ${scrollPosition > 10 ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold font-montserrat text-primary flex items-center">
              <span className="text-blue-600">A1</span>Studio
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="font-medium hover:text-blue-600 transition-colors">Servicios</Link>
            <Link href="/About" className="font-medium hover:text-blue-600 transition-colors">Acerca</Link>
            {/* <Link href="/ContactEs" className="font-medium hover:text-blue-600 transition-colors">Contacto</Link> */}
            {/* <Link href="/ConnectEs" className="font-medium hover:text-blue-600 transition-colors">Conecta con nosotros</Link> */}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-primary focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}

        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg absolute left-4 right-4">
            <div className="flex flex-col space-y-3 py-4 px-4">
              <Link 
                href="/#services" 
                className="font-medium hover:text-blue-600 transition-colors py-2"
                onClick={closeMenu}
              >
                Servicios
              </Link>
              <Link 
                href="/AboutEs" 
                className="font-medium hover:text-blue-600 transition-colors py-2"
                onClick={closeMenu}
              >
                Acerca de
              </Link>
              {/* <Link 
                href="/contactEs" 
                className="font-medium hover:text-blue-600 transition-colors py-2"
                onClick={closeMenu}
              >
                Contacto
              </Link> */}
              {/* <Link 
                href="/connectEs" 
                className="font-medium hover:text-blue-600 transition-colors py-2"
                onClick={closeMenu}
              >
                Conecta con nosotros
              </Link> */}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}