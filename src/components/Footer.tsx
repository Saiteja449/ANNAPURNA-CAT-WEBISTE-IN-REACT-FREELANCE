import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0B] text-white pt-12 pb-12 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 mb-8">
          {/* Brand & Mission */}
          <div className="space-y-8">
            <Link to="/" className="flex flex-col group">
              <span className="text-3xl font-black text-white leading-tight tracking-tighter">
               Sri Annapurna<span className="text-primary italic">.</span>
              </span>
              <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-accent">
                Caterers
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Crafting unforgettable culinary experiences since 2010. We blend traditional Indian heritage with modern hospitality to make your special moments truly exquisite.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Youtube size={18} />, href: "#" }
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary/10 transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-white flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-3" />
              Quick Links
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              {['Home', 'About Us', 'Our Menu', 'Services', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="hover:text-primary transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-white flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-3" />
              Specialties
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              {[
                'Royal Wedding Buffet',
                'Corporate Meal Boxes',
                'Birthdays & Anniversaries',
                'Live Gourmet Counters',
                'Custom Menu Planning',
                'Premium Fruit Displays'
              ].map(service => (
                <li key={service} className="hover:text-accent transition-colors cursor-pointer">{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info Card */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] space-y-6">
            <h3 className="text-lg font-bold text-white">Get in Touch</h3>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <span className="pt-1">Manikonda, Hyderabad, <br />Telangana - 500089</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-accent" />
                </div>
                <a href="tel:9542935841" className="hover:text-white">+91 9542935841</a>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <a href="mailto:info@annapurnacaterers.com" className="hover:text-white text-[11px] truncate">info@annapurnacaterers.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Sree Annapurna Caterers. Crafted with passion.</p>
          {/* <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

