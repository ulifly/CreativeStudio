import { useState, useEffect } from "react";

import NavbarES from "../components/NavbarEs.jsx";
import HeroSectionES from "../components/HeroSectionEs.jsx";
import PricingSectionEs from "../components/PricingSectionEs.jsx";

import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";

import ServicesSection from "../components/ServicesSection.jsx";
import ServicesSectionEs from "../components/ServicesSectionEs.jsx";


import Footer from "../components/Footer.jsx";
import FooterEs from "../components/FooterEs.jsx";
import PricingSection from "../components/PricingSection.jsx";

export default function Home() {

  const[language, setLanguage] = useState('en');

  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    if(browserLanguage.includes('es')) {
      setLanguage('es');
    }
  }, []);


  return (
    <div className="min-h-screen flex flex-col">
      {language === 'es' ? (
        <NavbarES />
      ) : (
        <Navbar />
      )}
      
      <main>
        {language === 'es' ? (
          <>
            <HeroSectionES />
            <ServicesSectionEs title="Servicios" />
            <PricingSectionEs title="Precios" />
          </>
        ) : (
          <>
            <HeroSection title="Welcome" />
            <ServicesSection title="Services" />
            <PricingSection title="Prices" />
          </>

        )}
      </main>
        {language === 'es' ? (
          <>
            <FooterEs />
          </>
        ) : (
          <>
            <Footer />
          </>
        )}
    
    </div>
  );
}

// "dependencies": 
//     TODO"@jridgewell/trace-mapping": "^0.3.25",
//     TODO"@neondatabase/serverless": "^0.10.4",
//     TODO"@replit/vite-plugin-shadcn-theme-json": "^0.0.4",
//     TODO"cmdk": "^1.0.0",
//     TODO"connect-pg-simple": "^10.0.0",
//     TODO"date-fns": "^3.6.0",
//     TODO"drizzle-orm": "^0.39.1",
//     TODO"drizzle-zod": "^0.7.0",
//     TODO"embla-carousel-react": "^8.3.0",
//     TODO"express": "^4.21.2",
//     TODO"express-session": "^1.18.1",
//     TODO"input-otp": "^1.2.4",
//     TODO"memorystore": "^1.6.7",
//     TODO"passport": "^0.7.0",
//     TODO"passport-local": "^1.0.0",
//     TODO"react-day-picker": "^8.10.1",
//     TODO"react-resizable-panels": "^2.1.4",
//     "recharts": "^2.13.0",
//     "vaul": "^1.1.0",  
//     "ws": "^8.18.0",
//     "zod-validation-error": "^3.4.0"