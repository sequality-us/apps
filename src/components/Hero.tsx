'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Copy, 
  Check, 
  ArrowRight, 
  Terminal, 
  Zap,
  Activity,
  Cpu
} from 'lucide-react';

interface HeroProps {
  onOpenDemo: (initialData?: { company?: string; intent?: string }) => void;
  onScrollTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onScrollTo }) => {
  const [activeSnippetTab, setActiveSnippetTab] = useState<'cli' | 'python' | 'api'>('cli');
  const [copied, setCopied] = useState(false);

  const snippets = {
    cli: `# Despliegue inmediato de agente en obra
seqctl pod deploy \\
  --project "Torre-Biscayne" \\
  --agent "bottleneck-detector" \\
  --live-stream true`,
    python: `from seq import SiteAgent

# Conectar agente de obra y facility services
agent = SiteAgent.deploy(
    project="Torre-Biscayne",
    predict_bottlenecks=True,
    auto_daily_report=True
)
print(f"Agente activo: {agent.endpoint}")`,
    api: `// Telemetría con Procore, Autodesk & BIM
POST https://api.seq.io/v1/telemetry
Headers: { "Authorization": "Bearer seq_live_99a82f..." }
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
    <section id="hero" className="relative pt-16 pb-24 md:pt-24 md:pb-36 overflow-hidden bg-grid-pattern">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-violet-600/25 via-purple-600/20 to-cyan-500/15 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-cyan-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title Area */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-violet-500/30 text-xs text-zinc-300 mb-8 backdrop-blur-md shadow-[0_0_25px_rgba(139,92,246,0.25)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            <span className="font-bold text-violet-300 font-mono tracking-wider">BY SEQ</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-300">AI Cloud para Construcción & Facility Services</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.08] mb-8">
            Infraestructura de IA para <br className="hidden sm:inline" />
            <span className="text-gradient-purple">Obras</span> y <span className="text-gradient-cyan">Facility Services</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
            Supervisión autónoma en tiempo real, prevención predictiva de retrasos y telemetría de campo sin fricción.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenDemo({ company: 'By SEQ', intent: 'deploy_agent' })}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 text-white font-bold text-base shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:shadow-[0_0_45px_rgba(139,92,246,0.7)] transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <Zap className="w-5 h-5 text-amber-300 fill-amber-300 group-hover:scale-110 transition-transform" />
              <span>Solicitar Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onScrollTo('console')}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold text-base border border-zinc-750 hover:border-zinc-600 transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-sm"
            >
              <Terminal className="w-4 h-4 text-violet-400" />
              <span>Ver Consola en Vivo</span>
            </button>
          </div>
        </div>

        {/* RunPod-Style Visual Showcase: Digital Twin & Interactive Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-20">
          
          {/* Left: RunPod-style Digital Twin Image Display */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0B0D14] border border-zinc-800/90 shadow-2xl overflow-hidden relative group">
            <div className="relative h-64 sm:h-80 lg:h-full min-h-[340px] w-full">
              <Image 
                src="/images/digital-twin.jpg"
                alt="Digital Twin de Obra By SEQ"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D14] via-[#0B0D14]/30 to-transparent" />
              
              {/* Telemetry Overlays */}
              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/75 backdrop-blur-md border border-violet-500/40 text-[11px] font-mono text-violet-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  LIDAR DIGITAL TWIN
                </span>
                <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-zinc-800 text-[11px] font-mono text-zinc-300">
                  FPS: 60 · LATENCIA: 18ms
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-zinc-300 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span>Telemetría en Vivo: Torre Biscayne</span>
                </div>
                <span className="text-emerald-400 font-semibold">100% OPERATIVO</span>
              </div>
            </div>
          </div>

          {/* Right: RunPod-style Terminal Box */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0B0D14] border border-zinc-800/90 shadow-2xl overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between px-4 py-3 bg-[#0E111B] border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 mr-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveSnippetTab('cli')}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                        activeSnippetTab === 'cli'
                          ? 'bg-violet-600/30 text-violet-300 border border-violet-500/40'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      CLI
                    </button>
                    <button
                      onClick={() => setActiveSnippetTab('python')}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                        activeSnippetTab === 'python'
                          ? 'bg-violet-600/30 text-violet-300 border border-violet-500/40'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      Python
                    </button>
                    <button
                      onClick={() => setActiveSnippetTab('api')}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                        activeSnippetTab === 'api'
                          ? 'bg-violet-600/30 text-violet-300 border border-violet-500/40'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      API
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-200 px-2 py-1 rounded bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-750 transition-colors cursor-pointer"
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

              <div className="p-5 font-mono text-xs sm:text-sm text-zinc-300 bg-[#08090E]/95 leading-relaxed overflow-x-auto">
                <pre className="text-zinc-300">
                  <code>{snippets[activeSnippetTab]}</code>
                </pre>
              </div>
            </div>

            <div className="p-4 bg-[#0A0C13] border-t border-zinc-800 text-[11px] text-zinc-400 font-mono flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-violet-400" />
                Cluster: SEQ Edge Nodes
              </span>
              <span className="text-zinc-500">Procore · Autodesk · BIM</span>
            </div>
          </div>

        </div>

        {/* Quick Metrics Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-violet-400 font-mono tracking-tight">
              -38%
            </div>
            <div className="text-sm font-semibold text-zinc-200 mt-2">Menos Retrasos</div>
            <div className="text-xs text-zinc-400 mt-1">Detección preventiva de cuellos de botella</div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono tracking-tight">
              2.5 h/día
            </div>
            <div className="text-sm font-semibold text-zinc-200 mt-2">Ahorro en Campo</div>
            <div className="text-xs text-zinc-400 mt-1">Bitácoras y reportes fotográficos automáticos</div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight">
              100%
            </div>
            <div className="text-sm font-semibold text-zinc-200 mt-2">Trazabilidad</div>
            <div className="text-xs text-zinc-400 mt-1">Auditoría continua de normativas y seguridad</div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-purple-400 font-mono tracking-tight">
              24/7
            </div>
            <div className="text-sm font-semibold text-zinc-200 mt-2">Facility Services</div>
            <div className="text-xs text-zinc-400 mt-1">Triage y despacho geo-localizado</div>
          </div>
        </div>

      </div>
    </section>
  );
};
