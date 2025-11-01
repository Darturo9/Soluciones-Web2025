'use client';

export default function Servicios() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="inline-block mb-6 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-semibold">
                        Paquetes de Desarrollo Web
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        Soluciones Web
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            {" "}a tu Medida
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        Desarrollamos sitios web profesionales con Next.js y Supabase, adaptados a las necesidades de tu negocio con precios accesibles
                    </p>
                </div>
            </section>

            {/* Pricing Packages */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* PAQUETE BÁSICO */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 px-8 py-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">Paquete Básico</h3>
                                <p className="text-blue-100 text-sm">Ideal para negocios que inician</p>
                                <div className="mt-6">
                                    <span className="text-5xl font-bold">Q2,500</span>
                                    <span className="text-blue-100 ml-2">único pago</span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">Perfecto para:</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Restaurantes, cafeterías, negocios locales, servicios profesionales
                                    </p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Hasta 5 páginas (Inicio, Servicios, Nosotros, Contacto, etc.)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Diseño responsive (móvil, tablet, desktop)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Formulario de contacto funcional</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Integración con WhatsApp y redes sociales</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">SEO básico optimizado</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Optimización de velocidad</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Hosting gratis para siempre en Vercel</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Dominio .com gratis primer año</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">1 mes de soporte técnico</span>
                                    </li>
                                </ul>

                                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        <span className="font-semibold">Tiempo de entrega:</span> 7-10 días
                                    </p>
                                    <a
                                        href="/contacto"
                                        className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                                    >
                                        Solicitar Paquete
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* PAQUETE PROFESIONAL - DESTACADO */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border-4 border-purple-500 relative transform lg:scale-105 z-10">
                            <div className="absolute top-0 right-0 bg-purple-500 text-white px-6 py-2 text-sm font-bold rounded-bl-lg">
                                MÁS POPULAR
                            </div>
                            <div className="bg-gradient-to-br from-purple-600 to-purple-700 px-8 py-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">Paquete Profesional</h3>
                                <p className="text-purple-100 text-sm">Ideal para negocios en crecimiento</p>
                                <div className="mt-6">
                                    <span className="text-5xl font-bold">Q4,500</span>
                                    <span className="text-purple-100 ml-2">único pago</span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">Perfecto para:</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        E-commerce pequeño, empresas de servicios, portafolios profesionales
                                    </p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0 font-bold">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">Todo lo del Paquete Básico +</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Hasta 10 páginas personalizadas</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Panel de administración con Supabase</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Base de datos integrada</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Sistema de blog o catálogo de productos</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Autenticación de usuarios básica</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Galería de imágenes optimizada</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">SEO avanzado</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Google Analytics integrado</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Múltiples formularios personalizados</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">3 meses de soporte técnico</span>
                                    </li>
                                </ul>

                                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        <span className="font-semibold">Tiempo de entrega:</span> 15-20 días
                                    </p>
                                    <a
                                        href="/contacto"
                                        className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg"
                                    >
                                        Solicitar Paquete
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* PAQUETE PREMIUM */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:-translate-y-2">
                            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 px-8 py-6 text-white">
                                <h3 className="text-2xl font-bold mb-2">Paquete Premium</h3>
                                <p className="text-emerald-100 text-sm">Para negocios establecidos</p>
                                <div className="mt-6">
                                    <span className="text-5xl font-bold">Q7,500</span>
                                    <span className="text-emerald-100 ml-2">único pago</span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">Perfecto para:</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        E-commerce completo, plataformas empresariales, sistemas personalizados
                                    </p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <span className="text-emerald-500 mr-3 mt-1 flex-shrink-0 font-bold">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">Todo lo del Paquete Profesional +</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Páginas ilimitadas</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">E-commerce completo con carrito de compras</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Pasarela de pagos (Stripe/PayPal)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Sistema de gestión de inventario</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Panel administrativo avanzado</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Sistema de usuarios y roles</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Notificaciones por email automatizadas</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Reportes y analytics personalizados</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">API personalizada</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">Capacitación personalizada del sistema</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-emerald-500 mr-3 mt-1 flex-shrink-0">✓</span>
                                        <span className="text-gray-700 dark:text-gray-300">6 meses de soporte técnico premium</span>
                                    </li>
                                </ul>

                                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        <span className="font-semibold">Tiempo de entrega:</span> 25-30 días
                                    </p>
                                    <a
                                        href="/contacto"
                                        className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                                    >
                                        Solicitar Paquete
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Nota de personalización */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            ¿Necesitas algo diferente? Todos nuestros paquetes pueden personalizarse según tus necesidades específicas.
                            <a href="/contacto" className="text-blue-600 dark:text-blue-400 font-semibold ml-1 hover:underline">
                                Contáctanos para una cotización personalizada
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Características Técnicas */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Tecnología de Vanguardia
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Todos nuestros paquetes incluyen las mejores tecnologías del mercado
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Next.js 15</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Framework React de última generación para máximo rendimiento
                            </p>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                            <div className="text-4xl mb-4">🗄️</div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Supabase</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Base de datos PostgreSQL escalable y segura
                            </p>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                            <div className="text-4xl mb-4">🎨</div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Tailwind CSS</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Diseños modernos y totalmente personalizables
                            </p>
                        </div>

                        <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Vercel</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Hosting ultra rápido con SSL y CDN global incluido
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Garantías y Beneficios */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Nuestras Garantías
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <span className="text-3xl">💯</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                Satisfacción Garantizada
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Revisiones ilimitadas hasta que estés 100% satisfecho con el resultado
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                Entrega a Tiempo
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Cumplimos con los plazos establecidos o te devolvemos tu dinero
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <span className="text-3xl">🔒</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                Código de Calidad
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Código limpio, documentado y fácil de mantener para el futuro
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Preguntas Frecuentes
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                ¿Qué incluye el hosting gratis?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Todos los paquetes incluyen hosting en Vercel completamente gratis el primer año, con SSL, CDN global y despliegues ilimitados. No hay costos ocultos.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                ¿Puedo solicitar cambios después de la entrega?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Sí, durante el período de soporte técnico incluido en tu paquete puedes solicitar ajustes y correcciones sin costo adicional.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                ¿Qué pasa después del período de soporte?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Puedes contratar un plan de mantenimiento mensual desde Q250 que incluye actualizaciones, soporte técnico y mejoras continuas.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                ¿Ofrecen opciones de pago?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Sí, aceptamos pagos en 2-3 cuotas sin intereses. 50% al iniciar, 50% al entregar (o dividido en 3 pagos para el paquete Premium).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Final */}
            <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                        ¿Listo para llevar tu negocio al siguiente nivel?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Obtén una consulta gratuita y descubre cuál paquete es perfecto para ti
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contacto"
                            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            Consulta Gratuita
                        </a>
                        <a
                            href="/proyectos"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                        >
                            Ver Proyectos Realizados
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
