// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ConnectSection() {
  return (
    <section id="connect" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-600 font-medium">Stay Connected</span>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mt-2">Connect With Us</h2>
          <p className="text-slate-600 mt-4">Follow us on social media or reach out directly through our messaging channels.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* WhatsApp */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="bg-green-500 p-6 text-white text-center">
              <FaWhatsapp className="text-5xl mx-auto" />
              <h3 className="text-xl font-bold mt-3">WhatsApp</h3>
            </div>
            <div className="p-6 text-center">
              <p className="text-slate-600 mb-4">Quick responses, direct communication</p>
              <a 
                href="https://wa.me/12345678900" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp className="mr-2" />
                Message Us
              </a>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="bg-blue-600 p-6 text-white text-center">
              <div className="flex justify-center space-x-4">
                <Facebook size={32} />
                <Instagram size={32} />
                <Twitter size={32} />
              </div>
              <h3 className="text-xl font-bold mt-3">Social Media</h3>
            </div>
            <div className="p-6 text-center">
              <p className="text-slate-600 mb-4">Follow us for updates and inspiration</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Direct Message */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
            <div className="bg-purple-600 p-6 text-white text-center">
              <MessageSquare className="text-5xl mx-auto" size={48} />
              <h3 className="text-xl font-bold mt-3">Direct Message</h3>
            </div>
            <div className="p-6 text-center">
              <p className="text-slate-600 mb-4">Send us a private message anytime</p>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors"
              >
                <MessageSquare className="mr-2" size={18} />
                Contact Form
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}