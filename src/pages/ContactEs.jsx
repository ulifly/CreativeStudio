import NavbarES from "../components/NavbarEs.jsx";
import ContactSectionEs from "../components/ContactSectionEs.jsx";
import FooterEs from "../components/FooterEs.jsx";

export default function ContactEs() {


  return (
    <div className="min-h-screen flex flex-col">
      
        <NavbarES />
      
      <main>
          <>
            <ContactSectionEs title="contacto " />
          </>
       
      </main>
      <FooterEs />
    </div>
  );
}