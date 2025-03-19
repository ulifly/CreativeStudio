import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import PortfolioSection from "../components/PortfolioSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import ConnectSection from "../components/ConnectSection.jsx";
import CTASection from "../components/CTASection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <TestimonialsSection />
        <ConnectSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

// "dependencies": {
//     "@hookform/resolvers": "^3.9.1",
//     TODO"@jridgewell/trace-mapping": "^0.3.25",
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
//     "@tanstack/react-query": "^5.60.5",
//     class-variance-authority": "^0.7.0", ----------------------> i dont know if this is needed cause is for TS
//     "clsx": "^2.1.1",
//     TODO"cmdk": "^1.0.0",
//     TODO"connect-pg-simple": "^10.0.0",
//     TODO"date-fns": "^3.6.0",
//     TODO"drizzle-orm": "^0.39.1",
//     TODO"drizzle-zod": "^0.7.0",
//     TODO"embla-carousel-react": "^8.3.0",
//     TODO"express": "^4.21.2",
//     TODO"express-session": "^1.18.1",
//     "framer-motion": "^11.13.1",
//     TODO"input-otp": "^1.2.4",
//     "lucide-react": "^0.453.0",
//     TODO"memorystore": "^1.6.7",
//     TODO"passport": "^0.7.0",
//     TODO"passport-local": "^1.0.0",
//     "react": "^18.3.1",
//     TODO"react-day-picker": "^8.10.1",
//     "react-dom": "^18.3.1",
//     "react-hook-form": "^7.53.1",
//     "react-icons": "^5.4.0",
//     TODO"react-resizable-panels": "^2.1.4",
//     TODO"recharts": "^2.13.0",
//     "tailwind-merge": "^2.5.4",
//     "tailwindcss-animate": "^1.0.7",
//     TODO"vaul": "^1.1.0",
//     "wouter": "^3.3.5",   
//     TODO"ws": "^8.18.0",
//     TODO"zod": "^3.23.8",
//     TODO"zod-validation-error": "^3.4.0"