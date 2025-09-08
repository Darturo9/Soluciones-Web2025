'use client';
import Image from 'next/image';

export default function Servicios() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Nuestros
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
                            {" "}Servicios
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Ofrecemos soluciones web completas y personalizadas para impulsar
                        tu negocio hacia el éxito digital
                    </p>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Service 1 - Sitios Web */}
                        <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-800/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white text-3xl">🌐</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                                    Sitios Web Profesionales
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                                    Diseños modernos, responsivos y optimizados para convertir visitantes en clientes
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                                        <span className="text-emerald-500 mr-3">✓</span>
                                        Diseño responsive (móvil, tablet, desktop)
                                    </li>
                                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                                        <span className="text-emerald-500 mr-3">✓</span>
                                        Optimización SEO básica
                                    </li>
                                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                                        <span className="text-emerald-500 mr-3">✓</span>
                                        Formularios de contacto
                                    </li>
                                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                                        <span className="text-emerald-500 mr-3">✓</span>
                                        Integración con redes sociales
                                    </li>
                                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                                        <span className="text-emerald-500 mr-3">✓</span>
                                        Panel de administración
                                    </li>
                                </ul>

                                <div className="text-center">
                                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md">
                                        Solicitar Cotización
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Service 2 - E-commerce */}
                        <div className="group relative bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-emerald-800/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white text-3xl">🛒</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                                    Tiendas Online
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                                    E-commerce completo con gestión de inventario y pagos seguros
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                                        <span className="text-emerald-500 mr-3">✓</span>
                                        Catálogo de productos ilimitados
                                    </li>
                                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                                        <span className="text-emerald-500 mr-3">✓</span>
                                        Carrito de compras avanzado
                                    </li>
                                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                                        <span className="text-emerald-500 mr-3">✓</span>
                                        Pasarelas de pago seguras
                                    </li>
                                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                                        <span className="text-emerald-500 mr-3">✓</span>
                                        Gestión de inventario
                                    </li>
                                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                                        <span className="text-emerald-500 mr-3">✓</span>
                                        Reportes de ventas
                                    </li>
                                </ul>

                                <div className="text-center">
                                    <button className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors font-medium shadow-md">
                                        Solicitar Cotización
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Service 3 - Automatización */}
                        <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-800/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white text-3xl">⚡</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                                    Automatización
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                                    Sistemas que automatizan procesos y mejoran la eficiencia
                                </p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                                        <span className="text-emerald-500 mr-3">✓</span>
                                        Automatización de emails
                                    </li>
                                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                                        <span className="text-emerald-500 mr-3">✓</span>
                                        Integración con APIs
                                    </li>
                                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                                        <span className="text-emerald-500 mr-3">✓</span>
                                        Sistemas de notificaciones
                                    </li>
                                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                                        <span className="text-emerald-500 mr-3">✓</span>
                                        Backup automático
                                    </li>
                                    <li className="flex items-center text-gray-700 dark:text-gray-300">
                                        <span className="text-emerald-500 mr-3">✓</span>
                                        Reportes automatizados
                                    </li>
                                </ul>

                                <div className="text-center">
                                    <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-md">
                                        Solicitar Cotización
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Servicios Adicionales
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Complementa tu solución web con servicios especializados
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Additional Service 1 */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <span className="text-2xl">📱</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Aplicaciones Móviles
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Apps nativas y web progresivas para iOS y Android
                            </p>
                        </div>

                        {/* Additional Service 2 */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <span className="text-2xl">🔧</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Mantenimiento Web
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Actualizaciones, backup y soporte técnico continuo
                            </p>
                        </div>

                        {/* Additional Service 3 */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <span className="text-2xl">📊</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Consultoría Digital
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Estrategias digitales para potenciar tu presencia online
                            </p>
                        </div>

                        {/* Additional Service 4 */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <span className="text-2xl">🎨</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Diseño Gráfico
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Logotipos, branding y material visual para tu marca
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Nuestro Proceso
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Un flujo de trabajo estructurado para garantizar resultados excepcionales
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <span className="text-white font-bold text-xl">1</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Consulta
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Analizamos tus necesidades y objetivos de negocio
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <span className="text-white font-bold text-xl">2</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Propuesta
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Diseñamos una solución personalizada y presupuesto
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <span className="text-white font-bold text-xl">3</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Desarrollo
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Creamos tu solución con actualizaciones constantes
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <span className="text-white font-bold text-xl">4</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Lanzamiento
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Entregamos tu proyecto y activamos el soporte 24/7
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-slate-700 via-gray-800 to-slate-900 dark:from-slate-800 dark:via-gray-900 dark:to-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        ¿Listo para comenzar tu proyecto?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Obtén una consulta gratuita y presupuesto personalizado
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 shadow-lg transform hover:scale-105">
                            Consulta Gratuita
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                            Ver Portfolio
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}