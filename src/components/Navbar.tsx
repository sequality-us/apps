'use client';

import React, { useState } from 'react';
import { Cpu, Terminal, ChevronRight, Menu, X, Sparkles, Building2 } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: (initialData?: { company?: string; intent?: string }) => void;
  onScrollTo: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onScrollTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#08090E]/85 border-b border-zinc-800/80 transition-all">
      {/* Slim announcement bar */}
      <div className="bg-gradient-to-r from-violet-950/70 via-purple-900/60 to-indigo-950/70 border-b border-purple-500/20 py-1.5 px-4 text-xs text-zinc-300 text-center flex items-center justify-center gap-2">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-medium text-white">Software Enterprise Quality (SEQ):</span>
        <span className="hidden sm:inline text-zinc-300">
          Agentes de IA en tiempo real para obras y facility services.
        </span>
        <button 
          onClick={() => onScrollTo('bottlenecks')}
          className="text-violet-300 hover:text-white underline font-semibold ml-1 inline-flex items-center gap-0.5 cursor-pointer"
        >
          Probar en vivo <ChevronRight className="w-3 h-3 inline" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo brand */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => handleNavClick('hero')} 
              className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.7)] transition-all">
                <div className="w-full h-full bg-[#08090E] rounded-[10px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-lg tracking-tight text-white font-mono">
                    Construc<span className="text-violet-400">Pod</span>
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/30">
                    BY SEQ
                  </span>
                </div>
                <span className="text-[10px] text-zinc-400 hidden sm:block tracking-wide">
                  Software Enterprise Quality
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 ml-4 text-sm font-medium text-zinc-300">
              <button
                onClick={() => handleNavClick('platform')}
                className="px-3 py-2 rounded-lg hover:text-white hover:bg-zinc-850/60 transition-colors cursor-pointer"
              >
                Plataforma
              </button>
              <button
                onClick={() => handleNavClick('console')}
                className="px-3 py-2 rounded-lg hover:text-white hover:bg-zinc-850/60 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5 text-violet-400" />
                Consola
              </button>
              <button
                onClick={() => handleNavClick('bottlenecks')}
                className="px-3 py-2 rounded-lg hover:text-white hover:bg-zinc-850/60 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Cuellos de Botella
              </button>
              <button
                onClick={() => handleNavClick('calculator')}
                className="px-3 py-2 rounded-lg hover:text-white hover:bg-zinc-850/60 transition-colors cursor-pointer"
              >
                Calculadora ROI
              </button>
              <button
                onClick={() => handleNavClick('case-study')}
                className="px-3 py-2 rounded-lg hover:text-white hover:bg-zinc-850/60 transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                Casos de Éxito
              </button>
              <button
                onClick={() => handleNavClick('pricing')}
                className="px-3 py-2 rounded-lg hover:text-white hover:bg-zinc-850/60 transition-colors cursor-pointer"
              >
                Precios
              </button>
            </nav>
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenDemo({ company: 'Software Enterprise Quality', intent: 'deploy_agent' })}
              className="relative group text-sm font-semibold text-white px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
              </span>
              <span>Solicitar Demo</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
              aria-label="Alternar menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#0B0D14] px-4 pt-3 pb-6 space-y-2">
          <button
            onClick={() => handleNavClick('platform')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-zinc-200 hover:bg-zinc-800 font-medium"
          >
            Plataforma
          </button>
          <button
            onClick={() => handleNavClick('console')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-zinc-200 hover:bg-zinc-800 font-medium flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-violet-400" />
            Consola en Vivo
          </button>
          <button
            onClick={() => handleNavClick('bottlenecks')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-zinc-200 hover:bg-zinc-800 font-medium flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Cuellos de Botella
          </button>
          <button
            onClick={() => handleNavClick('calculator')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-zinc-200 hover:bg-zinc-800 font-medium"
          >
            Calculadora ROI
          </button>
          <button
            onClick={() => handleNavClick('case-study')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-zinc-200 hover:bg-zinc-800 font-medium flex items-center gap-2"
          >
            <Building2 className="w-4 h-4 text-amber-400" />
            Casos de Éxito
          </button>
          <button
            onClick={() => handleNavClick('pricing')}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-zinc-200 hover:bg-zinc-800 font-medium"
          >
            Precios
          </button>
          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo({ company: 'Software Enterprise Quality', intent: 'deploy_agent' });
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white rounded-lg bg-violet-600 hover:bg-violet-500 shadow-md"
            >
              Solicitar Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
