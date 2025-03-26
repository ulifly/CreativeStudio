import NavbarES from "../components/NavbarEs.jsx";
import ContactSectionEs from "../components/ContactSectionEs.jsx";
import Footer from "../components/Footer.jsx";

export default function ContactEs() {


  return (
    <div className="min-h-screen flex flex-col">
      
        <NavbarES />
      
      <main>
          <>
            <ContactSectionEs title="contacto " />
          </>
       
      </main>
      <Footer />
    </div>
  );
}