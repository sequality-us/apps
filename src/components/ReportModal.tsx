'use client';

import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Printer, 
  Share2, 
  ShieldCheck, 
  Check
} from 'lucide-react';

interface ReportModalProps {
  projectName: string;
  onClose: () => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({ projectName, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const todayStr = new Date().toLocaleDateString('es-ES', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const handleDownloadSimulation = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#0E111B] border border-zinc-750 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#121624] border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/40 flex items-center justify-center">
              <FileText className="w-4 h-4 text-violet-400" />
            </div>
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase">
                Software Enterprise Quality (SEQ)
              </div>
              <div className="text-sm font-bold text-white">
                Daily Field Log & Reporte Ejecutivo
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadSimulation}
              className="px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
              title="Descargar reporte en PDF"
            >
              {downloaded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Descargado (PDF)</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Exportar PDF</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Report Content */}
        <div className="p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-zinc-300 max-h-[75vh] overflow-y-auto">
          
          {/* Header */}
          <div className="p-4 rounded-xl bg-[#090B10] border border-zinc-800 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <div className="text-base font-extrabold text-white">
                SOFTWARE ENTERPRISE QUALITY (SEQ)
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                ConstrucPod AI · Plataforma de Control de Obras y Facility Services
              </div>
              <div className="text-xs text-violet-400 font-mono mt-1">
                Proyecto: <strong className="text-white">{projectName}</strong>
              </div>
            </div>

            <div className="text-right sm:text-right font-mono text-xs space-y-1">
              <div className="text-zinc-400">Fecha: <strong className="text-zinc-200">{todayStr}</strong></div>
              <div className="text-zinc-400">Reporte ID: <strong className="text-zinc-200">#SEQ-DLR-99824</strong></div>
              <div className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verificado por IA
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
              <div className="text-zinc-400">Clima en Obra</div>
              <div className="text-white font-bold mt-1">Despejado · 24°C</div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
              <div className="text-zinc-400">Operarios en Sitio</div>
              <div className="text-emerald-400 font-bold mt-1">32 verificados</div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
              <div className="text-zinc-400">Fotos Procesadas</div>
              <div className="text-violet-400 font-bold mt-1">142 capturas</div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
              <div className="text-zinc-400">Seguridad OSHA</div>
              <div className="text-cyan-400 font-bold mt-1">0 Incidentes</div>
            </div>
          </div>

          {/* Activity Breakdown */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-violet-400 font-bold mb-2">
              1. Desglose de Actividad por Cuadrilla
            </h4>
            <div className="rounded-xl border border-zinc-800 overflow-hidden font-mono text-xs">
              <table className="w-full text-left">
                <thead className="bg-zinc-900/90 text-zinc-400 border-b border-zinc-800">
                  <tr>
                    <th className="p-2.5">Especialidad</th>
                    <th className="p-2.5">Cuadrilla</th>
                    <th className="p-2.5">Zona</th>
                    <th className="p-2.5">Avance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-850">
                  <tr>
                    <td className="p-2.5 font-semibold text-white">HVAC & Climatización</td>
                    <td className="p-2.5 text-zinc-300">8 operarios</td>
                    <td className="p-2.5 text-zinc-400">Nivel 4 - Salas de Máquinas</td>
                    <td className="p-2.5 text-emerald-400 font-bold">+5.4%</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold text-white">Instalaciones Eléctricas</td>
                    <td className="p-2.5 text-zinc-300">12 operarios</td>
                    <td className="p-2.5 text-zinc-400">Nivel 3 y 4 - Cableado</td>
                    <td className="p-2.5 text-emerald-400 font-bold">+4.8%</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold text-white">Drywall & Acabados</td>
                    <td className="p-2.5 text-zinc-300">10 operarios</td>
                    <td className="p-2.5 text-zinc-400">Nivel 2 - Oficinas</td>
                    <td className="p-2.5 text-emerald-400 font-bold">+6.1%</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold text-white">Facility Maintenance</td>
                    <td className="p-2.5 text-zinc-300">2 técnicos</td>
                    <td className="p-2.5 text-zinc-400">Accesos y áreas comunes</td>
                    <td className="p-2.5 text-cyan-400 font-bold">100% tickets SLA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottlenecks Evaluated by AI */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-2">
              2. Estado de Cuellos de Botella y Acciones Preventivas
            </h4>
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs space-y-2">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-200">Alerta Preventiva Resuelta:</strong> Suministro de válvulas reasignado a distribuidor local con stock verificado. Entrega confirmada sin impacto en la ruta crítica.
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Statement */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs">
            <div className="flex items-center gap-2 font-bold text-emerald-300 mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certificación de Cumplimiento Normativo y Jornales</span>
            </div>
            <p className="text-zinc-300 leading-relaxed font-mono">
              Todas las horas y actividades han sido registradas y auditadas conforme a normativas de seguridad laboral y estándares de calidad vigentes.
            </p>
          </div>

          {/* Signature Block */}
          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <div>
              Firmado digitalmente: <strong className="text-zinc-200">ConstrucPod AI · Software Enterprise Quality (SEQ)</strong>
            </div>
            <div>
              Hash: <span className="text-violet-400 font-mono">0x7f4a...9b12</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#121624] border-t border-zinc-800 flex items-center justify-between">
          <span className="text-xs text-zinc-400 font-mono">
            Documento listo para auditoría y archivo digital
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Cerrar Vista Previa
          </button>
        </div>

      </div>
    </div>
  );
};
