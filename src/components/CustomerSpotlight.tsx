'use client';

import React from 'react';
import { 
  Award, 
  Quote, 
  ArrowRight, 
  ShieldCheck
} from 'lucide-react';

interface CustomerSpotlightProps {
  onOpenDemo: (initialData?: { company?: string; intent?: string }) => void;
  onOpenReportModal: (projectName: string) => void;
}

export const CustomerSpotlight: React.FC<CustomerSpotlightProps> = ({ 
  onOpenDemo, 
  onOpenReportModal 
}) => {
  return (
    <section id="case-study" className="py-16 bg-[#08090E] relative overflow-hidden border-t border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Caso de Éxito · Implementación SEQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Escalabilidad Operativa con Agentes de IA
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            De la gestión reactiva en campo a la anticipación algorítmica de retrasos y costos.
          </p>
        </div>

        {/* Featured Case Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0E121B] via-[#0B0D14] to-[#090B10] border border-zinc-750 shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/40">
                  CASO REAL
                </span>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Operación Enterprise
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Software Enterprise Quality (SEQ) en Campo
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                En proyectos simultáneos de remodelación, climatización HVAC y mantenimiento de instalaciones, coordinar cuadrillas y evitar demoras solía consumir horas de gestión manual. La implementación de By SEQ automatizó las bitácoras diarias y la detección de interferencias.
              </p>

              {/* Quote Block */}
              <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 relative">
                <Quote className="w-6 h-6 text-violet-500/30 absolute top-3 right-3" />
                <p className="text-xs sm:text-sm text-zinc-200 italic leading-relaxed">
                  "By SEQ transformó nuestras mañanas de obra. En lugar de horas al teléfono coordinando proveedores y llenando bitácoras, los agentes nos alertan temprano sobre cualquier conflicto de suministros o interferencia."
                </p>
                <div className="mt-3 pt-2 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-white">Dirección de Operaciones</span>
                  <span className="text-violet-400">Implementación SEQ</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => onOpenDemo({ company: 'Software Enterprise Quality', intent: 'case_study_demo' })}
                  className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Solicitar Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenReportModal('Proyecto Modelo SEQ')}
                  className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-750 border border-zinc-700 text-zinc-200 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                >
                  Ver Reporte Modelo
                </button>
              </div>

            </div>

            {/* Right Metrics Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#08090E] border border-zinc-800">
                <div className="text-[11px] font-mono text-zinc-400 uppercase">Menos Retrasos</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-violet-400 font-mono my-1">-38%</div>
                <div className="text-[11px] text-zinc-400">Anticipación predictiva</div>
              </div>

              <div className="p-4 rounded-xl bg-[#08090E] border border-zinc-800">
                <div className="text-[11px] font-mono text-zinc-400 uppercase">Ahorro Diario</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono my-1">2.5 h</div>
                <div className="text-[11px] text-zinc-400">Menos papeleo por supervisor</div>
              </div>

              <div className="p-4 rounded-xl bg-[#08090E] border border-zinc-800">
                <div className="text-[11px] font-mono text-zinc-400 uppercase">Cumplimiento</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono my-1">100%</div>
                <div className="text-[11px] text-zinc-400">Auditoría continua de obra</div>
              </div>

              <div className="p-4 rounded-xl bg-[#08090E] border border-zinc-800">
                <div className="text-[11px] font-mono text-zinc-400 uppercase">SLA Cumplido</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono my-1">99.8%</div>
                <div className="text-[11px] text-zinc-400">Respuesta en facility services</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
