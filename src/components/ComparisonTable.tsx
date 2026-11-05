'use client';

import React from 'react';
import { Check, X, Sparkles, Zap } from 'lucide-react';

interface ComparisonTableProps {
  onOpenDemo: (initialData?: { company?: string; intent?: string }) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ onOpenDemo }) => {
  const comparisonRows = [
    {
      feature: 'Detección de Cuellos de Botella',
      seq: 'Anticipación de 7 a 14 días con IA predictiva',
      traditional: 'Reactivo: Se detecta cuando la cuadrilla ya está parada',
      highlight: true
    },
    {
      feature: 'Bitácoras Diarias (Daily Logs)',
      seq: '100% automatizadas con visión computacional',
      traditional: '2 a 3 horas manuales diarias por supervisor',
      highlight: true
    },
    {
      feature: 'Triage de Facility Services',
      seq: 'Despacho inteligente a técnicos calificados en < 3 min',
      traditional: 'Llamadas, WhatsApp y planillas desorganizadas',
      highlight: false
    },
    {
      feature: 'Cumplimiento Normativo',
      seq: 'Nóminas certificadas y auditoría continua calculada por IA',
      traditional: 'Semanas de recolección de planillas físicas',
      highlight: true
    },
    {
      feature: 'Seguridad en Obra (OSHA)',
      seq: 'Detección visual continua de EPP y zonas de riesgo',
      traditional: 'Inspecciones esporádicas con riesgo de sanciones',
      highlight: false
    },
    {
      feature: 'Modelo de Cómputo',
      seq: 'Pods escalables bajo demanda según volumen de obras',
      traditional: 'Licencias rígidas anuales con costes de consultoría',
      highlight: false
    }
  ];

  return (
    <section className="py-24 bg-[#090B10] border-t border-zinc-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-400 mb-3 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
            <Zap className="w-3.5 h-3.5" />
            <span>Comparativa de Rendimiento</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            ¿Por Qué las Empresas Eligen By SEQ?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Reemplaza el desorden de planillas y software rígido con agentes de IA autónomos.
          </p>
        </div>

        {/* Table Box */}
        <div className="rounded-3xl bg-[#0B0D14] border border-zinc-800 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 bg-[#0E111B]">
                  <th className="py-5 px-6 text-xs font-mono font-bold uppercase text-zinc-400 w-1/3">
                    Capacidad
                  </th>
                  <th className="py-5 px-6 text-xs font-mono font-bold uppercase text-violet-400 bg-violet-950/20 border-x border-violet-500/30 w-1/3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-violet-400" />
                      <span className="font-mono text-sm">By SEQ</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 text-xs font-mono font-bold uppercase text-zinc-400 w-1/3">
                    Gestión Tradicional (Excel, WhatsApp)
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
                        <span>{row.seq}</span>
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
              ¿Listo para modernizar la gestión de tus obras con By SEQ?
            </div>
            <button
              onClick={() => onOpenDemo({ company: 'By SEQ', intent: 'migration_comparison' })}
              className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Migrar a By SEQ</span>
              <Check className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
