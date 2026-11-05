'use client';

import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Cpu, 
  ArrowRight, 
  Zap, 
  Sparkles
} from 'lucide-react';

interface DemoModalProps {
  initialData?: { company?: string; intent?: string };
  onClose: () => void;
  onOpenReportModal: (projectName: string) => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ 
  initialData, 
  onClose,
  onOpenReportModal
}) => {
  const [companyName, setCompanyName] = useState(initialData?.company || 'By SEQ');
  const [contactName, setContactName] = useState('Director de Operaciones');
  const [email, setEmail] = useState('contacto@sequality.com');
  const [contractorType, setContractorType] = useState('commercial_facility');
  const [isMbeCertified, setIsMbeCertified] = useState(true);
  const [activeProjectsRange, setActiveProjectsRange] = useState('5_to_15');
  
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployStep, setDeployStep] = useState(0);
  const [deployedSuccess, setDeployedSuccess] = useState(false);

  const handleDeploy = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDeploying(true);
    setDeployStep(1);

    setTimeout(() => {
      setDeployStep(2);
    }, 800);

    setTimeout(() => {
      setDeployStep(3);
    }, 1600);

    setTimeout(() => {
      setIsDeploying(false);
      setDeployedSuccess(true);
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0E111B] border border-zinc-750 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#121624] border-b border-zinc-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-[#08090E] rounded-[6px] flex items-center justify-center">
                <Cpu className="w-4 h-4 text-violet-400" />
              </div>
            </div>
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase">
                By SEQ AI Cloud
              </div>
              <div className="text-sm font-bold text-white">
                Solicitar Demostración de Agente
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!deployedSuccess && !isDeploying && (
            <form onSubmit={handleDeploy} className="space-y-4">
              <div className="p-3 rounded-xl bg-violet-950/20 border border-violet-800/30 text-xs text-violet-200">
                Configurado para empresas de construcción y facility services.
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Empresa
                </label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090E] border border-zinc-800 text-white text-xs sm:text-sm focus:border-violet-500 focus:outline-none font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Contacto
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090E] border border-zinc-800 text-white text-xs sm:text-sm focus:border-violet-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Email Corporativo
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090E] border border-zinc-800 text-white text-xs sm:text-sm focus:border-violet-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Tipo de Operación
                  </label>
                  <select
                    value={contractorType}
                    onChange={(e) => setContractorType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090E] border border-zinc-800 text-white text-xs sm:text-sm focus:border-violet-500 focus:outline-none"
                  >
                    <option value="commercial_facility">Comercial & Facility Services</option>
                    <option value="general_contractor">Contratista General</option>
                    <option value="residential">Residencial Multifamiliar</option>
                    <option value="specialty">Subcontratista (HVAC / Eléctrico)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Obras Activas
                  </label>
                  <select
                    value={activeProjectsRange}
                    onChange={(e) => setActiveProjectsRange(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090E] border border-zinc-800 text-white text-xs sm:text-sm focus:border-violet-500 focus:outline-none"
                  >
                    <option value="1_to_4">1 a 4 obras simultáneas</option>
                    <option value="5_to_15">5 a 15 obras simultáneas</option>
                    <option value="16_plus">16+ obras corporativas</option>
                  </select>
                </div>
              </div>

              <label className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isMbeCertified}
                  onChange={(e) => setIsMbeCertified(e.target.checked)}
                  className="rounded border-zinc-700 text-violet-500 focus:ring-0 mt-0.5 accent-violet-500"
                />
                <span className="text-xs text-zinc-300">
                  Activar módulo de auditoría de nóminas certificadas y cumplimiento normativo.
                </span>
              </label>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-amber-300" />
                  <span>Desplegar Pod de Demostración</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* Deployment Animation */}
          {isDeploying && (
            <div className="py-8 text-center space-y-5">
              <div className="relative w-14 h-14 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-violet-500/20 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full border-4 border-violet-500 border-t-transparent animate-spin"></div>
                <div className="w-full h-full flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-violet-400" />
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-1">
                  Desplegando Clúster de Agentes...
                </h4>
                <p className="text-xs text-zinc-400 font-mono">
                  {deployStep === 1 && 'Provisionando pods de visión computacional...'}
                  {deployStep === 2 && 'Calibrando algoritmo de detección de cuellos de botella...'}
                  {deployStep === 3 && 'Activando conectores BIM y bitácoras automáticas...'}
                </p>
              </div>

              <div className="w-full max-w-xs mx-auto h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-700"
                  style={{ width: `${deployStep * 33.3}%` }}
                />
              </div>
            </div>
          )}

          {/* Success Screen */}
          {deployedSuccess && (
            <div className="py-2 space-y-5 text-left">
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/40 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    ¡Pod Desplegado con Éxito para {companyName}!
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                    Tu entorno autónomo de monitoreo está activo en SEQ Cloud.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#08090E] border border-zinc-800 text-left font-mono text-xs space-y-1.5">
                <div className="text-[11px] text-zinc-500 uppercase">Credenciales Generadas:</div>
                <div className="text-zinc-300">Cluster ID: <span className="text-violet-400">pod-seq-cloud-99</span></div>
                <div className="text-zinc-300">Token: <span className="text-cyan-400">cpod_live_seq_38f09</span></div>
                <div className="text-zinc-300">Conectores: <span className="text-emerald-400">BIM / PROCORE ACTIVOS</span></div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                <button
                  onClick={() => {
                    onClose();
                    onOpenReportModal(companyName);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Ver Primer Reporte</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-zinc-200 text-xs font-semibold cursor-pointer"
                >
                  Ir a la Consola
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
