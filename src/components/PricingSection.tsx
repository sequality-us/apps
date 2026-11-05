'use client';

import React, { useState } from 'react';
import { Check, Zap, Sparkles, Building2, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onOpenDemo: (initialData?: { company?: string; intent?: string }) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDemo }) => {
  const [annualBilling, setAnnualBilling] = useState<boolean>(true);

  const plans = [
    {
      id: 'starter',
      name: 'Starter Site Pod',
      tag: 'CONTRATISTAS EN CRECIMIENTO',
      monthlyPrice: 490,
      annualPrice: 390,
      description: 'Ideal para remodeladores residenciales y pequeñas empresas de facility services.',
      features: [
        'Hasta 3 obras o proyectos activos simultáneos',
        '100 órdenes de trabajo mensuales de facility services',
        'Bitácora Diaria (Daily Log) 100% automatizada a las 17:00',
        'Detección básica de cuellos de botella (7 días de anticipación)',
        'Acceso móvil para superintendentes y técnicos',
        'Reportes ejecutivos en PDF y Markdown'
      ],
      popular: false,
      ctaText: 'Iniciar con Starter Pod',
      badge: null
    },
    {
      id: 'scale',
      name: 'Scale Pod',
      tag: 'RECOMENDADO PARA CONTRATISTAS MBE',
      monthlyPrice: 990,
      annualPrice: 790,
      description: 'La opción predilecta para contratistas generales y facility services comerciales como Advance Contractor Group.',
      features: [
        'Hasta 10 obras activas en simultáneo',
        'Órdenes de trabajo y despacho de facility ilimitadas',
        'Motor Predictivo Avanzado de Cuellos de Botella (14 días)',
        'Módulo Automatizado de Cumplimiento MBE y Davis-Bacon',
        'Sincronización bidireccional con Procore & Autodesk BIM',
        'Auditoría continua de seguridad OSHA y uso de EPP',
        'Triage y despacho geo-localizado de cuadrillas en < 3 min'
      ],
      popular: true,
      ctaText: 'Desplegar Scale Pod para ACG',
      badge: 'MÁS POPULAR · IDEAL ACG'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Cluster',
      tag: 'GRANDES DESARROLLADORES Y MULTI-ESTADO',
      monthlyPrice: 2490,
      annualPrice: 1990,
      description: 'Para contratistas con operaciones multi-estado, obras de gran escala y carteras comerciales extensas.',
      features: [
        'Obras y proyectos ilimitados en los 50 estados de EE.UU.',
        'Procesamiento prioritario de feeds de video 4K y drones',
        'Cluster de agentes de IA dedicado con latencia ultrabaja',
        'Soporte directo para licitaciones federales y estatales',
        'Gestor de cuenta técnico dedicado (TAM) en EE.UU.',
        'SLA 99.99% garantizado por contrato'
      ],
      popular: false,
      ctaText: 'Contactar a Ventas Enterprise',
      badge: null
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#08090E] relative overflow-hidden border-t border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-400 mb-3 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
            <Zap className="w-3.5 h-3.5" />
            <span>Precios Transparentes al Estilo RunPod</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Planes Claros, Sin Contratos Sorpresa
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            Paga solo por la capacidad y número de obras activas que necesitas. Escala o desactiva pods con total libertad según el ritmo de tus contratos.
          </p>

          {/* Billing Switch */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-xs sm:text-sm font-semibold ${!annualBilling ? 'text-white' : 'text-zinc-400'}`}>
              Facturación Mensual
            </span>
            <button
              onClick={() => setAnnualBilling(!annualBilling)}
              className="relative w-14 h-7 bg-zinc-800 rounded-full p-1 transition-colors cursor-pointer focus:outline-none"
              aria-label="Toggle annual billing discount"
            >
              <div 
                className={`w-5 h-5 bg-violet-500 rounded-full shadow-md transform transition-transform ${
                  annualBilling ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs sm:text-sm font-semibold flex items-center gap-1.5 ${annualBilling ? 'text-white' : 'text-zinc-400'}`}>
              Facturación Anual
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                20% OFF
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = annualBilling ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                  plan.popular
                    ? 'bg-[#0E121D] border-2 border-violet-500 shadow-[0_0_40px_rgba(139,92,246,0.25)]'
                    : 'bg-[#0B0D14] border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* Popular Pill */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-[11px] font-mono font-bold text-white shadow-lg tracking-wider">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="text-[11px] font-mono uppercase text-violet-400 font-bold mb-1">
                    {plan.tag}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-zinc-400 mb-6 leading-relaxed min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-zinc-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                        ${price}
                      </span>
                      <span className="text-xs text-zinc-400 font-mono">USD / mes</span>
                    </div>
                    {annualBilling && (
                      <div className="text-[11px] text-emerald-400 font-mono mt-1">
                        Facturado anualmente (ahorro de ${(plan.monthlyPrice - plan.annualPrice) * 12}/año)
                      </div>
                    )}
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-mono font-semibold text-zinc-300 uppercase">
                      Incluye:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span className="text-xs text-zinc-300 leading-normal">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onOpenDemo({ 
                    company: 'Advance Contractor Group', 
                    intent: `plan_${plan.id}_${annualBilling ? 'annual' : 'monthly'}` 
                  })}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                      : 'bg-zinc-850 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-750'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <div className="text-sm font-bold text-white">Garantía Piloto de 30 Días para Contratistas MBE</div>
              <div className="text-xs text-zinc-400 mt-0.5">Si no reduces al menos 3 cuellos de botella en tu primer mes, te devolvemos el 100% de la inversión.</div>
            </div>
          </div>
          <button
            onClick={() => onOpenDemo({ company: 'Advance Contractor Group', intent: 'pilot_guarantee' })}
            className="px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-white text-xs font-semibold border border-zinc-700 whitespace-nowrap cursor-pointer"
          >
            Conocer Condiciones del Piloto
          </button>
        </div>

      </div>
    </section>
  );
};
