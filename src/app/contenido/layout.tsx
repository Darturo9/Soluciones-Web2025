import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Videos',
  description: 'Videos y contenido educativo sobre tecnologia, automatizacion y desarrollo de software. Tips y tutoriales en TikTok.',
  openGraph: {
    title: 'Videos | Soluciones Web',
    description: 'Videos y contenido educativo sobre tecnologia, automatizacion y desarrollo de software.',
  },
};

export default function ContenidoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
