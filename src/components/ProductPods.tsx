'use client';

import React, { useState } from 'react';
import { 
  Eye, 
  AlertOctagon, 
  Wrench, 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  Check, 
  Zap, 
  Layers, 
  Clock, 
  BarChart3, 
  Bot,
  Sparkles
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
      title: 'Agentes de Monitoreo de Obra en Tiempo Real',
      subtitle: 'Inspección visual continua que audita avances físicos, cuadrillas y calidad de ejecución.',
      description: 'Nuestros agentes ingieren feeds de cámaras fijas en obra, capturas 360°, drones y fotos tomadas por superintendentes en el terreno. Cruzan el avance físico milímetro a milímetro contra planos BIM y cronogramas de obra.',
      benefits: [
        'Generación 100% automática de Bitácoras Diarias (Daily Field Logs) a las 17:00',
        'Detección de presencia y conteo de cuadrillas por especialidad (HVAC, eléctrico, fontanería)',
        'Verificación continua de uso de EPP y cumplimiento de normativas de seguridad OSHA',
        'Sincronización bidireccional directa con Procore, Autodesk Construction Cloud y PlanGrid'
      ],
      spec: {
        latency: '< 1.2s análisis por imagen',
        accuracy: '99.4% precisión en cubicación',
        output: 'Reporte ejecutivo diario en PDF / JSON'
      },
      gradient: 'from-violet-600/20 to-purple-800/10',
      borderGlow: 'border-violet-500/40 hover:border-violet-400',
      icon: Eye
    },
    {
      id: 'bottleneck-pods',
      tag: 'INTELIGENCIA PREDICTIVA',
      title: 'Motor Autónomo de Detección de Cuellos de Botella',
      subtitle: 'Anticipa retrasos de suministros, interferencias de oficios y demoras de inspección de 7 a 14 días.',
      description: 'Los sobrecostos en construcción y remodelación ocurren cuando los problemas se descubren en el momento del montaje. El motor predictivo analiza la cadena de suministro, lead times de materiales, ventanas de permisos y dependencias entre contratistas.',
      benefits: [
        'Detección anticipada de escasez de materiales críticos y tiempos de entrega de distribuidores',
        'Detección temprana de interferencias espaciales entre ductos HVAC, fontanería y canalizaciones',
        'Recomendaciones automatizadas de reasignación con 1 clic (ej. proveedores locales alternativos)',
        'Protección activa de márgenes de utilidad: evita penalizaciones contractuales por retrasos'
      ],
      spec: {
        lookahead: '7 a 14 días de anticipación',
        savings: 'Promedio $18,500 ahorrados por obra',
        actionRate: '92% de mitigaciones ejecutadas con 1 clic'
      },
      gradient: 'from-cyan-600/20 to-blue-800/10',
      borderGlow: 'border-cyan-500/40 hover:border-cyan-400',
      icon: AlertOctagon
    },
    {
      id: 'facility-pods',
      tag: 'FACILITY SERVICES & DESPACHO',
      title: 'Gestión Integral de Mantenimiento Comercial y Residencial',
      subtitle: 'Triage automatizado con IA para órdenes de trabajo, despacho inteligente y SLA tracking.',
      description: 'Especialmente calibrado para las operaciones multifacéticas de empresas como Advance Contractor Group. Maneja desde reparaciones de emergencia y HVAC comercial hasta mantenimiento preventivo en comunidades residenciales.',
      benefits: [
        'Triage instantáneo de órdenes de trabajo (clasificación por severidad, oficio y SLA)',
        'Despacho geo-optimizado a técnicos certificados según ubicación, herramientas y ruta',
        'Bitácora digital con fotos antes/después y firma del cliente en el móvil del técnico',
        'Historial de activos para mantenimiento preventivo: reduce fallas de equipos en un 64%'
      ],
      spec: {
        dispatchTime: '< 3 minutos promedio',
        slaAdherence: '99.8% cumplimiento de respuesta',
        properties: 'Multi-propiedad comercial y residencial'
      },
      gradient: 'from-amber-600/20 to-orange-800/10',
      borderGlow: 'border-amber-500/40 hover:border-amber-400',
      icon: Wrench
    },
    {
      id: 'mbe-pods',
      tag: 'CUMPLIMIENTO & LICITACIONES',
      title: 'Motor de Cumplimiento MBE y Davis-Bacon Automatizado',
      subtitle: 'Auditoría continua de cuotas de subcontratación minoritaria y jornales certificados para EE.UU.',
      description: 'Advance Contractor Group (ACG) como contratista certificado MBE compite al más alto nivel en licitaciones públicas y corporativas. Este pod automatiza el cálculo de porcentajes de participación, nóminas certificadas y documentación de cumplimiento.',
      benefits: [
        'Cálculo continuo de cuotas MBE exigidas en contratos públicos y corporativos en EE.UU.',
        'Generación de reportes Davis-Bacon y nóminas certificadas listas para auditoría',
        'Dossier de solvencia y acreditaciones actualizado para licitaciones en 1 clic',
        'Transparencia total para clientes institucionales, entidades bancarias y aseguradoras'
      ],
      spec: {
        standards: 'National MSDC / Federal FAR compliant',
        timeSaved: '18 horas al mes por proyecto',
        auditReadiness: '100% auditable con trazabilidad criptográfica'
      },
      gradient: 'from-emerald-600/20 to-teal-800/10',
      borderGlow: 'border-emerald-500/40 hover:border-emerald-400',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="platform" className="py-24 bg-[#090B10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-400 mb-3 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Infraestructura Modular de Agentes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            La Suite Completa de Agentes de IA para Contratistas
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            Igual que RunPod ofrece pods de cómputo escalables bajo demanda, ConstrucPod despliega agentes autónomos especializados para cada frente de obra y mantenimiento.
          </p>
        </div>

        {/* Tab Selector on Desktop */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 p-1.5 rounded-xl bg-zinc-900/80 border border-zinc-800 max-w-4xl mx-auto">
          {pods.map((pod, idx) => {
            const Icon = pod.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={pod.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-zinc-400'}`} />
                <span className="hidden md:inline">{pod.title.split(' ')[0]} {pod.title.split(' ')[1]}</span>
                <span className="md:hidden">Pod {idx + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pod Featured Showcase */}
        {(() => {
          const currentPod = pods[activeTab];
          const Icon = currentPod.icon;
          return (
            <div className={`rounded-3xl bg-[#0B0D14] border ${currentPod.borderGlow} p-6 sm:p-10 shadow-2xl relative transition-all`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Detailed text & benefits */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-violet-400 mb-2">
                    <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                    <span>{currentPod.tag}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {currentPod.title}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-300 mb-6 font-medium leading-relaxed">
                    {currentPod.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-400 mb-8 leading-relaxed">
                    {currentPod.description}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="space-y-3 mb-8">
                    {currentPod.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <span className="text-xs sm:text-sm text-zinc-200">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA button */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenDemo({ company: 'Advance Contractor Group', intent: currentPod.id })}
                      className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all cursor-pointer"
                    >
                      <Zap className="w-4 h-4 text-amber-300" />
                      <span>Activar este Pod para ACG</span>
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

                {/* Right: Technical Spec Card */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-[#08090E] border border-zinc-800 p-6 space-y-5">
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-violet-400" />
                        </div>
                        <div>
                          <div className="text-xs font-mono text-zinc-400">ESPECIFICACIÓN TÉCNICA</div>
                          <div className="text-sm font-bold text-white">ConstrucPod Runtime v2.4</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        LIVE READY
                      </span>
                    </div>

                    {/* Spec details grid */}
                    <div className="space-y-4 text-xs font-mono">
                      {Object.entries(currentPod.spec).map(([key, val]) => (
                        <div key={key} className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-850 flex items-center justify-between">
                          <span className="text-zinc-400 uppercase tracking-wide text-[11px]">{key}:</span>
                          <span className="text-white font-bold">{val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Enterprise Quote / Note */}
                    <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-800/30 text-xs text-violet-200/90 leading-relaxed">
                      <strong className="text-violet-300 font-semibold block mb-1">
                        Diseñado para Contratistas Generales MBE:
                      </strong>
                      Elimina el 80% de la carga administrativa en campo y protege los márgenes operativos frente a penalizaciones por demoras en contratos públicos y privados.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

        {/* 4 Pods Quick Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {pods.map((p, index) => {
            const Icon = p.icon;
            return (
              <div 
                key={p.id}
                onClick={() => setActiveTab(index)}
                className={`p-6 rounded-2xl bg-[#0B0D14] border transition-all cursor-pointer ${
                  activeTab === index 
                    ? 'border-violet-500 bg-zinc-900/80 shadow-[0_0_20px_rgba(139,92,246,0.2)]' 
                    : 'border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/30'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 text-violet-400">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-mono text-violet-400 mb-1">{p.tag}</div>
                <h4 className="text-base font-bold text-white mb-2">{p.title}</h4>
                <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">{p.subtitle}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
