import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Impulsamos tu negocio con
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
                {" "}soluciones web{" "}
              </span>
              innovadoras
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Desarrollamos software web personalizado para negocios locales que buscan
              crecer, automatizar procesos y destacar en el mundo digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Consulta Gratuita
              </a>
              <a
                href="/servicios"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Stats - Actualizar con emojis animados */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <div className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Desarrollo Rápido</div>
              <div className="text-gray-600 dark:text-gray-400">Entrega en tiempo récord</div>
            </div>
            <div className="text-center group">
              <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <div className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Tecnología Moderna</div>
              <div className="text-gray-600 dark:text-gray-400">Stack actualizado y potente</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Soporte Técnico</div>
              <div className="text-gray-600 dark:text-gray-400">Siempre disponibles para ti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ofrecemos soluciones completas para digitalizar y potenciar tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Sitios Web Profesionales</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Diseños modernos y responsivos que reflejan la identidad de tu marca y convierten visitantes en clientes.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🛒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">E-commerce</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tiendas online completas con gestión de inventario, pagos seguros y administración fácil.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Automatización</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Sistemas que automatizan procesos repetitivos y mejoran la eficiencia de tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-700 via-gray-800 to-slate-900 dark:from-slate-800 dark:via-gray-900 dark:to-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Listo para impulsar tu negocio?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Obtén una consulta gratuita y descubre cómo podemos ayudarte a crecer
          </p>
          <a
            href="/contacto"
            className="inline-block bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Contactar Ahora
          </a>
        </div>
      </section>
    </div>
  );
}
