'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Qué es By SEQ?',
      a: 'Es la plataforma de inteligencia artificial desarrollada por Software Enterprise Quality (SEQ) para automatizar el control de obras, bitácoras diarias y prevención predictiva de retrasos en tiempo real.'
    },
    {
      q: '¿Cómo predice la IA los cuellos de botella con 7 a 14 días de anticipación?',
      a: 'Correlaciona el avance físico por visión computacional, los tiempos de entrega de distribuidores y el cronograma BIM para alertar antes de que ocurra el retraso.'
    },
    {
      q: '¿Qué equipamiento se necesita en obra?',
      a: 'No requiere hardware propietario. Funciona con fotos desde el móvil de los supervisores, cámaras IP estándar o imágenes de drones comerciales.'
    },
    {
      q: '¿Se integra con Procore, Autodesk y otros sistemas?',
      a: 'Sí, sincronización bidireccional con Procore, Autodesk Construction Cloud, BIM y ERPs sin cambiar tus herramientas actuales.'
    },
    {
      q: '¿Cómo funciona para facility services y mantenimiento?',
      a: 'Clasifica automáticamente las órdenes de trabajo por severidad y despacha al técnico calificado más cercano según SLA.'
    },
    {
      q: '¿Quién es dueño de los datos y fotografías?',
      a: 'Toda la información, fotos y planos pertenecen 100% a tu empresa, protegidos con cifrado de grado empresarial AES-256.'
    }
  ];

  return (
    <section className="py-16 bg-[#090B10] border-t border-zinc-850 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-400 mb-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Respuestas claras sobre la plataforma y su implementación en obra.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="rounded-xl bg-[#0B0D14] border border-zinc-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-850/50 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base text-white">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform shrink-0 ${isOpen ? 'rotate-180 text-violet-400' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-850/60 mt-1">
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
