import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Building2, HardHat, Factory, Wrench, ArrowRight, ShieldCheck } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedDate, setSelectedDate] = useState('2026-10-01');
  const [selectedTime, setSelectedTime] = useState('10:00');
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    observaciones: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const sectors = [
    { id: 'const', name: 'Empresa de Construcción', icon: HardHat, desc: 'Obras civiles, montaje y estructuras' },
    { id: 'metal', name: 'Reparación Metalmecánica', icon: Wrench, desc: 'Talleres mecánicos, soldadura e ingeniería' },
    { id: 'maint', name: 'Mantenimiento Industrial', icon: Factory, desc: 'Plantas industriales de proceso continuo' },
    { id: 'serv', name: 'Servicios Industriales', icon: Building2, desc: 'Logística, montaje y mantenimiento externo' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedSector(null);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Container */}
      <div className="bg-[#FAF8F3] text-[#1A1A1A] border border-[#2E4036]/20 rounded-[2.5rem] max-w-2xl w-full p-8 md:p-10 shadow-2xl relative overflow-hidden font-sans">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#2E4036]/10 text-[#2E4036] hover:bg-[#CC5833] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            
            {/* Modal Header */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E4036]/10 text-[#2E4036] text-xs font-telemetry uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#CC5833]" /> Ariel Gomez • Consultoría Externa
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2E4036]">
                Reserva de Diagnóstico Técnico
              </h3>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/70">
                Paso {step} de 3: {step === 1 ? 'Selecciona tu Sector Industrial' : step === 2 ? 'Selecciona Fecha y Hora' : 'Datos de la Empresa'}
              </p>
            </div>

            {/* STEP 1: Select Sector */}
            {step === 1 && (
              <div className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sectors.map((sec) => {
                    const Icon = sec.icon;
                    const isSel = selectedSector === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => setSelectedSector(sec.id)}
                        className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                          isSel
                            ? 'bg-[#2E4036] text-white border-[#CC5833] shadow-lg scale-[1.02]'
                            : 'bg-white text-[#1A1A1A] border-[#2E4036]/15 hover:border-[#CC5833]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className={`p-2 rounded-xl ${isSel ? 'bg-[#CC5833] text-white' : 'bg-[#2E4036]/10 text-[#2E4036]'}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          {isSel && <CheckCircle2 className="w-5 h-5 text-[#CC5833]" />}
                        </div>
                        <div>
                          <div className="font-bold text-sm">{sec.name}</div>
                          <div className={`text-[11px] mt-0.5 ${isSel ? 'text-white/80' : 'text-gray-500'}`}>
                            {sec.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    disabled={!selectedSector}
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-full bg-[#CC5833] disabled:opacity-50 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#b84a28] transition-colors cursor-pointer"
                  >
                    <span>Siguiente</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Pick Date & Time */}
            {step === 2 && (
              <div className="space-y-6 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-telemetry font-bold text-[#2E4036] uppercase block">
                      Fecha de Diagnóstico
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full p-3 rounded-xl bg-white border border-[#2E4036]/20 font-telemetry text-sm focus:outline-none focus:border-[#CC5833]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-telemetry font-bold text-[#2E4036] uppercase block">
                      Horario Disponible
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full p-3 rounded-xl bg-white border border-[#2E4036]/20 font-telemetry text-sm focus:outline-none focus:border-[#CC5833]"
                    >
                      <option value="09:00">09:00 HS - Turno Mañana</option>
                      <option value="11:30">11:30 HS - Turno Mañana</option>
                      <option value="14:00">14:00 HS - Turno Tarde</option>
                      <option value="16:30">16:30 HS - Turno Tarde</option>
                    </select>
                  </div>
                </div>

                <div className="bg-[#2E4036]/10 p-4 rounded-xl text-xs font-telemetry space-y-1">
                  <div className="font-bold text-[#2E4036]">MODALIDAD DE REUNIÓN:</div>
                  <div className="text-gray-700">Videoconferencia Técnica o Visita Técnica Presencial en Planta/Obra.</div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 rounded-full border border-[#2E4036] text-[#2E4036] font-semibold text-xs uppercase tracking-wider"
                  >
                    Atrás
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-6 py-3 rounded-full bg-[#CC5833] text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#b84a28] transition-colors"
                  >
                    <span>Siguiente</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Company Details Form */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-telemetry uppercase text-gray-600 block">Nombre Completo</label>
                    <input
                      required
                      type="text"
                      placeholder="Ej. Ing. Carlos Martinez"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-white border border-[#2E4036]/20 text-xs focus:outline-none focus:border-[#CC5833]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-telemetry uppercase text-gray-600 block">Empresa / Razón Social</label>
                    <input
                      required
                      type="text"
                      placeholder="Ej. Metalúrgica Gomez S.A."
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-white border border-[#2E4036]/20 text-xs focus:outline-none focus:border-[#CC5833]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-telemetry uppercase text-gray-600 block">Correo Electrónico Corporativo</label>
                    <input
                      required
                      type="email"
                      placeholder="carlos@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-white border border-[#2E4036]/20 text-xs focus:outline-none focus:border-[#CC5833]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-telemetry uppercase text-gray-600 block">Teléfono / WhatsApp Directo</label>
                    <input
                      required
                      type="tel"
                      placeholder="+54 9 11 ..."
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-white border border-[#2E4036]/20 text-xs focus:outline-none focus:border-[#CC5833]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-telemetry uppercase text-gray-600 block">Requerimiento Específico (Opcional)</label>
                  <textarea
                    rows={2}
                    placeholder="Ej. Inspección urgente de SRT en obra civil / Estudio de ruido..."
                    value={formData.observaciones}
                    onChange={(e) => setFormData({ ...formData, observaciones: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-white border border-[#2E4036]/20 text-xs focus:outline-none focus:border-[#CC5833]"
                  />
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-full border border-[#2E4036] text-[#2E4036] font-semibold text-xs uppercase tracking-wider"
                  >
                    Atrás
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-[#CC5833] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#b84a28] transition-colors shadow-lg cursor-pointer"
                  >
                    Confirmar Reserva de Reunión
                  </button>
                </div>
              </form>
            )}

          </div>
        ) : (
          /* Confirmation State */
          <div className="py-12 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-extrabold text-[#2E4036]">
                ¡Reunión Confirmada!
              </h3>
              <p className="text-sm text-[#1A1A1A]/80 max-w-md mx-auto">
                Hemos registrado la reserva para <strong className="text-[#CC5833]">{formData.empresa || 'su empresa'}</strong> el día <span className="font-telemetry font-bold">{selectedDate}</span> a las <span className="font-telemetry font-bold">{selectedTime} hs</span>.
              </p>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-[#2E4036]/15 max-w-md mx-auto text-xs text-left font-telemetry space-y-1">
              <div>REGISTRO DE CONTROL: AUDIT-AG-{Math.floor(100000 + Math.random() * 900000)}</div>
              <div>CONSULTOR: ING. ARIEL GOMEZ</div>
              <div>ESTADO: CONFIRMADO EN AGENDA</div>
            </div>
            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-full bg-[#2E4036] text-white text-xs uppercase font-bold tracking-wider"
            >
              Cerrar y Volver a la Web
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
