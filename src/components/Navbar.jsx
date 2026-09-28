import React, { useState, useEffect } from 'react';
import { ShieldAlert, Calendar, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between px-6 py-3 rounded-full max-w-5xl w-full border ${
          scrolled
            ? 'bg-white/85 backdrop-blur-md border-[#2E4036]/15 shadow-[0_10px_30px_rgba(0,0,0,0.08)] text-[#2E4036]'
            : 'bg-[#1A1A1A]/40 backdrop-blur-sm border-white/15 shadow-none text-white'
        }`}
      >
        {/* Brand Logo & Telemetry Indicator */}
        <a href="#" className="flex items-center gap-3 group">
          <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${
            scrolled ? 'bg-[#2E4036] text-white' : 'bg-[#CC5833] text-white'
          }`}>
            <ShieldAlert className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-base leading-none font-sans">
              ARIEL GOMEZ
            </span>
            <span className={`text-[10px] tracking-wider uppercase font-telemetry mt-0.5 transition-colors ${
              scrolled ? 'text-[#2E4036]/70' : 'text-white/70'
            }`}>
              Higiene & Seguridad Industrial
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium tracking-normal">
          <a href="#servicios" className={`transition-colors duration-200 hover:opacity-100 ${
            scrolled ? 'hover:text-[#CC5833] text-[#1A1A1A]/80' : 'hover:text-[#CC5833] text-white/90'
          }`}>
            Diagnóstico
          </a>
          <a href="#telemetria" className={`transition-colors duration-200 hover:opacity-100 ${
            scrolled ? 'hover:text-[#CC5833] text-[#1A1A1A]/80' : 'hover:text-[#CC5833] text-white/90'
          }`}>
            Telemetría & Control
          </a>
          <a href="#manifiesto" className={`transition-colors duration-200 hover:opacity-100 ${
            scrolled ? 'hover:text-[#CC5833] text-[#1A1A1A]/80' : 'hover:text-[#CC5833] text-white/90'
          }`}>
            Manifiesto
          </a>
          <a href="#archivo" className={`transition-colors duration-200 hover:opacity-100 ${
            scrolled ? 'hover:text-[#CC5833] text-[#1A1A1A]/80' : 'hover:text-[#CC5833] text-white/90'
          }`}>
            Protocolos
          </a>
          <a href="#planes" className={`transition-colors duration-200 hover:opacity-100 ${
            scrolled ? 'hover:text-[#CC5833] text-[#1A1A1A]/80' : 'hover:text-[#CC5833] text-white/90'
          }`}>
            Planes
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-full transition-colors ${
            scrolled ? 'text-[#2E4036] hover:bg-black/5' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[#1A1A1A]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 text-white md:hidden pointer-events-auto animate-fadeIn">
          <a
            href="#servicios"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium hover:text-[#CC5833] py-2 border-b border-white/10"
          >
            Diagnóstico
          </a>
          <a
            href="#telemetria"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium hover:text-[#CC5833] py-2 border-b border-white/10"
          >
            Telemetría & Control
          </a>
          <a
            href="#manifiesto"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium hover:text-[#CC5833] py-2 border-b border-white/10"
          >
            Manifiesto
          </a>
          <a
            href="#archivo"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium hover:text-[#CC5833] py-2 border-b border-white/10"
          >
            Protocolos
          </a>
          <a
            href="#planes"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-medium hover:text-[#CC5833] py-2 border-b border-white/10"
          >
            Planes
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="mt-2 w-full py-3 rounded-full bg-[#CC5833] text-white font-semibold text-center uppercase tracking-wider text-xs flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Reserva una reunión
          </button>
        </div>
      )}
    </header>
  );
}
