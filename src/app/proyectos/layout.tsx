import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portafolio de Proyectos',
  description: 'Portafolio de proyectos de desarrollo web y software personalizado. Sitios profesionales, sistemas a medida y automatizaciones para empresas en Guatemala.',
  keywords: [
    'portafolio desarrollo web',
    'proyectos web Guatemala',
    'casos de éxito software',
    'sitios web empresariales',
    'desarrollo Next.js Guatemala',
    'automatizaciones empresariales',
    'sistemas personalizados',
  ],
  alternates: {
    canonical: 'https://www.solucionesweb-2025.com/proyectos',
  },
  openGraph: {
    title: 'Portafolio de Proyectos | Soluciones Web',
    description: 'Conoce nuestros proyectos de desarrollo web y software personalizado para empresas.',
    url: 'https://www.solucionesweb-2025.com/proyectos',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Proyectos de Soluciones Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portafolio de Proyectos | Soluciones Web',
    description: 'Conoce nuestros proyectos de desarrollo web y software personalizado.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ProyectosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
