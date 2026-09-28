import React from 'react';
import { ShieldAlert, ArrowUp, Calendar, Mail, Phone, MapPin, Activity, Send } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const message = String(formData.get('message') || '');
    const subject = encodeURIComponent(`Consulta desde la web: ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\n${message}`);

    window.location.href = `mailto:contacto@arielgomez-hys.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="bg-[#1A1A1A] text-white rounded-t-[3rem] pt-20 pb-12 px-6 md:px-12 relative overflow-hidden border-t border-white/10">
      
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Header & Status Indicator */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#CC5833] flex items-center justify-center text-white">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight font-sans text-white">
                ARIEL GOMEZ
              </span>
            </div>
            <p className="text-xs text-white/60 font-telemetry uppercase tracking-wider">
              Consultoría Externa en Higiene y Seguridad Laboral • Soluciones Industriales
            </p>
          </div>

          {/* Status Indicator Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <div className="flex flex-col text-xs font-telemetry">
              <span className="text-white/50 text-[10px] uppercase">SISTEMA OPERATIVO</span>
              <span className="text-emerald-400 font-bold tracking-wide">ACTIVO • DISPONIBLE EN OBRA</span>
            </div>
          </div>

        </div>

        <section
          id="contacto"
          aria-labelledby="contact-title"
          className="grid grid-cols-1 gap-8 border-b border-white/10 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
        >
          <div className="space-y-3">
            <p className="font-telemetry text-[11px] uppercase tracking-widest text-[#CC5833]">Contacto</p>
            <h2 id="contact-title" className="text-3xl font-extrabold text-white sm:text-4xl">
              Hablemos de tu proyecto.
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-white/60">
              Cuéntanos qué necesita tu empresa en seguridad e higiene industrial.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="contact-name" className="text-xs font-medium text-white/70">Nombre</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#CC5833]"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="text-xs font-medium text-white/70">Correo electrónico</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#CC5833]"
              />
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <label htmlFor="contact-message" className="text-xs font-medium text-white/70">Mensaje</label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                className="w-full resize-y rounded-lg border border-white/15 bg-white/5 px-3 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-[#CC5833]"
              />
            </div>
            <div className="flex justify-end sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[#CC5833] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#b84a28]"
              >
                <Send className="h-4 w-4" />
                <span>Enviar mensaje</span>
              </button>
            </div>
          </form>
        </section>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-xs font-sans">
          
          {/* Column 1: Cobertura */}
          <div className="space-y-4">
            <h4 className="font-telemetry uppercase text-white/40 tracking-widest text-[11px]">
              Sectores Atendidos
            </h4>
            <ul className="space-y-2.5 text-white/80">
              <li className="hover:text-[#CC5833] transition-colors cursor-pointer">Empresas de Construcción & Obras Civiles</li>
              <li className="hover:text-[#CC5833] transition-colors cursor-pointer">Talleres & Reparaciones Metalmecánicas</li>
              <li className="hover:text-[#CC5833] transition-colors cursor-pointer">Mantenimientos Industriales Pesados</li>
              <li className="hover:text-[#CC5833] transition-colors cursor-pointer">Empresas de Servicios Industriales</li>
            </ul>
          </div>

          {/* Column 2: Normativas */}
          <div className="space-y-4">
            <h4 className="font-telemetry uppercase text-white/40 tracking-widest text-[11px]">
              Marco Normativo Auditable
            </h4>
            <ul className="space-y-2.5 text-white/80 font-telemetry">
              <li>Ley Nº 19.587 / Decreto 351/79</li>
              <li>Decreto Nº 911/96 (Construcción)</li>
              <li>Res. SRT 850/12 (Protocolo Ruido)</li>
              <li>Res. SRT 886/15 (Ergonomía)</li>
              <li>ISO 45001 (Sistemas de Gestión)</li>
            </ul>
          </div>

          {/* Column 3: Contacto Directo */}
          <div className="space-y-4">
            <h4 className="font-telemetry uppercase text-white/40 tracking-widest text-[11px]">
              Contacto Directo
            </h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#CC5833]" />
                <span className="font-telemetry">contacto@arielgomez-hys.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400" />
                <a href="tel:+542915266589" className="font-telemetry hover:text-white transition-colors">
                  +54 291 5266589
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#CC5833]" />
                <span>Bahía Blanca y zonas aledañas</span>
              </div>
            </div>
          </div>

          {/* Column 4: CTA Agenda */}
          <div className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="font-telemetry uppercase text-[#CC5833] font-bold tracking-widest text-[11px]">
              ¿Requiere Inspección Inmediata?
            </h4>
            <p className="text-white/70 text-xs leading-relaxed">
              Agende una reunión inicial de diagnóstico técnico sin compromiso.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-3 rounded-full bg-[#CC5833] hover:bg-[#b84a28] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserva una reunión</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits & Scroll Top */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/50 font-telemetry">
          <div className="space-y-2 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} Ariel Gomez — Servicios de Higiene y Seguridad Laboral.
            </p>
            <p>
              Desarrollado por{' '}
              <a
                href="https://meridiano.net.ar"
                target="_blank"
                rel="noreferrer"
                className="text-white/60 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
              >
                meridiano.net.ar
              </a>
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Volver arriba</span>
            <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#CC5833] flex items-center justify-center transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
