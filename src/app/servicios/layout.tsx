import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Desarrollo de sistemas a medida, automatizaciones, integraciones API y soluciones de IA para empresas. Software personalizado que transforma negocios.',
  openGraph: {
    title: 'Servicios | Soluciones Web',
    description: 'Desarrollo de sistemas a medida, automatizaciones, integraciones API y soluciones de IA para empresas.',
  },
};

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
