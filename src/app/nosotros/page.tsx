'use client';
import Image from 'next/image';

export default function Nosotros() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Sobre
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
                            {" "}Nosotros
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Somos un equipo apasionado por la tecnología, dedicado a transformar ideas
                        en soluciones digitales que impulsan el crecimiento de negocios locales.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                Nuestra Historia
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300">
                                <p className="text-lg leading-relaxed">
                                    <strong className="text-blue-600 dark:text-blue-400">Soluciones-web</strong> nació en 2025
                                    con una misión clara: democratizar el acceso a la tecnología web para negocios locales
                                    que buscan destacar en el mundo digital.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Entendemos que cada negocio es único, por eso nos especializamos en crear
                                    soluciones personalizadas que se adaptan perfectamente a las necesidades y
                                    objetivos de nuestros clientes.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Nuestro enfoque va más allá del desarrollo web tradicional. Creamos
                                    experiencias digitales que conectan marcas con sus audiencias y
                                    automatizan procesos para maximizar la eficiencia.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 rounded-2xl p-8 h-80 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">💡</div>
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                                        Innovación
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Tecnología moderna para soluciones efectivas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Nuestros Valores
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Los principios que guían nuestro trabajo y definen nuestra cultura
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <span className="text-3xl">🎯</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                                Enfoque al Cliente
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center">
                                Cada proyecto es único. Nos dedicamos a entender profundamente las necesidades
                                de nuestros clientes para ofrecer soluciones realmente efectivas.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                                Excelencia Técnica
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center">
                                Utilizamos las últimas tecnologías y mejores prácticas para garantizar
                                que cada solución sea robusta, escalable y de alto rendimiento.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <span className="text-3xl">🤝</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                                Soporte Continuo
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center">
                                Nuestro compromiso no termina con la entrega. Ofrecemos soporte 24/7
                                para asegurar que tu solución funcione perfectamente siempre.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Mission */}
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
                                <span className="text-4xl">🚀</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Nuestra Misión
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Empoderar a negocios locales con tecnología web innovadora,
                                proporcionando soluciones personalizadas que impulsen su crecimiento
                                y les permitan competir efectivamente en el mercado digital.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full mb-6">
                                <span className="text-4xl">🌟</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Nuestra Visión
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Ser el socio tecnológico de referencia para negocios locales,
                                reconocidos por nuestra capacidad de transformar ideas en
                                soluciones digitales exitosas que generen valor real.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-slate-700 via-gray-800 to-slate-900 dark:from-slate-800 dark:via-gray-900 dark:to-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        ¿Listo para trabajar juntos?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Descubre cómo podemos ayudar a tu negocio a alcanzar sus objetivos digitales
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 shadow-lg transform hover:scale-105">
                            Iniciar Proyecto
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                            Ver Servicios
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}