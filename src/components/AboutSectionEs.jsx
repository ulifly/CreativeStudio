// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Our creative team at work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-6 rounded-lg shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                {/* <div className="text-4xl font-bold">10+</div> */}
                <div className="text-sm">Creative Excellence</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-blue-600 font-medium">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat">Somos un equipo de profesionales creativos</h2>
            <p className="text-slate-300">
              en CreativeStudio, creemos en el poder de contar historias inovadoras y excelencia visual para transformar las marcas. Nuestro equipo multi-disciplinario trae su talento a tu produccion, dideño, y marketing para exceder las expectativas.
            </p>
            <p className="text-slate-300">
              con la experiencia de mas de una decada trabajando con marcas de diferentes industrias, hemos desarrollado una reputacion por creatividad, confiabilidad, y resultados medibles. Nuestra proxima plataforma hara que nuestros servicios sean mas accesibles que nunca
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-400 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-700">250+</div>
                <div className="text-slate-600">Proyectos</div>
              </div>
              <div className="bg-gray-400 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-700">90%</div>
                <div className="text-slate-600">Retencion de cleintes</div>
              </div>
              <div className="bg-gray-400 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-700">15</div>
                <div className="text-slate-600">premios de la industria</div>
              </div>
              <div className="bg-gray-400 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-700">24/7</div>
                <div className="text-slate-600">Soporte al cliente</div>
              </div>
            </div>
            
            <div className="pt-4">
              <a href="mailto:netww@proton.me" className="inline-block">
                <Button className="bg-slate-600 hover:bg-slate-700 text-white   px-8 py-3 rounded-full ">
                  contactanos
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}