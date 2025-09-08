import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                            <Image
                                src="/logo.png"
                                alt="Soluciones-web Logo"
                                width={32}
                                height={32}
                                className="rounded-lg"
                            />
                            <span className="text-2xl font-bold">Soluciones-web</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Transformamos ideas en soluciones web innovadoras. Empezamos en 2025 con la misión de impulsar negocios locales hacia el éxito digital.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Servicios</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-white transition-colors ">Desarrollo Web</li>
                            <li className="hover:text-white transition-colors ">E-commerce</li>
                            <li className="hover:text-white transition-colors ">Automatización</li>
                            <li className="hover:text-white transition-colors ">Consultoría Tech</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Contacto</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-white transition-colors">
                                <a href="mailto:solucionesweb2025@gmail.com">
                                    solucionesweb2025@gmail.com
                                </a>
                            </li>
                            <li className="hover:text-white transition-colors">
                                <a href="tel:+50255580173">
                                    +(502) 5558-0173
                                </a>
                            </li>
                            <li className="hover:text-white transition-colors">
                                <a href="https://wa.me/50255580173" target="_blank" rel="noopener noreferrer">
                                    WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Soluciones-web. Construyendo el futuro digital. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}