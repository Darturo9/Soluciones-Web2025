'use client';

import { useEffect } from 'react';

// IDs de tus videos de TikTok - actualiza estos con tus videos reales
const tiktokVideos: string[] = [
  // Agrega aqui los IDs de tus videos de TikTok
  // Ejemplo: '7123456789012345678'
];

export default function ContenidoPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 border border-gray-700 rounded-full text-gray-400 text-sm font-medium tracking-wide">
            Contenido
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Videos y
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              contenido educativo
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Tips, tutoriales y contenido sobre tecnologia, automatizacion y desarrollo
          </p>
        </div>
      </section>

      {/* TikTok Profile Link */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <a
            href="https://www.tiktok.com/@solucionesweb2025"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">@solucionesweb2025</h3>
                <p className="text-gray-400 text-sm">Siguenos en TikTok</p>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {tiktokVideos.length === 0 ? (
            <div className="text-center py-20 bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl border border-gray-800">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proximamente</h3>
              <p className="text-gray-400 mb-6">
                Estamos preparando contenido para ti. Mientras tanto, siguenos en TikTok.
              </p>
              <a
                href="https://www.tiktok.com/@solucionesweb2025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                Ir a TikTok
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tiktokVideos.map((videoId) => (
                <div key={videoId} className="flex justify-center">
                  <blockquote
                    className="tiktok-embed"
                    cite={`https://www.tiktok.com/@solucionesweb2025/video/${videoId}`}
                    data-video-id={videoId}
                    style={{ maxWidth: '325px', minWidth: '280px' }}
                  >
                    <section></section>
                  </blockquote>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Quieres ver este contenido aplicado a tu negocio?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Conversemos sobre como podemos automatizar tus procesos
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Contactar
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
