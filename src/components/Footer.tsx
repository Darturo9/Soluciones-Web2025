import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gray-950 border-t border-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <Image
                                src="/logo.png"
                                alt="Soluciones Web Logo"
                                width={32}
                                height={32}
                                className="rounded-lg"
                            />
                            <span className="text-xl font-bold">Soluciones Web</span>
                        </div>
                        <p className="text-gray-500 mb-4 max-w-md">
                            Desarrollo de software a medida, automatizaciones e integraciones para empresas que buscan escalar.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-300 mb-4">Enlaces</h4>
                        <ul className="space-y-2 text-gray-500">
                            <li><a href="/servicios" className="hover:text-white transition-colors">Servicios</a></li>
                            <li><a href="/proyectos" className="hover:text-white transition-colors">Proyectos</a></li>
                            <li><a href="/nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
                            <li><a href="/contacto" className="hover:text-white transition-colors">Contacto</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-300 mb-4">Contacto</h4>
                        <ul className="space-y-2 text-gray-500">
                            <li>
                                <a href="mailto:solucionesweb2025@gmail.com" className="hover:text-white transition-colors">
                                    solucionesweb2025@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+50255580173" className="hover:text-white transition-colors">
                                    +(502) 5558-0173
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/50255580173" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-600 text-sm">
                    <p>2025 Soluciones Web. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
