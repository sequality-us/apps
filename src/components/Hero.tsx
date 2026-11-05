'use client';

import React, { useState } from 'react';
import { 
  Play, 
  Terminal, 
  Copy, 
  Check, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Activity, 
  Zap,
  Building2,
  HardHat
} from 'lucide-react';

interface HeroProps {
  onOpenDemo: (initialData?: { company?: string; intent?: string }) => void;
  onScrollTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onScrollTo }) => {
  const [activeSnippetTab, setActiveSnippetTab] = useState<'cli' | 'python' | 'webhook'>('cli');
  const [copied, setCopied] = useState(false);

  const snippets = {
    cli: `# Instala y lanza un agente autónomo para una obra activa de ACG
construcpodctl pod deploy \\
  --company "Advance Contractor Group" \\
  --project "Torre-Comercial-Miami-Remodel" \\
  --agent-type "bottleneck-detector-v2" \\
  --compliance "MBE-Davis-Bacon" \\
  --stream-daily-logs true`,
    python: `from construcpod import SiteAgent, MBECompliance

# Inicializa el agente de facility services y obras en tiempo real
agent = SiteAgent.deploy(
    contractor="Advance Contractor Group, LLC",
    facilities=["Commercial-HVAC", "Residential-Plaza"],
    certifications=[MBECompliance.US_MINORITY_ENTERPRISE],
    predict_bottlenecks=True,
    auto_daily_report_time="17:00"
)
print(f"Agente activo con telemetría en vivo: {agent.endpoint}")`,
    webhook: `// Integración directa con Procore, Autodesk Construction Cloud & BIM
POST https://api.construcpod.io/v1/projects/acg-miami/telemetry
Headers: { "Authorization": "Bearer cpod_live_mbe_99a82f..." }
Payload: {
  "site_id": "ACG-FL-2026",
  "vision_source": "drone_and_fixed_cams",
  "auto_flag_trade_interference": true
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeSnippetTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background glow radial orbs like RunPod */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-violet-600/20 via-purple-600/15 to-cyan-500/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-600/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-violet-500/30 text-xs text-zinc-300 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.2)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            <span className="font-semibold text-violet-300">ConstrucPod AI Cloud</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-300">Optimizada para Contratistas MBE y Facility Services en EE.UU.</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            La Nube de Agentes de IA para <br className="hidden sm:inline" />
            <span className="text-gradient-purple">Obras, Mantenimiento</span> y <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Facility Services</span>
          </h1>

          {/* Subtitle with direct ACG client alignment */}
          <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
            Plataforma SaaS automatizada con inteligencia artificial para empresas contratistas como{' '}
            <strong className="text-white font-semibold">Advance Contractor Group, LLC (ACG)</strong> y operadores de propiedades comerciales y residenciales. Monitorea el avance en tiempo real, erradica cuellos de botella operativos y genera reportes de auditoría en segundos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={() => onOpenDemo({ company: 'Advance Contractor Group', intent: 'deploy_agent' })}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 text-white font-bold text-base shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <Zap className="w-5 h-5 text-amber-300 fill-amber-300 group-hover:scale-110 transition-transform" />
              <span>Desplegar Agente en 60 Segundos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onScrollTo('console')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-base border border-zinc-750 hover:border-zinc-600 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Terminal className="w-4 h-4 text-violet-400" />
              <span>Ver Consola de Obra en Vivo</span>
            </button>

            <button
              onClick={() => onScrollTo('calculator')}
              className="w-full sm:w-auto px-6 py-4 rounded-xl text-zinc-400 hover:text-cyan-300 font-medium text-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Calcular Ahorro Estimado</span>
              <span className="text-xs text-zinc-600 font-mono">→</span>
            </button>
          </div>

          {/* RunPod-style Interactive Code / CLI Box */}
          <div className="max-w-3xl mx-auto rounded-2xl bg-[#0B0D14] border border-zinc-800 shadow-2xl overflow-hidden text-left">
            {/* Header with tabs */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0E111B] border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 mr-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveSnippetTab('cli')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                      activeSnippetTab === 'cli'
                        ? 'bg-violet-600/30 text-violet-300 border border-violet-500/40'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    CLI (construcpodctl)
                  </button>
                  <button
                    onClick={() => setActiveSnippetTab('python')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                      activeSnippetTab === 'python'
                        ? 'bg-violet-600/30 text-violet-300 border border-violet-500/40'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Python SDK
                  </button>
                  <button
                    onClick={() => setActiveSnippetTab('webhook')}
                    className={`px-3 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                      activeSnippetTab === 'webhook'
                        ? 'bg-violet-600/30 text-violet-300 border border-violet-500/40'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    API & BIM Bridge
                  </button>
                </div>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-200 px-2.5 py-1 rounded bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/50 transition-colors cursor-pointer"
                title="Copiar comando"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Content */}
            <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto bg-[#08090E]/90 leading-relaxed">
              <pre className="text-zinc-300">
                <code>{snippets[activeSnippetTab]}</code>
              </pre>
            </div>
            <div className="px-4 py-2.5 bg-[#0A0C13] border-t border-zinc-800/80 flex flex-wrap items-center justify-between text-[11px] text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Status: Clúster de Agentes Activo · Latencia &lt; 42ms
              </span>
              <span className="text-zinc-500">Compatibilidad nativa con Procore, ProEst, Plangrid & BIM</span>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-violet-400">
                -38%
              </div>
              <div className="text-xs font-semibold text-zinc-200 mt-1">Detección de Retrasos</div>
              <div className="text-[11px] text-zinc-400 mt-0.5">Anticipación predictiva de 7 a 14 días en cuellos de botella</div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-cyan-400">
                2.5 hrs/día
              </div>
              <div className="text-xs font-semibold text-zinc-200 mt-1">Ahorro por Superintendente</div>
              <div className="text-[11px] text-zinc-400 mt-0.5">Reportes fotográficos y bitácoras de campo 100% automatizadas</div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-emerald-400">
                100% MBE
              </div>
              <div className="text-xs font-semibold text-zinc-200 mt-1">Certificado & Davis-Bacon</div>
              <div className="text-[11px] text-zinc-400 mt-0.5">Auditoría automática para contratos federales, comerciales y residenciales</div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight text-purple-400">
                24/7 SLA
              </div>
              <div className="text-xs font-semibold text-zinc-200 mt-1">Triage Facility Services</div>
              <div className="text-[11px] text-zinc-400 mt-0.5">Despacho automatizado de órdenes de trabajo para técnicos y cuadrillas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
