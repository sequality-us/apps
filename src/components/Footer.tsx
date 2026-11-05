'use client';

import React from 'react';
import { Cpu } from 'lucide-react';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
  onOpenDemo: (initialData?: { company?: string; intent?: string }) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo, onOpenDemo }) => {
  return (
    <footer className="bg-[#05060A] border-t border-zinc-850 pt-14 pb-10 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-500 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#08090E] rounded-[6px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-violet-400" />
                </div>
              </div>
              <span className="font-extrabold text-lg text-white font-mono tracking-tight">
                Construc<span className="text-violet-400">Pod</span>
              </span>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Plataforma de inteligencia artificial para la gestión y monitoreo en tiempo real de obras y facility services.
            </p>

            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-[11px] leading-relaxed max-w-sm text-zinc-400">
              <strong className="text-zinc-300 block mb-0.5">Software Enterprise Quality (SEQ):</strong>
              Tecnología empresarial y desarrollo de software de alta calidad para la industria de la construcción.
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 font-mono text-[11px] text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Todos los Agentes Activos · 99.98% SLA</span>
            </div>
          </div>

          {/* Col 1: Plataforma */}
          <div className="space-y-3">
            <div className="font-mono uppercase font-bold text-white text-[11px] tracking-wider">
              Plataforma
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onScrollTo('platform')} className="hover:text-white transition-colors cursor-pointer">
                  Módulos de Obra
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('bottlenecks')} className="hover:text-white transition-colors cursor-pointer">
                  Cuellos de Botella
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('console')} className="hover:text-white transition-colors cursor-pointer">
                  Consola de Telemetría
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('calculator')} className="hover:text-white transition-colors cursor-pointer">
                  Calculadora ROI
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Soluciones */}
          <div className="space-y-3">
            <div className="font-mono uppercase font-bold text-white text-[11px] tracking-wider">
              Soluciones
            </div>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onScrollTo('case-study')} className="hover:text-white transition-colors cursor-pointer text-violet-300">
                  Casos de Éxito
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('platform')} className="hover:text-white transition-colors cursor-pointer">
                  Climatización & HVAC
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('platform')} className="hover:text-white transition-colors cursor-pointer">
                  Facility Services
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('pricing')} className="hover:text-white transition-colors cursor-pointer">
                  Planes & Precios
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Ecosistema */}
          <div className="space-y-3">
            <div className="font-mono uppercase font-bold text-white text-[11px] tracking-wider">
              Ecosistema
            </div>
            <ul className="space-y-2">
              <li className="text-zinc-400">Procore & Autodesk BIM</li>
              <li className="text-zinc-400">OSHA Safety AI</li>
              <li className="text-zinc-400">Cifrado AES-256</li>
              <li className="text-zinc-400">API & Webhooks</li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Software Enterprise Quality (SEQ). ConstrucPod AI.
          </div>
          <div className="flex items-center gap-5">
            <button 
              onClick={() => onOpenDemo({ company: 'Software Enterprise Quality', intent: 'terms' })}
              className="hover:text-zinc-300 cursor-pointer"
            >
              Términos de Servicio
            </button>
            <span>·</span>
            <button 
              onClick={() => onOpenDemo({ company: 'Software Enterprise Quality', intent: 'privacy' })}
              className="hover:text-zinc-300 cursor-pointer"
            >
              Privacidad
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
