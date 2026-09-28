import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Target, Award, BarChart3, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto({ onOpenBooking }) {
  const sectionRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const badgeRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.fromTo(badgeRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo(text1Ref.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.5')
        .fromTo(text2Ref.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.6')
        .fromTo(statsRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="manifiesto"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-12 bg-[#1A1A1A] text-white overflow-hidden"
    >
      {/* Background Image Parallax Texture */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=2070&auto=format&fit=crop"
          alt="Maquinaria en una planta industrial"
          className="w-full h-full object-cover filter grayscale contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-black/80 to-[#1A1A1A]" />
      </div>

      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto space-y-20">
        
        {/* Top Manifesto Tag */}
        <div ref={badgeRef} className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-telemetry uppercase tracking-widest text-[#F2F0E9]">
            <Target className="w-3.5 h-3.5 text-[#CC5833]" />
            <span>Manifiesto de Consultoría • Ariel Gomez</span>
          </div>
        </div>

        {/* High-Contrast Comparison Statement */}
        <div className="space-y-12 max-w-4xl mx-auto">
          
          {/* Traditional Question (Subdued) */}
          <div ref={text1Ref} className="space-y-3 border-l-2 border-white/20 pl-6 md:pl-10">
            <span className="text-xs font-telemetry uppercase tracking-widest text-white/50 block">
              PARADIGMA TRADICIONAL
            </span>
            <blockquote className="text-2xl sm:text-4xl font-normal text-white/60 font-sans tracking-tight leading-snug">
              “Lo habitual en las empresas es preguntar: <strong className="text-white/80 font-semibold">¿qué multas o contingencias legales podemos evitar hoy?</strong>”
            </blockquote>
          </div>

          {/* Ariel Gomez Approach (High Impact Drama) */}
          <div ref={text2Ref} className="space-y-4 border-l-2 border-[#CC5833] pl-6 md:pl-10 pt-4">
            <span className="text-xs font-telemetry uppercase tracking-widest text-[#CC5833] font-bold block">
              NUESTRA FILOSOFÍA DE ALTO RENDIMIENTO
            </span>
            <blockquote className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#F2F0E9] font-sans tracking-tight leading-tight">
              Nosotros planteamos: <br />
              <span className="font-serif-italic text-[#CC5833] font-normal">¿Cómo transformamos la seguridad laboral en un sistema de precisión que blinda tu productividad?</span>
            </blockquote>
          </div>

        </div>

        {/* Metrics Grid */}
        <div
          ref={statsRef}
          className="pt-16 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm space-y-2 hover:border-[#CC5833]/50 transition-colors">
            <div className="flex items-center justify-between text-[#CC5833]">
              <Award className="w-5 h-5" />
              <span className="text-[11px] font-telemetry uppercase text-white/40">EXPERIENCIA</span>
            </div>
            <div className="text-4xl font-black font-telemetry text-white">15+ Años</div>
            <p className="text-xs text-white/70">
              Liderando consultoría en obras civiles, estructuras metalmecánicas e industrias pesadas.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm space-y-2 hover:border-[#CC5833]/50 transition-colors">
            <div className="flex items-center justify-between text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-[11px] font-telemetry uppercase text-white/40">CONFORMIDAD</span>
            </div>
            <div className="text-4xl font-black font-telemetry text-white">100%</div>
            <p className="text-xs text-white/70">
              Índice de aprobación en auditorías de la Superintendencia de Riesgos del Trabajo (SRT).
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm space-y-2 hover:border-[#CC5833]/50 transition-colors">
            <div className="flex items-center justify-between text-[#CC5833]">
              <BarChart3 className="w-5 h-5" />
              <span className="text-[11px] font-telemetry uppercase text-white/40">PROYECTOS</span>
            </div>
            <div className="text-4xl font-black font-telemetry text-white">+250</div>
            <p className="text-xs text-white/70">
              Plantas industriales, talleres de mantenimiento y obras de envergadura intervenidas.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm space-y-2 hover:border-[#CC5833]/50 transition-colors">
            <div className="flex items-center justify-between text-emerald-400">
              <ArrowUpRight className="w-5 h-5" />
              <span className="text-[11px] font-telemetry uppercase text-white/40">SINIESTRALIDAD</span>
            </div>
            <div className="text-4xl font-black font-telemetry text-white font-mono">&lt;0.01%</div>
            <p className="text-xs text-white/70">
              Reducción máxima de tasa de accidentes bajo nuestro protocolo de gestión continua.
            </p>
          </div>
        </div>

        {/* CTA Banner inside Manifesto */}
        <div className="pt-8 flex justify-center">
          <button
            onClick={onOpenBooking}
            className="rounded-full px-8 py-4 bg-[#CC5833] hover:bg-[#b84a28] text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl hover:scale-[1.03] flex items-center gap-3 cursor-pointer"
          >
            <span>Agendar Evaluación de Riesgo en Tu Planta</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
