'use client';

import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  RefreshCcw, 
  ArrowRight, 
  Sparkles, 
  ShieldAlert, 
  FileText, 
  Zap,
  Check
} from 'lucide-react';
import { BottleneckAlert, evaluateProjectHealth } from '../utils/health';

interface BottleneckSandboxProps {
  onOpenReportModal: (projectName: string) => void;
  onOpenDemo: (initialData?: { company?: string; intent?: string }) => void;
}

export const BottleneckSandbox: React.FC<BottleneckSandboxProps> = ({ 
  onOpenReportModal, 
  onOpenDemo 
}) => {
  const initialAlerts: Record<string, BottleneckAlert[]> = {
    'seq-hospital': [
      {
        id: 'btn-101',
        projectId: 'seq-hospital',
        projectName: 'Hospital Wing - Climatización HVAC',
        trade: 'HVAC & Ductería',
        category: 'supply',
        severity: 'critical',
        detectedTime: 'Hace 28 min',
        title: 'Retraso de 9 días en Válvulas VAV del proveedor primario',
        impactHours: 72,
        confidenceScore: 96,
        aiRecommendation: 'Reasignar automáticamente pedido a distribuidor alternativo con stock verificado.',
        resolved: false
      },
      {
        id: 'btn-102',
        projectId: 'seq-hospital',
        projectName: 'Hospital Wing - Climatización HVAC',
        trade: 'Inspección Municipal',
        category: 'inspection',
        severity: 'warning',
        detectedTime: 'Hace 1h',
        title: 'Conflicto de fecha para prueba hidrostática de tuberías',
        impactHours: 24,
        confidenceScore: 91,
        aiRecommendation: 'Adelantar submission digital de certificados para inspección remota prioritaria.',
        resolved: false
      }
    ],
    'seq-retail': [
      {
        id: 'btn-201',
        projectId: 'seq-retail',
        projectName: 'Metro Plaza - Remodelación Retail',
        trade: 'Carpintería & Drywall',
        category: 'labor',
        severity: 'warning',
        detectedTime: 'Hace 42 min',
        title: 'Cuadrilla de framing al 65% por falta de tableros retardantes',
        impactHours: 36,
        confidenceScore: 89,
        aiRecommendation: 'Transferir 4 operarios desde el frente norte y liberar stock de bodega central.',
        resolved: false
      }
    ],
    'seq-resi': [
      {
        id: 'btn-301',
        projectId: 'seq-resi',
        projectName: 'Sunset Palms - Mantenimiento Integral',
        trade: 'Fontanería & Bombas',
        category: 'supply',
        severity: 'critical',
        detectedTime: 'Hace 12 min',
        title: 'Demora en suministro de bombas recirculadoras',
        impactHours: 48,
        confidenceScore: 94,
        aiRecommendation: 'Despachar unidad de reemplazo temporal desde inventario preventivo.',
        resolved: false
      }
    ]
  };

  const [alertsByProject, setAlertsByProject] = useState<Record<string, BottleneckAlert[]>>(initialAlerts);
  const [selectedProject, setSelectedProject] = useState<string>('seq-hospital');
  const [isResolvingId, setIsResolvingId] = useState<string | null>(null);

  const currentAlerts = alertsByProject[selectedProject] || [];
  const healthStats = evaluateProjectHealth(currentAlerts);
  const totalDelayHoursRisk = currentAlerts.filter(a => !a.resolved).reduce((sum, a) => sum + a.impactHours, 0);

  const handleResolveAlert = (alertId: string) => {
    setIsResolvingId(alertId);
    setTimeout(() => {
      setAlertsByProject(prev => ({
        ...prev,
        [selectedProject]: prev[selectedProject].map(a => 
          a.id === alertId ? { ...a, resolved: true } : a
        )
      }));
      setIsResolvingId(null);
    }, 600);
  };

  const handleResetSandbox = () => {
    setAlertsByProject(initialAlerts);
  };

  return (
    <section id="bottlenecks" className="py-24 bg-[#090B10] border-b border-zinc-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simulador de Detección Anticipada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Prevención de Cuellos de Botella
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Simula cómo los agentes de SEQ anticipan riesgos en materiales, cuadrillas y permisos antes de que afecten el cronograma.
          </p>
        </div>

        {/* Project Switcher Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-800">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedProject('seq-hospital')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedProject === 'seq-hospital'
                  ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Hospital Wing (HVAC)
            </button>
            <button
              onClick={() => setSelectedProject('seq-retail')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedProject === 'seq-retail'
                  ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Metro Plaza (Retail)
            </button>
            <button
              onClick={() => setSelectedProject('seq-resi')}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedProject === 'seq-resi'
                  ? 'bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              Sunset Palms (Residencial)
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleResetSandbox}
              className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1.5 font-mono cursor-pointer"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              <span>Restablecer</span>
            </button>
            <button
              onClick={() => onOpenReportModal(currentAlerts[0]?.projectName || 'Hospital Wing')}
              className="px-3 py-1.5 rounded-lg bg-zinc-850 hover:bg-zinc-800 border border-zinc-750 text-xs font-semibold text-zinc-200 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Reporte de Mitigación</span>
            </button>
          </div>
        </div>

        {/* Overview & Alerts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Health Index Card */}
          <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-[#0B0D14] border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Índice de Salud de Obra
                </span>
                <span className="text-[11px] font-mono text-violet-400">
                  En tiempo real
                </span>
              </div>

              <div className="my-6 text-center">
                <div className="text-5xl font-extrabold text-white font-mono tracking-tight">
                  {healthStats.healthScore}<span className="text-2xl text-zinc-500 font-normal">/100</span>
                </div>
                <div className={`text-xs font-bold mt-2 font-mono uppercase tracking-wider ${
                  healthStats.healthScore > 85 ? 'text-emerald-400' : healthStats.healthScore > 65 ? 'text-amber-400' : 'text-red-400'
                }`}>
                  {healthStats.healthScore > 85 ? 'Estado Óptimo' : healthStats.healthScore > 65 ? 'Riesgo Moderado' : 'Intervención Requerida'}
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-zinc-800/80 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Alertas Críticas:</span>
                  <span className="text-red-400 font-bold">{healthStats.criticalCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Horas de Retraso en Riesgo:</span>
                  <span className="text-amber-300 font-bold">{totalDelayHoursRisk}h</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Pérdida Económica Evitada:</span>
                  <span className="text-emerald-400 font-bold">
                    ${currentAlerts.filter(a => a.resolved).length * 12500 || 0} USD
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800">
              <button
                onClick={() => onOpenDemo({ company: 'Software Enterprise Quality', intent: 'bottleneck_engine' })}
                className="w-full py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              >
                <span>Conectar Mis Obras a SEQ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Active Alerts List */}
          <div className="lg:col-span-8 space-y-4">
            {currentAlerts.map((alert) => (
              <div 
                key={alert.id}
                className={`p-5 rounded-2xl border transition-all ${
                  alert.resolved
                    ? 'bg-emerald-950/15 border-emerald-500/40 opacity-90'
                    : alert.severity === 'critical'
                    ? 'bg-[#120B0F] border-red-500/40 shadow-[0_0_20px_rgba(239,68,68,0.15)]'
                    : 'bg-[#12100A] border-amber-500/40'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    {alert.resolved ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        MITIGADO CON ÉXITO
                      </span>
                    ) : (
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                        alert.severity === 'critical' 
                          ? 'bg-red-500/20 text-red-300 border border-red-500/40' 
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      }`}>
                        {alert.severity === 'critical' ? 'CRÍTICO' : 'ADVERTENCIA'}
                      </span>
                    )}
                    <span className="text-xs text-zinc-400 font-mono">{alert.trade}</span>
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">{alert.detectedTime}</span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                  {alert.title}
                </h4>

                {/* AI Recommendation */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-zinc-800/80 mb-4 text-xs font-mono">
                  <div className="text-violet-400 font-semibold mb-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-300" />
                    <span>Recomendación Autónoma de SEQ:</span>
                  </div>
                  <div className="text-zinc-300 leading-relaxed">
                    {alert.aiRecommendation}
                  </div>
                </div>

                {/* Action button */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                    <span>Impacto: <strong className="text-red-400">+{alert.impactHours}h</strong> retraso</span>
                    <span>Confianza IA: <strong className="text-emerald-400">{alert.confidenceScore}%</strong></span>
                  </div>

                  {alert.resolved ? (
                    <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold font-mono">
                      <Check className="w-4 h-4" />
                      <span>Mitigación Aplicada en Cronograma</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleResolveAlert(alert.id)}
                      disabled={isResolvingId === alert.id}
                      className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md disabled:opacity-50"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{isResolvingId === alert.id ? 'Aplicando...' : 'Aplicar Mitigación con 1 Clic'}</span>
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
