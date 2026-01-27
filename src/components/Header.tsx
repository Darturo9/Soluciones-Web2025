'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gray-950/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                        <Image
                            src="/logo.png"
                            alt="Soluciones Web Logo"
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />
                        <span className="text-xl sm:text-2xl font-bold text-white">
                            Soluciones Web
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-6">
                        <a href="/" className="text-gray-400 hover:text-white transition-colors font-medium">
                            Inicio
                        </a>
                        <a href="/servicios" className="text-gray-400 hover:text-white transition-colors font-medium">
                            Servicios
                        </a>
                        <a href="/proyectos" className="text-gray-400 hover:text-white transition-colors font-medium">
                            Proyectos
                        </a>
                        <a href="/blog" className="text-gray-400 hover:text-white transition-colors font-medium">
                            Blog
                        </a>
                        <a href="/contenido" className="text-gray-400 hover:text-white transition-colors font-medium">
                            Videos
                        </a>
                        <a href="/contacto" className="text-gray-400 hover:text-white transition-colors font-medium">
                            Contacto
                        </a>
                    </nav>

                    {/* Desktop Button */}
                    <a
                        href="/contacto"
                        className="hidden md:block bg-white text-gray-900 px-4 lg:px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm lg:text-base"
                    >
                        Iniciar Proyecto
                    </a>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-md text-gray-400"
                        aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
                        aria-expanded={isMenuOpen}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-800">
                        <nav className="flex flex-col space-y-4">
                            <a href="/" className="text-gray-400 hover:text-white transition-colors font-medium">
                                Inicio
                            </a>
                            <a href="/servicios" className="text-gray-400 hover:text-white transition-colors font-medium">
                                Servicios
                            </a>
                            <a href="/proyectos" className="text-gray-400 hover:text-white transition-colors font-medium">
                                Proyectos
                            </a>
                            <a href="/blog" className="text-gray-400 hover:text-white transition-colors font-medium">
                                Blog
                            </a>
                            <a href="/contenido" className="text-gray-400 hover:text-white transition-colors font-medium">
                                Videos
                            </a>
                            <a href="/contacto" className="text-gray-400 hover:text-white transition-colors font-medium">
                                Contacto
                            </a>
                            <a
                                href="/contacto"
                                className="bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-center"
                            >
                                Iniciar Proyecto
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
