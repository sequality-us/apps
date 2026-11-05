'use client';

import React from 'react';
import { Award, Building } from 'lucide-react';

export const ClientBadges: React.FC = () => {
  return (
    <section className="py-10 bg-[#090B10] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center mb-6">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Tecnología desarrollada por Software Enterprise Quality (SEQ)
          </p>
        </div>

        {/* Featured Enterprise Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-900/90 via-[#101420]/80 to-zinc-900/90 border border-violet-500/30 shadow-[0_0_30px_rgba(139,92,246,0.1)] mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/40 flex items-center justify-center shrink-0">
                <Building className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Software Enterprise Quality (SEQ)
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold">
                    <Award className="w-3.5 h-3.5 text-violet-400" />
                    Plataforma Enterprise
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl leading-relaxed">
                  Soluciones de software de alta calidad para la digitalización integral de obras, mantenimiento de infraestructura y operaciones en campo.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 shrink-0 border-t md:border-t-0 md:border-l border-zinc-800 pt-4 md:pt-0 md:pl-6">
              <div className="text-center">
                <div className="text-xl font-extrabold text-violet-400 font-mono">99.8%</div>
                <div className="text-[11px] text-zinc-400 font-mono">Precisión IA</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-extrabold text-cyan-400 font-mono">-40%</div>
                <div className="text-[11px] text-zinc-400 font-mono">Tiempos Muertos</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-extrabold text-emerald-400 font-mono">100%</div>
                <div className="text-[11px] text-zinc-400 font-mono">Trazabilidad</div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
          <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
            <span className="text-xs font-mono font-bold text-zinc-300">PROCORE & BIM</span>
            <span className="text-[10px] text-zinc-500 block mt-0.5">Sincronización 2-Vías</span>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
            <span className="text-xs font-mono font-bold text-zinc-300">OSHA 1926</span>
            <span className="text-[10px] text-zinc-500 block mt-0.5">Visión AI para EPP</span>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
            <span className="text-xs font-mono font-bold text-zinc-300">DAVIS-BACON</span>
            <span className="text-[10px] text-zinc-500 block mt-0.5">Nóminas Certificadas</span>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
            <span className="text-xs font-mono font-bold text-zinc-300">FACILITY SERVICES</span>
            <span className="text-[10px] text-zinc-500 block mt-0.5">Comercial y Residencial</span>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
            <span className="text-xs font-mono font-bold text-zinc-300">AUTODESK ACC</span>
            <span className="text-[10px] text-zinc-500 block mt-0.5">Integración Nativa</span>
          </div>
          <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
            <span className="text-xs font-mono font-bold text-zinc-300">AUDITORÍA TOTAL</span>
            <span className="text-[10px] text-zinc-500 block mt-0.5">Bitácoras en Tiempo Real</span>
          </div>
        </div>

      </div>
    </section>
  );
};
