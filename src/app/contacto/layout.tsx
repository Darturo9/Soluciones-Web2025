import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta con Soluciones Web para tu proyecto de desarrollo de software, automatizaciones o integraciones. Respuesta en 24 horas.',
  openGraph: {
    title: 'Contacto | Soluciones Web',
    description: 'Contacta con Soluciones Web para tu proyecto de desarrollo de software.',
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
