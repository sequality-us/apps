'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Eye, 
  AlertOctagon, 
  Wrench, 
  ShieldCheck, 
  ArrowRight, 
  Check, 
  Zap, 
  Layers
} from 'lucide-react';

interface ProductPodsProps {
  onOpenDemo: (initialData?: { company?: string; intent?: string }) => void;
  onScrollTo: (sectionId: string) => void;
}

export const ProductPods: React.FC<ProductPodsProps> = ({ onOpenDemo, onScrollTo }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pods = [
    {
      id: 'site-pods',
      tag: 'VISIÓN COMPUTACIONAL 24/7',
      title: 'Monitoreo de Obra en Tiempo Real',
      subtitle: 'Auditoría visual continua de avances físicos, cuadrillas y calidad.',
      description: 'Analiza cámaras fijas, fotos de campo y drones contra planos BIM para validar el avance exacto sin visitas manuales.',
      image: '/images/digital-twin.jpg',
      benefits: [
        'Bitácoras diarias de campo automáticas',
        'Conteo y presencia de cuadrillas en sitio',
        'Verificación continua de seguridad y EPP',
        'Sincronización con Procore, Autodesk y BIM'
      ],
      spec: {
        latencia: '< 1.2s análisis por imagen',
        precision: '99.4% cubicación',
        formato: 'Reporte diario en PDF / JSON'
      },
      icon: Eye
    },
    {
      id: 'bottleneck-pods',
      tag: 'INTELIGENCIA PREDICTIVA',
      title: 'Detección de Cuellos de Botella',
      subtitle: 'Anticipa retrasos de suministros, interferencias y permisos.',
      description: 'Predice cuellos de botella en la cadena de suministros e interferencias entre cuadrillas de 7 a 14 días antes.',
      image: '/images/bim-isometric.jpg',
      benefits: [
        'Detección anticipada de falta de materiales',
        'Identificación temprana de interferencias de oficios',
        'Recomendación autónoma de distribuidores locales',
        'Protección contra penalizaciones contractuales'
      ],
      spec: {
        anticipacion: '7 a 14 días',
        mitigacion: 'Resolución en 1 clic',
        ahorro: 'Reducción de sobrecostos'
      },
      icon: AlertOctagon
    },
    {
      id: 'facility-pods',
      tag: 'FACILITY SERVICES & DESPACHO',
      title: 'Mantenimiento Comercial y Residencial',
      subtitle: 'Triage de órdenes de trabajo, despacho inteligente y SLA tracking.',
      description: 'Centraliza reparaciones urgentes, climatización HVAC y mantenimiento preventivo para inmuebles comerciales y residenciales.',
      image: '/images/edge-pod.jpg',
      benefits: [
        'Triage automático clasificado por severidad y oficio',
        'Despacho geo-optimizado a técnicos calificados',
        'Bitácora digital con fotos y firma móvil',
        'Historial de activos para mantenimiento preventivo'
      ],
      spec: {
        despacho: '< 3 minutos promedio',
        sla: '99.8% cumplimiento',
        alcance: 'Comercial y residencial'
      },
      icon: Wrench
    },
    {
      id: 'compliance-pods',
      tag: 'CUMPLIMIENTO & AUDITORÍA',
      title: 'Auditoría Normativa y Licitaciones',
      subtitle: 'Control continuo de certificaciones, nóminas y requerimientos normativos.',
      description: 'Automatiza el cumplimiento normativo exigido en contratos públicos y privados sin sobrecarga administrativa.',
      image: '/images/edge-pod.jpg',
      benefits: [
        'Cálculo continuo de porcentajes y cuotas normativas',
        'Nóminas certificadas listas para auditoría',
        'Dossier de acreditaciones actualizado para licitaciones',
        'Trazabilidad auditable para clientes y aseguradoras'
      ],
      spec: {
        normativas: 'Federales y estatales',
        tiempoAhorrado: '18 horas al mes por proyecto',
        auditoria: '100% trazable'
      },
      icon: ShieldCheck
    }
  ];

  const currentPod = pods[activeTab];
  const IconComponent = currentPod.icon;

  return (
    <section id="platform" className="py-24 bg-[#08090E] relative overflow-hidden border-t border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs font-mono text-violet-300 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Módulos de IA · By SEQ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Tecnología Modular de Alta Disponibilidad
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Conecta los pods que tu obra necesita a tus flujos de trabajo actuales.
          </p>
        </div>

        {/* Pod Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {pods.map((pod, idx) => {
            const isSelected = activeTab === idx;
            const TabIcon = pod.icon;
            return (
              <button
                key={pod.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-zinc-850/90 border-violet-500/70 shadow-[0_0_25px_rgba(139,92,246,0.2)]'
                    : 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-850/40 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-violet-600/30 text-violet-300' : 'bg-zinc-800 text-zinc-400'
                  }`}>
                    <TabIcon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">0{idx + 1}</span>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-violet-400 font-semibold mb-1">
                    {pod.tag.split('&')[0]}
                  </div>
                  <div className="text-sm font-bold text-white line-clamp-1">
                    {pod.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pod Detailed View */}
        <div className="rounded-3xl bg-[#0B0D14] border border-zinc-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                <IconComponent className="w-3.5 h-3.5 text-violet-400" />
                <span>{currentPod.tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {currentPod.title}
              </h3>

              <p className="text-sm sm:text-base font-medium text-violet-200/90 leading-snug">
                {currentPod.subtitle}
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed">
                {currentPod.description}
              </p>

              {/* Benefits */}
              <div className="space-y-2.5 pt-2">
                {currentPod.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm text-zinc-200">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  onClick={() => onOpenDemo({ company: 'By SEQ', intent: currentPod.id })}
                  className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-amber-300" />
                  <span>Activar este Pod</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onScrollTo('bottlenecks')}
                  className="text-xs sm:text-sm text-zinc-400 hover:text-white font-mono underline cursor-pointer"
                >
                  Ver simulación →
                </button>
              </div>
            </div>

            {/* Right: Visual Image Showcase in RunPod Frame */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-2xl bg-[#0E111B] border border-zinc-800 overflow-hidden relative shadow-xl group">
                <div className="relative h-64 sm:h-72 w-full">
                  <Image 
                    src={currentPod.image}
                    alt={currentPod.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E111B] via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-violet-500/40 text-[10px] font-mono text-violet-300">
                    BY SEQ · POD READY
                  </div>
                </div>

                {/* Specs below image */}
                <div className="p-5 bg-[#0E111B] border-t border-zinc-800/80 grid grid-cols-3 gap-3 text-center">
                  {Object.entries(currentPod.spec).map(([key, value]) => (
                    <div key={key} className="p-2.5 rounded-xl bg-black/40 border border-zinc-800/80">
                      <div className="text-[10px] text-zinc-400 font-mono uppercase">{key}</div>
                      <div className="text-xs font-bold text-white font-mono mt-0.5 line-clamp-1">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
