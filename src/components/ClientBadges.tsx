'use client';

import React from 'react';
import { ShieldCheck, Award, CheckCircle, Building, Hammer, Wrench } from 'lucide-react';

export const ClientBadges: React.FC = () => {
  return (
    <section className="py-12 bg-[#090B10] border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Tagline */}
        <div className="text-center mb-8">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">
            Optimizando operaciones para empresas contratistas líderes y facility services en EE.UU.
          </p>
        </div>

        {/* Featured Client Banner: Advance Contractor Group (ACG) */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-zinc-900/90 via-[#101420]/80 to-zinc-900/90 border border-violet-500/30 shadow-[0_0_30px_rgba(139,92,246,0.1)] mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-violet-600/20 border border-violet-500/40 flex items-center justify-center shrink-0">
                <Building className="w-7 h-7 text-violet-400" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Advance Contractor Group, LLC (ACG)
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    Certificado MBE (Minority Business Enterprise)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl leading-relaxed">
                  Líder en servicios integrales de mantenimiento general, reparación, remodelación y facility services para propiedades comerciales y residenciales en el mercado de los Estados Unidos.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 shrink-0 border-t md:border-t-0 md:border-l border-zinc-800 pt-4 md:pt-0 md:pl-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-violet-400 font-mono">100%</div>
                <div className="text-[11px] text-zinc-400 font-mono">Auditoría MBE</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono">99.8%</div>
                <div className="text-[11px] text-zinc-400 font-mono">SLA Adherence</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono">-40%</div>
                <div className="text-[11px] text-zinc-400 font-mono">Tiempos Muertos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Standards & Integration Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-center">
          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col items-center justify-center">
            <span className="text-xs font-mono font-bold text-zinc-300">MBE CERTIFIED</span>
            <span className="text-[10px] text-zinc-400 mt-0.5">National MSDC Compliant</span>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col items-center justify-center">
            <span className="text-xs font-mono font-bold text-zinc-300">OSHA 1926</span>
            <span className="text-[10px] text-zinc-400 mt-0.5">Safety & PPE Vision AI</span>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col items-center justify-center">
            <span className="text-xs font-mono font-bold text-zinc-300">DAVIS-BACON ACT</span>
            <span className="text-[10px] text-zinc-400 mt-0.5">Certified Payroll Ready</span>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col items-center justify-center">
            <span className="text-xs font-mono font-bold text-zinc-300">COMMERCIAL & RESI</span>
            <span className="text-[10px] text-zinc-400 mt-0.5">Facility Services Dual Engine</span>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col items-center justify-center">
            <span className="text-xs font-mono font-bold text-zinc-300">PROCORE & AUTODESK</span>
            <span className="text-[10px] text-zinc-400 mt-0.5">Direct 2-Way Sync</span>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col items-center justify-center">
            <span className="text-xs font-mono font-bold text-zinc-300">US-WIDE COVERAGE</span>
            <span className="text-[10px] text-zinc-400 mt-0.5">50 States Code Compliance</span>
          </div>
        </div>

      </div>
    </section>
  );
};
