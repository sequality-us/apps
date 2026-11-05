'use client';

import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Download, 
  Printer, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  HardHat, 
  Calendar, 
  Clock, 
  AlertTriangle 
} from 'lucide-react';

interface ReportModalProps {
  projectName: string;
  onClose: () => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({ projectName, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const todayStr = new Date().toLocaleDateString('es-ES', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#0E111B] border border-zinc-750 shadow-2xl overflow-hidden my-8">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#121624] border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-violet-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase">
                Informe Autogenerado por Agente IA
              </div>
              <div className="text-sm font-bold text-white">
                Bitácora de Campo y Monitoreo Diario de Obra
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadSuccess ? '¡Descargado!' : 'Exportar PDF'}</span>
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

        {/* Report Content Body (Document Style) */}
        <div className="p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-zinc-300 max-h-[75vh] overflow-y-auto">
          
          {/* Document Header */}
          <div className="p-4 rounded-xl bg-[#090B10] border border-zinc-800 flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <div className="text-base font-extrabold text-white">
                ADVANCE CONTRACTOR GROUP, LLC (ACG)
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Certificado MBE (Minority Business Enterprise) · General Contractor & Facility Services
              </div>
              <div className="text-xs text-violet-400 font-mono mt-1">
                Proyecto: <strong className="text-white">{projectName}</strong>
              </div>
            </div>

            <div className="text-right sm:text-right font-mono text-xs space-y-1">
              <div className="text-zinc-400">Fecha: <strong className="text-zinc-200">{todayStr}</strong></div>
              <div className="text-zinc-400">Reporte ID: <strong className="text-zinc-200">#ACG-DLR-99824</strong></div>
              <div className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verificado por ConstrucPod IA
              </div>
            </div>
          </div>

          {/* Site Conditions & Crew Headcount */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
              <div className="text-zinc-400">Clima en Obra</div>
              <div className="text-white font-bold mt-1">Despejado · 24°C</div>
            </div>
            <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
              <div className="text-zinc-400">Operarios Verificados</div>
              <div className="text-emerald-400 font-bold mt-1">32 en Sitio</div>
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

          {/* Trade Activity Breakdown */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-violet-400 font-bold mb-2">
              1. Desglose de Actividad por Oficio en Sitio
            </h4>
            <div className="rounded-xl border border-zinc-800 overflow-hidden font-mono text-xs">
              <table className="w-full text-left">
                <thead className="bg-zinc-900/90 text-zinc-400 border-b border-zinc-800">
                  <tr>
                    <th className="p-2.5">Oficio / Especialidad</th>
                    <th className="p-2.5">Cuadrilla</th>
                    <th className="p-2.5">Zona de Trabajo</th>
                    <th className="p-2.5">Avance Diario</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-850">
                  <tr>
                    <td className="p-2.5 font-semibold text-white">HVAC & Climatización ACG</td>
                    <td className="p-2.5 text-zinc-300">8 operarios</td>
                    <td className="p-2.5 text-zinc-400">Nivel 4 - Salas de Máquinas</td>
                    <td className="p-2.5 text-emerald-400 font-bold">+5.4% (Dentro de plan)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold text-white">Instalaciones Eléctricas</td>
                    <td className="p-2.5 text-zinc-300">12 operarios</td>
                    <td className="p-2.5 text-zinc-400">Nivel 3 y 4 - Cableado</td>
                    <td className="p-2.5 text-emerald-400 font-bold">+4.8%</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold text-white">Drywall & Remodelación</td>
                    <td className="p-2.5 text-zinc-300">10 operarios</td>
                    <td className="p-2.5 text-zinc-400">Nivel 2 - Oficinas</td>
                    <td className="p-2.5 text-emerald-400 font-bold">+6.1%</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-semibold text-white">Facility Maintenance</td>
                    <td className="p-2.5 text-zinc-300">2 técnicos</td>
                    <td className="p-2.5 text-zinc-400">Zonas comunes y accesos</td>
                    <td className="p-2.5 text-cyan-400 font-bold">100% de tickets SLA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottlenecks Evaluated by AI */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-2">
              2. Estado de Cuellos de Botella & Acciones Preventivas
            </h4>
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs space-y-2">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-200">Alerta Anticipada Resuelta:</strong> Suministro de válvulas VAV para Piso 4 reasignado a proveedor secundario en Florida. Plazo de entrega asegurado para el viernes a las 09:00 AM. 0 horas de retraso en la ruta crítica.
                </div>
              </div>
            </div>
          </div>

          {/* MBE & Davis Bacon Statement */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 text-xs">
            <div className="flex items-center gap-2 font-bold text-emerald-300 mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Certificación de Cumplimiento MBE y Jornales Davis-Bacon</span>
            </div>
            <p className="text-zinc-300 leading-relaxed font-mono">
              Participación minoritaria certificada en la obra: <strong className="text-white">34.8%</strong> (Supera el umbral federal exigido del 25%). Todas las horas trabajadas están registradas conforme a las clasificaciones salariales del Departamento de Trabajo de EE.UU.
            </p>
          </div>

          {/* Signature Block */}
          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <div>
              Firmado digitalmente: <strong className="text-zinc-200">ConstrucPod Autonomous Engine v2.4</strong>
            </div>
            <div>
              Hash de Integridad: <span className="text-violet-400">0x7f4a...9b12</span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#121624] border-t border-zinc-800 flex items-center justify-between">
          <span className="text-xs text-zinc-400 font-mono">
            Listo para enviar a la propiedad o a la entidad certificadora
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
