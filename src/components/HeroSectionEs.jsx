// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "../components/ui/Form";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-36 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-600 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-400 blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight">
              Traemos tu <span className="text-blue-500 font-playfair italic">vision creativa</span> a la vida
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Producción, diseño y servicios de marketing premium para marcas que quieren destacar. Nuestra nueva plataforma se lanzará pronto.
            </p> */}

            {/* Call to action buttons */}
            {/* <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#connect"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-colors"
              >
                Conecta con nosotros
              </a>
              <a
                href="#contact"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                contactanos
              </a>
            </div> */}

            {/* <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={20} />
                <span>Calidad Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={20} />
                <span>Exelencia Creativa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={20} />
                <span>Soporte Dedicado</span>
              </div>
            </div> */}
            
          </motion.div>

          <motion.div
            className="relative w-200 h-96 md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            
            <img
              src="../../public/logo.jpeg"
              alt="Professional video production team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent opacity-60"></div>
            <div className="absolute bottom-6 left-6 right-6">
              {/* <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">Proyecto destacado</span> */}
              <h3 className="text-white text-xl font-bold mt-2">Creatividad Professional</h3>
            </div>
          </motion.div>
        </div>
      </div >
    </section >
  );
}