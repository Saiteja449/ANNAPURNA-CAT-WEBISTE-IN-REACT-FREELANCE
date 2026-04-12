import React from "react";
import { motion } from "motion/react";
import { SERVICES_DATA } from "../data/content";
import {
  Heart,
  Cake,
  Gem,
  Briefcase,
  Flame,
  Utensils,
  CheckCircle2,
  Users,
  Truck,
  Calendar,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const iconMap = {
  Heart,
  Cake,
  Gem,
  Briefcase,
  Flame,
  Utensils,
};

const Services = () => {
  return (
    <div className="pt-20 bg-bg-light">
      {/* Header */}
      <section className="relative py-24 red-gradient text-white text-center overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <span className="text-white font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              Our Expertise
            </span>
            <h1 className="text-5xl md:text-7xl font-sans font-black mb-6 tracking-tighter">
              Catering <span className="text-white italic">Excellence</span>
            </h1>
            <p className="text-xl opacity-90 font-medium max-w-2xl mx-auto leading-relaxed">
              Tailored culinary experiences for every scale of celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
            {[
              {
                title: "Meal Box",
                desc: "Individually packed gourmet meals, perfect for corporate events or daily staff lunches.",
                img: "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&q=80&w=600",
                color: "bg-red-50",
                icon: <Truck className="text-primary" size={24} />,
              },
              {
                title: "Grand Catering",
                desc: "Complete buffet service with live counters, uniformed staff, and luxury presentation.",
                img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600",
                color: "bg-orange-50",
                icon: <Users className="text-accent" size={24} />,
                popular: true,
              },
              {
                title: "Delivery Only",
                desc: "Bulk food delivery in high-quality thermal containers. Hot and fresh food at your doorstep.",
                img: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=600",
                color: "bg-blue-50",
                icon: <Calendar className="text-gray-600" size={24} />,
              },
            ].map((service, idx) => {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group pt-12"
                >
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[90%] aspect-[4/3] rounded-[2rem] overflow-hidden z-20 border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={`${service.img}`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="bg-white rounded-[3rem] p-8 pt-48 border border-gray-100 premium-shadow text-center relative z-10 h-full flex flex-col">
                    <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-0 flex-grow">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Live Counters", icon: <Flame /> },
              { title: "Gourmet Menu", icon: <Utensils /> },
              { title: "Professional Staff", icon: <Users /> },
              { title: "Hygienic Prep", icon: <CheckCircle2 /> },
            ].map((feat, i) => (
              <div
                key={i}
                className="flex items-center space-x-4 p-6 bg-gray-50 rounded-2xl"
              >
                <div className="w-12 h-12 red-gradient rounded-xl flex items-center justify-center text-white">
                  {feat.icon}
                </div>
                <span className="font-bold text-gray-900">{feat.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="red-gradient rounded-[3rem] min-h-[450px] relative overflow-hidden shadow-2xl shadow-primary/30 flex items-center group">
            <div className="absolute inset-0 mandala-pattern opacity-10" />

            <div className="absolute bottom-0 left-0 lg:left-12 w-[300px] md:w-[400px] lg:w-[500px] z-10 pointer-events-none">
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
                    className="w-full sm:w-auto px-12 py-5 bg-white text-primary rounded-2xl font-black text-lg hover:bg-gray-50 transition-all shadow-xl shadow-black/20 flex items-center justify-center group/btn"
                  >
                    Get a Quote
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                  <a
                    href="tel:9542935841"
                    className="w-full sm:w-auto px-12 py-5 border-2 border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center"
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

export default Services;
