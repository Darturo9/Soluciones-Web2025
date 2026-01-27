'use client';

export default function Nosotros() {
    return (
        <div className="min-h-screen bg-gray-950">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-block mb-6 px-4 py-2 border border-gray-700 rounded-full text-gray-400 text-sm font-medium tracking-wide">
                        Sobre Nosotros
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
                        Transformamos ideas en
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            software que funciona
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Somos un equipo dedicado a crear soluciones tecnologicas que impulsan el crecimiento de negocios.
                    </p>
                </div>
            </section>

            {/* Historia */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">
                                Nuestra Historia
                            </h2>
                            <div className="space-y-4 text-gray-400">
                                <p className="leading-relaxed">
                                    <span className="text-white font-medium">Soluciones Web</span> nacio en 2025
                                    con una vision clara: ofrecer desarrollo de software de alta calidad
                                    para negocios que necesitan mas que una simple pagina web.
                                </p>
                                <p className="leading-relaxed">
                                    Nos especializamos en crear sistemas a medida, automatizaciones
                                    e integraciones que realmente transforman la operacion de nuestros clientes.
                                </p>
                                <p className="leading-relaxed">
                                    Creemos que cada negocio tiene desafios unicos que requieren
                                    soluciones personalizadas, no plantillas genericas.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-10 border border-gray-800">
                            <div className="space-y-6">
                                <div>
                                    <div className="text-4xl font-bold text-white mb-1">2025</div>
                                    <div className="text-gray-500">Ano de fundacion</div>
                                </div>
                                <div className="border-t border-gray-800 pt-6">
                                    <div className="text-4xl font-bold text-white mb-1">Guatemala</div>
                                    <div className="text-gray-500">Base de operaciones</div>
                                </div>
                                <div className="border-t border-gray-800 pt-6">
                                    <div className="text-4xl font-bold text-white mb-1">LATAM</div>
                                    <div className="text-gray-500">Alcance regional</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Valores */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Nuestros Principios
                        </h2>
                        <p className="text-gray-400">
                            Lo que guia cada proyecto que desarrollamos
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-8 border border-gray-800">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Calidad sobre cantidad</h3>
                            <p className="text-gray-400">
                                Preferimos hacer menos proyectos pero entregarlos con la mas alta calidad y atencion al detalle.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-8 border border-gray-800">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Comunicacion directa</h3>
                            <p className="text-gray-400">
                                Sin intermediarios ni burocracia. Trabajas directamente con quien desarrolla tu proyecto.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-8 border border-gray-800">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Resultados medibles</h3>
                            <p className="text-gray-400">
                                Cada solucion que creamos esta disenada para generar impacto real y cuantificable en tu negocio.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mision y Vision */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-10 border border-gray-800">
                            <div className="text-sm text-blue-400 font-medium mb-4 uppercase tracking-wider">Mision</div>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Desarrollar software de alta calidad que resuelva problemas reales de negocio,
                                permitiendo a nuestros clientes operar de forma mas eficiente y escalar sin limitaciones tecnicas.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-10 border border-gray-800">
                            <div className="text-sm text-purple-400 font-medium mb-4 uppercase tracking-wider">Vision</div>
                            <p className="text-xl text-gray-300 leading-relaxed">
                                Ser el socio tecnologico de referencia para empresas en crecimiento que buscan
                                soluciones de software personalizadas y de alto impacto.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Trabajemos juntos
                    </h2>
                    <p className="text-xl text-gray-400 mb-10">
                        Cuentanos sobre tu proyecto y exploremos como podemos ayudarte
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contacto"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
                        >
                            Contactar
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href="/proyectos"
                            className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-gray-300 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
                        >
                            Ver Proyectos
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
