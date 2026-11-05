import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'By SEQ · AI Cloud para Obras y Facility Services',
  description:
    'Plataforma de inteligencia artificial para control de obras, facility services y predicción de retrasos en tiempo real por Software Enterprise Quality (SEQ).',
  openGraph: {
    title: 'By SEQ · AI Cloud para Obras y Facility Services',
    description:
      'Agentes de IA para control de obras, mantenimiento de infraestructura y prevención de cuellos de botella.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'By SEQ · AI Cloud para Obras y Facility Services',
    description:
      'Agentes de IA para control de obras, mantenimiento de infraestructura y prevención de cuellos de botella.',
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
