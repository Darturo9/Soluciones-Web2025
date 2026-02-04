import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios de Desarrollo de Software',
  description: 'Automatización de procesos, sistemas a medida, APIs e integraciones, IA y procesamiento de datos. Desarrollo de software personalizado para empresas en Guatemala.',
  keywords: [
    'automatización de procesos Guatemala',
    'sistemas a medida',
    'desarrollo de APIs',
    'integraciones empresariales',
    'chatbots IA',
    'desarrollo software empresarial',
  ],
  alternates: {
    canonical: 'https://www.solucionesweb-2025.com/servicios',
  },
  openGraph: {
    title: 'Servicios de Desarrollo de Software | Soluciones Web',
    description: 'Automatización de procesos, sistemas a medida, APIs e integraciones, IA y procesamiento de datos para empresas.',
    url: 'https://www.solucionesweb-2025.com/servicios',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Servicios de Soluciones Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de Desarrollo de Software | Soluciones Web',
    description: 'Automatización de procesos, sistemas a medida, APIs e integraciones, IA y procesamiento de datos.',
    images: ['/logo.png'],
  },
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
