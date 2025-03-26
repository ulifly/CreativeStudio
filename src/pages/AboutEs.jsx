import NavbarES from "../components/NavbarEs.jsx";
import AboutSection from "../components/AboutSection.jsx";
import Footer from "../components/Footer.jsx";

import CTASection from "../components/CTASection.jsx";

export default function AboutEs() {


  return (
    <div className="min-h-screen flex flex-col">
      
        <NavbarES />
      
      <main>
          <>
            <AboutSection title="Acerca de" />
            {/* <ConnectSection title="Conéctate" /> */}
            {/* <CTASection title="Llamada a la acción" /> */}
            {/* <ContactSection title="Contacto" /> */}
          </>
       
      </main>
      <Footer />
    </div>
  );
}