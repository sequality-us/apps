import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ConstrucPod AI · Plataforma de IA para Gestión de Obras y Facility Services',
  description:
    'Plataforma SaaS automatizada con inteligencia artificial para la gestión de obras y facility services. Monitoreo en tiempo real, agentes autónomos y detección de cuellos de botella para contratistas MBE y empresas como Advance Contractor Group.',
  openGraph: {
    title: 'ConstrucPod AI · Plataforma de IA para Gestión de Obras y Facility Services',
    description:
      'Infraestructura de agentes de IA para el monitoreo de obras, mantenimiento integral y predicción de cuellos de botella operativos en tiempo real.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ConstrucPod AI · Plataforma de IA para Gestión de Obras y Facility Services',
    description:
      'Infraestructura de agentes de IA para el monitoreo de obras, mantenimiento integral y predicción de cuellos de botella operativos en tiempo real.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-[#08090E] text-[#F3F4F6] overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
