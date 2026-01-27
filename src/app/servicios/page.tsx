'use client';

export default function Servicios() {
    return (
        <div className="min-h-screen bg-gray-950">
            {/* Hero Section - Premium & Elegant */}
            <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                {/* Subtle gradient background */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-block mb-6 px-4 py-2 border border-gray-700 rounded-full text-gray-400 text-sm font-medium tracking-wide">
                        Desarrollo de Software a Medida
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Sistemas que
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                            Transforman Negocios
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        Automatizaciones inteligentes, integraciones complejas y sistemas personalizados que van más allá de lo que un CMS puede ofrecer
                    </p>
                </div>
            </section>

            {/* Diferenciador */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg text-gray-500 italic">
                        &ldquo;No construimos páginas web. Construimos soluciones de software que resuelven problemas reales de negocio.&rdquo;
                    </p>
                </div>
            </section>

            {/* Servicios Principales */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Automatizaciones */}
                        <div className="group bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-10 border border-gray-800 hover:border-blue-500/50 transition-all duration-500">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-blue-500/20 transition-colors">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Automatización de Procesos</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Eliminamos tareas repetitivas y conectamos tus herramientas para que trabajen en sincronía. Desde flujos de trabajo internos hasta integraciones con APIs externas.
                            </p>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-3 mt-1">—</span>
                                    Workflows automatizados con n8n y Make
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-3 mt-1">—</span>
                                    Integración con CRMs, ERPs y herramientas de productividad
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-3 mt-1">—</span>
                                    Bots y notificaciones inteligentes
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-3 mt-1">—</span>
                                    Sincronización de datos entre plataformas
                                </li>
                            </ul>
                        </div>

                        {/* Sistemas a Medida */}
                        <div className="group bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-10 border border-gray-800 hover:border-purple-500/50 transition-all duration-500">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-purple-500/20 transition-colors">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">Sistemas a Medida</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Aplicaciones web diseñadas específicamente para tu operación. Nada de plantillas ni limitaciones de plugins.
                            </p>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3 mt-1">—</span>
                                    Paneles de control y dashboards
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3 mt-1">—</span>
                                    Sistemas de gestión internos
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3 mt-1">—</span>
                                    Portales para clientes y proveedores
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-400 mr-3 mt-1">—</span>
                                    Herramientas de reportería y analytics
                                </li>
                            </ul>
                        </div>

                        {/* Integraciones */}
                        <div className="group bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-10 border border-gray-800 hover:border-emerald-500/50 transition-all duration-500">
                            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-emerald-500/20 transition-colors">
                                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">APIs e Integraciones</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Conectamos sistemas que no fueron diseñados para hablar entre sí. Creamos puentes de datos seguros y eficientes.
                            </p>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-emerald-400 mr-3 mt-1">—</span>
                                    Desarrollo de APIs RESTful y GraphQL
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-400 mr-3 mt-1">—</span>
                                    Webhooks y eventos en tiempo real
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-400 mr-3 mt-1">—</span>
                                    Integraciones con pasarelas de pago
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-400 mr-3 mt-1">—</span>
                                    Conexión con servicios de terceros
                                </li>
                            </ul>
                        </div>

                        {/* IA y Datos */}
                        <div className="group bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-2xl p-10 border border-gray-800 hover:border-amber-500/50 transition-all duration-500">
                            <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-amber-500/20 transition-colors">
                                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">IA y Procesamiento de Datos</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Implementamos soluciones con inteligencia artificial para automatizar decisiones y extraer valor de tus datos.
                            </p>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-amber-400 mr-3 mt-1">—</span>
                                    Chatbots y asistentes con IA
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-400 mr-3 mt-1">—</span>
                                    Procesamiento automático de documentos
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-400 mr-3 mt-1">—</span>
                                    Análisis predictivo y reportes inteligentes
                                </li>
                                <li className="flex items-start">
                                    <span className="text-amber-400 mr-3 mt-1">—</span>
                                    Integración con OpenAI, Claude y más
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Por qué no WordPress */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 border-y border-gray-800/50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">
                        ¿Por qué código personalizado?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-lg font-medium text-gray-300 flex items-center">
                                <span className="w-8 h-8 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center mr-3 text-sm">✕</span>
                                Lo que NO hacemos
                            </h3>
                            <ul className="space-y-4 text-gray-500">
                                <li className="flex items-start">
                                    <span className="mr-3">—</span>
                                    Sitios web genéricos con plantillas
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3">—</span>
                                    Landing pages que cualquiera puede hacer
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3">—</span>
                                    WordPress con 50 plugins
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3">—</span>
                                    Soluciones limitadas por el CMS
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-lg font-medium text-gray-300 flex items-center">
                                <span className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mr-3 text-sm">✓</span>
                                Lo que SÍ hacemos
                            </h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start">
                                    <span className="mr-3">—</span>
                                    Software que se adapta a tu proceso, no al revés
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3">—</span>
                                    Integraciones que antes eran imposibles
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3">—</span>
                                    Automatizaciones que ahorran horas de trabajo
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3">—</span>
                                    Sistemas escalables sin límites artificiales
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stack Tecnológico */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Stack Tecnológico
                        </h2>
                        <p className="text-gray-400">
                            Herramientas modernas para soluciones robustas
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: 'Next.js', desc: 'Framework React' },
                            { name: 'TypeScript', desc: 'Tipado seguro' },
                            { name: 'Supabase', desc: 'Backend & Auth' },
                            { name: 'PostgreSQL', desc: 'Base de datos' },
                            { name: 'n8n', desc: 'Automatizaciones' },
                            { name: 'OpenAI', desc: 'Inteligencia Artificial' },
                            { name: 'Vercel', desc: 'Infraestructura' },
                            { name: 'Stripe', desc: 'Pagos' },
                        ].map((tech) => (
                            <div key={tech.name} className="text-center p-6 rounded-xl bg-gray-900/50 border border-gray-800/50">
                                <h3 className="text-white font-medium mb-1">{tech.name}</h3>
                                <p className="text-gray-500 text-sm">{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proceso de Trabajo */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Cómo Trabajamos
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { num: '01', title: 'Descubrimiento', desc: 'Entendemos tu operación, puntos de dolor y objetivos' },
                            { num: '02', title: 'Diseño', desc: 'Arquitectura técnica y propuesta de solución' },
                            { num: '03', title: 'Desarrollo', desc: 'Construcción iterativa con entregas parciales' },
                            { num: '04', title: 'Evolución', desc: 'Soporte continuo y mejoras basadas en uso real' },
                        ].map((step) => (
                            <div key={step.num} className="relative">
                                <span className="text-5xl font-bold text-gray-800">{step.num}</span>
                                <h3 className="text-lg font-semibold text-white mt-4 mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        ¿Tienes un proceso que necesita automatizarse?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10">
                        Conversemos sobre cómo podemos optimizar tu operación con software a medida
                    </p>
                    <a
                        href="/contacto"
                        className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                        Agendar Consulta
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    );
}
