import { useState, useEffect } from "react";

import NavbarES from "../components/NavbarEs.jsx";
import HeroSectionES from "../components/HeroSectionEs.jsx";


import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";

import ServicesSection from "../components/ServicesSection.jsx";
import ServicesSectionEs from "../components/ServicesSectionEs.jsx";

import Footer from "../components/Footer.jsx";

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
          </>
        ) : (
          <>
            <HeroSection title="Welcome" />
            <ServicesSection title="Services" />
          </>

        )}
      </main>
      <Footer />
    </div>
  );
}

// "dependencies": 
//  TODO"@jridgewell/trace-mapping": "^0.3.25",
//     TODO"@neondatabase/serverless": "^0.10.4",
//     TODO"@radix-ui/react-accordion": "^1.2.1",
//     TODO"@radix-ui/react-alert-dialog": "^1.1.2",
//     TODO"@radix-ui/react-aspect-ratio": "^1.1.0",
//     TODO"@radix-ui/react-avatar": "^1.1.1",
//     TODO"@radix-ui/react-checkbox": "^1.1.2",
//     TODO"@radix-ui/react-collapsible": "^1.1.1",
//     TODO"@radix-ui/react-context-menu": "^2.2.2",
//     TODO"@radix-ui/react-dialog": "^1.1.2",
//     TODO"@radix-ui/react-dropdown-menu": "^2.1.2",
//     TODO"@radix-ui/react-hover-card": "^1.1.2",
//     TODO"@radix-ui/react-label": "^2.1.0",
//     TODO"@radix-ui/react-menubar": "^1.1.2",
//     TODO"@radix-ui/react-navigation-menu": "^1.2.1",
//     TODO"@radix-ui/react-popover": "^1.1.2",
//     TODO"@radix-ui/react-progress": "^1.1.0",
//     TODO"@radix-ui/react-radio-group": "^1.2.1",
//     TODO"@radix-ui/react-scroll-area": "^1.2.0",
//     TODO"@radix-ui/react-select": "^2.1.2",
//     TODO"@radix-ui/react-separator": "^1.1.0",
//     TODO"@radix-ui/react-slider": "^1.2.1",
//     TODO"@radix-ui/react-slot": "^1.1.0",
//     TODO"@radix-ui/react-switch": "^1.1.1",
//     TODO"@radix-ui/react-tabs": "^1.1.1",
//     TODO"@radix-ui/react-toast": "^1.2.2",
//     TODO"@radix-ui/react-toggle": "^1.1.0",
//     TODO"@radix-ui/react-toggle-group": "^1.1.0",
//     TODO"@radix-ui/react-tooltip": "^1.1.3",
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
//     TODO"recharts": "^2.13.0",
//     TODO"vaul": "^1.1.0",  
//     TODO"ws": "^8.18.0",
//     TODO"zod-validation-error": "^3.4.0"