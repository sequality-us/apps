'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Terminal, 
  Cpu, 
  RefreshCw, 
  FileText, 
  Sliders, 
  AlertTriangle,
  Activity
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
  category: 'VISION' | 'BOTTLENECK' | 'FACILITY' | 'AUDIT';
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
      id: 'pod-seq-miami',
      name: 'Torre Biscayne - Climatización HVAC',
      client: 'SEQ Commercial',
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
      id: 'pod-seq-atlanta',
      name: 'Centro Logístico Southeast - Mantenimiento',
      client: 'SEQ Facilities',
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
      id: 'pod-seq-dallas',
      name: 'Residencial Sunset Palms - Mantenimiento',
      client: 'SEQ Residential',
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

  const [selectedProjectId, setSelectedProjectId] = useState<string>('pod-seq-miami');
  const [isRunningInspection, setIsRunningInspection] = useState<boolean>(false);
  const [isInjectingBottleneck, setIsInjectingBottleneck] = useState<boolean>(false);

  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: 'log-1',
      timestamp: '16:40:12',
      category: 'VISION',
      message: 'Cuadrilla HVAC validada en Piso 4 (8 operarios con EPP completo).',
      level: 'info'
    },
    {
      id: 'log-2',
      timestamp: '16:41:05',
      category: 'AUDIT',
      message: 'Verificación de jornales y cuota normativa completada (100% compliant).',
      level: 'success'
    },
    {
      id: 'log-3',
      timestamp: '16:42:30',
      category: 'FACILITY',
      message: 'Orden #WO-9941 de mantenimiento chiller despachada y aceptada en 4 min.',
      level: 'info'
    },
    {
      id: 'log-4',
      timestamp: '16:44:18',
      category: 'BOTTLENECK',
      message: 'Análisis de suministros: Entrega de tableros eléctricos confirmada en fecha.',
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
          message: `Inspección fotogramétrica para ${currentProject.name}: 128 fotos analizadas contra planos BIM. 0 discrepancias.`,
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
          message: `⚠️ ALERTA: Retraso en válvulas de control. Recomendación: Reasignar orden a distribuidor local homologado.`,
          level: 'warning'
        },
        ...prev
      ]);
      setIsInjectingBottleneck(false);
    }, 1100);
  };

  return (
    <section id="console" className="py-24 bg-[#08090E] border-y border-zinc-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-400 mb-3">
              <Terminal className="w-4 h-4" />
              <span>Consola en Tiempo Real · By SEQ</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Control de Obras y Telemetría
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Supervisión de cuadrillas, detección de retrasos y bitácoras automáticas.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              En Vivo
            </span>
            <button
              onClick={() => onOpenReportModal(currentProject.name)}
              className="px-4 py-2.5 rounded-xl bg-violet-600/20 hover:bg-violet-600/30 border border-violet-500/40 text-violet-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              Ver Reporte Diario
            </button>
          </div>
        </div>

        {/* Console Box */}
        <div className="rounded-3xl bg-[#0B0D14] border border-zinc-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
          
          {/* Left: Project Selector */}
          <div className="lg:col-span-4 p-5 sm:p-6 bg-[#090B10] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                  Obras Activas
                </span>
                <span className="text-[11px] font-mono text-zinc-300">
                  3 desplegadas
                </span>
              </div>

              <div className="space-y-3">
                {projects.map((proj) => {
                  const isSelected = proj.id === selectedProjectId;
                  return (
                    <button
                      key={proj.id}
                      onClick={() => setSelectedProjectId(proj.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
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
                          {proj.status === 'nominal' ? 'ÓPTIMO' : 'ALERTA'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mt-2 text-xs text-zinc-400">
                        <span className="text-zinc-300 font-medium">{proj.client}</span>
                        <span>·</span>
                        <span>{proj.location}</span>
                      </div>

                      <div className="mt-3">
                        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1.5">
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

            <div className="mt-8 pt-5 border-t border-zinc-800/80">
              <button
                onClick={() => onOpenDemo({ company: 'By SEQ', intent: 'new_site_pod' })}
                className="w-full py-3 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-zinc-200 hover:text-white text-xs font-semibold font-mono flex items-center justify-center gap-2 transition-all cursor-pointer border border-zinc-700/60"
              >
                <Cpu className="w-3.5 h-3.5 text-violet-400" />
                <span>+ Desplegar Nuevo Pod</span>
              </button>
            </div>
          </div>

          {/* Right: Telemetry, Hologram & Logs */}
          <div className="lg:col-span-8 p-5 sm:p-7 flex flex-col justify-between bg-[#0B0D14]">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-zinc-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-lg font-bold text-white">
                      {currentProject.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-zinc-400 mt-1.5 font-mono">
                    <span>ID: <strong className="text-zinc-300">{currentProject.id}</strong></span>
                    <span>·</span>
                    <span>Tipo: <strong className="text-violet-300">{currentProject.type}</strong></span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                    <div className="text-[10px] text-zinc-400 uppercase font-mono">Cuadrilla</div>
                    <div className="text-sm font-bold text-white font-mono">{currentProject.activeCrew} en sitio</div>
                  </div>
                  <div className="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-center">
                    <div className="text-[10px] text-zinc-400 uppercase font-mono">Seguridad</div>
                    <div className="text-sm font-bold text-emerald-400 font-mono">0 Incidentes</div>
                  </div>
                </div>
              </div>

              {/* Holographic Wireframe Visual Banner */}
              <div className="my-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 overflow-hidden relative h-36 w-full">
                <Image 
                  src="/images/bim-isometric.jpg"
                  alt="Holograma BIM"
                  fill
                  className="object-cover object-center opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D14] via-transparent to-[#0B0D14]" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2 text-xs font-mono text-zinc-200 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-zinc-800">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Modelo Digital Twin: SEQ-BIM-v2.8 Activo</span>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="py-3 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-400 mr-2 flex items-center gap-1">
                  <Sliders className="w-3.5 h-3.5 text-zinc-400" /> Acciones:
                </span>
                
                <button
                  onClick={handleRunInspection}
                  disabled={isRunningInspection}
                  className="px-3.5 py-2 rounded-xl bg-violet-600/30 hover:bg-violet-600/40 text-violet-200 border border-violet-500/40 text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3 h-3 ${isRunningInspection ? 'animate-spin' : ''}`} />
                  <span>{isRunningInspection ? 'Analizando...' : 'Auditoría Fotográfica'}</span>
                </button>

                <button
                  onClick={handleSimulateBottleneck}
                  disabled={isInjectingBottleneck}
                  className="px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                >
                  <AlertTriangle className="w-3 h-3 text-amber-400" />
                  <span>{isInjectingBottleneck ? 'Simulando...' : 'Simular Alerta'}</span>
                </button>

                <button
                  onClick={() => onOpenReportModal(currentProject.name)}
                  className="px-3.5 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-500/40 text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <FileText className="w-3 h-3 text-cyan-400" />
                  <span>Generar Daily Log</span>
                </button>
              </div>

              {/* Logs */}
              <div className="mt-3 rounded-2xl bg-[#07080C] border border-zinc-800/90 p-4 font-mono text-xs overflow-hidden">
                <div className="flex items-center justify-between text-[11px] text-zinc-500 pb-2 mb-3 border-b border-zinc-850">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-violet-400" />
                    <span>TELEMETRÍA STREAM · By SEQ</span>
                  </div>
                  <span className="text-zinc-600">En tiempo real</span>
                </div>

                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {logs.map((entry) => (
                    <div key={entry.id} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="text-zinc-500 shrink-0 text-[11px]">{entry.timestamp}</span>
                      <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold shrink-0 ${
                        entry.category === 'VISION'
                          ? 'bg-purple-950 text-purple-300 border border-purple-800/60'
                          : entry.category === 'BOTTLENECK'
                          ? 'bg-amber-950 text-amber-300 border border-amber-800/60'
                          : entry.category === 'AUDIT'
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

            {/* Bottom */}
            <div className="mt-5 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-4">
                <span>Cluster: <strong className="text-zinc-200">SEQ Cloud</strong></span>
                <span>Modelo: <strong className="text-violet-400">SEQ-BIM-v2.8</strong></span>
              </div>
              <button
                onClick={() => onOpenDemo({ company: 'By SEQ', intent: 'full_specs' })}
                className="text-violet-400 hover:text-violet-300 underline cursor-pointer"
              >
                Documentación técnica →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
