import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ChevronRight,
  Star,
  Users,
  Utensils,
  Award,
  ArrowRight,
  Search,
  Phone,
  CheckCircle2,
  Truck,
  Calendar,
  ChefHat,
} from "lucide-react";
import PlatesImg from "/assets/images/plates.jpg";

// Reference images from the public directory for Vite compatibility
const HERO_IMAGE = "/assets/images/hero.png";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="overflow-x-hidden  bg-white  ">
      <section className="relative min-h-[100vh] flex items-center pt-24 pb-12 bg-white   overflow-hidden">
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-[-5%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left Content (Text & Quote) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-3 text-center lg:text-left"
            >
              {/* <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-primary/10 mb-6 shadow-sm"
              >
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary font-bold text-xs uppercase tracking-wider">
                  India's Premium Catering Experience
                </span>
              </motion.div> */}

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-sans font-black text-gray-900 mb-8 leading-[1.2] tracking-tight"
              >
                "Celebrate your occasions <br />
                with the richness of <br />
                <span className="text-primary italic">
                  traditional flavours"
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-500 mb-10 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed"
              >
                Handcrafted recipes served with royal hospitality. Make your
                special moments truly unforgettable with Annapurna Caterers.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <a
                  href="tel:9542935841"
                  className="w-full sm:w-auto px-10 py-5 red-gradient rounded-2xl font-bold text-white shadow-xl shadow-primary/20 hover:scale-105 transition-all flex items-center justify-center group"
                >
                  <Phone size={18} className="mr-2" />
                  Call Now
                </a>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-primary/10 text-primary rounded-2xl font-bold hover:bg-primary/5 transition-all flex items-center justify-center"
                >
                  Enquire Now
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="lg:col-span-2 relative hidden lg:block"
            >
              <div className="relative z-10">
                <img
                  src={HERO_IMAGE}
                  alt="Premium Plate"
                  className="w-full max-w-[450px] mx-auto "
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-[1px] border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-[1px] border-primary/10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-soft relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-50/30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row  gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                <div className="w-12 h-[2px] bg-primary" />
                <span className="text-primary font-bold text-xl uppercase ">
                  Features
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Choose, Customize, <br />
                <span className="text-primary underline decoration-accent/30 decoration-4 underline-offset-8">
                  and Celebrate
                </span>
              </h2>
              <div className="w-20 h-2 bg-accent rounded-full mb-8 mx-auto lg:mx-0" />
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                "Choose, customize, and celebrate with our Exquisite menu,
                Enhanced by our attentive hospitality and well-managed
                Services."
              </p>
            </motion.div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {[
                {
                  title: "Exquisite Menu",
                  desc: "Authentic recipes crafted for perfection.",
                  icon: <Utensils size={32} />,
                  color: "primary",
                },
                {
                  title: "Attentive Hospitality",
                  desc: "Service that makes every guest feel like royalty.",
                  icon: <Users size={32} />,
                  color: "accent",
                },
                {
                  title: "Well-Managed Services",
                  desc: "Seamless execution from start to finish.",
                  icon: <Award size={32} />,
                  color: "gray-900",
                  fullWidth: true,
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`
                    p-8 rounded-[2.5rem] flex flex-col items-center text-center transition-all duration-300
                    ${feature.fullWidth ? "md:col-span-2 bg-gray-900 text-white hover:bg-black" : "bg-white border border-gray-100 hover:shadow-2xl shadow-sm"}
                  `}
                >
                  <div
                    className={`p-4 rounded-2xl mb-6 ${feature.fullWidth ? "bg-white/10 text-accent" : `bg-${feature.color}/10 text-${feature.color}`}`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p
                    className={`${feature.fullWidth ? "text-gray-400" : "text-gray-500"} text-sm leading-relaxed`}
                  >
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 red-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Our Services
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              Flexible catering options designed to fit every occasion and
              budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 pt-12">
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
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative group pt-12"
              >
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[90%] aspect-square rounded-t-[2rem] overflow-hidden z-20  border-4 border-white">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-white rounded-[2rem] p-6 pt-64 border border-gray-100 premium-shadow text-center relative z-10">
                  {service.popular && (
                    <div className="absolute top-6 right-6 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-4 flex justify-center text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <Link
                    to="/services"
                    className="text-primary font-bold text-sm flex items-center justify-center group/link"
                  >
                    View Details{" "}
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-soft overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-3 block">
              Simple & Seamless
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              How It Works
            </h2>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-dashed-line border-t-2 border-dashed border-primary/20 hidden lg:block -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                {
                  step: "01",
                  title: "Select Menu",
                  desc: "Browse our diverse menu collections and pick your favorite dishes.",
                  icon: <Utensils />,
                },
                {
                  step: "02",
                  title: "Custom Quote",
                  desc: "Provide event details and get an instant transparent quote in minutes.",
                  icon: <Calendar />,
                },
                {
                  step: "03",
                  title: "We Deliver",
                  desc: "Our expert team handles everything from setup to serving with perfection.",
                  icon: <Truck />,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border border-primary/5 mb-6 relative group">
                    <div className="text-primary">{item.icon}</div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 red-gradient rounded-full text-white text-xs font-bold flex items-center justify-center shadow-md">
                      {item.step}
                    </div>
                    {/* Hover Effect Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] overflow-hidden relative p-12 md:p-20 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />

            <div className="relative z-10 flex-1">
              <span className="text-accent font-bold text-xs uppercase tracking-widest mb-4 block">
                Partnership Oppurtunity
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Partner with India's <br /> Rising Catering Star
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl">
                Are you a local caterer or food professional? Join our platform
                and expand your business with Annapurna's trust and
                infrastructure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 gold-gradient rounded-2xl font-bold text-gray-900 hover:scale-105 transition-transform"
                >
                  Register as Partner
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 bg-white/10 text-white rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/10"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative z-10 flex-1 hidden lg:block">
              <div className="relative">
                <img
                  src={PlatesImg}
                  alt="Partnership"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl flex items-center space-x-4 skew-y-0">
                  <div className="w-12 h-12 red-gradient rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400">
                      Trusted By
                    </div>
                    <div className="text-sm font-bold text-gray-900">
                      100+ Vendors
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-gray-900">
                What Our Clients Say
              </h2>
              <p className="text-gray-500 mt-2">
                Check out why thousands love our service.
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="text-accent fill-accent" size={20} />
                <Star className="text-accent fill-accent" size={20} />
                <Star className="text-accent fill-accent" size={20} />
                <Star className="text-accent fill-accent" size={20} />
                <Star className="text-accent fill-accent" size={20} />
              </div>
              <span className="font-bold text-gray-900">
                4.9 Overall Rating
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "Wedding Groom",
                text: "The service was exceptional. The meal boxes were a huge hit among our guests. Highly professional and tasty food!",
              },
              {
                name: "Priya Reddy",
                role: "Corporate Manager",
                text: "Reliable and consistent. We use Annapurna for all our monthly board meetings. The presentation is top-notch.",
              },
              {
                name: "Anil Kumar",
                role: "Event Planner",
                text: "Best catering partner for any event planner. They take off all the stress of food management and delivery.",
              },
            ].map((t, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="mb-6 flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={14}
                      className="text-accent fill-accent mr-1"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 italic leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl red-gradient flex items-center justify-center text-white font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-xs text-primary font-bold uppercase tracking-widest">
                      {t.role}
                    </div>
                  </div>
                </div>
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

            {/* Left Chef Image - Positioned at bottom */}
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

            {/* Right Content - Centered vertically */}
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

            {/* Background Decorative Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
