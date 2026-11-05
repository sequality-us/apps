'use client';

import React from 'react';
import { Zap, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';

interface CtaBannerProps {
  onOpenDemo: (initialData?: { company?: string; intent?: string }) => void;
  onScrollTo: (sectionId: string) => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenDemo, onScrollTo }) => {
  return (
    <section className="py-16 bg-[#08090E] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-violet-600/20 to-cyan-500/15 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="rounded-3xl bg-gradient-to-br from-[#10131F] via-[#0C0E16] to-[#0A0C13] border border-violet-500/30 p-8 sm:p-12 shadow-2xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-mono font-bold text-violet-300 mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SOFTWARE ENTERPRISE QUALITY (SEQ)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Optimiza la Operación de tus Obras Hoy
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Elimina retrasos, sobrecostos y papeleo manual con los agentes de IA autónomos de By SEQ.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenDemo({ company: 'By SEQ', intent: 'cta_primary' })}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <Zap className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
              <span>Solicitar Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onScrollTo('console')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-850 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-violet-400" />
              <span>Ver Consola</span>
            </button>
          </div>

          <div className="mt-8 pt-5 border-t border-zinc-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Garantía de reembolso en 30 días
            </span>
            <span>·</span>
            <span>Sin hardware propietario</span>
            <span>·</span>
            <span>Configuración en &lt; 24 horas</span>
          </div>

        </div>
      </div>
    </section>
  );
};
