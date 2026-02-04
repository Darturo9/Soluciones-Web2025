import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta con Soluciones Web para tu proyecto de desarrollo de software, automatizaciones o integraciones en Guatemala. Respuesta en 24 horas.',
  keywords: [
    'contacto desarrollo software Guatemala',
    'cotización desarrollo web',
    'consultoría software',
    'presupuesto desarrollo web',
  ],
  alternates: {
    canonical: 'https://www.solucionesweb-2025.com/contacto',
  },
  openGraph: {
    title: 'Contacto | Soluciones Web',
    description: 'Contacta con Soluciones Web para tu proyecto de desarrollo de software, automatizaciones o integraciones.',
    url: 'https://www.solucionesweb-2025.com/contacto',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Contacto Soluciones Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto | Soluciones Web',
    description: 'Contacta con Soluciones Web para tu proyecto de desarrollo de software.',
    images: ['/logo.png'],
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
