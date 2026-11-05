'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  Sliders, 
  Sparkles, 
  ShieldCheck, 
  Building2, 
  ArrowRight,
  Download
} from 'lucide-react';
import { calculateOperationalSavings } from '../utils/calculator';

interface RoiCalculatorProps {
  onOpenDemo: (initialData?: { company?: string; intent?: string }) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemo }) => {
  const [activeProjects, setActiveProjects] = useState<number>(6);
  const [monthlyWorkOrders, setMonthlyWorkOrders] = useState<number>(85);
  const [propertyType, setPropertyType] = useState<'commercial' | 'residential' | 'mixed'>('commercial');
  const [avgHourlyCost, setAvgHourlyCost] = useState<number>(48);
  const [includeMbeCompliance, setIncludeMbeCompliance] = useState<boolean>(true);

  const results = calculateOperationalSavings({
    activeProjects,
    monthlyWorkOrders,
    propertyType,
    avgHourlyCost,
    includeMbeCompliance
  });

  return (
    <section id="calculator" className="py-24 bg-[#090B10] relative overflow-hidden border-t border-zinc-850">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-violet-600/15 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-400 mb-3 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
            <Calculator className="w-3.5 h-3.5" />
            <span>Calculadora de Retorno de Inversión (ROI)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calcula tu Ahorro con By SEQ
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Estima las horas de supervisión en campo y los costos por retrasos que evitarás cada mes.
          </p>
        </div>

        {/* Two-Column Calculator Card */}
        <div className="rounded-3xl bg-[#0B0D14] border border-zinc-800 shadow-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-7">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-violet-400" />
                  Obras / Proyectos Activos en Simultáneo
                </label>
                <span className="text-base font-mono font-bold text-violet-400 px-3 py-1 rounded bg-violet-950/60 border border-violet-800/60">
                  {activeProjects} obras
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                step="1"
                value={activeProjects}
                onChange={(e) => setActiveProjects(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-violet-500"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-400 mt-1">
                <span>1 obra</span>
                <span>12 medianas</span>
                <span>25+ corporativas</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  Órdenes de Trabajo Mensuales (Facility Services)
                </label>
                <span className="text-base font-mono font-bold text-cyan-400 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-800/60">
                  {monthlyWorkOrders} órdenes/mes
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="300"
                step="5"
                value={monthlyWorkOrders}
                onChange={(e) => setMonthlyWorkOrders(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-400 mt-1">
                <span>10 órdenes</span>
                <span>150 promedio</span>
                <span>300+ multi-sitio</span>
              </div>
            </div>

            {/* Property Type Selector */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Enfoque de Propiedades & Cartera
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPropertyType('commercial')}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    propertyType === 'commercial'
                      ? 'bg-violet-600/30 border-violet-500 text-white'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  Comercial
                </button>
                <button
                  type="button"
                  onClick={() => setPropertyType('residential')}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    propertyType === 'residential'
                      ? 'bg-violet-600/30 border-violet-500 text-white'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  Residencial
                </button>
                <button
                  type="button"
                  onClick={() => setPropertyType('mixed')}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                    propertyType === 'mixed'
                      ? 'bg-violet-600/30 border-violet-500 text-white'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  Mixto / Dual
                </button>
              </div>
            </div>

            {/* Hourly Rate Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-white">
                  Costo Promedio Cuadrilla / Supervisión ($ USD/hora)
                </label>
                <span className="text-sm font-mono font-bold text-zinc-200">
                  ${avgHourlyCost} / hora
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="85"
                step="1"
                value={avgHourlyCost}
                onChange={(e) => setAvgHourlyCost(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-violet-500"
              />
            </div>

            {/* MBE Toggle */}
            <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">
                    Auditoría MBE & Davis-Bacon Act
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Cálculo y nómina certificada automática para contratistas
                  </div>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeMbeCompliance}
                  onChange={(e) => setIncludeMbeCompliance(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
              </label>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#101420] to-[#0A0C13] border border-violet-500/30 p-6 sm:p-8 shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="text-xs font-mono uppercase tracking-wider text-violet-400">
                  Impacto Financiero Estimado
                </span>
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ROI PROYECTADO: {results.roiMultiplier}x
                </span>
              </div>

              {/* Big Monthly Savings */}
              <div className="my-6">
                <div className="text-xs font-mono text-zinc-400 uppercase">Ahorro Neto Mensual Estimado</div>
                <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight mt-1">
                  ${results.monthlyFinancialSavingsUSD.toLocaleString('en-US')}{' '}
                  <span className="text-lg text-emerald-400 font-normal">USD/mes</span>
                </div>
                <div className="text-xs text-zinc-400 mt-1 font-mono">
                  Equivalente a <strong className="text-white">${results.annualizedSavingsUSD.toLocaleString('en-US')} USD</strong> anualizados
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-[11px] font-mono text-zinc-400">Horas Administrativas</div>
                  <div className="text-xl font-extrabold text-violet-300 font-mono mt-0.5">
                    {results.monthlyAdminHoursSaved} hrs/mes
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">Bitácoras y reportes</div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-[11px] font-mono text-zinc-400">Cuellos Mitigados</div>
                  <div className="text-xl font-extrabold text-cyan-300 font-mono mt-0.5">
                    {results.monthlyBottlenecksPrevented} retrasos
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">Evitados con anticipación</div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-[11px] font-mono text-zinc-400">Mejora SLA Facility</div>
                  <div className="text-xl font-extrabold text-emerald-300 font-mono mt-0.5">
                    +{results.estimatedSlaImprovementPct}%
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">Tiempo de respuesta</div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                  <div className="text-[11px] font-mono text-zinc-400">Plan Recomendado</div>
                  <div className="text-sm font-bold text-amber-300 font-mono mt-1">
                    {results.estimatedPlatformTier}
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">Basado en volumen operativo</div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-zinc-800 space-y-3">
              <button
                onClick={() => onOpenDemo({ 
                  company: 'Software Enterprise Quality', 
                  intent: `ROI_${results.roiMultiplier}x_Savings_${results.monthlyFinancialSavingsUSD}` 
                })}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Solicitar Despliegue con Este Modelo de Ahorro</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-zinc-400 text-center font-mono">
                Garantía de amortización en los primeros 45 días de despliegue en obra.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
