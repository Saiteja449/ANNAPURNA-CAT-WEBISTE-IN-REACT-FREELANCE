import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Send, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "Wedding",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", phone: "", eventType: "Wedding", message: "" });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="pt-20 bg-bg-light">
      <section className="relative py-24 red-gradient text-white overflow-hidden text-center">
        <div className="absolute inset-0 mandala-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <span className="text-white font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
              Let's Connect
            </span>
            <h1 className="text-5xl md:text-7xl font-sans font-black mb-6 tracking-tighter">
              Get in <span className="text-white italic">Touch</span>
            </h1>
            <p className="text-xl opacity-90 font-medium max-w-2xl mx-auto leading-relaxed">
              Have an event in mind? Let's talk about how we can make it
              unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-4xl font-black text-gray-900 tracking-tight">
                  Contact Information
                </h2>
                <p className="text-gray-500 font-medium">
                  Reach out to us directly for any immediate inquiries or
                  consultations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  {
                    icon: <Phone />,
                    title: "Call Us",
                    details: "9542935841",
                    link: "tel:9542935841",
                  },
                  {
                    icon: <Mail />,
                    title: "Email Us",
                    details: "info@sreeannapurna.com",
                    link: "mailto:info@sreeannapurna.com",
                  },
                  {
                    icon: <Clock />,
                    title: "Working Hours",
                    details: "9:00 AM - 8:00 PM",
                    link: null,
                  },
                  {
                    icon: <MapPin />,
                    title: "Location",
                    details: "Karimnagar, Telangana",
                    link: null,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-8 bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-black/5 group hover:premium-shadow-hover transition-all"
                  >
                    <div className="w-12 h-12 red-gradient rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-black text-gray-900 mb-2 tracking-tight">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-500 font-medium hover:text-primary transition-colors"
                      >
                        {item.details}
                      </a>
                    ) : (
                      <p className="text-gray-500 font-medium">
                        {item.details}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="h-80 bg-gray-200 rounded-[3rem] overflow-hidden shadow-2xl relative border-4 border-white"
              >
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15119.344445695!2d79.1305!3d18.4386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd9aeb170c017%3A0xe5a1b39247c43355!2sKarimnagar%2C%20Telangana!5e0!3m2!1sen!2sin!4v1711680000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </motion.div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-14  border border-gray-50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 red-gradient opacity-5 rounded-bl-[100px]" />

              <h2 className="text-3xl font-black mb-8 text-gray-900 tracking-tight">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-8 py-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-gray-900 font-medium"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-8 py-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-gray-900 font-medium"
                    placeholder="Enter your phone"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Event Type
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) =>
                      setFormData({ ...formData, eventType: e.target.value })
                    }
                    className="w-full px-8 py-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-gray-900 font-medium appearance-none"
                  >
                    <option>Wedding</option>
                    <option>Birthday Party</option>
                    <option>Engagement</option>
                    <option>Corporate Event</option>
                    <option>Other Special Occasion</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-8 py-5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-gray-900 font-medium"
                    placeholder="Tell us about your event..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-5 red-gradient text-white rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center group"
                >
                  Confirm Inquiry
                  <Send
                    size={20}
                    className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

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

export default Contact;
