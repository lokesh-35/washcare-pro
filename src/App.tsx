import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Star, 
  ChevronRight, 
  ChevronLeft,
  Wrench, 
  Sparkles, 
  Award, 
  Smile, 
  ShieldAlert,
  ThumbsUp,
  X,
  Zap,
  Check,
  Heart,
  BadgePercent,
  Map,
  Layers,
  Facebook,
  Instagram,
  Twitter,
  ExternalLink,
  User,
  Cpu
} from 'lucide-react';

import { CONTACT, SERVICE_AREAS, BRANDS, SEO_KEYWORDS } from './constants';

// Proper image imports
import heroImg from './assets/images/ChatGPT Image Jul 13, 2026, 09_07_12 PM.png';
import wmImg from './assets/images/washing_machine_pro_repair_1779000684760.png';
import fridgeImg from './assets/images/fridge_pro_repair_1779000700064.png';
import heroRepairServiceImg from './assets/images/hero_repair_service_1779000351743.png';
import fridgeTechImg from './assets/images/refrigerator_service_tech_1779000382242.png';
import wmPartsImg from './assets/images/washing_machine_repair_parts_1779000366502.png';

// Import subcomponents
import Header from './components/Header';

export default function App() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);

  // Auto slide reviews
  useEffect(() => {
    const timer = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Show WhatsApp tooltip after a short delay on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsAppTooltip(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleCall = () => {
    window.location.href = `tel:${CONTACT.phone}`;
  };

  const handleWhatsApp = (customMessage?: string) => {
    const text = customMessage || `Hi WashCare Pro, I want to book an appliance repair doorstep service.`;
    window.location.href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  // Local Business Schema (JSON-LD)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WashCare Pro",
    "image": [
      "https://ais-dev-rvpymlx545teqn5oqwfzhh-502861037070.asia-southeast1.run.app/assets/images/washing_machine_pro_repair_1779000684760.png"
    ],
    "telephone": CONTACT.phone,
    "email": CONTACT.email,
    "priceRange": "₹350",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Benz Circle",
      "addressLocality": "Vijayawada",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "520010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "16.5011",
      "longitude": "80.6436"
    },
    "url": "https://ais-dev-rvpymlx545teqn5oqwfzhh-502861037070.asia-southeast1.run.app/",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    }
  };

  interface ServiceItem {
    title: string;
    desc: string;
    img?: string;
    badge: string;
    issue: string;
  }

  const servicesList: ServiceItem[] = [
    {
      title: "Washing Machine Repair",
      desc: "Top-tier on-site diagnosis and fixing of automatic and semi-automatic washing machine models.",
      img: wmImg,
      badge: "Best Seller",
      issue: "Washing Machine repair service"
    },
    {
      title: "Refrigerator Repair",
      desc: "Expert restoration of single door, double door, and smart inverter refrigerators.",
      img: fridgeImg,
      badge: "Cooling Expert",
      issue: "Refrigerator cooling repair"
    },
    {
      title: "Top Load Repair",
      desc: "Swift troubleshooting of agitators, spins, and level controllers in top load models.",
      img: wmPartsImg,
      badge: "Rapid Fix",
      issue: "Top load washing machine service"
    },
    {
      title: "Gas Charging",
      desc: "Aero-tested refrigerator gas filling with leak detection and vacuum pressure sealing.",
      img: fridgeTechImg,
      badge: "Instant Refresh",
      issue: "Fridge gas charging service"
    }
  ];

  const whyChooseUs = [
    { title: "10+ Years Experience", desc: "Serving home owners in Vijayawada with a stellar history of successful repairs.", icon: <Award size={24} className="text-accent" /> },
    { title: "ITI Certified Technician", desc: "Rigorous trade-certified staff specialized in smart inverter technology.", icon: <Wrench size={24} className="text-primary" /> },
    { title: "Genuine Spare Parts", desc: "Only brand-sourced 100% original spares with verified tracking code.", icon: <ShieldCheck size={24} className="text-accent" /> },
    { title: "30-Day Warranty", desc: "Get full peace of mind with a transparent, written service warranty.", icon: <CheckCircle2 size={24} className="text-success" /> },
    { title: "Doorstep Service", desc: "Leave the heavy lifting to us. We troubleshoot right inside your utility area.", icon: <MapPin size={24} className="text-primary" /> },
    { title: "Same-Day Visit", desc: "Fast dispatcher routing guarantees arrival within 2 hours of verification.", icon: <Clock size={24} className="text-accent" /> },
    { title: "Affordable Pricing", desc: "Highly competitive, upfront labor charge sheet. No hidden platform costs.", icon: <BadgePercent size={24} className="text-success" /> },
    { title: "5000+ Happy Customers", desc: "Loved and highly rated on Google Reviews across Andhra Pradesh.", icon: <Smile size={24} className="text-primary" /> }
  ];

  const reviews = [
    {
      name: "Ravi Kumar Rao",
      location: "Benz Circle, Vijayawada",
      rating: 5,
      text: "My LG Front Load washing machine was showing an OE drainage error. The technician arrived within 1.5 hours, diagnosed a faulty water pump, and replaced it with a genuine part. Excellent and transparent service!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&fit=crop&q=80"
    },
    {
      name: "Lakshmi Prasanna",
      location: "Patamata, Vijayawada",
      rating: 5,
      text: "Samsung double door refrigerator stopped cooling suddenly. Called WashCare Pro and they sent an ITI certified technician. He filled the gas and tested the compressor. Working perfectly now. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&fit=crop&q=80"
    },
    {
      name: "Srinivas G.",
      location: "Kanuru, Vijayawada",
      rating: 5,
      text: "Very professional team. They gave a clear estimate before starting the repair. The ₹350 service charge was waived off because we got the washing machine motor repaired with them. Very cost-effective.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&fit=crop&q=80"
    },
    {
      name: "Durga Bhavani",
      location: "Bhavanipuram, Vijayawada",
      rating: 5,
      text: "Quick response and very polite behavior. Refrigerator door gasket was loose, causing cooling issues. The technician swapped the seal in 20 minutes. Great response and doorstep facility.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E0F2FE] via-white to-white text-[#1E293B] font-sans selection:bg-accent/20 selection:text-primary">
      {/* Dynamic Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      {/* Hidden SEO terms */}
      <div className="sr-only">
        {SEO_KEYWORDS.join(', ')}
      </div>

      {/* Header (Floating Glass Nav Bar) */}
      <Header onCallClick={handleCall} onWhatsAppClick={() => handleWhatsApp()} />

      {/* Hero Section */}
      <main className="relative">
        
        {/* Full-screen Hero */}
        <section id="home" className="relative pt-12 pb-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Hero Content */}
              <div className="lg:col-span-7 text-left space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider">
                  <Sparkles size={14} className="text-accent animate-pulse" />
                  <span>Doorstep Repair Service in 2 Hours</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 leading-[1.1] tracking-tight">
                  Vijayawada's Trusted <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Washing Machine & Refrigerator</span> Repair Experts
                </h1>

                <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl leading-relaxed">
                  Professional doorstep repair service for all major brands including LG, Samsung, Whirlpool, IFB, Bosch, Haier, Godrej, Panasonic, and more. 
                </p>

                {/* Display Premium Badges */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  <span className="inline-flex items-center gap-1 bg-white border border-border-custom px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-sm">
                    ⭐ 10+ Years Experience
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white border border-border-custom px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-sm">
                    ⭐ Genuine Spare Parts
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white border border-border-custom px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-sm">
                    ⭐ Same Day Service
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white border border-border-custom px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-sm">
                    ⭐ 30 Days Warranty
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white border border-border-custom px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-sm">
                    ⭐ ₹350 Visiting Charge
                  </span>
                </div>

                {/* Centered orange pulse Call Now button & WhatsApp below it */}
                <div className="pt-6 flex flex-col items-center justify-center gap-4 w-full max-w-md mx-auto lg:mx-0">
                  <button
                    onClick={handleCall}
                    className="animate-orange-pulse bg-secondary hover:bg-orange-600 text-white font-black text-base sm:text-lg px-8 py-5 rounded-2xl flex items-center justify-center gap-3 cursor-pointer select-none w-full shadow-xl shadow-secondary/25 transition-all hover:scale-[1.02]"
                  >
                    <Phone size={22} className="animate-bounce" />
                    <span>Call Now: {CONTACT.phone}</span>
                  </button>

                  <button
                    onClick={() => handleWhatsApp()}
                    className="bg-whatsapp hover:bg-green-600 text-white font-black text-sm sm:text-base px-8 py-4.5 rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-whatsapp/20 cursor-pointer select-none w-full transition-all hover:scale-[1.02]"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp Booking</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 font-bold mt-1">
                  * Note: Our inspection visit charge is completely waived if you proceed with our repair!
                </p>
              </div>

              {/* Right Column: Premium Appliance Repair Showcase */}
              <div className="lg:col-span-5 relative">
                {/* Accent glow background */}
                <div className="absolute -top-12 -right-12 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 bg-white p-4 rounded-[32px] shadow-2xl border border-slate-100/80 hover:scale-[1.01] transition-transform duration-500">
                  <div className="relative rounded-[24px] overflow-hidden group">
                    <img 
                      src={heroImg} 
                      alt="Premium Doorstep Appliance Repair Service Vijayawada" 
                      className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                    
                    {/* Bottom floating details */}
                    <div className="absolute bottom-5 left-5 right-5 text-left text-white space-y-1">
                      <div className="inline-flex items-center gap-1.5 bg-accent/90 text-[#1E293B] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                        <ShieldCheck size={12} />
                        <span>100% Authorized Spares</span>
                      </div>
                      <h4 className="font-display font-black text-lg leading-tight text-white mt-1.5">
                        High-Fidelity Diagnostics
                      </h4>
                      <p className="text-xs text-slate-200 font-medium">
                        Doorstep resolution for smart refrigerators & laundry washing machines
                      </p>
                    </div>
                  </div>

                  {/* Overlapping Floating Badges to create rich bento-like hierarchy without image repetition */}
                  <div className="absolute -bottom-4 -left-4 bg-[#0F172A] text-white p-4 rounded-[20px] shadow-xl border border-slate-800 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary font-bold text-lg">
                      ⚡
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Response Speed</p>
                      <p className="text-xs font-black text-white">Under 2 Hours Doorstep</p>
                    </div>
                  </div>

                  <div className="absolute -top-4 -right-4 bg-[#0F172A] text-white p-4 rounded-[20px] shadow-xl border border-slate-800 flex items-center gap-3">
                    <div className="w-10 h-10 bg-success/20 rounded-xl flex items-center justify-center text-success text-base">
                      ★
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Service Rating</p>
                      <p className="text-xs font-black text-white">4.9/5 Google Business</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Brand partners */}
        <section className="bg-white/40 backdrop-blur-sm border-y border-border-custom py-10 relative z-10">
          <div className="container mx-auto px-4 text-center max-w-7xl">
            <p className="text-[10px] text-slate-400 font-extrabold tracking-widest uppercase mb-6">
              Authorized Quality Doorstep Spares For Major Brands
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60 grayscale hover:opacity-100 transition-opacity">
              {BRANDS.map((b) => (
                <span key={b} className="text-xl md:text-2xl font-black tracking-tight text-slate-700">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gradient-to-b from-white via-[#E0F2FE]/20 to-white">
          <div className="container mx-auto px-4 max-w-7xl">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs bg-primary/10 text-primary px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider inline-block">
                Comprehensive Diagnostic Care
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black text-slate-800 tracking-tight">
                Premium Doorstep Services
              </h2>
              <p className="text-slate-500 font-medium text-sm">
                Aesthetic glassmorphic service cards engineered for transparent doorstep diagnostic work in Vijayawada.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesList.map((srv, idx) => (
                <div 
                  key={idx}
                  className="bg-white/70 backdrop-blur-md rounded-[20px] border border-border-custom overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:-translate-y-2 hover:shadow-2xl hover:border-accent/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  {/* Card visual wrapper */}
                  {srv.img ? (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={srv.img} 
                        alt={srv.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      <span className="absolute top-3 right-3 bg-primary/90 text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase">
                        {srv.badge}
                      </span>
                      <h3 className="absolute bottom-3 left-4 text-white font-display font-bold text-lg">
                        {srv.title}
                      </h3>
                    </div>
                  ) : (
                    <div className="relative h-48 bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-5 flex flex-col justify-between overflow-hidden">
                      {/* Abstract geometric background accents */}
                      <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none" />
                      <div className="absolute -left-6 -top-6 w-24 h-24 bg-accent/10 rounded-full blur-xl pointer-events-none" />
                      
                      <div className="flex justify-between items-start z-10">
                        <span className="bg-primary/30 border border-primary/20 text-accent text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {srv.badge}
                        </span>
                        <div className="text-accent/80 font-bold text-base select-none">
                          🛠️
                        </div>
                      </div>

                      <h3 className="text-white font-display font-black text-lg z-10 leading-snug">
                        {srv.title}
                      </h3>
                    </div>
                  )}

                  {/* Body details */}
                  <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-4">
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {srv.desc}
                    </p>

                    <div className="pt-2 flex gap-2">
                      <button 
                        onClick={() => {
                          const msg = `Hi WashCare Pro, I want to book a doorstep repair for ${srv.title}. Please coordinate.`;
                          handleWhatsApp(msg);
                        }}
                        className="flex-1 bg-secondary hover:bg-orange-600 text-white py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 shadow-sm transition-colors cursor-pointer"
                      >
                        <MessageCircle size={12} />
                        <span>Book on WhatsApp</span>
                      </button>
                      <button 
                        onClick={() => {
                          const msg = `Hi WashCare Pro, I want to call/book for ${srv.title}. Please call me.`;
                          handleWhatsApp(msg);
                        }}
                        className="bg-slate-50 hover:bg-slate-100 text-slate-700 py-2.5 px-4 rounded-xl text-xs font-bold border border-slate-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Phone size={12} className="text-primary" />
                        <span>Call Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Why Choose Us */}
        <section id="about" className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs bg-primary/20 text-accent px-4 py-1.5 rounded-full font-bold uppercase tracking-wider inline-block">
                Uncompromising Quality
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight">
                Why Choose WashCare Pro?
              </h2>
              <p className="text-slate-400 font-medium text-sm">
                Engineered for trust. We prioritize authentic certified repair standards over quick bypass fixes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-800/40 border border-slate-800 p-6 rounded-[20px] text-left hover:border-accent/40 hover:bg-slate-800/60 transition-all group duration-300"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4 border border-slate-700/50 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-display font-bold text-base text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Customer Reviews (Auto-sliding Testimonials) */}
        <section className="py-24 bg-gradient-to-b from-white via-[#E0F2FE]/20 to-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            
            <div className="space-y-3 mb-16">
              <span className="text-xs bg-primary/10 text-primary px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider inline-block">
                Google Reviews
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
                Loved by 5000+ Happy Customers
              </h2>
            </div>

            <div className="relative bg-white rounded-[24px] p-8 md:p-12 border border-border-custom shadow-lg max-w-3xl mx-auto text-left">
              {/* Stars */}
              <div className="flex justify-center md:justify-start gap-1 text-secondary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" stroke="none" />
                ))}
              </div>

              {/* Slider Content */}
              <div className="min-h-[140px]">
                <p className="text-slate-700 font-medium text-sm md:text-base leading-relaxed italic">
                  "{reviews[reviewIndex].text}"
                </p>
              </div>

              {/* Customer Profile */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-black flex items-center justify-center text-sm border border-primary/20">
                    {reviews[reviewIndex].name.split(' ').map((word) => word[0]).join('').slice(0, 2).toUpperCase()}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-slate-800">{reviews[reviewIndex].name}</p>
                    <p className="text-xs text-slate-400 font-semibold">{reviews[reviewIndex].location}</p>
                  </div>
                </div>

                {/* Navigation arrows */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
                    className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button 
                    onClick={() => setReviewIndex((prev) => (prev + 1) % reviews.length)}
                    className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* Service Areas */}
        <section id="areas" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <span className="text-xs bg-primary/10 text-primary px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider inline-block mb-4">
              📍 Local Hubs
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">
              Service Areas in Vijayawada
            </h2>
            <p className="text-slate-500 font-medium text-sm max-w-xl mx-auto mb-16">
              Our regional dispatchers coordinate routes locally, matching you to the closest ITI engineer for top speed doorstep response.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {SERVICE_AREAS.map((area) => (
                <div 
                  key={area}
                  className="bg-white border border-border-custom p-4 rounded-[20px] font-bold text-xs text-slate-700 flex items-center justify-center gap-2 shadow-sm hover:border-accent hover:bg-blue-50/20 transition-all cursor-default select-none"
                >
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer (Dark Navy background) */}
      <footer className="bg-[#0B1329] text-slate-400 pt-20 pb-16 text-left border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
            
            {/* Column 1: Brand Info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-gradient-to-tr from-primary to-accent rounded-xl flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-primary/20">
                  ⚡
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-lg text-white leading-none">
                    WashCare Pro
                  </h4>
                  <p className="text-[9px] text-slate-500 font-bold tracking-wider uppercase mt-0.5">
                    Premium Appliance Care
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-400 font-medium leading-relaxed">
                WashCare Pro is Vijayawada's high fidelity independent home appliance troubleshooting service. We provide doorstep resolution for smart cooling refrigerators and complex laundry washing machines.
              </p>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl inline-block w-full max-w-[320px]">
                <p className="text-[9px] text-accent font-extrabold uppercase tracking-wider mb-1">Direct Booking Line</p>
                <button 
                  onClick={handleCall}
                  className="text-lg font-black text-white hover:text-primary transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Phone size={16} className="text-primary" />
                  <span>{CONTACT.phone}</span>
                </button>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2 space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h5>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#home" className="hover:text-white transition-colors">Home Dashboard</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Diagnostic Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Why Choose Us</a></li>
              </ul>
            </div>

            {/* Column 3: Contact Info & Hours */}
            <div className="lg:col-span-3 space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-white">Contact & Hours</h5>
              <ul className="space-y-2.5 text-xs">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">📍</span>
                  <span>Vijayawada Metro Hub, Andhra Pradesh, India</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✉️</span>
                  <span>{CONTACT.email}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">⏰</span>
                  <span>Mon - Sun: 8:00 AM - 9:00 PM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">💳</span>
                  <span>Inspection Charge: {CONTACT.serviceCharge} (Refunded on repair completion)</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Embed Real Google Map of Vijayawada */}
            <div className="lg:col-span-3 space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-white">Service Location Map</h5>
              <div className="rounded-xl overflow-hidden border border-slate-800 h-36 bg-slate-950 shadow-inner relative">
                <iframe 
                  title="WashCare Pro Vijayawada Area"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122426.17290196237!2d80.56475659726562!3d16.506174299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d94fb%3A0x69db1451af9c3b8a!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="opacity-70 grayscale hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <p className="text-[10px] text-slate-500 font-semibold italic text-center">
                * Guaranteed doorstep arrival anywhere in Vijayawada
              </p>
            </div>

          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p className="text-slate-500 font-medium">
              &copy; {new Date().getFullYear()} WashCare Pro. All rights reserved. Designed for Google Ads conversion with Premium Ocean Aesthetic.
            </p>

            {/* Privacy Policy & Terms Links */}
            <div className="flex gap-4 text-slate-500 font-semibold">
              <a href="/#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <span>&bull;</span>
              <a href="/#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            </div>

            {/* Social media icons */}
            <div className="flex gap-3 text-slate-500">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 pointer-events-none">
        <AnimatePresence>
          {showWhatsAppTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-slate-900 text-white px-4 py-2.5 rounded-2xl shadow-xl border border-slate-800 text-xs font-semibold flex items-center gap-2 pointer-events-auto"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Book via WhatsApp!</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowWhatsAppTooltip(false);
                }}
                className="text-slate-400 hover:text-white ml-1.5 transition-colors p-0.5 rounded-full hover:bg-slate-800"
                aria-label="Close tooltip"
              >
                <X size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => handleWhatsApp("Hi WashCare Pro, I am visiting your website and would like to book a doorstep appliance repair service in Vijayawada.")}
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0 12px 40px rgba(37, 211, 102, 0.4)" 
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="pointer-events-auto bg-whatsapp text-white p-4 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.35)] border border-green-500/30 flex items-center justify-center relative cursor-pointer"
          aria-label="Contact on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-whatsapp/20 animate-ping -z-10" />
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.328 1.977 13.882 1.972 12.01 1.972c-5.437 0-9.865 4.37-9.869 9.8.001 1.93.502 3.81 1.456 5.416L2.61 21.31l4.037-1.056V20.25zM17.47 14.39c-.3-.149-1.778-.877-2.078-.985-.3-.108-.518-.163-.737.164-.219.327-.849 1.071-1.04 1.29-.19.217-.382.244-.682.096-.3-.15-1.272-.469-2.419-1.494-.89-.794-1.492-1.775-1.667-2.074-.175-.299-.019-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.199.05-.374-.025-.524-.075-.15-.737-1.778-1.01-2.434-.266-.641-.538-.553-.737-.563-.19-.01-.408-.012-.627-.012-.219 0-.576.082-.876.408-.3.327-1.15 1.12-1.15 2.729 0 1.61 1.172 3.161 1.332 3.379.16.218 2.3 3.51 5.58 4.926.78.337 1.39.539 1.86.687.78.249 1.49.213 2.05.129.62-.093 1.78-.727 2.03-1.43.25-.704.25-1.306.17-1.43-.07-.123-.28-.198-.58-.349z" />
          </svg>
        </motion.button>

        <motion.button
          onClick={handleCall}
          initial={{ scale: 0, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 12px 40px rgba(59,130,246,0.35)"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.05 }}
          className="pointer-events-auto bg-primary text-white p-4 rounded-full shadow-[0_8px_30px_rgb(59,130,246,0.35)] border border-sky-500/30 flex items-center justify-center relative cursor-pointer"
          aria-label="Call WashCare Pro"
        >
          <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping -z-10" />
          <Phone size={20} />
        </motion.button>
      </div>
    </div>
  );
}
