'use client';
import ContactForm from '@/components/ContactForm';

export default function Contacto() {
    return (
        <div className="min-h-screen bg-gray-950">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-block mb-6 px-4 py-2 border border-gray-700 rounded-full text-gray-400 text-sm font-medium tracking-wide">
                        Contacto
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
                        Hablemos de tu
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            proyecto
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed">
                        Cuentanos que necesitas y exploremos juntos la mejor solucion para tu negocio
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-8">
                                Informacion de Contacto
                            </h2>

                            <div className="space-y-8">
                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                                        <p className="text-gray-400">solucionesweb2025@gmail.com</p>
                                        <p className="text-sm text-gray-500 mt-1">Respuesta en menos de 24 horas</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-1">Telefono</h3>
                                        <a href="tel:+50255580173" className="text-gray-400 hover:text-white transition-colors">
                                            +(502) 5558-0173
                                        </a>
                                        <p className="text-sm text-gray-500 mt-1">Llamadas y mensajes</p>
                                    </div>
                                </div>

                                {/* WhatsApp */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-1">WhatsApp</h3>
                                        <a
                                            href="https://wa.me/50255580173?text=Hola,%20me%20interesa%20una%20solucion%20para%20mi%20negocio"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            +(502) 5558-0173
                                        </a>
                                        <p className="text-sm text-gray-500 mt-1">La forma mas rapida de contactarnos</p>
                                    </div>
                                </div>

                                {/* Schedule */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-1">Horario</h3>
                                        <div className="text-gray-400 space-y-1 text-sm">
                                            <p>Lunes a Viernes: 8:00 AM - 8:00 PM</p>
                                            <p>Sabados: 9:00 AM - 5:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="mt-12 p-6 bg-gradient-to-br from-gray-900 to-gray-900/50 rounded-xl border border-gray-800">
                                <h3 className="text-lg font-medium text-white mb-4">
                                    Respuesta inmediata
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <a
                                        href="https://wa.me/50255580173?text=Hola,%20necesito%20informacion%20sobre%20sus%20servicios"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg text-center font-medium hover:bg-green-700 transition-colors"
                                    >
                                        WhatsApp
                                    </a>
                                    <a
                                        href="tel:+50255580173"
                                        className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg text-center font-medium hover:bg-gray-700 transition-colors border border-gray-700"
                                    >
                                        Llamar
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
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Preguntas Frecuentes
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 p-6 rounded-xl border border-gray-800">
                            <h3 className="text-lg font-medium text-white mb-2">
                                Cuanto tiempo toma desarrollar un proyecto?
                            </h3>
                            <p className="text-gray-400">
                                Depende de la complejidad. Una automatizacion simple puede estar lista en 1-2 semanas.
                                Un sistema a medida completo puede tomar 1-3 meses. Te daremos un cronograma detallado en la propuesta.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 p-6 rounded-xl border border-gray-800">
                            <h3 className="text-lg font-medium text-white mb-2">
                                Como es el proceso de trabajo?
                            </h3>
                            <p className="text-gray-400">
                                Iniciamos con una llamada de descubrimiento para entender tu necesidad.
                                Luego presentamos una propuesta tecnica y comercial. Una vez aprobada, trabajamos en sprints
                                con entregas parciales para que veas el avance.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 p-6 rounded-xl border border-gray-800">
                            <h3 className="text-lg font-medium text-white mb-2">
                                Ofrecen soporte despues de la entrega?
                            </h3>
                            <p className="text-gray-400">
                                Si. Todos los proyectos incluyen un periodo de soporte post-lanzamiento.
                                Tambien ofrecemos planes de mantenimiento continuo para actualizaciones y mejoras.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 p-6 rounded-xl border border-gray-800">
                            <h3 className="text-lg font-medium text-white mb-2">
                                Trabajan con empresas fuera de Guatemala?
                            </h3>
                            <p className="text-gray-400">
                                Si. Trabajamos remotamente con clientes de toda Latinoamerica.
                                La comunicacion es fluida por WhatsApp, email y videollamadas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Tienes mas preguntas?
                    </h2>
                    <p className="text-xl text-gray-400 mb-10">
                        No dudes en escribirnos. Estamos aqui para ayudarte.
                    </p>
                    <a
                        href="https://wa.me/50255580173?text=Hola,%20tengo%20algunas%20preguntas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
                    >
                        Escribir por WhatsApp
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    );
}
