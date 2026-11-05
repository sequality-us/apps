'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Cómo apoya ConstrucPod a contratistas certificados MBE como Advance Contractor Group (ACG)?',
      a: 'ConstrucPod automatiza los requerimientos de cumplimiento que demandan las agencias gubernamentales y clientes corporativos en EE.UU.: cálculo de cuotas de subcontratación minoritaria (MBE Goals), generación de nóminas certificadas (Davis-Bacon Act / Certified Payroll) y documentación auditable en tiempo real para licitaciones públicas y privadas sin fricción burocrática.'
    },
    {
      q: '¿Cómo logra el agente de IA predecir cuellos de botella de 7 a 14 días antes?',
      a: 'El motor predictivo correlaciona cuatro fuentes críticas en tiempo real: 1) Avance físico medido por visión computacional en el sitio, 2) Lead times y confirmaciones de despacho de distribuidores de materiales (ej. HVAC, tableros eléctricos, carpintería), 3) Agendas de inspecciones municipales y permisos de la ciudad, y 4) Cronograma BIM/Gantt de dependencias entre oficios.'
    },
    {
      q: '¿Qué equipamiento o cámaras se necesitan en obra?',
      a: 'Ningún hardware propietario costoso. ConstrucPod es 100% agnóstico: puede conectarse a cualquier cámara IP convencional (Axis, Hikvision, Lorex), imágenes de drones comerciales (DJI, Skydio), o simplemente a las fotos y videos capturados desde los teléfonos móviles de superintendentes y técnicos de campo a través de nuestra Web App.'
    },
    {
      q: '¿Se integra con Procore, Autodesk Construction Cloud y software existente?',
      a: 'Sí. Contamos con conectores nativos y webhooks para Procore, Autodesk BIM 360, PlanGrid, ProEst y QuickBooks. Las bitácoras diarias y las alertas de cuello de botella se sincronizan automáticamente con tus proyectos existentes sin necesidad de cambiar tu software de cabecera.'
    },
    {
      q: '¿Cómo funciona el módulo de Facility Services para propiedades comerciales y residenciales?',
      a: 'El módulo procesa órdenes de trabajo tanto para inmuebles corporativos (HVAC, chiller, sistemas contra incendios) como comunidades residenciales (fontanería, pintura, remodelaciones). Realiza un triage inteligente de severidad y despacha automáticamente al técnico certificado más cercano según GPS, especialidad y SLA.'
    },
    {
      q: '¿Qué ocurre con la propiedad de las fotos, planos BIM y datos de obra?',
      a: 'Todos los datos, planos BIM y fotografías pertenecen 100% al contratista y a sus clientes. Toda la información se procesa en infraestructura segura en EE.UU. con cifrado AES-256 en reposo y TLS 1.3 en tránsito, cumpliendo con estándares SOC-2 Type II.'
    }
  ];

  return (
    <section className="py-24 bg-[#090B10] border-t border-zinc-850 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-400 mb-3 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Todo lo que Necesitas Saber para Empezar
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3">
            Respuestas directas sobre implementación, compatibilidad con contratistas MBE y despliegue en campo.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="rounded-xl bg-[#0B0D14] border border-zinc-800/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-violet-400 shrink-0 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-850/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
