import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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

  const getLogoColor = () => {
    if (!isHomePage) return 'text-black';
    return scrolled ? 'text-primary' : 'text-white';
  };

  const getNavLinkColor = (path: string) => {
    if (location.pathname === path) return 'text-accent';
    if (!isHomePage) return 'text-black';
    return scrolled ? 'text-gray-700' : 'text-white';
  };

  const getMenuButtonColor = () => {
    if (!isHomePage) return 'text-black';
    return scrolled ? 'text-gray-700' : 'text-white';
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHomePage ? 'glass-nav py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <span className={`text-2xl font-serif font-bold ${getLogoColor()} leading-tight`}>
              Sree Annapurna
            </span>
            <span className={`text-xs tracking-[0.2em] uppercase ${scrolled || !isHomePage ? 'text-accent' : 'text-accent'}`}>
              Caterers
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`group relative text-sm font-medium transition-all duration-300 ${getNavLinkColor(link.path)} ${isHomePage && !scrolled && 'drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
              </Link>
            ))}
            <a
              href="tel:9542935841"
              className="flex items-center space-x-2 bg-primary text-white px-6 py-2.5 rounded-full hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/20 active:scale-95"
            >
              <Phone size={16} />
              <span className="font-bold tracking-wider text-xs uppercase">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${getMenuButtonColor()} p-2`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-6 border-b border-gray-100">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-primary leading-tight">
                  Sree Annapurna
                </span>
                <span className="text-xs tracking-[0.2em] uppercase text-accent">
                  Caterers
                </span>
              </Link>
              <button onClick={() => setIsOpen(false)} className="p-2 text-gray-800">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex-grow flex flex-col justify-center px-8 space-y-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl font-serif font-bold ${
                      location.pathname === link.path ? 'text-primary' : 'text-gray-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-8 border-t border-gray-100">
              <a
                href="tel:9542935841"
                className="flex items-center justify-center space-x-3 bg-primary text-white px-5 py-5 rounded-2xl w-full shadow-xl shadow-red-500/20"
              >
                <Phone size={20} />
                <span className="font-bold uppercase tracking-widest">Call Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
