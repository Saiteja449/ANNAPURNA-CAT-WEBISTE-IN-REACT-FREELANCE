import React from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/content';
import { Heart, Cake, Gem, Briefcase, Flame, Utensils, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Heart,
  Cake,
  Gem,
  Briefcase,
  Flame,
  Utensils
};

const Services = () => {
  return (
    <div className="pt-20 bg-bg-light">
      {/* Header */}
      <section className="relative py-24 red-gradient text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/mandala.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-sans font-black mb-6 tracking-tight">
              Culinary <span className="text-accent italic">Craftsmanship</span>
            </h1>
            <p className="text-xl opacity-90 font-medium max-w-2xl mx-auto leading-relaxed">
              We provide end-to-end catering solutions personalized for every unique celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {SERVICES_DATA.map((service, idx) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-[2.5rem] p-4 premium-shadow hover:premium-shadow-hover transition-all group border border-gray-50 flex flex-col h-full"
                >
                  <div className="relative h-64 mb-8 rounded-[2rem] overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${idx === 0 ? '1511795409834-ef04bbd61622' : idx === 1 ? '1530103043960-ef38714abb15' : idx === 2 ? '1519225421980-715cb0215aed' : idx === 3 ? '1475721027785-f74eccf877e2' : idx === 4 ? '1504674900247-0877df9cc836' : '1555244162-803834f70033'}?auto=format&fit=crop&q=80&w=800`} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center text-primary shadow-lg border border-white/20">
                      <IconComponent size={28} />
                    </div>
                  </div>
                  <div className="px-6 pb-6 flex-grow">
                    <h3 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-primary transition-colors tracking-tight">{service.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
                  </div>
                  <div className="px-6 pb-8">
                    <div className="w-full h-[1px] bg-gray-100 mb-6" />
                    <div className="flex flex-wrap gap-2">
                       {['Hygienic', 'Fresh', 'Premium'].map(tag => (
                         <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-gray-50 text-gray-400 rounded-full flex items-center">
                           <CheckCircle2 size={10} className="mr-1 text-primary" /> {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* High-Level Features (Minimalist) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { title: "Live Counters", icon: <Flame /> },
               { title: "Gourmet Menu", icon: <Utensils /> },
               { title: "Professional Staff", icon: <Users /> },
               { title: "Hygienic Prep", icon: <CheckCircle2 /> }
             ].map((feat, i) => (
               <div key={i} className="flex items-center space-x-4 p-6 bg-gray-50 rounded-2xl">
                 <div className="w-12 h-12 red-gradient rounded-xl flex items-center justify-center text-white">
                   {feat.icon}
                 </div>
                 <span className="font-bold text-gray-900">{feat.title}</span>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

