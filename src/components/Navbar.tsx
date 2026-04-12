import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md  py-3' 
          : 'bg-white/80 backdrop-blur-sm  py-3'
      } border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col group">
            <span className="text-xl md:text-2xl font-black text-gray-900 leading-tight tracking-tighter">
              Annapurna<span className="text-primary italic">.</span>
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-accent">
              Premium Catering
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-5 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                  location.pathname === link.path 
                    ? 'bg-primary/5 text-primary' 
                    : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-[1px] h-6 bg-gray-100 mx-4" />
            <a
              href="tel:9542935841"
              className="flex items-center space-x-2 red-gradient text-white px-6 py-3 rounded-xl hover:scale-105 transition-all shadow-lg shadow-primary/20 active:scale-95 group"
            >
              <Phone size={16} className="group-hover:rotate-12 transition-transform" />
              <span className="font-bold tracking-wider text-xs uppercase">Call Now</span>
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[73px] left-0 w-full bg-white md:hidden border-b border-gray-100 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col px-6 py-10 space-y-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl font-extrabold tracking-tight ${
                      location.pathname === link.path ? 'text-primary' : 'text-gray-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="pt-6 border-t border-gray-100">
                <a
                  href="tel:9542935841"
                  className="flex items-center justify-between red-gradient text-white px-8 py-5 rounded-2xl w-full shadow-2xl shadow-primary/20"
                >
                  <div className="flex items-center space-x-4">
                    <Phone size={20} />
                    <span className="font-bold">+91 9542935841</span>
                  </div>
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


