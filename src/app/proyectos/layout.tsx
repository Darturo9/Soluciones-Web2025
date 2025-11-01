import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portafolio de Proyectos Exitosos | Soluciones Web 2025',
  description: 'Explora nuestro portafolio de proyectos web exitosos. Desarrollamos sitios web profesionales, tiendas online, aplicaciones y soluciones digitales personalizadas para empresas en Guatemala y Latinoamérica.',
  keywords: [
    'portafolio web',
    'proyectos web Guatemala',
    'desarrollo web profesional',
    'sitios web empresariales',
    'e-commerce Guatemala',
    'aplicaciones web',
    'diseño web moderno',
    'desarrollo Next.js',
    'soluciones digitales',
    'casos de éxito',
  ],
  authors: [{ name: 'Soluciones Web 2025' }],
  openGraph: {
    title: 'Nuestros Proyectos | Soluciones Web 2025',
    description: 'Transformando ideas en soluciones digitales exitosas. Conoce nuestros proyectos destacados.',
    type: 'website',
    locale: 'es_GT',
    siteName: 'Soluciones Web 2025',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portafolio de Proyectos | Soluciones Web 2025',
    description: 'Explora nuestros proyectos web exitosos y descubre cómo podemos ayudar a tu negocio.',
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
