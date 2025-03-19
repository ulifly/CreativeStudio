import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "The team at CreativeStudio transformed our brand presence with their exceptional video production and marketing strategy. Our engagement metrics have never been better.",
    authorInitials: "JD",
    authorName: "Jane Doe",
    authorTitle: "Marketing Director, TechCorp"
  },
  {
    quote: "Working with CreativeStudio has been a game-changer for our business. Their photography and design work elevated our product line and helped us stand out in a crowded market.",
    authorInitials: "MS",
    authorName: "Michael Smith",
    authorTitle: "CEO, Fashion Brand"
  },
  {
    quote: "Their social media strategy completely revitalized our online presence. The creative content they produce consistently outperforms everything we've done before.",
    authorInitials: "AJ",
    authorName: "Alex Johnson",
    authorTitle: "Founder, Startup Inc."
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-600 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-400 blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400 font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat mt-2">What Our Clients Say</h2>
          <p className="opacity-80 mt-4">Hear from businesses who have transformed their brand presence with our services</p>
        </motion.div>
        
        <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={16} />
                ))}
              </div>
              <blockquote className="mb-6">
                <p className="italic">"{testimonial.quote}"</p>
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  {testimonial.authorInitials}
                </div>
                <div>
                  <div className="font-bold">{testimonial.authorName}</div>
                  <div className="text-sm opacity-80">{testimonial.authorTitle}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}