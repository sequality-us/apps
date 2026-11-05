import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ConstrucPod AI · Software Enterprise Quality (SEQ)',
  description:
    'Plataforma de IA para la gestión de obras y facility services. Monitoreo en tiempo real y prevención predictiva de retrasos por Software Enterprise Quality (SEQ).',
  openGraph: {
    title: 'ConstrucPod AI · Software Enterprise Quality (SEQ)',
    description:
      'Agentes de IA para control de obras, mantenimiento de instalaciones y prevención de cuellos de botella.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ConstrucPod AI · Software Enterprise Quality (SEQ)',
    description:
      'Agentes de IA para control de obras, mantenimiento de instalaciones y prevención de cuellos de botella.',
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
