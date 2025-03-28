import NavbarES from "../components/NavbarEs.jsx";
import FooterEs from "../components/FooterEs.jsx";
import ConnectSectionEs from "../components/ConnectSectionEs.jsx";
import PricingSectionEs from "../components/PricingSectionEs.jsx";

export default function ConnectEs() {


  return (
    <div className="min-h-screen flex flex-col">
      
        <NavbarES />
      
      <main>
          <>
            <ConnectSectionEs title="Conéctate" />
            <PricingSectionEs title="Precios" />
          </>

      </main>
      <FooterEs />
    </div>
  );
}