'use client';

import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Cpu, 
  Activity, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Play, 
  RefreshCw, 
  FileText, 
  Sliders, 
  ShieldCheck, 
  HardHat, 
  Building, 
  Clock, 
  Sparkles,
  Download
} from 'lucide-react';

interface ProjectPod {
  id: string;
  name: string;
  client: string;
  type: 'Comercial' | 'Residencial' | 'Facility Services';
  location: string;
  progressPct: number;
  scheduledPct: number;
  activeCrew: number;
  status: 'nominal' | 'action_required' | 'syncing';
  activeBottlenecks: number;
  lastReport: string;
}

interface LogEntry {
  id: string;
  timestamp: string;
  category: 'VISION' | 'BOTTLENECK' | 'FACILITY' | 'MBE_AUDIT';
  message: string;
  level: 'info' | 'warning' | 'success';
}

interface InteractiveConsoleProps {
  onOpenReportModal: (projectName: string) => void;
  onOpenDemo: (initialData?: { company?: string; intent?: string }) => void;
}

export const InteractiveConsole: React.FC<InteractiveConsoleProps> = ({ 
  onOpenReportModal, 
  onOpenDemo 
}) => {
  const [projects] = useState<ProjectPod[]>([
    {
      id: 'pod-acg-miami',
      name: 'Torre Corporativa Biscayne - HVAC & Remodelación',
      client: 'Advance Contractor Group (ACG)',
      type: 'Comercial',
      location: 'Miami, FL',
      progressPct: 74.2,
      scheduledPct: 71.0,
      activeCrew: 32,
      status: 'nominal',
      activeBottlenecks: 0,
      lastReport: 'Hoy 16:45'
    },
    {
      id: 'pod-acg-atlanta',
      name: 'Centro Logístico Southeast - Facility Maintenance 24/7',
      client: 'Advance Contractor Group (ACG)',
      type: 'Facility Services',
      location: 'Atlanta, GA',
      progressPct: 88.5,
      scheduledPct: 89.0,
      activeCrew: 19,
      status: 'action_required',
      activeBottlenecks: 1,
      lastReport: 'Hoy 15:30'
    },
    {
      id: 'pod-acg-dallas',
      name: 'Residencial Sunset Palms - Mantenimiento & Pintura (120 U)',
      client: 'Advance Contractor Group (ACG)',
      type: 'Residencial',
      location: 'Dallas, TX',
      progressPct: 53.0,
      scheduledPct: 52.4,
      activeCrew: 14,
      status: 'nominal',
      activeBottlenecks: 0,
      lastReport: 'Hoy 14:10'
    }
  ]);

  const [selectedProjectId, setSelectedProjectId] = useState<string>('pod-acg-miami');
  const [isRunningInspection, setIsRunningInspection] = useState<boolean>(false);
  const [isInjectingBottleneck, setIsInjectingBottleneck] = useState<boolean>(false);

  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: 'log-1',
      timestamp: '16:40:12',
      category: 'VISION',
      message: 'Agente de Visión Computacional: Cuadrilla ACG de ductería HVAC validada en Piso 4 (8 operarios con EPP completo).',
      level: 'info'
    },
    {
      id: 'log-2',
      timestamp: '16:41:05',
      category: 'MBE_AUDIT',
      message: 'Verificación de jornales Davis-Bacon y cuota de subcontratación MBE completada para licitación pública (100% compliant).',
      level: 'success'
    },
    {
      id: 'log-3',
      timestamp: '16:42:30',
      category: 'FACILITY',
      message: 'Orden de trabajo #WO-9941 de mantenimiento correctivo chiller despachada y aceptada por técnico certificado en 4 minutos.',
      level: 'info'
    },
    {
      id: 'log-4',
      timestamp: '16:44:18',
      category: 'BOTTLENECK',
      message: 'Análisis predictivo de suministros: Entrega de tableros eléctricos confirmada sin retrasos. Ventana de inspección municipal asegurada.',
      level: 'success'
    }
  ]);

  const currentProject = projects.find(p => p.id === selectedProjectId) || projects[0];

  const handleRunInspection = () => {
    setIsRunningInspection(true);
    const newTimestamp = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    setTimeout(() => {
      setLogs(prev => [
        {
          id: `log-${Date.now()}`,
          timestamp: newTimestamp,
          category: 'VISION',
          message: `Inspección de avance fotogramétrico completada para ${currentProject.name}: 128 fotos analizadas contra planos BIM. 0 discrepancias estructurales detectadas.`,
          level: 'success'
        },
        ...prev
      ]);
      setIsRunningInspection(false);
    }, 1200);
  };

  const handleSimulateBottleneck = () => {
    setIsInjectingBottleneck(true);
    const newTimestamp = new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    setTimeout(() => {
      setLogs(prev => [
        {
          id: `log-${Date.now()}`,
          timestamp: newTimestamp,
          category: 'BOTTLENECK',
          message: `⚠️ ALERTA PREDICTIVA: Detección anticipada de retraso en válvulas de control (Proveedor Primario retrasará 4 días). Plan de contingencia sugerido: Reasignar orden a distribuidor certificado ACG local.`,
          level: 'warning'
        },
        ...prev
      ]);
      setIsInjectingBottleneck(false);
    }, 1100);
  };

  return (
    <section id="console" className="py-20 bg-[#08090E] border-y border-zinc-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-400 mb-2">
              <Terminal className="w-4 h-4" />
              <span>Consola en Tiempo Real · Site Pods Controller</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Control Autónomo de Obras y Servicios de Mantenimiento
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Interactúa con los agentes de IA desplegados en obras comerciales y residenciales de contratistas como Advance Contractor Group. Telemetría de cuadrillas, detección de retrasos y generación de bitácoras sin fricción.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Conexión Satelital & IoT Activa
            </span>
            <button
              onClick={() => onOpenReportModal(currentProject.name)}
              className="px-4 py-2 rounded-lg bg-violet-600/20 hover:bg-violet-600/30 border border-violet-500/40 text-violet-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              Ver Reporte Diario ACG
            </button>
          </div>
        </div>

        {/* The RunPod-like Console Box */}
        <div className="rounded-2xl bg-[#0B0D14] border border-zinc-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
          
          {/* Left Column: Pod / Project Selector */}
          <div className="lg:col-span-4 p-4 sm:p-5 bg-[#090B10] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                  Obras Activas (Pods)
                </span>
                <span className="text-[11px] font-mono text-zinc-300">
                  3 desplegados
                </span>
              </div>

              <div className="space-y-2.5">
                {projects.map((proj) => {
                  const isSelected = proj.id === selectedProjectId;
                  return (
                    <button
                      key={proj.id}
                      onClick={() => setSelectedProjectId(proj.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-zinc-850/90 border-violet-500/60 shadow-[0_0_15px_rgba(139,92,246,0.15)]'
                          : 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-850/40 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="font-semibold text-sm text-white line-clamp-1">
                          {proj.name}
                        </div>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          proj.status === 'nominal'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}>
                          {proj.status === 'nominal' ? 'OPTIMO' : '1 ALERTA'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mt-1.5 text-xs text-zinc-400">
                        <span className="text-zinc-300 font-medium">{proj.client}</span>
                        <span>·</span>
                        <span>{proj.location}</span>
                      </div>

                      <div className="mt-3">
                        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1">
                          <span>Avance Real: <strong className="text-white">{proj.progressPct}%</strong></span>
                          <span>Plan: {proj.scheduledPct}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              proj.progressPct >= proj.scheduledPct ? 'bg-gradient-to-r from-violet-500 to-emerald-400' : 'bg-amber-500'
                            }`}
                            style={{ width: `${proj.progressPct}%` }}
                          />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Pod Deploy Trigger */}
            <div className="mt-6 pt-4 border-t border-zinc-800/80">
              <button
                onClick={() => onOpenDemo({ company: 'Advance Contractor Group', intent: 'new_site_pod' })}
                className="w-full py-2.5 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-200 hover:text-white text-xs font-semibold font-mono flex items-center justify-center gap-2 transition-all cursor-pointer border border-zinc-700/60"
              >
                <Cpu className="w-3.5 h-3.5 text-violet-400" />
                <span>+ Desplegar Nuevo Pod de Obra</span>
              </button>
            </div>
          </div>

          {/* Right Column: Telemetry, Logs & Controls */}
          <div className="lg:col-span-8 p-4 sm:p-6 flex flex-col justify-between bg-[#0B0D14]">
            {/* Top Pod Status Banner */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-base font-bold text-white">
                      {currentProject.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-zinc-400 mt-1 font-mono">
                    <span>ID: <strong className="text-zinc-300">{currentProject.id}</strong></span>
                    <span>·</span>
                    <span>Tipo: <strong className="text-violet-300">{currentProject.type}</strong></span>
                    <span>·</span>
                    <span>Certificación: <strong className="text-amber-300">MBE Validada</strong></span>
                  </div>
                </div>

                {/* Instant Pod Metrics */}
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-center">
                    <div className="text-[10px] text-zinc-400 uppercase font-mono">Cuadrilla en Sitio</div>
                    <div className="text-sm font-bold text-white font-mono">{currentProject.activeCrew} operarios</div>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-center">
                    <div className="text-[10px] text-zinc-400 uppercase font-mono">Seguridad OSHA</div>
                    <div className="text-sm font-bold text-emerald-400 font-mono">100% Cero Incidentes</div>
                  </div>
                </div>
              </div>

              {/* Action Toolbar to interact with the AI Engine */}
              <div className="py-3.5 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-400 mr-2 flex items-center gap-1">
                  <Sliders className="w-3.5 h-3.5 text-zinc-400" /> Acciones de IA:
                </span>
                
                <button
                  onClick={handleRunInspection}
                  disabled={isRunningInspection}
                  className="px-3 py-1.5 rounded-lg bg-violet-600/30 hover:bg-violet-600/40 text-violet-200 border border-violet-500/40 text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3 h-3 ${isRunningInspection ? 'animate-spin' : ''}`} />
                  <span>{isRunningInspection ? 'Analizando Fotos...' : 'Auditoría Fotográfica'}</span>
                </button>

                <button
                  onClick={handleSimulateBottleneck}
                  disabled={isInjectingBottleneck}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                >
                  <AlertTriangle className="w-3 h-3 text-amber-400" />
                  <span>{isInjectingBottleneck ? 'Simulando...' : 'Simular Alerta de Suministro'}</span>
                </button>

                <button
                  onClick={() => onOpenReportModal(currentProject.name)}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-500/40 text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <FileText className="w-3 h-3 text-cyan-400" />
                  <span>Generar Daily Log ACG</span>
                </button>
              </div>

              {/* Terminal Logs Window */}
              <div className="mt-2 rounded-xl bg-[#07080C] border border-zinc-800/90 p-4 font-mono text-xs overflow-hidden">
                <div className="flex items-center justify-between text-[11px] text-zinc-500 pb-2 mb-3 border-b border-zinc-850">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-violet-400" />
                    <span>TELEMETRY STREAM · /var/log/construcpod-agents.log</span>
                  </div>
                  <span className="text-zinc-600">Auto-scroll ON</span>
                </div>

                <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                  {logs.map((entry) => (
                    <div key={entry.id} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-zinc-500 shrink-0 text-[11px]">{entry.timestamp}</span>
                      <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold shrink-0 ${
                        entry.category === 'VISION'
                          ? 'bg-purple-950 text-purple-300 border border-purple-800/60'
                          : entry.category === 'BOTTLENECK'
                          ? 'bg-amber-950 text-amber-300 border border-amber-800/60'
                          : entry.category === 'MBE_AUDIT'
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/60'
                          : 'bg-blue-950 text-blue-300 border border-blue-800/60'
                      }`}>
                        {entry.category}
                      </span>
                      <span className={`text-[12px] ${
                        entry.level === 'warning'
                          ? 'text-amber-200 font-semibold'
                          : entry.level === 'success'
                          ? 'text-emerald-300'
                          : 'text-zinc-300'
                      }`}>
                        {entry.message}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar: Quick Spec Summary */}
            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-4">
                <span>Cluster: <strong className="text-zinc-200">US-EAST (Miami/Atlanta)</strong></span>
                <span>Modelo de Visión: <strong className="text-violet-400">ConstrucBIM-v2.8-Large</strong></span>
              </div>
              <button
                onClick={() => onOpenDemo({ company: 'Advance Contractor Group', intent: 'full_specs' })}
                className="text-violet-400 hover:text-violet-300 underline cursor-pointer"
              >
                Ver arquitectura completa de agentes →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
