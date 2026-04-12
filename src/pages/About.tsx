import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Award,
  ShieldCheck,
  Clock,
  Users,
  Utensils,
  Phone,
  ArrowRight,
} from "lucide-react";
import Cheif from "/assets/images/aboutCheif.png";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="pt-20 bg-white">
      {/* --- HERO HEADER --- */}
      <section className="relative py-16 red-gradient text-white overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              Established 2017
            </span>
            <h1 className="text-5xl md:text-7xl font-sans font-black mb-6 tracking-tighter">
              Our <span className="text-accent italic">Story</span>
            </h1>
            <p className="text-xl opacity-90 font-medium max-w-2xl mx-auto leading-relaxed">
              Serving happiness through authentic flavors and exceptional
              hospitality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- STORY SECTION --- */}
      <section className="pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-8">
                  Where Passion <br />
                  <span className="text-primary italic">Meets Excellence</span>
                </h2>
                <div className="space-y-6 text-gray-500 leading-relaxed text-lg font-medium">
                  <p>
                    Where a deep passion for food meets a commitment to
                    excellence, our journey began with a simple vision—to create
                    unforgettable dining experiences.
                  </p>
                  <p>
                    Established in 2017 in Karimnagar, India, we have grown into
                    a trusted name in catering, known for our creativity,
                    quality, and exceptional service.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 w-full">
                <img
                  src={Cheif}
                  alt="Our Kitchen Passion"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 blur-[80px] rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <section className="bg-primary py-12 relative overflow-hidden">
        <div className="absolute inset-0 mandala-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-16 items-center justify-center text-center"
          >
            <motion.div variants={fadeInUp} className="space-y-2">
              <div className="text-5xl md:text-7xl font-black text-white tracking-tighter">7+</div>
              <div className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">Years of Culinary Craft</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-2">
              <div className="text-5xl md:text-7xl font-black text-white tracking-tighter">1000+</div>
              <div className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">Happy Moments Served</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-14 rounded-[3rem] shadow-xl shadow-black/5 border border-white group hover:premium-shadow-hover transition-all duration-500"
            >
              <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-accent/20">
                <Utensils size={32} />
              </div>
              <h3 className="text-3xl font-black mb-6 text-gray-900 tracking-tight">
                Our Vision
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium italic">
                "To celebrate catering by blending timeless traditions with
                modern excellence, offering rich flavours and graceful
                hospitality in every event."
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900 p-10 md:p-14 rounded-[3rem] shadow-2xl border border-gray-800 group transition-all duration-500"
            >
              <div className="w-16 h-16 red-gradient rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-primary/20">
                <Users size={32} />
              </div>
              <h3 className="text-3xl font-black mb-6 text-white tracking-tight">
                Our Mission
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed font-medium">
                "To craft delightful menus rooted in tradition, supported by
                dedicated services, warm hospitality, and a commitment to
                quality in every detail."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- QUALITY BADGES --- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-4">
            Why Trust Us?
          </h2>
          <p className="text-gray-500 font-medium">
            Our pillars of success and commitment to you.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="text-primary" size={32} />,
                title: "Premium Quality",
                desc: "Finest fresh ingredients.",
              },
              {
                icon: <ShieldCheck className="text-primary" size={32} />,
                title: "Strict Hygiene",
                desc: "Safe as home cooking.",
              },
              {
                icon: <Clock className="text-primary" size={32} />,
                title: "On-time Service",
                desc: "Punctual every single time.",
              },
              {
                icon: <CheckCircle2 className="text-primary" size={32} />,
                title: "Custom Menus",
                desc: "Tailored to your budget.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="text-center p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 group transition-all"
              >
                <div className="mb-6 flex justify-center text-primary group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-lg font-black mb-2 text-gray-900 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-xs font-bold leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="red-gradient rounded-[3rem] min-h-[450px] relative overflow-hidden shadow-2xl shadow-primary/30 flex items-center group">
            <div className="absolute inset-0 mandala-pattern opacity-10" />

            {/* Left Chef Image */}
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

            {/* Right Content */}
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

export default About;
