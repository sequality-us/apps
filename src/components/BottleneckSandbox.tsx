'use client';

import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldAlert, 
  Cpu, 
  Clock, 
  FileCheck, 
  RefreshCcw, 
  Building2,
  DollarSign,
  TrendingUp,
  FileText
} from 'lucide-react';
import { BottleneckAlert, evaluateProjectHealth } from '../utils/calculator';

interface BottleneckSandboxProps {
  onOpenReportModal: (projectName: string) => void;
  onOpenDemo: (initialData?: { company?: string; intent?: string }) => void;
}

export const BottleneckSandbox: React.FC<BottleneckSandboxProps> = ({ 
  onOpenReportModal, 
  onOpenDemo 
}) => {
  const initialAlerts: Record<string, BottleneckAlert[]> = {
    'acg-hospital': [
      {
        id: 'btn-101',
        projectId: 'acg-hospital',
        projectName: 'ACG Hospital Wing - Sustitución HVAC & Remodelación',
        trade: 'HVAC & Ductería',
        category: 'supply',
        severity: 'critical',
        detectedTime: 'Detectado hace 28 min',
        title: 'Retraso de 9 días en Válvulas VAV del Proveedor Primario',
        impactHours: 72,
        confidenceScore: 96,
        aiRecommendation: 'Reasignar automáticamente pedido a Ferguson HVAC Supplies (Miami) con inventario local verificado.',
        resolved: false
      },
      {
        id: 'btn-102',
        projectId: 'acg-hospital',
        projectName: 'ACG Hospital Wing - Sustitución HVAC & Remodelación',
        trade: 'Inspección Municipal',
        category: 'inspection',
        severity: 'warning',
        detectedTime: 'Detectado hace 1h 14m',
        title: 'Conflicto de fecha para inspección de presión de tuberías hidrónicas',
        impactHours: 24,
        confidenceScore: 91,
        aiRecommendation: 'Adelantar submission digital de certificados hidrostáticos para activar inspección remota prioritaria.',
        resolved: false
      }
    ],
    'acg-retail': [
      {
        id: 'btn-201',
        projectId: 'acg-retail',
        projectName: 'Advance Commercial Plaza - Remodelación Retail',
        trade: 'Carpintería & Drywall',
        category: 'labor',
        severity: 'warning',
        detectedTime: 'Detectado hace 42 min',
        title: 'Cuadrilla de framing al 65% de capacidad por falta de tableros retardantes',
        impactHours: 36,
        confidenceScore: 89,
        aiRecommendation: 'Transferir 4 operarios desde el frente norte y liberar stock del almacén central ACG.',
        resolved: false
      }
    ],
    'acg-resi': [
      {
        id: 'btn-301',
        projectId: 'acg-resi',
        projectName: 'Residencial Sunset Palms - Mantenimiento Integral 140 Unidades',
        trade: 'Fontanería & Calentadores',
        category: 'supply',
        severity: 'critical',
        detectedTime: 'Detectado hace 12 min',
        title: 'Demora en suministro de bombas recirculadoras comerciales',
        impactHours: 48,
        confidenceScore: 94,
        aiRecommendation: 'Despachar unidad de reemplazo temporal desde inventario preventivo de Facility Services.',
        resolved: false
      }
    ]
  };

  const [selectedProject, setSelectedProject] = useState<string>('acg-hospital');
  const [alertsState, setAlertsState] = useState<Record<string, BottleneckAlert[]>>(initialAlerts);
  const [resolvingId, setResolvingId] = useState<string | null>(null);

  const currentAlerts = alertsState[selectedProject] || [];
  const health = evaluateProjectHealth(currentAlerts);

  const handleResolveAlert = (id: string) => {
    setResolvingId(id);
    setTimeout(() => {
      setAlertsState(prev => {
        const updated = { ...prev };
        updated[selectedProject] = updated[selectedProject].map(item => 
          item.id === id ? { ...item, resolved: true } : item
        );
        return updated;
      });
      setResolvingId(null);
    }, 800);
  };

  const handleResetSandbox = () => {
    setAlertsState(initialAlerts);
  };

  return (
    <section id="bottlenecks" className="py-24 bg-[#08090E] relative overflow-hidden border-t border-zinc-850">
      {/* Background glow accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-cyan-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simulador de Detección Anticipada</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Detección Inteligente de Cuellos de Botella
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            Experimenta en vivo cómo el agente de IA de ConstrucPod detecta riesgos de retraso en suministros, personal y permisos antes de que detengan la obra de Advance Contractor Group.
          </p>
        </div>

        {/* Project Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-800">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedProject('acg-hospital')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedProject === 'acg-hospital'
                  ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              ACG Hospital Wing (Comercial HVAC)
            </button>
            <button
              onClick={() => setSelectedProject('acg-retail')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedProject === 'acg-retail'
                  ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Advance Plaza (Remodelación Retail)
            </button>
            <button
              onClick={() => setSelectedProject('acg-resi')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedProject === 'acg-resi'
                  ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Sunset Palms (Facility Residencial)
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleResetSandbox}
              className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1.5 font-mono cursor-pointer"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              <span>Restablecer Simulación</span>
            </button>
            <button
              onClick={() => onOpenReportModal(currentAlerts[0]?.projectName || 'Advance Contractor Group')}
              className="px-3.5 py-1.5 rounded-lg bg-zinc-850 hover:bg-zinc-800 border border-zinc-750 text-xs font-semibold text-zinc-200 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Reporte de Mitigación</span>
            </button>
          </div>
        </div>

        {/* Live Health Overview & Alerts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Health Scorecard Panel */}
          <div className="lg:col-span-4 rounded-2xl bg-[#0B0D14] border border-zinc-800 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="text-xs font-mono text-zinc-400 uppercase">Índice de Salud de Obra</span>
                <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                  health.status === 'optimal'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : health.status === 'attention_needed'
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}>
                  {health.status === 'optimal' ? 'ESTADO ÓPTIMO' : health.status === 'attention_needed' ? 'ATENCIÓN REQUERIDA' : 'EN RIESGO'}
                </span>
              </div>

              {/* Big Score Radial/Metric */}
              <div className="my-6 text-center">
                <div className="text-6xl font-extrabold text-white font-mono tracking-tighter">
                  {health.healthScore}
                  <span className="text-2xl text-zinc-500 font-normal">/100</span>
                </div>
                <div className="text-xs text-zinc-400 mt-2">
                  {health.criticalCount === 0 && health.warningCount === 0
                    ? 'Todos los cuellos de botella han sido mitigados por el agente de IA'
                    : `Detectados: ${health.criticalCount} críticos · ${health.warningCount} advertencias tempranas`}
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between">
                  <span className="text-zinc-400">Cuellos Críticos:</span>
                  <span className={`font-bold ${health.criticalCount > 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                    {health.criticalCount}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between">
                  <span className="text-zinc-400">Horas de Retraso en Riesgo:</span>
                  <span className="text-amber-400 font-bold">
                    {currentAlerts.filter(a => !a.resolved).reduce((acc, c) => acc + c.impactHours, 0)} hrs
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-between">
                  <span className="text-zinc-400">Pérdida Económica Evitada:</span>
                  <span className="text-emerald-400 font-bold">
                    ${currentAlerts.filter(a => a.resolved).length * 12500 || 0} USD
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800">
              <button
                onClick={() => onOpenDemo({ company: 'Advance Contractor Group', intent: 'bottleneck_engine' })}
                className="w-full py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              >
                <span>Conectar Mis Obras al Motor Predictivo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Active Alerts List */}
          <div className="lg:col-span-8 space-y-4">
            {currentAlerts.map((alert) => (
              <div 
                key={alert.id}
                className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                  alert.resolved
                    ? 'bg-emerald-950/15 border-emerald-500/40 opacity-90'
                    : alert.severity === 'critical'
                    ? 'bg-[#120B0F] border-red-500/40 shadow-[0_0_20px_rgba(239,68,68,0.15)]'
                    : 'bg-[#12100A] border-amber-500/40'
                }`}
              >
                {/* Header of Alert */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-800/60">
                  <div className="flex items-center gap-2.5">
                    {alert.resolved ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : (
                      <AlertTriangle className={`w-5 h-5 shrink-0 ${alert.severity === 'critical' ? 'text-red-400 animate-pulse' : 'text-amber-400'}`} />
                    )}
                    <span className="font-mono text-xs font-semibold text-zinc-300">
                      Oficio: <strong className="text-white">{alert.trade}</strong>
                    </span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-zinc-400 text-xs font-mono">{alert.detectedTime}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-750 text-cyan-300">
                      Confianza IA: {alert.confidenceScore}%
                    </span>
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      alert.resolved 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                        : alert.severity === 'critical' 
                        ? 'bg-red-500/20 text-red-300 border border-red-500/40' 
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    }`}>
                      {alert.resolved ? '✓ MITIGADO' : alert.severity === 'critical' ? 'CRÍTICO' : 'ADVERTENCIA'}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="my-4">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                    {alert.title}
                  </h4>
                  <div className="p-3.5 rounded-xl bg-[#090B10] border border-zinc-800/90 text-xs sm:text-sm text-zinc-300">
                    <div className="text-[11px] font-mono text-violet-400 font-semibold uppercase mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Plan de Acción Recomendado por Agente IA:
                    </div>
                    <p className="leading-relaxed">{alert.aiRecommendation}</p>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-zinc-800/60 text-xs font-mono">
                  <span className="text-zinc-400">
                    Impacto en Cronograma: <strong className="text-amber-300">+{alert.impactHours} hrs de demora</strong> si no se actúa
                  </span>

                  {alert.resolved ? (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      Ruta Crítica Protegida · Orden Alternativa Emitida
                    </span>
                  ) : (
                    <button
                      onClick={() => handleResolveAlert(alert.id)}
                      disabled={resolvingId === alert.id}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(139,92,246,0.4)] disabled:opacity-50"
                    >
                      <Sparkles className={`w-3.5 h-3.5 ${resolvingId === alert.id ? 'animate-spin' : ''}`} />
                      <span>{resolvingId === alert.id ? 'Ejecutando Plan...' : 'Ejecutar Mitigación con 1 Clic'}</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
