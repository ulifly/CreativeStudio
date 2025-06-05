import { useState, useEffect } from "react";

import NavbarES from "../components/NavbarEs.jsx";
import AboutSectionEs from "../components/AboutSectionEs.jsx";
import FooterEs from "../components/FooterEs.jsx";

import Navbar from "../components/Navbar.jsx";
import AboutSection from "../components/AboutSection.jsx";
import Footer from "../components/Footer.jsx";

export default function About() {

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
             <AboutSectionEs title="Acerca de" />
          </>
          ) : (
          <>
            <AboutSection title="About" />
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