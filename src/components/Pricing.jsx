import React from 'react';
import { Check, Calendar, ArrowRight, ShieldCheck, Sparkles, Zap } from 'lucide-react';

export default function Pricing({ onOpenBooking }) {
  return (
    <section id="planes" className="py-24 px-6 md:px-12 bg-[#F2F0E9] max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2E4036]/10 text-[#2E4036] text-xs font-telemetry uppercase tracking-widest">
          <Zap className="w-3.5 h-3.5 text-[#CC5833]" /> Planes de Consultoría Ocupacional
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#2E4036] font-sans">
          Inversión Estratégica en Seguridad.
        </h2>
        <p className="text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed">
          Planes adaptados al volumen operativo de tus obras, talleres metalmecánicos o plantas industriales.
        </p>
      </div>

      {/* 3 Columns Pricing Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* PLAN 1 */}
        <div className="bg-[#FAF8F3] border border-[#2E4036]/15 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-telemetry uppercase text-[#2E4036]/70 font-bold">
                PLAN 01 / DIAGNÓSTICO
              </span>
              <h3 className="text-2xl font-bold text-[#2E4036] font-sans">
                Auditoría Express & SRT
              </h3>
              <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                Evaluación inicial de cumplimiento legal para PYMEs, talleres o inicio de obra rápida.
              </p>
            </div>

            <div className="py-4 border-y border-[#2E4036]/10">
              <span className="text-3xl font-black font-telemetry text-[#2E4036]">
                Evaluación Puntual
              </span>
              <span className="text-xs text-[#1A1A1A]/60 block mt-1">
                Informe técnico auditable en 48h
              </span>
            </div>

            <ul className="space-y-3 text-xs text-[#1A1A1A]/80 font-sans">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#CC5833]" />
                <span>Relevamiento de matriz de riesgos Ley 19.587</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#CC5833]" />
                <span>Informe de condiciones y medio ambiente de trabajo</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#CC5833]" />
                <span>Verificación de EPP e indumentaria legal</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#CC5833]" />
                <span>Plano básico de rutas de evacuación</span>
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 rounded-full border border-[#2E4036] text-[#2E4036] hover:bg-[#2E4036] hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Solicitar Diagnóstico</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PLAN 2 (HIGHLIGHTED - MOSS GREEN + CLAY CTA) */}
        <div className="bg-[#2E4036] text-white border-2 border-[#CC5833] rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative transform lg:-translate-y-2">
          
          {/* Featured Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#CC5833] text-white font-telemetry text-[11px] font-bold uppercase tracking-widest rounded-full shadow-md flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> RECOMENDADO PARA EMPRESAS
          </div>

          <div className="space-y-6 pt-2">
            <div className="space-y-2">
              <span className="text-xs font-telemetry uppercase text-[#CC5833] font-bold">
                PLAN 02 / GESTIÓN INTEGRAL
              </span>
              <h3 className="text-3xl font-extrabold text-[#F2F0E9] font-sans">
                Gestión Preventiva Continua
              </h3>
              <p className="text-xs text-[#F2F0E9]/80 leading-relaxed">
                Asesoría externa fija mensual para empresas de construcción, mantenimientos u obras metalmecánicas.
              </p>
            </div>

            <div className="py-4 border-y border-white/15">
              <span className="text-4xl font-black font-telemetry text-white">
                Abono Mensual
              </span>
              <span className="text-xs text-[#F2F0E9]/70 block mt-1">
                Servicio integral de profesional matriculado HYS
              </span>
            </div>

            <ul className="space-y-3.5 text-xs text-[#F2F0E9]/90 font-sans">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#CC5833]" />
                <span className="font-semibold text-white">Visitas e inspecciones periódicas de obra/planta</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#CC5833]" />
                <span>Capacitación continua del personal y charlas de 5 min</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#CC5833]" />
                <span>Gestión directa ante aseguradoras ART y la SRT</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#CC5833]" />
                <span>Protocolo de Ruido (850/12) y Ergonomía (886/15)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#CC5833]" />
                <span>Investigación técnica de accidentes e incidentes</span>
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <button
              onClick={onOpenBooking}
              className="w-full py-4 rounded-full bg-[#CC5833] hover:bg-[#b84a28] text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserva una reunión ahora</span>
            </button>
          </div>
        </div>

        {/* PLAN 3 */}
        <div className="bg-[#FAF8F3] border border-[#2E4036]/15 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-telemetry uppercase text-[#2E4036]/70 font-bold">
                PLAN 03 / ENTERPRISE
              </span>
              <h3 className="text-2xl font-bold text-[#2E4036] font-sans">
                Consultoría Industrial Custom
              </h3>
              <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                Diseñado para grandes plantas industriales, montajes pesados y corporaciones de servicios.
              </p>
            </div>

            <div className="py-4 border-y border-[#2E4036]/10">
              <span className="text-3xl font-black font-telemetry text-[#2E4036]">
                A Medida
              </span>
              <span className="text-xs text-[#1A1A1A]/60 block mt-1">
                Auditoría integral ISO 45001 y contingencias complejas
              </span>
            </div>

            <ul className="space-y-3 text-xs text-[#1A1A1A]/80 font-sans">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#CC5833]" />
                <span>Asignación de responsable dedicado en planta</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#CC5833]" />
                <span>Certificación e implementación ISO 45001</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#CC5833]" />
                <span>Mediciones avanzadas de efluentes y contaminantes</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#CC5833]" />
                <span>Defensa técnica ante requerimientos judiciales/SRT</span>
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 rounded-full border border-[#2E4036] text-[#2E4036] hover:bg-[#2E4036] hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Consultar Enterprise</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
