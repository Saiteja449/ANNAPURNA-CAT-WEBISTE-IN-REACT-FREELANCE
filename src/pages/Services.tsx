import React from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/content';
import { Heart, Cake, Gem, Briefcase, Flame, Utensils } from 'lucide-react';

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
    <div className="pt-16">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Comprehensive catering solutions for every occasion, big or small.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES_DATA.map((service, idx) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="relative h-64 mb-8 rounded-[40px] overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${idx === 0 ? '1511795409834-ef04bbd61622' : idx === 1 ? '1530103043960-ef38714abb15' : idx === 2 ? '1519225421980-715cb0215aed' : idx === 3 ? '1475721027785-f74eccf877e2' : idx === 4 ? '1504674900247-0877df9cc836' : '1555244162-803834f70033'}?auto=format&fit=crop&q=80&w=800`} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute top-6 right-6 bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-primary shadow-xl">
                      <IconComponent size={28} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">How We Work</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your event needs, guest count, and preferences." },
              { step: "02", title: "Menu Planning", desc: "Our chefs design a custom menu that fits your vision." },
              { step: "03", title: "Preparation", desc: "Fresh ingredients are sourced and prepared with care." },
              { step: "04", title: "Execution", desc: "Professional setup and service at your event venue." }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 bg-white rounded-3xl shadow-sm">
                <span className="text-5xl font-serif font-bold text-primary/10 absolute top-4 right-6">{item.step}</span>
                <h4 className="text-xl font-bold mb-4 relative z-10">{item.title}</h4>
                <p className="text-gray-500 relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
