import { useState } from "react";
import { motion } from "framer-motion";
import LightboxGallery from "./LightboxGallery.jsx";
import { Button } from "../components/ui/Button.jsx";

const portfolioItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Video Production",
    title: "Luxury Brand Commercial",
    description: "Award-winning television commercial for a premium luxury brand."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Photography",
    title: "Premium Product Photography",
    description: "High-end product photography for e-commerce and print advertising."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    category: "Marketing",
    title: "Integrated Campaign Strategy",
    description: "Multi-channel marketing campaign that increased conversions by 47%."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1518085250887-2f903c200fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Social Media",
    title: "Viral Brand Campaign",
    description: "Social media campaign that reached over 2 million organic impressions."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80",
    category: "Graphic Design",
    title: "Brand Identity System",
    description: "Complete visual identity redesign for an established tech company."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Web Design",
    title: "E-commerce Platform",
    description: "Custom e-commerce website design with 145% increase in conversions."
  }
];

export default function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (item) => {
    setSelectedItem(item);
    setLightboxOpen(true);
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-medium">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mt-2">Featured Projects</h2>
          <p className="text-slate-600 mt-4">Explore our latest creative work that has helped brands achieve their goals</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {portfolioItems.map((item) => (
            <motion.div 
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent opacity-0 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Button 
                    onClick={() => openLightbox(item)}
                    variant="default" 
                    className="bg-blue-600 hover:bg-blue-500"
                  >
                    View Project
                  </Button>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs text-blue-600 font-medium">{item.category}</span>
                <h3 className="text-lg font-bold font-montserrat mt-1">{item.title}</h3>
                <p className="text-slate-600 text-sm mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button 
            variant="default" 
            size="lg"
            className="bg-slate-800 hover:bg-slate-700"
          >
            View All Projects
          </Button>
        </div>
      </div>
      
      {lightboxOpen && selectedItem && (
        <LightboxGallery
          items={portfolioItems}
          initialIndex={portfolioItems.findIndex(item => item.id === selectedItem.id)}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
}