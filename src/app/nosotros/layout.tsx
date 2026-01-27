import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce al equipo detras de Soluciones Web. Desarrolladores especializados en sistemas a medida y automatizaciones para empresas.',
  openGraph: {
    title: 'Nosotros | Soluciones Web',
    description: 'Conoce al equipo detras de Soluciones Web. Desarrolladores especializados en sistemas a medida.',
  },
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
