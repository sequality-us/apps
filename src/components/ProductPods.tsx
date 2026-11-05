'use client';

import React, { useState } from 'react';
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
      subtitle: 'Auditoría visual continua de avances físicos, cuadrillas y calidad de ejecución.',
      description: 'Analiza cámaras fijas, fotos de campo y drones contra planos BIM para validar el avance exacto sin visitas manuales.',
      benefits: [
        'Generación automática de bitácoras diarias de campo',
        'Conteo y presencia de cuadrillas por especialidad',
        'Verificación continua de seguridad y uso de EPP',
        'Sincronización con Procore, Autodesk y BIM'
      ],
      spec: {
        latency: '< 1.2s análisis por imagen',
        accuracy: '99.4% precisión',
        output: 'Reporte diario en PDF / JSON'
      },
      gradient: 'from-violet-600/20 to-purple-800/10',
      borderGlow: 'border-violet-500/40 hover:border-violet-400',
      icon: Eye
    },
    {
      id: 'bottleneck-pods',
      tag: 'INTELIGENCIA PREDICTIVA',
      title: 'Detección de Cuellos de Botella',
      subtitle: 'Anticipa retrasos de suministros, interferencias y permisos de 7 a 14 días.',
      description: 'Predice cuellos de botella en la cadena de suministros e interferencias entre cuadrillas antes de que detengan la obra.',
      benefits: [
        'Detección anticipada de falta de materiales críticos',
        'Identificación temprana de interferencias espaciales',
        'Recomendaciones automáticas de proveedores alternativos',
        'Protección contra penalizaciones por retraso'
      ],
      spec: {
        lookahead: '7 a 14 días de anticipación',
        savings: 'Ahorro promedio significativo por obra',
        actionRate: 'Mitigación en 1 clic'
      },
      gradient: 'from-cyan-600/20 to-blue-800/10',
      borderGlow: 'border-cyan-500/40 hover:border-cyan-400',
      icon: AlertOctagon
    },
    {
      id: 'facility-pods',
      tag: 'FACILITY SERVICES & DESPACHO',
      title: 'Mantenimiento Comercial y Residencial',
      subtitle: 'Triage de órdenes de trabajo, despacho inteligente y SLA tracking.',
      description: 'Centraliza reparaciones urgentes, climatización HVAC y mantenimiento preventivo para inmuebles comerciales y residenciales.',
      benefits: [
        'Triage automático clasificado por severidad y oficio',
        'Despacho geo-optimizado a técnicos calificados',
        'Bitácora digital con fotos y firma móvil del cliente',
        'Historial de activos para mantenimiento preventivo'
      ],
      spec: {
        dispatchTime: '< 3 minutos promedio',
        slaAdherence: '99.8% cumplimiento',
        properties: 'Comercial y residencial'
      },
      gradient: 'from-amber-600/20 to-orange-800/10',
      borderGlow: 'border-amber-500/40 hover:border-amber-400',
      icon: Wrench
    },
    {
      id: 'mbe-pods',
      tag: 'CUMPLIMIENTO & AUDITORÍA',
      title: 'Auditoría Normativa y Licitaciones',
      subtitle: 'Control continuo de certificaciones, nóminas y requerimientos normativos.',
      description: 'Automatiza el cumplimiento normativo exigido en contratos públicos y privados sin sobrecarga administrativa.',
      benefits: [
        'Cálculo continuo de porcentajes y cuotas normativas',
        'Nóminas certificadas listas para auditoría',
        'Dossier de acreditaciones actualizado para licitaciones',
        'Trazabilidad auditable para clientes y aseguradoras'
      ],
      spec: {
        standards: 'Normativas federales y estatales',
        timeSaved: '18 horas al mes por proyecto',
        auditReadiness: '100% auditable'
      },
      gradient: 'from-emerald-600/20 to-teal-800/10',
      borderGlow: 'border-emerald-500/40 hover:border-emerald-400',
      icon: ShieldCheck
    }
  ];

  const currentPod = pods[activeTab];
  const IconComponent = currentPod.icon;

  return (
    <section id="platform" className="py-16 bg-[#08090E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-xs font-mono text-violet-300 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Módulos de IA · Software Enterprise Quality (SEQ)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tecnología Modular para la Construcción Moderna
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Elige el pod que tu obra necesita y conéctalo a tus flujos de trabajo actuales.
          </p>
        </div>

        {/* Pod Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-8">
          {pods.map((pod, idx) => {
            const isSelected = activeTab === idx;
            const TabIcon = pod.icon;
            return (
              <button
                key={pod.id}
                onClick={() => setActiveTab(idx)}
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-zinc-850/90 border-violet-500/70 shadow-[0_0_20px_rgba(139,92,246,0.2)]'
                    : 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-850/40 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isSelected ? 'bg-violet-600/30 text-violet-300' : 'bg-zinc-800 text-zinc-400'
                  }`}>
                    <TabIcon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">0{idx + 1}</span>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-violet-400 font-semibold mb-0.5">
                    {pod.tag.split('&')[0]}
                  </div>
                  <div className="text-xs font-bold text-white line-clamp-1">
                    {pod.title.split(' ')[0]} {pod.title.split(' ')[1]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pod Detailed View */}
        <div className="rounded-2xl bg-[#0B0D14] border border-zinc-800 p-6 lg:p-8 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                <IconComponent className="w-3.5 h-3.5 text-violet-400" />
                <span>{currentPod.tag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {currentPod.title}
              </h3>

              <p className="text-base font-medium text-violet-200/90">
                {currentPod.subtitle}
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed">
                {currentPod.description}
              </p>

              {/* Benefits checklist */}
              <div className="space-y-2 pt-2">
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
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenDemo({ company: 'Software Enterprise Quality', intent: currentPod.id })}
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
                  Ver simulación de cuellos de botella →
                </button>
              </div>
            </div>

            {/* Right Specs Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#0E111B] border border-zinc-800 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 pb-2 border-b border-zinc-800">
                  Métricas de Desempeño
                </div>
                {Object.entries(currentPod.spec).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between py-2 border-b border-zinc-850 text-xs">
                    <span className="text-zinc-400 capitalize">{key}:</span>
                    <span className="font-semibold text-white font-mono">{value}</span>
                  </div>
                ))}
                <div className="pt-2 text-[11px] text-zinc-500 font-mono">
                  Supervisado por Software Enterprise Quality (SEQ)
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
