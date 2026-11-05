'use client';

import React, { useState } from 'react';
import { 
  X, 
  Cpu, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  ShieldCheck, 
  Terminal, 
  Layers, 
  Zap,
  CheckCircle2
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
  const [companyName, setCompanyName] = useState(initialData?.company || 'Advance Contractor Group, LLC');
  const [contactName, setContactName] = useState('Director de Operaciones');
  const [email, setEmail] = useState('operaciones@advancecontractor.com');
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
    }, 900);

    setTimeout(() => {
      setDeployStep(3);
    }, 1800);

    setTimeout(() => {
      setIsDeploying(false);
      setDeployedSuccess(true);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#0E111B] border border-zinc-750 shadow-2xl overflow-hidden my-8">
        
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
                Lanzador de Pods en la Nube
              </div>
              <div className="text-sm font-bold text-white">
                Desplegar Agente de Obra para Contratistas
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
        <div className="p-6 sm:p-8">
          {!deployedSuccess && !isDeploying && (
            <form onSubmit={handleDeploy} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-violet-950/20 border border-violet-800/30 text-xs text-violet-200">
                <span className="font-bold text-violet-300">Perfil Predeterminado:</span> Configurado para contratistas certificados como <strong>Advance Contractor Group, LLC (ACG)</strong> y empresas de facility services en EE.UU.
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Nombre de la Empresa Contratista
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
                    Contacto / Cargo
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
                    Correo Corporativo
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
                    Especialidad Principal
                  </label>
                  <select
                    value={contractorType}
                    onChange={(e) => setContractorType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090E] border border-zinc-800 text-white text-xs sm:text-sm focus:border-violet-500 focus:outline-none"
                  >
                    <option value="commercial_facility">Facility Services & Comercial</option>
                    <option value="general_contractor">Contratista General / Remodelación</option>
                    <option value="residential">Residencial Multifamiliar</option>
                    <option value="specialty">Subcontratista Especializado (HVAC/Elec)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Obras Activas Estimadas
                  </label>
                  <select
                    value={activeProjectsRange}
                    onChange={(e) => setActiveProjectsRange(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090E] border border-zinc-800 text-white text-xs sm:text-sm focus:border-violet-500 focus:outline-none"
                  >
                    <option value="1_to_4">1 a 4 obras simultáneas</option>
                    <option value="5_to_15">5 a 15 obras (Escala ACG)</option>
                    <option value="16_plus">16+ obras corporativas</option>
                  </select>
                </div>
              </div>

              {/* MBE Checkbox */}
              <label className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isMbeCertified}
                  onChange={(e) => setIsMbeCertified(e.target.checked)}
                  className="rounded border-zinc-700 text-amber-500 focus:ring-0 mt-0.5 accent-amber-500"
                />
                <span className="text-xs text-zinc-300">
                  <strong className="text-amber-300 font-semibold">Empresa con Certificación MBE / DBE</strong>: Activar módulo automatizado de cuotas minoritarias y Davis-Bacon Certified Payroll.
                </span>
              </label>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-amber-300" />
                  <span>Desplegar Pod de Demostración Inmediato</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* Deployment Animation Screen */}
          {isDeploying && (
            <div className="py-10 text-center space-y-6">
              <div className="relative w-16 h-16 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-violet-500/20 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full border-4 border-violet-500 border-t-transparent animate-spin"></div>
                <div className="w-full h-full flex items-center justify-center">
                  <Cpu className="w-7 h-7 text-violet-400" />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  Desplegando Clúster de Agentes Autónomos...
                </h4>
                <p className="text-xs text-zinc-400 font-mono">
                  {deployStep === 1 && 'Provisionando Pods de Visión Computacional e Ingesta de Fotos...'}
                  {deployStep === 2 && 'Calibrando Algoritmo de Detección de Cuellos de Botella para ACG...'}
                  {deployStep === 3 && 'Activando Módulo de Cumplimiento MBE y Conector BIM...'}
                </p>
              </div>

              <div className="w-full max-w-sm mx-auto h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-700"
                  style={{ width: `${deployStep * 33.3}%` }}
                />
              </div>
            </div>
          )}

          {/* Deployed Success Screen */}
          {deployedSuccess && (
            <div className="py-4 space-y-6 text-center sm:text-left">
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/40 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">
                    ¡Pod de Agentes Desplegado con Éxito para {companyName}!
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                    Tu entorno autónomo de monitoreo de obras y facility services está activo en la región US-EAST con calibración para el mercado estadounidense.
                  </p>
                </div>
              </div>

              {/* Generated credentials block */}
              <div className="p-4 rounded-xl bg-[#08090E] border border-zinc-800 text-left font-mono text-xs space-y-2">
                <div className="text-[11px] text-zinc-500 uppercase">Credenciales Generadas para ACG:</div>
                <div className="text-zinc-300">Cluster ID: <span className="text-violet-400">pod-acg-us-east-998</span></div>
                <div className="text-zinc-300">Agent Token: <span className="text-cyan-400">cpod_live_mbe_38f0992a7</span></div>
                <div className="text-zinc-300">Conectividad BIM/Procore: <span className="text-emerald-400">ACTIVADA</span></div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onOpenReportModal(companyName);
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Ver Primer Reporte Autogenerado</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-zinc-200 text-xs font-semibold cursor-pointer"
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
