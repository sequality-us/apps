'use client';

import React from 'react';
import { Cpu, Terminal, ShieldCheck, Heart, ExternalLink } from 'lucide-react';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
  onOpenDemo: (initialData?: { company?: string; intent?: string }) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo, onOpenDemo }) => {
  return (
    <footer className="bg-[#05060A] border-t border-zinc-850 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
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
              Plataforma SaaS automatizada con inteligencia artificial para la gestión y monitoreo en tiempo real de obras, facility services y remodelaciones.
            </p>

            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-[11px] leading-relaxed max-w-sm text-zinc-400">
              <strong className="text-zinc-300 block mb-0.5">Caso de Referencia en EE.UU.:</strong>
              Diseñado para contratistas certificados como <span className="text-amber-300 font-semibold">Advance Contractor Group, LLC (ACG)</span> · Minority Business Enterprise (MBE).
            </div>

            {/* RunPod-style status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 font-mono text-[11px] text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Todos los Agentes Operativos · 99.98% SLA</span>
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
                  Agentes de Obra (Site Pods)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('bottlenecks')} className="hover:text-white transition-colors cursor-pointer">
                  Detección de Cuellos de Botella
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('console')} className="hover:text-white transition-colors cursor-pointer">
                  Consola de Telemetría
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('platform')} className="hover:text-white transition-colors cursor-pointer">
                  Facility Services & Despacho
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
                <button onClick={() => onScrollTo('case-study')} className="hover:text-white transition-colors cursor-pointer text-amber-300 font-medium">
                  Contratistas MBE (ACG)
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('platform')} className="hover:text-white transition-colors cursor-pointer">
                  Remodelación Comercial
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('platform')} className="hover:text-white transition-colors cursor-pointer">
                  Facility Residencial
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('platform')} className="hover:text-white transition-colors cursor-pointer">
                  Auditoría Davis-Bacon
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('pricing')} className="hover:text-white transition-colors cursor-pointer">
                  Planes de Cómputo
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Integraciones & Legal */}
          <div className="space-y-3">
            <div className="font-mono uppercase font-bold text-white text-[11px] tracking-wider">
              Ecosistema
            </div>
            <ul className="space-y-2">
              <li className="text-zinc-400">Procore Integration</li>
              <li className="text-zinc-400">Autodesk BIM 360</li>
              <li className="text-zinc-400">OSHA Safety Shield</li>
              <li className="text-zinc-400">National MSDC MBE</li>
              <li className="text-zinc-400">Seguridad SOC-2 Type II</li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} ConstrucPod AI, Inc. Inspirado en la infraestructura de alta disponibilidad estilo RunPod.io para el sector de la construcción.
          </div>
          <div className="flex items-center gap-6">
            <span>Mercado: Estados Unidos (Commercial & Residential)</span>
            <span>·</span>
            <button 
              onClick={() => onOpenDemo({ company: 'Advance Contractor Group', intent: 'terms' })}
              className="hover:text-zinc-400 cursor-pointer"
            >
              Términos de Servicio
            </button>
            <span>·</span>
            <button 
              onClick={() => onOpenDemo({ company: 'Advance Contractor Group', intent: 'privacy' })}
              className="hover:text-zinc-400 cursor-pointer"
            >
              Privacidad de Datos
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
