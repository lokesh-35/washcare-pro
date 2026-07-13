import { useState, useEffect } from 'react';
import { Home, Wrench, ShieldCheck, MapPin, Phone, MessageCircle, Clock, Menu, X, Cpu } from 'lucide-react';
import { CONTACT } from '../constants';

interface HeaderProps {
  onCallClick: () => void;
  onWhatsAppClick: () => void;
}

export default function Header({ onCallClick, onWhatsAppClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", icon: <Home size={16} /> },
    { label: "Service", href: "#services", icon: <Wrench size={16} /> },
    { label: "Why Choose Us", href: "#about", icon: <ShieldCheck size={16} /> },
    { label: "Service Areas", href: "#areas", icon: <MapPin size={16} /> }
  ];

  return (
    <>
      {/* Mini top notification bar */}
      <div className="w-full bg-gradient-to-r from-primary via-accent to-primary text-white text-[11px] font-bold py-1.5 px-4 text-center select-none relative z-50">
        <div className="container mx-auto flex justify-center items-center gap-6 flex-wrap">
          <span className="flex items-center gap-1">
            <Clock size={12} />
            <span>Mon - Sun: 8:00 AM - 9:00 PM</span>
          </span>
          <span className="hidden sm:inline-block">|</span>
          <span className="flex items-center gap-1">
            <MapPin size={12} />
            <span>Doorstep Service in 2 Hours anywhere in Vijayawada</span>
          </span>
        </div>
      </div>

      {/* Floating Glass Navigation Bar */}
      <div className="fixed top-12 left-0 w-full z-40 px-4 pointer-events-none">
        <header className={`mx-auto w-full max-w-7xl pointer-events-auto rounded-[20px] transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-lg shadow-[0_10px_30px_rgba(37,99,235,0.1)] border border-white/40 py-2.5 px-4 md:px-6' 
            : 'bg-white/40 backdrop-blur-md shadow-[0_4px_20px_rgba(37,99,235,0.03)] border border-white/20 py-3.5 px-4 md:px-6'
        }`}>
          <div className="flex justify-between items-center">
            {/* Logo & Brand */}
            <a href="#home" className="flex items-center gap-2 group cursor-pointer">
              <div className="w-11 h-11 bg-gradient-to-tr from-primary to-accent rounded-2xl flex items-center justify-center text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
                <Cpu size={20} />
              </div>
              <div className="text-left">
                <h1 className="font-display font-extrabold text-base md:text-lg leading-none tracking-tight text-slate-800 flex items-center gap-2">
                  <span className="text-slate-900">WashCare</span>
                  <span className="text-primary">Pro</span>
                </h1>
                <p className="text-[9px] text-slate-500 font-bold tracking-wider uppercase mt-0.5">
                  Premium Appliance Care
                </p>
              </div>
            </a>

            {/* Desktop Navigation Link Menu */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-bold text-slate-600 hover:text-primary hover:-translate-y-0.5 transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>

            {/* Call & Book CTAs removed as per user request */}

            {/* Hamburger Icon */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 transition-colors cursor-pointer"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Flyout Menu */}
          {isMenuOpen && (
            <div className="absolute top-[calc(100%+8px)] left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-100 shadow-xl rounded-2xl py-5 px-5 flex flex-col gap-4 lg:hidden pointer-events-auto">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm font-semibold text-slate-700 hover:text-primary py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer text-left flex items-center gap-2"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>

              <hr className="border-slate-100" />

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onCallClick();
                  }}
                  className="bg-secondary hover:bg-orange-600 text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                >
                  <Phone size={14} />
                  <span>Call Now</span>
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onWhatsAppClick();
                  }}
                  className="bg-whatsapp hover:bg-green-600 text-white font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          )}
        </header>
      </div>

      {/* Spacer to push content down beautifully */}
      <div className="h-28" />
    </>
  );
}

