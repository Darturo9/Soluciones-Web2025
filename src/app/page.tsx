'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Software que impulsa
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
              el crecimiento de tu negocio
            </span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-10">
            Desarrollamos sistemas a medida, automatizaciones e integraciones que transforman la operación de empresas que buscan escalar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Agendar Consulta
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/servicios"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-gray-300 rounded-lg text-lg font-medium hover:bg-gray-800 hover:border-gray-600 transition-colors"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">Rapido</div>
              <div className="text-gray-500">Desarrollo agil y entregas iterativas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">Moderno</div>
              <div className="text-gray-500">Stack actualizado y mejores practicas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">Soporte</div>
              <div className="text-gray-500">Acompanamiento continuo post-lanzamiento</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Lo que hacemos
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Soluciones tecnicas que resuelven problemas reales de negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-500">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Automatizaciones</h3>
              <p className="text-gray-400">
                Eliminamos tareas repetitivas conectando tus herramientas y creando flujos de trabajo inteligentes.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-500">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Sistemas a Medida</h3>
              <p className="text-gray-400">
                Aplicaciones disenadas especificamente para tu operacion. Sin plantillas ni limitaciones.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-emerald-500/50 transition-all duration-500">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">APIs e Integraciones</h3>
              <p className="text-gray-400">
                Conectamos sistemas que no fueron disenados para hablar entre si. Puentes de datos seguros y eficientes.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/servicios"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              Ver todos los servicios
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Tienes un proyecto en mente?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Conversemos sobre como podemos ayudarte a llevarlo a la realidad
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Iniciar Conversacion
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
