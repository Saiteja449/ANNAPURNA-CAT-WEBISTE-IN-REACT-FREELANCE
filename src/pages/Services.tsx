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
import TraditionalCookingImg from "/assets/images/headCheid1.png";

const iconMap = {
  Heart,
  Cake,
  Gem,
  Briefcase,
  Flame,
  Utensils,
};

const DiyaIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2C12 2 15 6 15 9.5C15 12 12 14 12 14C12 14 9 12 9 9.5C9 6 12 2 12 2Z" fill="currentColor" opacity="0.8" />
    <path d="M2 13C2 17 6.5 19 12 19C17.5 19 22 17 22 13C22 13 18 18 12 18C6 18 2 13 2 13Z" fill="currentColor" />
  </svg>
);

const KalashIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 7 L18 7 C20 12 18 18 12 20 C6 18 4 12 6 7Z" fill="currentColor" />
    <path d="M8 7L7 3 C7 3 12 1 17 3 L16 7" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6"/>
  </svg>
);

const LeafIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2C12 2 20 5 20 12C20 19 12 22 12 22C12 22 4 19 4 12C4 5 12 2 12 2Z" fill="currentColor" opacity="0.7"/>
    <path d="M12 22L12 2" stroke="white" strokeWidth="1" opacity="0.5" />
  </svg>
);

const Services = () => {
  return (
    <div className="pt-20 bg-bg-light">
      <section className="relative py-24 red-gradient text-white text-center overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center mt-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <span className="text-white font-bold tracking-[0.4em] uppercase text-xs mb-2 block">
              Our Expertise
            </span>
            <div className="text-accent telugu-text text-xl mb-4 font-bold">మా నైపుణ్యం</div>
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
                img: "/assets/images/services/meal_box.png",
                color: "bg-red-50",
                icon: <LeafIcon className="text-primary" size={60} />,
              },
              {
                title: "Grand Catering",
                desc: "Complete buffet service with live counters, uniformed staff, and luxury presentation.",
                img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800",
                color: "bg-orange-50",
                icon: <KalashIcon className="text-accent" size={60} />,
                popular: true,
              },
              {
                title: "Delivery Only",
                desc: "Bulk food delivery in high-quality thermal containers. Hot and fresh food at your doorstep.",
                img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800",
                color: "bg-blue-50",
                icon: <DiyaIcon className="text-primary" size={60} />,
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
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full z-30 shadow-xl flex items-center justify-center p-3 border-4 border-gray-50 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[90%] aspect-[4/3] rounded-t-full overflow-hidden z-20 border-[8px] border-double border-white shadow-xl transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={`${service.img}`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="bg-white rounded-b-full p-8 pt-[220px] border-b-8 border-primary/20 premium-shadow text-center relative z-10 h-full flex flex-col items-center pb-20">
                    <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight font-serif">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-0 flex-grow text-center">
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
                className="flex items-center space-x-4 p-6 bg-white border-2 border-primary/10 temple-card"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  {feat.icon}
                </div>
                <span className="font-bold text-gray-900 text-lg font-serif">{feat.title}</span>
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
            
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-12 pattern-toran opacity-50 z-20 animate-toran" />
            <div className="absolute top-10 right-10 w-64 h-64 pattern-rangoli opacity-10 animate-rangoli" />

            <div className="absolute bottom-1 left-0 lg:left-12 w-[300px] md:w-[400px] lg:w-[600px] z-10 pointer-events-none hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img
                  src={TraditionalCookingImg}
                  alt="Traditional Welcoming Elephant"
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
