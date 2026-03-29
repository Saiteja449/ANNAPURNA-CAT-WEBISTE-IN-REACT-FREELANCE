import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_DATA } from '../data/content';
import { Utensils, Star, Award } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(MENU_DATA)[0]);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full mandala-bg opacity-20" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            Our Menu
          </motion.h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Explore our diverse range of traditional and contemporary Indian delicacies.
          </p>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="py-12 bg-white sticky top-[64px] z-40 shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 flex space-x-4 md:justify-center whitespace-nowrap scrollbar-hide">
          {Object.keys(MENU_DATA).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-bg-light text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 bg-bg-light min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-4 mb-12">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                  <Utensils size={24} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-gray-900">{activeCategory}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MENU_DATA[activeCategory as keyof typeof MENU_DATA].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{item.name}</h3>
                      <div className="flex text-accent">
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                        <Star size={14} fill="currentColor" />
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary/5 p-12 rounded-[40px] border-2 border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Award size={120} />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-primary">Standard Menu</h3>
              <p className="text-gray-600 mb-8">Perfect for casual gatherings and small parties. Includes all essential items with premium quality.</p>
              <ul className="space-y-3">
                {['2 Welcome Drinks', '3 Snacks', 'Main Course (5 Items)', '2 Desserts'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700 font-medium">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-accent/5 p-12 rounded-[40px] border-2 border-accent/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Star size={120} />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-4 text-accent">Premium Menu</h3>
              <p className="text-gray-600 mb-8">Our most popular choice for grand weddings. Features our signature dishes and live counters.</p>
              <ul className="space-y-3">
                {['Unlimited Mocktails', '5 Snacks & Starters', 'Grand Buffet (12+ Items)', 'Live Pasta & Chaat Counter', 'Assorted Sweets & Ice Cream'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-gray-700 font-medium">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
