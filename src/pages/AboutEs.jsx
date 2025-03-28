import NavbarES from "../components/NavbarEs.jsx";
import AboutSectionEs from "../components/AboutSectionEs.jsx";
import FooterEs from "../components/FooterEs.jsx";

export default function AboutEs() {


  return (
    <div className="min-h-screen flex flex-col">
      
        <NavbarES />
      
      <main>
          <>
            <AboutSectionEs title="Acerca de" />
            {/* <ConnectSection title="Conéctate" /> */}
            {/* <CTASection title="Llamada a la acción" /> */}
            {/* <ContactSection title="Contacto" /> */}
          </>
       
      </main>
      <FooterEs />
    </div>
  );
}