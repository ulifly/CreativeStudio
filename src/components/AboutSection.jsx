// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
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
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">Years of Creative Excellence</div>
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
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat">We're a team of creative professionals</h2>
            <p className="text-slate-600">
              At CreativeStudio, we believe in the power of innovative storytelling and visual excellence to transform brands. Our multi-disciplinary team brings together expertise across production, design, and marketing to deliver results that exceed expectations.
            </p>
            <p className="text-slate-600">
              With over a decade of experience working with brands across industries, we've developed a reputation for creativity, reliability, and measurable results. Our upcoming platform will make our services more accessible than ever before.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">250+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">90%</div>
                <div className="text-slate-600">Client Retention</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">15</div>
                <div className="text-slate-600">Industry Awards</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-slate-600">Client Support</div>
              </div>
            </div>
            
            <div className="pt-4">
              <a href="#contact">
                <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-md">
                  Get In Touch
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}