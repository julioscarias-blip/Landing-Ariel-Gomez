import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Calendar, ChevronDown, Activity, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';

export default function Hero({ onOpenBooking }) {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const ctaRef = useRef(null);
  const metricsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, delay: 0.2 }
      )
      .fromTo(
        title1Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0 },
        '-=0.7'
      )
      .fromTo(
        title2Ref.current,
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1 },
        '-=0.8'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
        '-=0.6'
      )
      .fromTo(
        metricsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0 },
        '-=0.6'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-dvh h-dvh w-full flex flex-col justify-end overflow-hidden bg-[#1A1A1A] text-white"
    >
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/construction-team.jpg"
          alt="Grupo de trabajadores en un sitio de construcción"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110"
        />
        {/* Strong Gradient: Moss Green to Charcoal/Black */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#2E4036]/75 to-black/60" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/90" />
      </div>

      {/* Grid Pattern overlay for telemetry feel */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Hero Content Layer - Positioned in the lower third */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 pb-16 pt-32 flex flex-col justify-end min-h-full">
        <div className="max-w-4xl space-y-6">
          
          {/* Status Badge */}
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-telemetry uppercase tracking-widest text-[#F2F0E9]">
            <span className="w-2 h-2 rounded-full bg-[#CC5833] animate-pulse" />
            <span>Ariel Gomez • Consultoria Externa & Auditoria Legal</span>
          </div>

          {/* Cinematic Headline */}
          <div className="space-y-1">
            <h1
              ref={title1Ref}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-[#F2F0E9] font-sans leading-[1.05]"
            >
              Operación Segura
            </h1>
            <h2
              ref={title2Ref}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap font-serif-italic text-[#CC5833] font-normal tracking-tight leading-[0.95] drop-shadow-lg"
            >
              Cumplimiento Garantizado
            </h2>
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="relative overflow-hidden group rounded-full px-8 py-4 bg-[#CC5833] text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-[#CC5833]/30 hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
            >
              <span className="absolute inset-0 bg-[#2E4036] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Reserva una reunión</span>
              </span>
            </button>

            <a
              href="#servicios"
              className="rounded-full px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 hover:border-white/40 flex items-center gap-2"
            >
              <span>Ver Diagnóstico de Riesgos</span>
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>

          {/* Key Metric Bar / Telemetry Footer */}
          <div
            ref={metricsRef}
            className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-telemetry"
          >
            <div className="flex flex-col">
              <span className="text-white/50 uppercase">Normativa Ley</span>
              <span className="text-sm font-semibold text-white mt-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CC5833]" /> Ley 19.587 / D.351
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/50 uppercase">Reducción de Riesgos</span>
              <span className="text-sm font-semibold text-white mt-1 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-400" /> -42% Siniestralidad
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/50 uppercase">Auditorías SRT</span>
              <span className="text-sm font-semibold text-white mt-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Conformidad
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white/50 uppercase">Cobertura</span>
              <span className="text-sm font-semibold text-white mt-1">
                Plantas & Obras Activas
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
