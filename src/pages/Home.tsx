import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Star, Users, Utensils, Award, ArrowRight } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="overflow-hidden">
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1920"
              alt="Catering Setup"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Layered Gradients for Depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/50" />
          <div className="absolute inset-0 mandala-bg opacity-10 pointer-events-none" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center lg:items-start py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:max-w-5xl text-center lg:text-left"
          >
           
            
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-10 leading-[0.85] tracking-tight"
            >
              Taste the <br />
              <span className="text-accent italic font-light">Tradition</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-2xl text-gray-300 mb-14 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Sree Annapurna Caterers brings you the finest flavors of India, 
              crafted with passion and served with royal hospitality.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8"
            >
              <Link
                to="/menu"
                className="group relative w-full sm:w-auto px-14 py-6 red-gradient rounded-full font-bold text-lg overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center space-x-3"
              >
                <span className="relative z-10 text-white uppercase tracking-widest text-sm">Explore Menu</span>
                <ChevronRight size={22} className="relative z-10 group-hover:translate-x-1 transition-transform text-white" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              
              <Link
                to="/contact"
                className="w-full sm:w-auto px-14 py-6 bg-white/5 backdrop-blur-2xl border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-xl flex items-center justify-center group"
              >
                <span className="uppercase tracking-widest text-sm">Get Quote</span>
                <ArrowRight size={20} className="ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>

            {/* Stats/Trust Badges */}
            <motion.div 
              variants={itemVariants}
              className="mt-20 flex flex-wrap justify-center lg:justify-start gap-10 md:gap-16"
            >
              <div className="flex flex-col items-center lg:items-start group">
                <span className="text-4xl font-serif font-bold text-white group-hover:text-accent transition-colors">15+</span>
                <span className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mt-1">Years Experience</span>
              </div>
              <div className="flex flex-col items-center lg:items-start group">
                <span className="text-4xl font-serif font-bold text-white group-hover:text-accent transition-colors">500+</span>
                <span className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mt-1">Events Managed</span>
              </div>
              <div className="flex flex-col items-center lg:items-start group">
                <span className="text-4xl font-serif font-bold text-white group-hover:text-accent transition-colors">100%</span>
                <span className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mt-1">Quality Food</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center p-2"
          >
            <motion.div 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-4 bg-accent rounded-full" 
            />
          </motion.div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-accent font-bold tracking-widest uppercase text-sm mb-3 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6"
            >
              Premium Catering Solutions
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              className="h-1.5 bg-accent mx-auto rounded-full" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <Users size={36} />, title: "Weddings", desc: "Grand celebrations with exquisite traditional menus and royal presentation." },
              { icon: <Star size={36} />, title: "Birthdays", desc: "Joyful parties with creative themes, fun food, and delightful desserts." },
              { icon: <Utensils size={36} />, title: "Corporate", desc: "Professional catering for seminars, office parties, and business meetings." }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
                className="p-12 bg-bg-light rounded-[40px] shadow-sm hover:shadow-2xl transition-all border border-gray-100 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="mb-8 bg-white w-20 h-20 rounded-3xl flex items-center justify-center shadow-md text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-serif font-bold mb-5 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Preview */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3 mb-4"
              >
                <div className="w-12 h-[2px] bg-accent" />
                <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">
                  Taste of Excellence
                </span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight"
              >
                Signature <span className="text-gray-900 ">Dishes</span>
              </motion.h2>
            </div>
            <Link to="/menu" className="group flex flex-col items-end">
              <div className="flex items-center space-x-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
                <span className="font-bold text-lg uppercase tracking-widest">Full Menu</span>
                <div className="p-3 bg-gray-100 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800", 
                title: "Paneer Butter Masala", 
                tag: "Bestseller",
                desc: "Succulent cubes of paneer simmered in a velvety tomato and cashew nut gravy.",
                rating: 4.9
              },
              { 
                img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800", 
                title: "Hyderabadi Biryani", 
                tag: "Chef Special",
                desc: "Fragrant basmati rice layered with marinated mutton and exotic spices, slow-cooked to perfection.",
                rating: 5.0
              },
              { 
                img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800", 
                title: "Dal Makhani", 
                tag: "Classic",
                desc: "Black lentils slow-cooked overnight with creamy butter and fine aromatic spices.",
                rating: 4.8
              },
              { 
                img: "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&q=80&w=800", 
                title: "Gulab Jamun", 
                tag: "Heritage",
                desc: "Golden-fried milk solids dumplings soaked in rose-flavored sugar syrup.",
                rating: 4.9
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative h-[400px] rounded-[3rem] overflow-hidden bg-white shadow-xl hover:premium-shadow transition-all duration-500 transform hover:-translate-y-4"
              >
                {/* Image Section */}
                <div className="absolute inset-0 z-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Floating Tag */}
                <div className="absolute top-8 left-8 z-10">
                  <div className="px-5 py-2 glass-tag rounded-full">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{item.tag}</span>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-8 right-8 z-10">
                  <div className="flex items-center space-x-1 glass-card px-3 py-1.5 rounded-full">
                    <Star size={14} className="fill-accent text-accent" />
                    <span className="text-white text-xs font-bold">{item.rating}</span>
                  </div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-10 z-10 transition-all duration-500">
                  <div className="flex flex-col h-full justify-end">
                    <h3 className="text-3xl font-serif font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    {/* Collapsible/Animated Description */}
                    <div className="max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden">
                      <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                        {item.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-6 border-t border-white/10">
                      <div className="flex space-x-1">
                        {[1, 2, 3].map((s) => (
                          <div key={s} className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                        ))}
                      </div>
                      <Link to="/menu" className="flex items-center space-x-2 text-white text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors">
                        <span>Taste Now</span>
                        <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Decorative border on bottom */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 red-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif font-bold mb-6">Voices of Satisfaction</h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              className="h-1.5 bg-accent mx-auto rounded-full" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Rahul Sharma", text: "The food was incredible! Every guest at our wedding praised the quality and taste. Highly recommended.", role: "Groom" },
              { name: "Priya Reddy", text: "Professional service and hygienic preparation. Sree Annapurna made my daughter's birthday truly special.", role: "Parent" },
              { name: "Anil Kumar", text: "Best catering service in Hyderabad. Their live counters are a must-try for any event.", role: "Event Planner" }
            ].map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-bg-light rounded-[40px] italic text-gray-600 relative border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="absolute -top-6 left-10 text-8xl text-accent opacity-10 font-serif">"</div>
                <p className="mb-8 relative z-10 text-lg leading-relaxed">{t.text}</p>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 red-gradient rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 not-italic text-lg">{t.name}</div>
                    <div className="text-accent text-sm font-semibold uppercase tracking-wider not-italic">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover opacity-20"
            alt="Catering Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 dark-red-gradient opacity-90" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-10 leading-tight">
              Ready to make your event <br />
              <span className="text-accent italic">Unforgettable?</span>
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center px-12 py-5 bg-white text-primary rounded-full font-bold text-xl hover:bg-accent hover:text-white transition-all shadow-2xl hover:scale-105 active:scale-95 group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight size={22} className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
