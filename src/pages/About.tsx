import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, ShieldCheck, Clock } from 'lucide-react';

const About = () => {
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
            About Us
          </motion.h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Serving happiness through authentic flavors and exceptional hospitality since 2010.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
              <h2 className="text-4xl font-serif font-bold mb-8 text-gray-900">A Tradition of Taste and Quality</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Sree Annapurna Caterers was founded with a simple mission: to bring the authentic taste of Indian cuisine to your special celebrations. Named after the Goddess of Food, we believe that serving food is a sacred act of hospitality.
                </p>
                <p>
                  With over a decade of experience, we have grown from a small family business to one of the most trusted catering services in the region. Our journey has been defined by our commitment to quality, hygiene, and the constant pursuit of culinary excellence.
                </p>
                <p>
                  Whether it's a grand wedding for thousands or an intimate birthday party, we bring the same level of dedication and passion to every plate we serve.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=800"
                alt="Chef at work"
                className="rounded-3xl shadow-2xl relative z-10 w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block border border-gray-100">
                <div className="text-4xl font-serif font-bold text-primary mb-1">15+</div>
                <div className="text-gray-500 font-medium">Years of Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-3xl font-serif font-bold mb-6 text-primary">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide exceptional catering experiences by combining traditional recipes with modern presentation, ensuring every guest leaves with a smile and a satisfied palate.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-3xl font-serif font-bold mb-6 text-accent">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the leading catering service known for innovation in flavors, uncompromising hygiene standards, and creating unforgettable memories through food.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Award className="text-primary" size={40} />, title: "Premium Quality", desc: "We use only the finest and freshest ingredients." },
              { icon: <ShieldCheck className="text-primary" size={40} />, title: "Strict Hygiene", desc: "Our kitchen follows international safety standards." },
              { icon: <Clock className="text-primary" size={40} />, title: "On-time Service", desc: "We value your time and ensure punctual delivery." },
              { icon: <CheckCircle2 className="text-primary" size={40} />, title: "Custom Menus", desc: "Tailored food options to suit your preferences." }
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8">
                <div className="mb-6 flex justify-center">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
