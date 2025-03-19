import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function LightboxGallery({ 
  items, 
  initialIndex = 0, 
  onClose 
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);
  
  const currentItem = items[currentIndex];
  
  return (
    <motion.div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button 
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        onClick={onClose}
      >
        <X size={24} />
      </button>
      
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black/50"
        onClick={handlePrevious}
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black/50"
        onClick={handleNext}
      >
        <ChevronRight size={24} />
      </button>
      
      <div className="w-full max-w-4xl px-4">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full h-[70vh] overflow-hidden rounded-lg">
              <img 
                src={currentItem.image} 
                alt={currentItem.title} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="mt-4 text-white text-center">
              <span className="text-blue-400 text-sm">{currentItem.category}</span>
              <h3 className="text-xl font-bold mt-1">{currentItem.title}</h3>
              <p className="text-gray-300 mt-1">{currentItem.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}