// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white leading-tight">Ready to transform your brand's creative presence?</h2>
              <p className="text-white opacity-80 mt-4 text-lg">
                Contact us today to discuss how we can help elevate your brand with our premium creative services.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Start Your Creative Journey</h3>
                <div className="space-y-4">
                  <p className="text-slate-600">Our team of experts is ready to bring your vision to life with cutting-edge creative solutions.</p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-500 transition-colors"
                    >
                      Contact Us
                      <ArrowRight size={16} className="ml-2" />
                    </a>
                    <a 
                      href="#connect" 
                      className="inline-flex items-center justify-center bg-slate-200 text-slate-800 px-6 py-3 rounded-md font-medium hover:bg-slate-300 transition-colors"
                    >
                      Connect With Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}