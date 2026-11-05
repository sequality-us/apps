'use client';

import React from 'react';
import { Check, X, Sparkles, Zap, ShieldCheck } from 'lucide-react';

interface ComparisonTableProps {
  onOpenDemo: (initialData?: { company?: string; intent?: string }) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onOpenDemo }) => {
  const comparisonRows = [
    {
      feature: 'Detección de Cuellos de Botella',
      construcpod: 'Anticipación de 7 a 14 días con IA predictiva (materiales, oficios y permisos)',
      traditional: 'Reactivo: Se descubre cuando la cuadrilla ya está parada en la obra',
      highlight: true
    },
    {
      feature: 'Elaboración de Bitácoras Diarias (Daily Logs)',
      construcpod: '100% automatizado con visión computacional a las 17:00 PM',
      traditional: '2 a 3 horas manuales al día por superintendente o jefe de obra',
      highlight: true
    },
    {
      feature: 'Triage de Facility Services & Mantenimiento',
      construcpod: 'Despacho inteligente a técnicos por GPS y especialidad en < 3 minutos',
      traditional: 'Cadena de llamadas, mensajes de WhatsApp y tickets desorganizados',
      highlight: false
    },
    {
      feature: 'Cumplimiento MBE & Davis-Bacon Act',
      construcpod: 'Nóminas certificadas y cuotas MBE calculadas automáticamente para EE.UU.',
      traditional: 'Semanas de recolección de planillas de subcontratistas en carpetas físicas',
      highlight: true
    },
    {
      feature: 'Auditoría de Seguridad OSHA y EPP',
      construcpod: 'Detección visual continua de cascos, chalecos y zonas de riesgo',
      traditional: 'Inspecciones esporádicas con riesgo constante de multas severas',
      highlight: false
    },
    {
      feature: 'Modelo de Precios & Flexibilidad',
      construcpod: 'Pods escalables bajo demanda según volumen de obras activas',
      traditional: 'Licencias rígidas anuales de $45,000+ con costes ocultos de consultoría',
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-[#090B10] border-t border-zinc-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-400 mb-3 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
            <Zap className="w-3.5 h-3.5" />
            <span>Comparativa de Rendimiento Operativo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            ¿Por Qué los Contratistas Modernos Eligen ConstrucPod?
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            Reemplaza hojas de cálculo fragmentadas, grupos caóticos de mensajería y software legado costoso con agentes de inteligencia artificial autónomos.
          </p>
        </div>

        {/* Table Box */}
        <div className="rounded-2xl bg-[#0B0D14] border border-zinc-800 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 bg-[#0E111B]">
                  <th className="py-4 px-6 text-xs font-mono font-bold uppercase text-zinc-400 w-1/3">
                    Capacidad Operativa
                  </th>
                  <th className="py-4 px-6 text-xs font-mono font-bold uppercase text-violet-400 bg-violet-950/20 border-x border-violet-500/30 w-1/3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-violet-400" />
                      <span>ConstrucPod AI</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-xs font-mono font-bold uppercase text-zinc-400 w-1/3">
                    Gestión Tradicional (Excel, WhatsApp, Papel)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-zinc-850/30 transition-colors">
                    <td className="py-4 px-6 font-semibold text-zinc-200">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 bg-violet-950/15 border-x border-violet-500/20 text-white font-medium">
                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span>{row.construcpod}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-zinc-400">
                      <div className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-red-400" />
                        </div>
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Banner */}
          <div className="p-6 bg-[#0E111B] border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-300 font-mono">
              ¿Listo para modernizar la gestión de tus obras con Software Enterprise Quality (SEQ)?
            </div>
            <button
              onClick={() => onOpenDemo({ company: 'Software Enterprise Quality', intent: 'migration_comparison' })}
              className="px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Migrar desde Herramientas Tradicionales</span>
              <Check className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
