'use client';
import ContactForm from '@/components/ContactForm';

export default function Contacto() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        ¡Hablemos de tu
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
                            {" "}proyecto!
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Estamos aquí para ayudarte a transformar tu idea en una solución digital exitosa.
                        Cuéntanos sobre tu proyecto y te ofreceremos la mejor propuesta.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                                Información de Contacto
                            </h2>

                            <div className="space-y-8">
                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-blue-600 text-2xl">📧</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-1">solucionesweb2025@gmail.com</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Respuesta garantizada en menos de 24 horas
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-emerald-600 text-2xl">📱</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Teléfono</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-1">
                                            <a href="tel:+50255580173" className="hover:text-emerald-600 transition-colors">
                                                +(502) 5558-0173
                                            </a>
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Llamadas y mensajes de texto
                                        </p>
                                    </div>
                                </div>

                                {/* WhatsApp */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-green-600 text-2xl">💬</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">WhatsApp</h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-1">
                                            <a
                                                href="https://wa.me/50255580173?text=Hola,%20me%20interesa%20una%20solución%20para%20mi%20negocio"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-green-600 transition-colors"
                                            >
                                                +(502) 5558-0173
                                            </a>
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            La forma más rápida de contactarnos
                                        </p>
                                    </div>
                                </div>

                                {/* Schedule */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-purple-600 text-2xl">⏰</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Horario de Atención</h3>
                                        <div className="text-gray-600 dark:text-gray-300 space-y-1">
                                            <p>Lunes a Viernes: 8:00 AM - 8:00 PM</p>
                                            <p>Sábados: 9:00 AM - 5:00 PM</p>
                                            <p>Domingos: Solo emergencias</p>
                                        </div>
                                        <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-2 font-medium">
                                            ✓ Soporte técnico 24/7 disponible
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-xl">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    ¿Necesitas ayuda inmediata?
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <a
                                        href="https://wa.me/50255580173?text=Hola,%20necesito%20ayuda%20urgente"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-green-500 text-white px-4 py-3 rounded-lg text-center font-medium hover:bg-green-600 transition-colors"
                                    >
                                        WhatsApp Directo
                                    </a>
                                    <a
                                        href="tel:+50255580173"
                                        className="flex-1 bg-blue-500 text-white px-4 py-3 rounded-lg text-center font-medium hover:bg-blue-600 transition-colors"
                                    >
                                        Llamar Ahora
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Preguntas Frecuentes
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Resolvemos las dudas más comunes antes de contactarnos
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* FAQ 1 */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                ¿Cuánto tiempo toma desarrollar un proyecto?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Depende de la complejidad: un sitio web básico toma 1-2 semanas,
                                un e-commerce 2-4 semanas, y proyectos personalizados pueden tomar 1-3 meses.
                                Te daremos un cronograma detallado en la propuesta.
                            </p>
                        </div>

                        {/* FAQ 2 */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                ¿Incluyen el hosting y dominio?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Te ayudamos a configurar todo desde cero. Podemos incluir el primer año
                                de hosting y dominio en el paquete, o te asesoramos para que lo gestiones
                                directamente según tus necesidades.
                            </p>
                        </div>

                        {/* FAQ 3 */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                ¿Qué incluye el soporte 24/7?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Incluye resolución de problemas técnicos, actualizaciones de seguridad,
                                backups automáticos y soporte por WhatsApp o email. Para cambios de contenido
                                o nuevas funcionalidades, manejamos tarifas especiales.
                            </p>
                        </div>

                        {/* FAQ 4 */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                ¿Trabajan con empresas fuera de Guatemala?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                ¡Por supuesto! Trabajamos remotamente con clientes de toda Centroamérica
                                y Latinoamérica. La comunicación es fluida por WhatsApp, email y videollamadas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-slate-700 via-gray-800 to-slate-900 dark:from-slate-800 dark:via-gray-900 dark:to-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        ¿Aún tienes dudas?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        No te preocupes, estamos aquí para resolver todas tus preguntas sin compromiso
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/50255580173?text=Hola,%20tengo%20algunas%20preguntas%20sobre%20sus%20servicios"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 shadow-lg transform hover:scale-105"
                        >
                            Chatear por WhatsApp
                        </a>
                        <a
                            href="/servicios"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                        >
                            Ver Nuestros Servicios
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}