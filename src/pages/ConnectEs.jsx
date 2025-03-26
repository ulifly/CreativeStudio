import NavbarES from "../components/NavbarEs.jsx";
import Footer from "../components/Footer.jsx";
import ConnectSection from "../components/ConnectSection.jsx";

export default function ConnectEs() {


  return (
    <div className="min-h-screen flex flex-col">
      
        <NavbarES />
      
      <main>
          <>
            <ConnectSection title="Conéctate" />
          </>

      </main>
      <Footer />
    </div>
  );
}