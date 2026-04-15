import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MENU_DATA } from '../data/content';
import { Utensils, Star, Award, CheckCircle2, Phone, ArrowRight } from 'lucide-react';

const Menu = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="pt-20 bg-white">
      <section className="relative py-24 red-gradient text-white overflow-hidden text-center">
        <div className="absolute inset-0 mandala-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 mt-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <span className="text-white font-bold tracking-[0.4em] uppercase text-xs mb-2 block">Our Culinary Curation</span>
            <div className="text-accent telugu-text text-xl mb-4 font-bold">మన వంటలు</div>
            <h1 className="text-5xl md:text-7xl font-sans font-black mb-6 tracking-tighter">
              The <span className="text-white italic">Grand Menu</span>
            </h1>
            <p className="text-xl opacity-90 font-medium max-w-2xl mx-auto leading-relaxed">
              From traditional flavors to contemporary delights, explore our complete catering repertoire.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-3 lg:columns-4 gap-6 space-y-10">
            {Object.entries(MENU_DATA).map(([category, items], catIdx) => (
              <motion.div
                key={category}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
                className="break-inside-avoid bg-white p-8 border-2 border-primary/10 shadow-lg banana-leaf-shape relative overflow-hidden group hover:border-primary/30 transition-all"
              >
                {/* Traditional motif inside card */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg width="40" height="40" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="var(--color-primary)" strokeWidth="4" strokeDasharray="10 5" />
                    <circle cx="50" cy="50" r="10" fill="var(--color-accent)" />
                  </svg>
                </div>
                
                <div className="mb-6 flex items-center space-x-3 relative z-10 border-b border-primary/10 pb-4">
                  <div className="w-10 h-1 gold-gradient rounded-full" />
                  <h3 className="text-xl font-bold text-gray-900 uppercase tracking-widest font-serif">
                    {category}
                  </h3>
                </div>
                <div className="space-y-3 pl-2 relative z-10">
                  {items.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={fadeInUp}
                      className="flex items-center text-gray-600 font-medium text-md hover:text-primary transition-colors py-1 cursor-default group/item"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="py-16 bg-gray-soft/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="red-gradient rounded-[3rem] min-h-[450px] relative overflow-hidden shadow-2xl shadow-primary/30 flex items-center group">
            <div className="absolute inset-0 mandala-pattern opacity-10" />
            
            <div className="absolute bottom-0 left-0 lg:left-12 w-[300px] md:w-[400px] lg:w-[500px] z-10 pointer-events-none hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img
                  src="/assets/images/cheif.png"
                  alt="Executive Chef"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] origin-bottom"
                />
              </motion.div>
            </div>

            <div className="relative z-20 w-full lg:w-4/5 ml-auto px-8 py-16 md:p-16 lg:pr-24 text-center lg:text-right">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-black text-white mb-4 leading-tight tracking-tighter">
                  Ready to Elevate
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-black text-accent italic mb-10 leading-tight tracking-tighter">
                  Your Next Event?
                </h2>

                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-end">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto px-12 py-5 bg-white text-primary rounded-[12px_0_12px_0] font-black text-lg hover:bg-gray-50 transition-all shadow-xl shadow-black/20 flex items-center justify-center group/btn border-2 border-transparent hover:border-primary/20"
                  >
                    Get a Quote
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                  <a
                    href="tel:9542935841"
                    className="w-full sm:w-auto px-12 py-5 bg-transparent border-2 border-white/20 text-white rounded-[12px_0_12px_0] font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center"
                  >
                    <Phone size={20} className="mr-2" />
                    Call Us Now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;

