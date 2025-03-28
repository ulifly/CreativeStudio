import { Link } from "wouter";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-white pt-5 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <Link href="/" className="text-2xl font-bold font-montserrat flex items-center mb-4">
              <span className="text-blue-500">A1</span>Studio
            </Link>
            <p className="text-gray-300 mb-6">
              Premium creative services for brands that want to make an impact. Our innovative platform is launching soon.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-blue-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Video Production</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Photography</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Graphic Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Marketing Strategy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Web Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Social Media</a></li>
            </ul>
          </div> */}
          
          {/* <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#connect" className="text-gray-300 hover:text-white transition-colors">Connect With Us</a></li>
            </ul>
          </div> */}
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500" size={16} />
                <a href="mailto:info@creativestudio.com" className="text-gray-300 hover:text-white transition-colors">info@creativestudio.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500" size={16} />
                <a href="tel:+12345678900" className="text-gray-300 hover:text-white transition-colors">+1 (234) 567-8900</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 mt-1" size={16} />
                <address className="text-gray-300 not-italic">
                  123 Creative Avenue<br />
                  Design District, NY 10001
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} CreativeStudio. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}