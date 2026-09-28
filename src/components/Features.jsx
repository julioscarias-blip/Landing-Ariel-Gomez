import React, { useState, useEffect, useRef } from 'react';
import { Shield, Activity, Terminal, MousePointer, CheckCircle, FileSpreadsheet, AlertTriangle, Play, Sparkles } from 'lucide-react';
import gsap from 'gsap';

export default function Features() {
  // --- Feature 1 State & Refs (Baraja Diagnóstica) ---
  const [deckIndex, setDeckIndex] = useState(0);
  const cardsRef = useRef([]);

  const deckData = [
    {
      title: "Optimización de Riesgo Laboral",
      badge: "Prevención Activa",
      metric: "-42%",
      subtext: "Disminución comprobada en índice de siniestralidad para empresas de construcción y talleres metalmecánicos.",
      icon: Shield,
      tag: "Ley 19.587"
    },
    {
      title: "Auditoría & Cumplimiento SRT",
      badge: "Cero Sanciones",
      metric: "100%",
      subtext: "Verificación de matrices de riesgo, mapas de evacuación y registros normativos ante la Superintendencia.",
      icon: FileSpreadsheet,
      tag: "Resolución SRT"
    },
    {
      title: "Higienes Industriales Especializadas",
      badge: "Telemetría Ambiental",
      metric: "ISO 45001",
      subtext: "Medición de ruido de impacto, iluminación, vibraciones y muestreo de material particulado.",
      icon: Activity,
      tag: "Protocolo 850/12"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDeckIndex((prev) => (prev + 1) % deckData.length);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  // --- Feature 2 State (Telemetría en Vivo - Terminal) ---
  const terminalMessages = [
    "Analizando matriz de riesgo en nave industrial metalmecánica...",
    "Verificando protocolo de ruidos en planta (Res. SRT 850/12)...",
    "Optimizando plan de evacuación e incendios para obra activa...",
    "Generando dictamen técnico de ergonomía (Res. SRT 886/15)...",
    "Auditando tableros eléctricos y puesta a tierra (PAT)...",
    "Validando entrega y uso de EPP certificados..."
  ];
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const currentFullMsg = terminalMessages[currentMsgIndex];

    if (isTyping) {
      if (typedText.length < currentFullMsg.length) {
        timeout = setTimeout(() => {
          setTypedText(currentFullMsg.slice(0, typedText.length + 1));
        }, 35);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -2));
        }, 20);
      } else {
        setIsTyping(true);
        setCurrentMsgIndex((prev) => (prev + 1) % terminalMessages.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isTyping, currentMsgIndex]);

  // --- Feature 3 State & Automation (Agenda / Protocolo Cursor) ---
  const cursorRef = useRef(null);
  const [activeDay, setActiveDay] = useState(null);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const days = [
    { label: "L", full: "Lunes", slot: "Inspección de Obra" },
    { label: "M", full: "Martes", slot: "Estudio de Ruido" },
    { label: "X", full: "Miércoles", slot: "Capacitación EPP" },
    { label: "J", full: "Jueves", slot: "Auditoría ART/SRT" },
    { label: "V", full: "Viernes", slot: "Medición Ergonomía" },
    { label: "S", full: "Sábado", slot: "Mantenimiento Preventivo" },
    { label: "D", full: "Domingo", slot: "Guardia Opcional" }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const runCursorAnimation = () => {
        const tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 1,
          onRepeat: () => {
            setActiveDay(null);
            setSavedSuccess(false);
          }
        });

        // 1. Cursor enters from bottom-right
        tl.fromTo(
          cursorRef.current,
          { x: 260, y: 180, opacity: 0, scale: 1 },
          { x: 130, y: 35, opacity: 1, duration: 1.2, ease: "power2.inOut" }
        )
        // 2. Click effect on Thursday (Jueves - Index 3)
        .to(cursorRef.current, { scale: 0.8, duration: 0.15, ease: "power1.in" })
        .call(() => setActiveDay(3))
        .to(cursorRef.current, { scale: 1, duration: 0.2, ease: "power1.out" })
        // 3. Move cursor to "Guardar Protocolo" button
        .to(cursorRef.current, { x: 190, y: 130, duration: 1.1, ease: "power2.inOut", delay: 0.4 })
        // 4. Click Save
        .to(cursorRef.current, { scale: 0.8, duration: 0.15, ease: "power1.in" })
        .call(() => setSavedSuccess(true))
        .to(cursorRef.current, { scale: 1, duration: 0.2, ease: "power1.out" })
        // 5. Fade out and reset
        .to(cursorRef.current, { opacity: 0, duration: 0.6, delay: 0.8 });
      };

      runCursorAnimation();
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="servicios" className="py-24 px-6 md:px-12 bg-[#F2F0E9] text-[#1A1A1A] max-w-7xl mx-auto space-y-16">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#2E4036]/15">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E4036]/10 text-[#2E4036] text-xs font-telemetry uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#CC5833]" /> Micro-Paneles de Instrumentación
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#2E4036] font-sans">
            Instrumentos, no plantillas.
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#1A1A1A]/70 max-w-md">
          Cada proceso de higiene y seguridad laboral se ejecuta como un sistema interactivo con control en tiempo real y trazabilidad técnica.
        </p>
      </div>

      {/* Grid of Micro-Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- FEATURE 1: Baraja Diagnóstica --- */}
        <div className="bg-[#FAF8F3] border border-[#2E4036]/15 rounded-[2.5rem] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden min-h-[460px]">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-telemetry uppercase tracking-wider text-[#2E4036]/70">
                01 / Baraja Diagnóstica
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#CC5833]" />
            </div>
            <h3 className="text-2xl font-bold text-[#2E4036] mb-2 font-sans">
              Diagnóstico Dinámico
            </h3>
            <p className="text-xs text-[#1A1A1A]/70 leading-relaxed mb-6">
              Tarjetas operativas de evaluación continua para control preventivo en planta y obra.
            </p>
          </div>

          {/* Stacked Cards Area */}
          <div className="relative h-64 w-full flex items-center justify-center">
            {deckData.map((item, idx) => {
              // Calculate relative order in 3-card stack
              const position = (idx - deckIndex + deckData.length) % deckData.length;
              const isTop = position === 0;
              const isMiddle = position === 1;
              const isBottom = position === 2;

              let translateY = "translate-y-0";
              let scale = "scale-100";
              let zIndex = "z-30";
              let opacity = "opacity-100";

              if (isMiddle) {
                translateY = "translate-y-4";
                scale = "scale-95";
                zIndex = "z-20";
                opacity = "opacity-85";
              } else if (isBottom) {
                translateY = "translate-y-8";
                scale = "scale-90";
                zIndex = "z-10";
                opacity = "opacity-70";
              }

              const Icon = item.icon;

              return (
                <div
                  key={idx}
                  className={`absolute top-0 inset-x-0 bg-white border border-[#2E4036]/15 rounded-2xl p-5 shadow-lg transition-all duration-700 ease-spring ${translateY} ${scale} ${zIndex} ${opacity}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[#2E4036]/10 text-[#2E4036] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#CC5833]/10 text-[#CC5833] font-telemetry text-[10px] font-bold uppercase">
                      {item.badge}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h4 className="text-base font-bold text-[#1A1A1A] font-sans">
                      {item.title}
                    </h4>
                    <span className="text-xl font-extrabold text-[#CC5833] font-telemetry">
                      {item.metric}
                    </span>
                  </div>
                  <p className="text-xs text-[#1A1A1A]/75 leading-snug">
                    {item.subtext}
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] font-telemetry text-gray-500">
                    <span>REGISTRO: {item.tag}</span>
                    <span className="text-[#2E4036] font-semibold">ESTADO: ACTIVO</span>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-4 flex justify-center gap-1.5">
            {deckData.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === deckIndex ? "w-6 bg-[#CC5833]" : "w-1.5 bg-[#2E4036]/20"
                }`}
              />
            ))}
          </div>
        </div>

        {/* --- FEATURE 2: Telemetría en Vivo --- */}
        <div id="telemetria" className="bg-[#1A1A1A] text-white border border-white/10 rounded-[2.5rem] p-8 shadow-xl flex flex-col justify-between min-h-[460px] relative">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-telemetry uppercase tracking-wider text-emerald-400">
                  02 / Telemetría Ocupacional
                </span>
              </div>
              <Terminal className="w-4 h-4 text-white/50" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-sans">
              Monitoreo en Tiempo Real
            </h3>
            <p className="text-xs text-white/70 leading-relaxed mb-6">
              Consola de ejecución técnica continua. Transmisión interactiva de estados normativos y auditorías.
            </p>
          </div>

          {/* Terminal Box */}
          <div className="bg-[#121212] border border-white/15 rounded-2xl p-5 font-telemetry text-xs space-y-4 shadow-inner min-h-[200px] flex flex-col justify-between">
            {/* Header controls */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px] text-white/50">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span>sys_control_ariel_gomez.sh</span>
            </div>

            {/* Terminal Body */}
            <div className="space-y-2 text-emerald-400 font-mono text-[12px] leading-relaxed">
              <div className="text-white/40 text-[10px]">
                [SISTEMA ARIEL GOMEZ v4.2 - ESTADO OPERATIVO 100%]
              </div>
              <div className="flex items-start gap-1 text-white/90">
                <span className="text-[#CC5833] font-bold">{">"}</span>
                <span>{typedText}</span>
                <span className="w-2 h-4 bg-[#CC5833] inline-block animate-pulse ml-0.5" />
              </div>
            </div>

            {/* Bottom Status */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50">
              <span className="flex items-center gap-1">
                <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" /> PROCESANDO MATRIZ
              </span>
              <span className="text-emerald-400">PING: 12ms</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-white/60 font-telemetry">
            <span>NORMATIVA: LEY 19.587</span>
            <span>AUTORIZACIÓN SRT: VÁLIDA</span>
          </div>
        </div>

        {/* --- FEATURE 3: Agenda / Protocolo (Cursor Automático) --- */}
        <div className="bg-[#FAF8F3] border border-[#2E4036]/15 rounded-[2.5rem] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[460px] relative overflow-hidden">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-telemetry uppercase tracking-wider text-[#2E4036]/70">
                03 / Protocolo de Agenda
              </span>
              <MousePointer className="w-4 h-4 text-[#CC5833]" />
            </div>
            <h3 className="text-2xl font-bold text-[#2E4036] mb-2 font-sans">
              Asignación Automática
            </h3>
            <p className="text-xs text-[#1A1A1A]/70 leading-relaxed mb-6">
              Programación de inspecciones en planta sin fricción administrativa.
            </p>
          </div>

          {/* Weekly Interactive Grid Box */}
          <div className="relative bg-white border border-[#2E4036]/15 rounded-2xl p-5 shadow-sm space-y-4 select-none">
            
            {/* Days Header Grid */}
            <div className="grid grid-cols-7 gap-1">
              {days.map((day, idx) => (
                <div
                  key={idx}
                  className={`py-2 text-center rounded-xl text-xs font-telemetry font-bold transition-all duration-300 ${
                    activeDay === idx
                      ? "bg-[#CC5833] text-white shadow-md scale-105"
                      : "bg-[#F2F0E9] text-[#1A1A1A]/70 hover:bg-[#2E4036]/10"
                  }`}
                >
                  {day.label}
                </div>
              ))}
            </div>

            {/* Selected Slot Information */}
            <div className="p-3 rounded-xl bg-[#F2F0E9]/80 border border-[#2E4036]/10 text-xs space-y-1">
              <div className="text-[10px] uppercase font-telemetry text-gray-500">
                FECHA SELECCIONADA: {activeDay !== null ? days[activeDay].full : "esperando..."}
              </div>
              <div className="font-bold text-[#2E4036]">
                {activeDay !== null ? days[activeDay].slot : "Selecciona una jornada..."}
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-1">
              <button
                className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider font-sans transition-all duration-300 flex items-center justify-center gap-2 ${
                  savedSuccess
                    ? "bg-emerald-600 text-white"
                    : "bg-[#2E4036] text-white hover:bg-[#1f2c25]"
                }`}
              >
                {savedSuccess ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-white" />
                    <span>Protocolo Confirmado</span>
                  </>
                ) : (
                  <span>Guardar Protocolo</span>
                )}
              </button>
            </div>

            {/* Automated Animated SVG Cursor */}
            <div
              ref={cursorRef}
              className="absolute top-0 left-0 pointer-events-none z-40 text-[#CC5833] filter drop-shadow-md"
              style={{ width: "24px", height: "24px" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>

          </div>

          <div className="mt-4 flex justify-between text-[11px] font-telemetry text-gray-500">
            <span>SISTEMA AUDITABLE</span>
            <span className="text-[#CC5833] font-semibold">RESPUESTA EN 24H</span>
          </div>
        </div>

      </div>

    </section>
  );
}
