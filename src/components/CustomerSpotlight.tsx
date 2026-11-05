'use client';

import React from 'react';
import { 
  Building2, 
  Award, 
  CheckCircle2, 
  Quote, 
  ArrowRight, 
  ShieldCheck, 
  HardHat, 
  Wrench, 
  TrendingUp 
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
    <section id="case-study" className="py-24 bg-[#08090E] relative overflow-hidden border-t border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-3 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Caso de Éxito · Contratistas Líderes en EE.UU.</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Cómo Advance Contractor Group (ACG) Escala con Agentes de IA
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            De la supervisión reactiva en campo a la anticipación algorítmica de cuellos de botella en obras comerciales, residenciales y facility services.
          </p>
        </div>

        {/* Featured Case Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0E121B] via-[#0B0D14] to-[#090B10] border border-zinc-750 shadow-2xl p-6 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/40">
                  CASO REAL DE OPERACIÓN
                </span>
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Minority Business Enterprise (MBE)
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Advance Contractor Group, LLC (ACG)
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                Como contratista certificado MBE en el mercado de Estados Unidos, ACG ofrece servicios integrales de <strong className="text-white">mantenimiento general, reparación, remodelación y facility services</strong> tanto para propiedades comerciales como residenciales. Con múltiples proyectos simultáneos, coordinar cuadrillas, verificar avances y evitar cuellos de botella de materiales era el mayor reto operativo.
              </p>

              {/* Quote Block */}
              <div className="p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800 relative">
                <Quote className="w-8 h-8 text-violet-500/30 absolute top-3 right-3" />
                <p className="text-sm text-zinc-200 italic leading-relaxed">
                  "ConstrucPod AI transformó nuestras mañanas de obra. En lugar de pasar 3 horas llamando a proveedores y redactando bitácoras de campo, los agentes autónomos nos alertan desde las 07:00 AM sobre cualquier interferencia o retraso de suministro. Además, la auditoría MBE para contratos públicos se genera en 1 clic."
                </p>
                <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="font-bold text-white block">Dirección de Operaciones & Proyectos</span>
                    <span className="text-zinc-400">Advance Contractor Group, LLC</span>
                  </div>
                  <span className="text-violet-400">Operaciones en EE.UU.</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenDemo({ company: 'Advance Contractor Group', intent: 'case_study_demo' })}
                  className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Ver Implementación para Mi Empresa</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenReportModal('Advance Contractor Group - Proyecto Modelo')}
                  className="px-5 py-3 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                >
                  Descargar Reporte Modelo ACG
                </button>
              </div>

            </div>

            {/* Right Metrics Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#08090E] border border-zinc-800 flex flex-col justify-between">
                <div className="text-xs font-mono text-zinc-400 uppercase">Resolución de Retrasos</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-violet-400 font-mono my-2">-38%</div>
                <div className="text-[11px] text-zinc-400">Anticipación de demoras de materiales y oficios</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#08090E] border border-zinc-800 flex flex-col justify-between">
                <div className="text-xs font-mono text-zinc-400 uppercase">Tiempo Diario Ahorrado</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono my-2">2.5 hrs</div>
                <div className="text-[11px] text-zinc-400">Por superintendente en papeleo y reportes</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#08090E] border border-zinc-800 flex flex-col justify-between">
                <div className="text-xs font-mono text-zinc-400 uppercase">Auditoría MBE</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono my-2">100%</div>
                <div className="text-[11px] text-zinc-400">Conformidad Davis-Bacon y cuotas federales</div>
              </div>

              <div className="p-5 rounded-2xl bg-[#08090E] border border-zinc-800 flex flex-col justify-between">
                <div className="text-xs font-mono text-zinc-400 uppercase">SLA Facility Services</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono my-2">99.8%</div>
                <div className="text-[11px] text-zinc-400">Cumplimiento en emergencias comerciales</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
