import { Link } from "wouter";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Youtube
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
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <div className="flex gap-4">
              {/* <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={42} />
              </a> */}

              <a
                href="mailto:netww@proton.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-colors"
                aria-label="Instagram"
              >
                <Mail size={42} />
              </a>

              


              <a
                href="https://www.youtube.com/@r1Qtxm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <Youtube size={48} />
              </a>

        

              <a
                href="https://www.instagram.com/rqprodtn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={40} />
              </a>
              {/* <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={42} />
              </a> */}
              {/* <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={42} />
              </a> */}
              <a
                href="https://linktr.ee/A1gn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-500 transition-colors"
                aria-label="Linktree"
              >
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 13h8M8 17h8M12 7v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} A1 Studio. All rights reserved.
            </div>
            <div className="flex gap-6">
              {/* <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a> */}
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}