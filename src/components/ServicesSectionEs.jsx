// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Video,
  Camera,
  Paintbrush,
  Megaphone,
  Code,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const services = [
  {
    icon: <Video className="text-2xl text-blue-600 group-hover:text-white " />,
    title: "Video Productions",
    description: "Professional video content creation, from commercials to corporate videos, crafted to engage your audience."
  },
  // {
  //   icon: <Camera className="text-2xl text-blue-600 group-hover:text-white" />,
  //   title: "Photography",
  //   description: "High-quality commercial photography for product showcases, advertising campaigns, and brand imagery."
  // },
  {
    icon: <Paintbrush className="text-2xl text-blue-600 group-hover:text-white" />,
    title: "Diseño Gráfico",
    description: "Diseño visual creativo en todos los medios, desde activos digitales hasta materiales impresos que mejoran tu marca."
  },
  {
    icon: <Megaphone className="text-2xl text-blue-600 group-hover:text-white" />,
    title: "Business Marketing",
    description: "Mercadotecnia basada en datos para alcanzar a tu audiencia objetivo y lograr resultados medibles."
  },
  // {
  //   icon: <Code className="text-2xl text-blue-600 group-hover:text-white" />,
  //   title: "Web Design",
  //   description: "Custom website designs that combine aesthetics with functionality to drive engagement and conversions."
  // },
  {
    icon: <MessageSquare className="text-2xl text-blue-600 group-hover:text-white" />,
    title: "Linktree",
    description: "Administración de redes sociales comprensible para construir tu presencia en línea y conectar con tu comunidad."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-medium">Que ofrecemos</span>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mt-2">Nuestros servicio creativos</h2>
          <p className="text-slate-600 mt-4">Soluciones integrales de producción y marketing diseñadas para elevar tu marca.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className=" bg-gray-800 hover:shadow-xl transition-shadow group h-full">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold font-montserrat mb-3">{service.title}</h3>
                  <p className="text-slate-200 mb-6">{service.description}</p>
                  <a href="#" className="text-blue-600 font-medium inline-flex items-center group-hover:underline">
                    {/* Learn More <ArrowRight className="ml-2 h-4 w-4" /> */}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}