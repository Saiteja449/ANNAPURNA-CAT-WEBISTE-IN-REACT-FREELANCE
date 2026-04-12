import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary backdrop-blur-md  py-3"
          : "bg-primary backdrop-blur-sm  py-5 md:py-3"
      } border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/assets/images/Logo.png"
              alt="Annapurna Caterers"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-white text-primary"
                    : "text-white hover:text-gray-200 hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-[1px] h-6 bg-gray-100 mx-4" />
            <a
              href="tel:9542935841"
              className="flex items-center space-x-2  text-primary bg-white px-6 py-3 rounded-xl hover:scale-105 transition-all shadow-lg shadow-primary/20 active:scale-95 group"
            >
              <Phone
                size={16}
                className="group-hover:rotate-12 transition-transform"
              />
              <span className="font-bold tracking-wider text-xs uppercase">
                Call Now
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-900 bg-gray-50 rounded-xl"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen w-screen bg-white z-[100] md:hidden overflow-hidden"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 mandala-pattern opacity-5 pointer-events-none" />

            {/* Close Button Area */}
            <div className="flex bg-primary mb-4 justify-between items-center p-6 border-b border-gray-50">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center"
              >
                <img
                  src="/assets/images/Logo.png"
                  alt="Annapurna Caterers"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-black/20"
              >
                <X size={28} />
              </button>
            </div>

            {/* Links Container */}
            <div className="flex flex-col justify-center px-10 space-y-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl font-black tracking-tighter block transition-colors ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-gray-900"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className=" w-full p-4 bg-gray-50/50 ">
              <a
                href="tel:9542935841"
                className="flex items-center justify-between red-gradient text-white px-8 py-6 rounded-[2rem] w-full shadow-2xl shadow-primary/30 active:scale-95 transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">
                      Book Now
                    </span>
                    <span className="text-lg font-black">+91 9542935841</span>
                  </div>
                </div>
                <ArrowRight size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
