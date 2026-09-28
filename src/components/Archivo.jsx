import React, { useEffect, useRef } from 'react';
import { ShieldCheck, HardHat, Disc, Activity, Layers, Radio, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Archivo({ onOpenBooking }) {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  // --- Animation 1: Rotating Gear & Double Helix Canvas ---
  const canvas1Ref = useRef(null);
  useEffect(() => {
    const canvas = canvas1Ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Draw rotating gear outer ring
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);

      // Gear teeth
      const teeth = 12;
      const radius = 65;
      ctx.beginPath();
      for (let i = 0; i < teeth; i++) {
        const a = (i * 2 * Math.PI) / teeth;
        const x1 = Math.cos(a) * (radius - 8);
        const y1 = Math.sin(a) * (radius - 8);
        const x2 = Math.cos(a) * (radius + 10);
        const y2 = Math.sin(a) * (radius + 10);
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
      ctx.strokeStyle = '#CC5833';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Double Helix sine waves inside
      ctx.restore();

      ctx.beginPath();
      ctx.strokeStyle = '#2E4036';
      ctx.lineWidth = 2;
      for (let x = 20; x < canvas.width - 20; x += 4) {
        const y = cy + Math.sin(x * 0.04 + angle * 3) * 35;
        if (x === 20) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = '#CC5833';
      ctx.lineWidth = 2;
      for (let x = 20; x < canvas.width - 20; x += 4) {
        const y = cy - Math.sin(x * 0.04 + angle * 3) * 35;
        if (x === 20) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Connect helix strands
      for (let x = 30; x < canvas.width - 30; x += 30) {
        const y1 = cy + Math.sin(x * 0.04 + angle * 3) * 35;
        const y2 = cy - Math.sin(x * 0.04 + angle * 3) * 35;
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(46, 64, 54, 0.3)';
        ctx.lineWidth = 1;
        ctx.moveTo(x, y1);
        ctx.lineTo(x, y2);
        ctx.stroke();
      }

      angle += 0.02;
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // --- Animation 2: Laser Grid Scanner Canvas ---
  const canvas2Ref = useRef(null);
  useEffect(() => {
    const canvas = canvas2Ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let scanY = 0;
    let direction = 1;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      // Grid background
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1;
      const step = 25;
      for (let x = 0; x < w; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Laser scanning beam
      ctx.beginPath();
      const grad = ctx.createLinearGradient(0, scanY - 25, 0, scanY + 5);
      grad.addColorStop(0, 'rgba(204, 88, 51, 0)');
      grad.addColorStop(0.8, 'rgba(204, 88, 51, 0.4)');
      grad.addColorStop(1, '#CC5833');
      ctx.fillStyle = grad;
      ctx.fillRect(0, scanY - 25, w, 25);

      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(w, scanY);
      ctx.strokeStyle = '#CC5833';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      // Targets / Nodes
      const targets = [
        { x: 70, y: 60, label: "NORMA D.351" },
        { x: 220, y: 140, label: "EPP VÁLIDO" },
        { x: 140, y: 200, label: "PAT MEDIDO" }
      ];

      targets.forEach((t) => {
        const dist = Math.abs(t.y - scanY);
        const active = dist < 20;

        ctx.beginPath();
        ctx.arc(t.x, t.y, active ? 7 : 4, 0, Math.PI * 2);
        ctx.fillStyle = active ? '#CC5833' : 'rgba(255,255,255,0.4)';
        ctx.fill();

        if (active) {
          ctx.font = '10px JetBrains Mono';
          ctx.fillStyle = '#CC5833';
          ctx.fillText(t.label, t.x + 12, t.y + 3);
        }
      });

      scanY += 1.8 * direction;
      if (scanY > h - 10 || scanY < 10) direction *= -1;

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // --- Animation 3: Waveform Electrocardiogram Audio Spectrum Canvas ---
  const canvas3Ref = useRef(null);
  useEffect(() => {
    const canvas = canvas3Ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      const cy = h / 2;

      // Base ECG line
      ctx.beginPath();
      ctx.strokeStyle = '#2E4036';
      ctx.lineWidth = 2.5;

      for (let x = 0; x < w; x += 2) {
        let y = cy;
        const normalizedX = (x + phase) % w;

        // Simulate ECG peak pattern every 150px
        const mod = normalizedX % 150;
        if (mod > 60 && mod < 65) {
          y -= 15;
        } else if (mod >= 65 && mod < 75) {
          y += 45;
        } else if (mod >= 75 && mod < 85) {
          y -= 65;
        } else if (mod >= 85 && mod < 95) {
          y += 20;
        } else {
          y += Math.sin(x * 0.08 + phase * 0.1) * 4;
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Glow effect overlay line
      ctx.beginPath();
      ctx.strokeStyle = '#CC5833';
      ctx.lineWidth = 1.5;
      for (let x = 0; x < w; x += 3) {
        const normalizedX = (x + phase) % w;
        const mod = normalizedX % 150;
        let y = cy;
        if (mod > 75 && mod < 85) {
          y -= 65;
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#CC5833';
          ctx.fill();
        }
      }

      phase += 3;
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // --- ScrollTrigger Stacked Card Stacking Effect ---
  useEffect(() => {
    const cards = [card1Ref.current, card2Ref.current, card3Ref.current];

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; // Last card doesn't scale under another

        const nextCard = cards[index + 1];

        ScrollTrigger.create({
          trigger: nextCard,
          start: 'top 85%',
          end: 'top 20%',
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = 1 - progress * 0.1; // scale to 0.9
            const blur = progress * 20; // blur to 20px
            const opacity = 1 - progress * 0.5; // opacity to 0.5

            gsap.to(card, {
              scale: scale,
              filter: `blur(${blur}px)`,
              opacity: opacity,
              duration: 0.1,
              overwrite: 'auto'
            });
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="archivo" ref={containerRef} className="py-24 px-4 sm:px-6 md:px-12 bg-[#F2F0E9] max-w-7xl mx-auto space-y-20">
      
      {/* Section Title */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2E4036]/10 text-[#2E4036] text-xs font-telemetry uppercase tracking-widest">
          <Layers className="w-3.5 h-3.5 text-[#CC5833]" /> Sección Archivo • Tarjetas Apiladas
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#2E4036] font-sans">
          Protocolos Ocupacionales & Normativos.
        </h2>
        <p className="text-sm sm:text-base text-[#1A1A1A]/70">
          Tres vectores estratégicos de intervención para blindar integralmente tus centros de trabajo.
        </p>
      </div>

      {/* Stacked Cards Container */}
      <div className="space-y-12">
        
        {/* CARD 1 */}
        <div
          ref={card1Ref}
          className="sticky top-24 w-full rounded-[2.5rem] bg-[#2E4036] text-white p-8 md:p-14 border border-white/10 shadow-2xl transition-all duration-300 min-h-[520px] flex flex-col justify-between overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white font-telemetry text-xs uppercase tracking-widest border border-white/15">
                  STACK 01 / HIGIENE & ERGONOMÍA
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#CC5833]" />
              </div>

              <h3 className="text-3xl sm:text-5xl font-extrabold font-sans text-[#F2F0E9] leading-tight">
                Estudios de Contaminantes & Ergonomía Industrial
              </h3>

              <p className="text-sm sm:text-base text-[#F2F0E9]/80 leading-relaxed">
                Evaluación integral de puestos de trabajo conforme a la Res. SRT 886/15 y mediciones de contaminantes químicos/físicos en suspensiones mecánicas y áreas de soldadura.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-telemetry">
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white">
                  ✓ Res. SRT 886/15
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white">
                  ✓ Mapeo Iluminación Protocolo 84/12
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white">
                  ✓ Evaluación Ergónoma ISO
                </span>
              </div>
            </div>

            {/* Interactive Canvas 1: Gear & Double Helix */}
            <div className="bg-[#1f2c25] border border-white/15 rounded-3xl p-6 flex flex-col items-center justify-center relative shadow-inner">
              <div className="text-xs font-telemetry uppercase text-white/50 mb-4 w-full flex items-center justify-between">
                <span>CANVAS 01: CINEMÁTICA ERGÓNOMA</span>
                <Disc className="w-4 h-4 text-[#CC5833] animate-spin" />
              </div>
              <canvas ref={canvas1Ref} width={300} height={200} className="w-full max-w-[300px] h-[200px]" />
              <div className="mt-4 text-[11px] font-telemetry text-emerald-400 w-full text-center">
                SIMULACIÓN DE ENGRANAMIENTO Y ESTRUCTURA ÓSEA
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/15 flex items-center justify-between text-xs font-telemetry text-white/60">
            <span>CONSULTORÍA: ARIEL GOMEZ</span>
            <button onClick={onOpenBooking} className="text-[#CC5833] hover:underline font-bold uppercase">
              Agendar Protocolo 01 →
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div
          ref={card2Ref}
          className="sticky top-28 w-full rounded-[2.5rem] bg-[#1A1A1A] text-white p-8 md:p-14 border border-white/10 shadow-2xl transition-all duration-300 min-h-[520px] flex flex-col justify-between overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#CC5833]/20 text-[#CC5833] font-telemetry text-xs font-bold uppercase tracking-widest border border-[#CC5833]/30">
                  STACK 02 / INSPECCIÓN TÉCNICA
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>

              <h3 className="text-3xl sm:text-5xl font-extrabold font-sans text-white leading-tight">
                Auditorías en Obra Civil & Mantenimiento Industrial
              </h3>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Supervisión técnica directa de frentes de trabajo, inspección de andamios, trabajos en altura, espacios confinados y programas de seguridad según Decreto 911/96.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-telemetry">
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white">
                  ✓ Decreto 911/96 (Construcción)
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white">
                  ✓ Permisos de Trabajo Seguro (PTS)
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white">
                  ✓ Medición Puesta a Tierra (PAT)
                </span>
              </div>
            </div>

            {/* Interactive Canvas 2: Laser Grid Scanner */}
            <div className="bg-[#121212] border border-white/15 rounded-3xl p-6 flex flex-col items-center justify-center relative shadow-inner">
              <div className="text-xs font-telemetry uppercase text-white/50 mb-4 w-full flex items-center justify-between">
                <span>CANVAS 02: ESCÁNER LÁSER DE PLANTA</span>
                <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
              </div>
              <canvas ref={canvas2Ref} width={300} height={200} className="w-full max-w-[300px] h-[200px]" />
              <div className="mt-4 text-[11px] font-telemetry text-[#CC5833] w-full text-center">
                TELEMETRÍA DE BARRIDO DE SEGURIDAD EN TIEMPO REAL
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/15 flex items-center justify-between text-xs font-telemetry text-white/60">
            <span>NORMATIVA: D.911/96 & D.351/79</span>
            <button onClick={onOpenBooking} className="text-[#CC5833] hover:underline font-bold uppercase">
              Agendar Protocolo 02 →
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div
          ref={card3Ref}
          className="sticky top-32 w-full rounded-[2.5rem] bg-[#242424] text-white p-8 md:p-14 border border-white/15 shadow-2xl transition-all duration-300 min-h-[520px] flex flex-col justify-between overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-telemetry text-xs font-bold uppercase tracking-widest border border-emerald-500/30">
                  STACK 03 / ACÚSTICA & CONTROL VITAL
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#CC5833]" />
              </div>

              <h3 className="text-3xl sm:text-5xl font-extrabold font-sans text-[#F2F0E9] leading-tight">
                Medición de Ruido Industrial & Espectro de Sonometría
              </h3>

              <p className="text-sm sm:text-base text-[#F2F0E9]/80 leading-relaxed">
                Protocolo Res. SRT 850/12 de ruido ambiental e industrial. Mapeo de dosis de ruido continuo e impacto para evitar hipoacusia profesional y sanciones del seguro ART.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-telemetry">
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white">
                  ✓ Protocolo Res. SRT 850/12
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white">
                  ✓ Sonometría & Dosimetría
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white">
                  ✓ Capacitación Preventiva EPP
                </span>
              </div>
            </div>

            {/* Interactive Canvas 3: Waveform ECG Line */}
            <div className="bg-[#181818] border border-white/15 rounded-3xl p-6 flex flex-col items-center justify-center relative shadow-inner">
              <div className="text-xs font-telemetry uppercase text-white/50 mb-4 w-full flex items-center justify-between">
                <span>CANVAS 03: ESPECTRO DE DECIBELES (ECG)</span>
                <Activity className="w-4 h-4 text-[#CC5833]" />
              </div>
              <canvas ref={canvas3Ref} width={300} height={200} className="w-full max-w-[300px] h-[200px]" />
              <div className="mt-4 text-[11px] font-telemetry text-emerald-400 w-full text-center">
                WAVEFORM DE MEDIDA ACÚSTICA EN PLATA FORMA
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/15 flex items-center justify-between text-xs font-telemetry text-white/60">
            <span>REGISTRO OFICIAL SRT</span>
            <button onClick={onOpenBooking} className="text-[#CC5833] hover:underline font-bold uppercase">
              Agendar Protocolo 03 →
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
