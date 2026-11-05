'use client';

import React, { useState } from 'react';
import { 
  Copy, 
  Check, 
  ArrowRight, 
  Terminal, 
  Zap
} from 'lucide-react';

interface HeroProps {
  onOpenDemo: (initialData?: { company?: string; intent?: string }) => void;
  onScrollTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onScrollTo }) => {
  const [activeSnippetTab, setActiveSnippetTab] = useState<'cli' | 'python' | 'webhook'>('cli');
  const [copied, setCopied] = useState(false);

  const snippets = {
    cli: `# Despliegue de agente autónomo en obra
construcpodctl pod deploy \\
  --company "Software Enterprise Quality (SEQ)" \\
  --project "Torre-Biscayne-HVAC" \\
  --agent-type "bottleneck-detector" \\
  --stream-daily-logs true`,
    python: `from construcpod import SiteAgent

# Inicializa agente de obra y facility services
agent = SiteAgent.deploy(
    company="Software Enterprise Quality (SEQ)",
    project="Torre-Biscayne",
    predict_bottlenecks=True,
    auto_daily_report=True
)
print(f"Agente activo: {agent.endpoint}")`,
    webhook: `// Integración con Procore, Autodesk & BIM
POST https://api.construcpod.io/v1/projects/seq-site/telemetry
Headers: { "Authorization": "Bearer cpod_live_seq_99a82f..." }
Payload: {
  "site_id": "SEQ-2026",
  "vision_source": "cameras_and_sensors",
  "auto_flag_interference": true
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeSnippetTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background glow orbs */}
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
            <span className="font-semibold text-violet-300">Software Enterprise Quality (SEQ)</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-300">ConstrucPod AI</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Agentes de IA para <br className="hidden sm:inline" />
            <span className="text-gradient-purple">Obras</span> y <span className="text-gradient-cyan">Facility Services</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Monitorea el avance en tiempo real, anticipa cuellos de botella operativos y genera reportes de obra automáticos en segundos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={() => onOpenDemo({ company: 'Software Enterprise Quality', intent: 'deploy_agent' })}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 text-white font-bold text-base shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <Zap className="w-5 h-5 text-amber-300 fill-amber-300 group-hover:scale-110 transition-transform" />
              <span>Solicitar Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onScrollTo('console')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-base border border-zinc-750 hover:border-zinc-600 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Terminal className="w-4 h-4 text-violet-400" />
              <span>Ver Consola en Vivo</span>
            </button>

            <button
              onClick={() => onScrollTo('calculator')}
              className="w-full sm:w-auto px-6 py-4 rounded-xl text-zinc-400 hover:text-cyan-300 font-medium text-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Calcular ROI</span>
              <span className="text-xs text-zinc-600 font-mono">→</span>
            </button>
          </div>

          {/* Interactive Code Box */}
          <div className="max-w-3xl mx-auto rounded-2xl bg-[#0B0D14] border border-zinc-800 shadow-2xl overflow-hidden text-left">
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
                    CLI
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
                    API / Webhook
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

            <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto bg-[#08090E]/90 leading-relaxed">
              <pre className="text-zinc-300">
                <code>{snippets[activeSnippetTab]}</code>
              </pre>
            </div>
            <div className="px-4 py-2.5 bg-[#0A0C13] border-t border-zinc-800/80 flex flex-wrap items-center justify-between text-[11px] text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Estado: Clúster Activo · SEQ Cloud
              </span>
              <span className="text-zinc-500">Integración con Procore, Autodesk & BIM</span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-violet-400 font-mono tracking-tight">
                -38%
              </div>
              <div className="text-xs font-semibold text-zinc-200 mt-1">Menos Retrasos</div>
              <div className="text-[11px] text-zinc-400 mt-0.5">Detección preventiva con 7-14 días de anticipación</div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tracking-tight">
                2.5 h/día
              </div>
              <div className="text-xs font-semibold text-zinc-200 mt-1">Ahorro por Jefe de Obra</div>
              <div className="text-[11px] text-zinc-400 mt-0.5">Reportes y bitácoras de campo automatizadas</div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tracking-tight">
                100%
              </div>
              <div className="text-xs font-semibold text-zinc-200 mt-1">Cumplimiento Normativo</div>
              <div className="text-[11px] text-zinc-400 mt-0.5">Auditoría continua de seguridad y normativas</div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono tracking-tight">
                24/7
              </div>
              <div className="text-xs font-semibold text-zinc-200 mt-1">Triage Operativo</div>
              <div className="text-[11px] text-zinc-400 mt-0.5">Despacho automatizado de órdenes de trabajo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
